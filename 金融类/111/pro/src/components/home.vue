  <template>
	<div id="home">
		
		<!--<h1>{{str}}</h1>-->
		<!--<button @click="tap()">修改数据</button>-->
		<!--<mt-button type="danger" @click="tap()">修改数据</mt-button>-->
		
		<mt-swipe :show-indicators="false" class="box">
		  <mt-swipe-item class="item"><a href="#"><img src="../img/77626.png"/></a></mt-swipe-item>
		  <mt-swipe-item class="item"><a href="#"><img src="../img/77661.png"/></a></mt-swipe-item>
		  <mt-swipe-item class="item"><a href="#"><img src="../img/77662.png"/></a></mt-swipe-item>
		  <mt-swipe-item class="item"><a href="#"><img src="../img/77663.png"/></a></mt-swipe-item>
		  <mt-swipe-item class="item"><a href="#"><img src="../img/77665.png"/></a></mt-swipe-item>
		  <mt-swipe-item class="item"><a href="#"><img src="../img/77714.png"/></a></mt-swipe-item>
		</mt-swipe>
		<!--<ul>
			<li v-for="item in arr">{{item.goodsname}}</li>
		</ul>-->
		<div class="content">
			<div class="content-list">
				<div sort="1"  class="aa">
					<img src="../img/76936.png" />
					<span>理财</span>
				</div>
				<div sort="2" class="aa">
					<img src="../img/76937.png" />
					<span @click="jamp()">心益</span>
				</div>
				<div sort="1" class="aa">
					<img src="../img/76938.png" />
					<span>抢红包</span>
				</div>
				<div sort="1"  class="aa">
					<img src="../img/76939.png" />
					<span>特权</span>
				</div>
			</div>
		</div>
		
		
		<div id="lite">
			
			<h2>{{lit}}</h2>
			
			
			<ul>
				
				<li>
					<h4>7.5%</h4>
					<div class="lit">
						<span>c计划</span>
						<p>灵活转让</p>
					</div>
				</li>
				<li>
					
					<h4>10%</h4>
					<div class="lit">
						<span>D计划</span>
						<p>六个月</p>
					</div>
				</li>
			</ul>
		</div>
		
		<!--<div class="last">
			<input type="button" name="" id="" value="登陆" />
			<input type="button" name="" id="" value="注册" />
			
		</div>-->
	</div>

</template>

<script>
	
	import axios from 'axios';
	
	export default{
		name:'name',
		data(){
			return{
				//str:'我是组件',
				arr:[],
				tit:'投资',
				lit:'精选理财'
				
			}
		},
		methods:{
			
			jamp(){
				this.$router.push("/cute")
			},
			tap(){
				//this.str='hello'
				var _this=this;
				axios({
					url:'http://datainfo.duapp.com/shopdata/getGoods.php',
					params:{callback:''}
				}).then(function(data){
					_this.arr=eval(data.data)
				})
			}
		},
		mounted(){
			this.$emit('to-parent',this.tit)
		}
	}
</script>

	
<style scoped="">
	#home{
	background: #eee;
	}
	
	.box{
		height: 119px;
		
	}
	.box .item{
		height: 100px;
		text-align: center;
		line-height: 100px;
	}
	
	#home a img{
		width:100%;
		height: 119px;
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
			width:25%;
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
		
		/*.content .content-list img{
			width:0.7rem;
			
		}*/
		
		/*.content .content-list img{
			 width:55%;
		}*/
		
		#lite{
			width:100%;
		/*	height:3rem;*/
	/*		border:1px solid red;*/
			margin-top: 20px;
			background: white;
		}
		
		#lite h2{
		font-size: 14px;
		height:40px;
        padding: 0 20px;
		line-height: 40px;
		background: white;
		/*margin-bottom: 10px;*/}
		
		#lite ul{
			
		width:99%;
		height:1.5rem;
/*		background: pink;*/
		display: flex;
		}
		#lite ul li{
		width:50%;
		height:1rem;
        border-right:1px solid #e0e0e0;
		display: flex;
		justify-content:space-around;
	   align-items: center;
	   padding: 0 10px;
	   margin-bottom: 20px;
/*	   font-size: 30px;*/
	  }
	  #lite ul li h4{
	  	font-size: 40px;
	  	color: red;
	  }
	  /*#lite ul li:nth-of-type(1){
	  	width:1rem;
	  	height:1rem;
	  	border:1px solid red;
	  	
	  }*/
	  #lite span{
	  	color:black;
	  }
	 .lit{
	 	font-size: 16px;
	 }
	
	.last{
		background: #eee;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height:100px;
	}
	
	input{
		padding:5px 10px;
	}
</style>