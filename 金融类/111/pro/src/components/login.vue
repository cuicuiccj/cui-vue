<!--<template>
	
	
	<div id="aa">
		
		<p>请输入手机号</p>
	<p>您的手机号码</p>
	
	
	</div>
</template>

<script>
</script>

<style>
	#aa{
		background: #E0E0E0;
		height:300px;
	}
	
	#aa p:nth-of-type(1){
		font-size: 30px;
		height:80px;
		line-height: 80px;
		text-align: center;
	/*	background: pink;*/
	}
		#aa p:nth-of-type(2){
			height:50px;
	/*		background: yellow;*/
			font-size: 16px;
			line-height: 50px;
			margin-left: 10px;
			color: #666;
			border-bottom: 1px solid #EEEEEE;
		}
</style>-->
	
	
<template>
	<div id="login">
		<header>注册</header>
		<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
		<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
		<mt-field label="验证码" v-model="captcha">
		  <mt-button size='small' type="primary" @click='send()'>发送验证码</mt-button>
		</mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<mt-button type="primary" size="large" @click="register()">注册</mt-button>
	</div>
</template>

<script>
	 	import axios from 'axios';
	export default {
		name:'login',
		data(){
			return{
				username:'',
				phone:"",
				captcha:"",
				password:""
			}
		},
		methods:{
			send(){
//				console.log('send')
				var _this=this;
				console.log(_this.phone)
				axios({
					url:'http://localhost:3000/register',
					method:'post',
					params:{phone:_this.phone,id:1}
				}).then(function(data){
					console.log(data.data)
					alert(data.data)
				})
			},
			register(){
				
	          
			
//				console.log('register')
				var _this=this;
				axios({
					url:'http://localhost:3000/register',
					method:'post',
					params:{username:_this.username,phone:_this.phone,captcha:_this.captcha,password:_this.password,id:2}
				}).then(function(data){
					console.log(data.data)
					if(data.data==1){
						alert('注册成功')
						_this.$router.push("/rege")
					}else{
						alert('注册失败')
					}
				})
			}
		}
		
	}
	
</script>

<style scoped="">
	header{
		height: 50px;
		text-align: center;
        font-size: 20px;
        color: #fff;
        background: orange;
        line-height: 50px;
	}
</style>

