import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
	state: () => ({
		product: null,
		selected_image: null,
		active_detail: 0
	}),
	getters: {},
	actions: {}
});
