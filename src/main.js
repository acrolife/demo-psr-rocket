// // Import global styles
require('./assets/css/global.css');

import DefaultLayout from '~/layouts/Default.vue';
import Vuex from 'vuex';

export default function(Vue, { appOptions }) {
	Vue.component('Layout', DefaultLayout);
	Vue.use(Vuex);

	appOptions.store = new Vuex.Store({
		state: {
      expandNavBar: 0,
      colorNavBarBin: 0,
      navItem: 'Home'
		},
		mutations: {
			toggleMMenu(state) {       
        state.expandNavBar = !state.expandNavBar;   
      },
      setColorWhite(state) {       
        state.colorNavBarBin = 0;   
      },
      setColor0ther(state) {       
        state.colorNavBarBin = 1;   
      },
      changeNavItem(state, navItem) {
        state.navItem = navItem
      }
		},
		actions: {
			toggle(context) {
				context.commit('toggle');
			},
		},
	});
}
