import { defineStore } from 'pinia';
import img_sunny from '@/assets/images/sample/SUNYY.png';
import img_aisha from '@/assets/images/sample/AISHA.png';
import img_bloom from '@/assets/images/sample/BLOOM.png';
import img_lia from '../assets/images/sample/LIA.png';
import img_bag from '../assets/images/sample/bag.jpg';

export const useCategoriesStore = defineStore('categories', {
	state: () => ({
		categories: [
			{
				title: 'Tops',
				slug: 'tops',
				products: [
					{ title: 'Product 1', image: img_sunny, slug: 'product-1' },
					{ title: 'Product 2', image: img_aisha, slug: 'product-2' },
					{ title: 'Product 3', image: img_bloom, slug: 'product-3' },
					{ title: 'Product 4', image: img_lia, slug: 'product-4' },
					{ title: 'Product 5', image: img_bag, slug: 'product-5' }
				]
			},
			{
				title: 'Bottoms',
				slug: 'bottoms',
				products: [
					{ title: 'Product 1', image: img_sunny, slug: 'product-1' },
					{ title: 'Product 2', image: img_aisha, slug: 'product-2' },
					{ title: 'Product 3', image: img_bloom, slug: 'product-3' },
					{ title: 'Product 4', image: img_lia, slug: 'product-4' },
					{ title: 'Product 5', image: img_bag, slug: 'product-5' }
				]
			},
			{
				title: 'Handbags',
				slug: 'handbags',
				products: [
					{ title: 'Product 1', image: img_sunny, slug: 'product-1' },
					{ title: 'Product 2', image: img_aisha, slug: 'product-2' },
					{ title: 'Product 3', image: img_bloom, slug: 'product-3' },
					{ title: 'Product 4', image: img_lia, slug: 'product-4' },
					{ title: 'Product 5', image: img_bag, slug: 'product-5' }
				]
			}
		]
	}),
	getters: {},
	actions: {}
});
