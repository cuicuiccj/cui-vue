<template>
	<div id="other">
		<!--<h2>{{count}}</h2>
		<mt-button type="primary">登录/注册</mt-button>-->
		<mt-swipe :show-indicators="false" class="box">
		  <mt-swipe-item class="item"><a href="#"><img src="../img/77625.png"/></a></mt-swipe-item>
		  <mt-swipe-item class="item"><a href="#"><img src="../img/77660.png"/></a></mt-swipe-item>
		  <mt-swipe-item class="item"><a href="#"><img src="../img/77713.png"/></a></mt-swipe-item>
		  <mt-swipe-item class="item"><a href="#"><img src="../img/77656.png"/></a></mt-swipe-item>
		  <mt-swipe-item class="item"><a href="#"><img src="../img/77655.png"/></a></mt-swipe-item>
		  <mt-swipe-item class="item"><a href="#"><img src="../img/77658.png"/></a></mt-swipe-item>
		
		</mt-swipe>
		
	<h3>日常活动</h3>
	<div class="content">
			<div class="content-list">
				<div sort="1"  class="aa">
					<img src="../img/76199.png" />
					<span>抢红包</span>
				</div>
				<div sort="2" class="aa">
					<img src="../img/76200.png" />
					<span>心益</span>
				</div>
				<div sort="1" class="aa">
					<img src="../img/76201.png" />
					<span>邀请礼</span>
				</div>
				
			</div>
		</div>
		<h2></h2>
		<h3>特色奖励</h3>
		<div class="content">
			<div class="content-list">
				<div sort="1"  class="aa">
					<img src="../img/76202.png" />
					<span>特权</span>
				</div>
				<div sort="2" class="aa">
					<img src="../img/76203.png" />
					<span>抽奖</span>
				</div>
				<div sort="1" class="aa">
					<img src="../img/76204.png" />
					<span>加息卡</span>
				</div>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	
	import store from '../store/store.js'
	export default{
		name:'other',
		data(){
			return{
				tit:'活动'
			}
		},
		mounted(){
			this.$emit('to-parent',this.tit)
		}
	}
</script>

<style>
	
	
	.box{
		height: 119px;
		
	}
	.box .item{
		height: 100px;
		text-align: center;
		line-height: 100px;
	}
	
	
	#other a img{
		width:100%;
		height: 123px;
	}
	#other h3{
		width:100%;
		height:40px;
	/*	background: pink;*/
		font-size: 14px;
		line-height: 40px;
		text-align: center;
	}
	
	.content{
		width: 6.4rem;
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
</style>