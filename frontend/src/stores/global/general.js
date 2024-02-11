import { defineStore } from 'pinia';

export const useGeneralStore = defineStore('general', {
	state: () => ({}),
	getters: {},
	actions: {
		parse_price(price) {
			return `₱ ${price}`;
		}
	}
});
