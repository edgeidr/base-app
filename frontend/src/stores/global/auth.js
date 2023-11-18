import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		user: useStorage('user', {})
	}),
	getters: {
		is_logged_in: (state) => {
			return !_.isEmpty(state.user);
		}
	},
	actions: {}
});
