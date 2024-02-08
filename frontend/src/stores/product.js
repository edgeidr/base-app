import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
	state: () => ({
		product: null,
		selected_image: null
	}),
	getters: {},
	actions: {}
});
