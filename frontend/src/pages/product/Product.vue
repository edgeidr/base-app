<template>
	<SectionProductView />
	<SectionRelated />
</template>

<script setup>
	import { onMounted } from 'vue';
	import { useProductStore } from '../../stores/product';
	import SectionProductView from './sections/product-view/SectionProductView.vue';
	import SectionRelated from './sections/related/SectionRelated.vue';
	import img_sunny from '@/assets/images/sample/SUNYY.png';
	import img_aisha from '@/assets/images/sample/AISHA.png';
	import img_bloom from '@/assets/images/sample/BLOOM.png';

	const product_store = useProductStore();

	onMounted(() => {
		product_store.product = { title: 'Product 1', image: img_sunny, slug: 'product-1', images: [img_sunny, img_aisha, img_bloom] };
	});
</script>
