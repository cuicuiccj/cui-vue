<template>
	
	
	<div id="box">
		<h2>
			<img src="../img/20.png" alt="" />
		</h2>
		<h3>
			<img src="../img/21.png" alt="" />
		</h3>
		<p>1</p>
		
	<ul class="list">
			
				<li>正在资助</li>
				<li>已资助</li>
			
		</ul>
		
		<ul  class="lit">
			<li>
				<img src="../img/23.jpg" alt="" />
				<p>约改镇技术小学</p>
				<p>藏区小学</p>
				
					<img src="../img/21.png" alt="" />
				
			</li>
			<li>
				
				<img src="../img/24.jpg" alt="" />
				<p>看卓</p>
				<p>贫困家庭</p>
				
					<img src="../img/21.png" alt="" />
				
			</li>
			
			<li>
				
				<img src="../img/25.jpg" alt="" />
				<p>卓玛一家</p>
				<p>贫困家庭</p>
				
					<img src="../img/21.png" alt="" />
				
			</li>
			
			
			<li>
				
				<img src="../img/26.jpg" alt="" />
				<p>达杰一家</p>
				<p>贫困家庭</p>
				
					<img src="../img/21.png" alt="" />
				
			</li>
			
			
			
			
			
			
			
			
			
			
			
			
			
		</ul>
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	</div>
</template>

<script>
</script>

<style>
	#box h2 {
		padding: 5px;
		margin-bottom: 30px;
	}
	#box h2 img
	{
		width:22px;
		float: right;
	}
	
	h3 {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
	}
	h3 img{
		width:37px;
	}
	
	p{
		text-align: center;
		font-size: 25px;
	} 
	.list{
		height:50px;
		line-height: 50px;
	/*	background: pink;*/
	    display: flex;
	    justify-content: space-around;
	    align-items: center;
	}
	.list li{
		list-style: none;
		font-size: 17px;
		float:left;
		padding:0 5px;
	
	}
	
	.list li:hover{
		border-bottom: 1px solid red;
		color:red;
	}
	
	.lit{
		padding: 20px 0px;
	    background:#E0E0E0;
		height:600px;
	}
	.lit li{
		list-style: none;
		height:190px;
		width:43%;
/*		background: yellow;*/
		margin-left: 20px;
		float:left;
		margin-bottom: 9px;
		
		
	}
	.lit li img:nth-of-type(1){
		height:108px;
		width:100%;
	}
	.lit li p{
		font-size: 14px;
		margin-bottom: 9px;
	}
	.lit li p:nth-of-type(2)
	{
		color: #666;;
	}
		.lit li img:nth-of-type(2){
			width:20px;
			height:20px;
			position: relative;
			top:-40px;
			left:120px;
		}
</style>