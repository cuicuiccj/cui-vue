<template>
	<div id="about">
        
		
		<div id="my-count">
			 <div class="my-center">
			 	<img src="../img/02.png" alt="" />
			 	<!--<img src="../img/11.png"/>-->
			 	
			 </div> 
			 
			    <p><button @click="jump()">立即登录</button></p>
			 	<h2>0.00</h2>
			<!-- 	  <h5>立即登录</h5>-->
			 	</div>
			 	
			 	
			 	
			 	<div class="content">
			<div class="content-list">
				<div sort="1"  class="aa">
					<img src="../img/03.png" />
					<span>充值</span>
				</div>
				<div sort="2" class="aa">
					<img src="../img/05.png" />
					<span>提现</span>
				</div>
				<div sort="1" class="aa">
					<img src="../img/06.png" />
					<span>银行卡</span>
				</div>
				
			</div>
		</div>
		
		
		 	<div class="content">
			<div class="content-list">
				<div sort="1"  class="aa">
					<img src="../img/07.png" />
					<span>交易记录</span>
				</div>
				<div sort="2" class="aa">
					<img src="../img/08.png" />
					<span>密码管理</span>
				</div>
				<div sort="1" class="aa">
					<img src="../img/09.png" />
					<span>更多</span>
				</div>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
    		name:'about',
		data(){
			return{
				tit:'我的'
			}
		},
		
	 methods:{
	 	
	 	 jump(){
				
				this.$router.push("/login")
			}
		},
		mounted(){
			this.$emit('to-parent',this.tit)
		}
	}
</script>

<style>
	#my-count
	{
		width:100%;
        height:200px;
		background: #E0E0E0;
	}
	.my-center
	{
		width:100%;
		height:85px;
		/*border-bottom: 1px solid red;*/
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.my-center img
	{
		height:78px;
		
	}
	#my-count p
	{
		font-size: 14px;
		text-align: center;
		margin: 8px;
	}
	
	#my-count h2
	{
		font-size: 30px;
		text-align: center;
			
		}
	
	
  
	
	.content{
		width:100%;
		height: 1.54rem;
		font-size: 0.34rem;
	/*	color: #333333;*/
		font-weight: 600;
		display: flex;
		flex: 1;
		background: white;
		margin-bottom: 10px;
	}
	.content .content-list{
		width: 100%;
		height: 1.84rem;
		display: flex;
		justify-content: space-around;
	
	}
	
		.content .content-list .aa{
			width:33%;
			height: 1.84rem;
		/*	border:1px solid red;*/
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 16px;
			border-right: 1px solid #E0E0E0;
			border-bottom: 1px solid #E0E0E0;
			
		
		
		}
		 
		.content .content-list .aa span{
			margin-bottom: 10px;
			
		}
		.content .content-list img{
			width:0.5rem;
			margin-bottom: 0.3rem;
		}
		h2{
			background: #E0E0E0;
			height:15px;
		}
	  /*h5{
	  	height:40px;
	  	font-size: 16px;
	  	padding: 10px;
	  	border-radius: 8px;
	  	background: pink;
	  }*/
</style>