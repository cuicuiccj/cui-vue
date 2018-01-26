/**
 * 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
 * Created on 2017-07-31
 */

const SMSClient = require('./../index')
const express=require('express')
const mongodb=require('mongodb').MongoClient
const db_str="mongodb://localhost:27017/cui"
const app=express()
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAISghIgPJ3H3za'
const secretAccessKey = 'mJryKoTosmNUFR7K9g1QIfzFF4s7B0'

//在云通信页面开通相应业务消息后，就能在页面上获得对应的queueName,不用填最后面一段
const queueName = 'Alicom-Queue-1092397003988387-'

//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey})

//短信回执报告
smsClient.receiveMsg(0, queueName).then(function (res) {
    //消息体需要base64解码
    let {code, body}=res
    if (code === 200) {
        //处理消息体,messagebody
        //console.log(body)
    }
}, function (err) {
   // console.log(err)
})

//短信上行报告
smsClient.receiveMsg(1, queueName).then(function (res) {
    //消息体需要base64解码
    let {code, body}=res
    if (code === 200) {
        //处理消息体,messagebody
//      console.log(body)
    }
}, function (err) {
    //console.log(err)
})


//查询短信发送详情
smsClient.queryDetail({
    PhoneNumber: '1500000000',
    SendDate: '20170731',
    PageSize: '10',
    CurrentPage: "1"
}).then(function (res) {
    let {Code, SmsSendDetailDTOs}=res
    if (Code === 'OK') {
        //处理发送详情内容
        //console.log(SmsSendDetailDTOs)
    }
}, function (err) {
    //处理错误
    //console.log(err)
})

//发送短信

function sendMassage(phone,num){
	

	smsClient.sendSMS({
	    PhoneNumbers: phone,
	    SignName: '孔存赟',
	    TemplateCode: 'SMS_116565663',
	    TemplateParam: `{"code":${num}}`
	}).then(function (res) {
	    let {Code}=res
	    if (Code === 'OK') {
	        //处理返回参数
	        //console.log(res)
	    }
	}, function (err) {
	    //console.log(err)
	})
}


var a=Math.floor(Math.random()*10),
b=Math.floor(Math.random()*10),
c=Math.floor(Math.random()*10),
d=Math.floor(Math.random()*10)

var num=String(a)+String(b)+String(c)+String(d);

//console.log(num)

setInterval(function(){
	a=Math.floor(Math.random()*10),
	b=Math.floor(Math.random()*10),
	c=Math.floor(Math.random()*10),
	d=Math.floor(Math.random()*10)
	num=String(a)+String(b)+String(c)+String(d);
	
	return num;
	
},300000)


app.post('/register',(req,res)=>{
	res.header('Access-Control-Allow-Origin','*')
//	console.log(req.query.phone)
	let phone=req.query.phone;
	let id=req.query.id;
	console.log(num)
	if(id==1){
		sendMassage(phone,num)
		res.send('发送成功')
		
	}else{
		let username=req.query.username;
		let yzm=req.query.captcha;
		let password=req.query.password;
		let data=[{username:username,password:password,phone:phone}]
		if(yzm==num){
//			插入数据库
			mongodb.connect(db_str,(err,database)=>{
				database.collection('reg',(err,coll)=>{
					coll.insert(data,()=>{
						res.send('1')
						database.close()
					})
				})
			})

		}else{
			res.send('验证码不符合')
		}
	
	}
	
})


app.post('/login',(req,res)=>{
	
	res.header('Access-Control-Allow-Origin','*')
	console.log(req.query.phone)
	console.log(req.query.password)
	
	
	let username = req.query.username;
	let password = req.query.password;
	let data={
		username:username,
		password:password
	}
	
	
	mongodb.connect(db_str,(err,database)=>{

		database.collection('reg',(err,coll)=>{
		
			coll.find(data).toArray((err,result)=>{		
				//console.log(result)
				if(result.length>0){
					
					res.send('1')
				}else{
					res.send('0')
				}
				database.close()
			})
		})
	})
})



//app.use('/',router)
app.listen(3000)
