<template>
	
	<div id="main">
    <header>{{msg}}</header>
    
   	<section>
   		 <router-view @to-parent="toparent"></router-view>
   	</section>
   
    <footer>
	    <router-link to="/home">
	    	<div class="aa">
	    	<svg class="icon" aria-hidden="true">
			  <use xlink:href="#icon-touzi"></use>
			</svg>
	    	<span class="foot1">投资</span></div>
	    </router-link>
	    <router-link to="/about">
	    	<div class="aa">
	    	<svg class="icon" aria-hidden="true">
			  <use xlink:href="#icon-wode-1"></use>
			</svg>
	    	<span class="foot1">我的</span></div>
	    </router-link>
	    <router-link to="/other">
	    	<div class="aa">
	    	<svg class="icon" aria-hidden="true">
			  <use xlink:href="#icon-huodong"></use>
			</svg>
	    	<span class="foot1">活动</span></div>
	    </router-link>
    </footer> 
    
  </div>
</template>

<script>
	export default {
  name: 'main',
  data () {
    return {
      msg: '海象理财'
    }
  },
  methods:{
  	toparent(message){
  		this.msg = message;
  	}
  }
}
</script>

<style type="text/css">
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
.aa{
	display: flex;
	flex-direction: column;
    justify-content: space-around;
	align-items:center;
	color: black;
}

.aa span{
	margin-top: -10px;
	font-size: 14px;
}
</style>