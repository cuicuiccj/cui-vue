<template>
	<div id="rege">
		<header>登陆</header>
		<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<mt-button type="primary" size="large" @click="register()">登陆</mt-button>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		name:'rege',
		data(){
			return{
				username:'',
				password:""
			}
		},
		methods:{
			register(){
				var _this=this
				axios({
					url:'http://localhost:3000/login',
					method:'post',
					params:{username:_this.username,password:_this.password}
				}).then(function(data){
					console.log(data)
					if(data.data==1){
						alert('登录成功')
						_this.$router.push('/home')
					}else{
						alert('登录失败')
					}
				})
			}
		}
	}
</script>

<style>
	
	header{
		height: 50px;
		text-align: center;
        font-size: 20px;
        color: #fff;
        background: orange;
        line-height: 50px;
	}
</style>























