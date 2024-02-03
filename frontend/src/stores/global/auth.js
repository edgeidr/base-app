import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		user: useStorage('user', {}),
		cart: useStorage('cart', [])
	}),
	getters: {
		is_logged_in: (state) => {
			return !_.isEmpty(state.user);
		},
		cart_count: (state) => {
			return state.cart.length >= 100 ? '99+' : state.cart.length;
		}
	},
	actions: {}
});
