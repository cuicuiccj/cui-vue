import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store= new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		add(a){
			a.count++
		},
		jian(a){
			a.count--
		}
	}
})

export default store;
