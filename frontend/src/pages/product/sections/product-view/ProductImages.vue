<template>
	<div class="product-images-wrapper">
		<div class="product-image-list">
			<div
				v-for="(image, index) in product_store.product?.images"
				:key="index"
				class="product-image-wrapper"
				@click="() => (product_store.selected_image = image)">
				<img
					:src="image"
					alt=""
					class="product-image" />
			</div>
		</div>

		<div class="product-image-viewer-wrapper">
			<img
				:src="selected_image"
				alt=""
				class="product-image-viewer" />
		</div>
	</div>
</template>

<script setup>
	import { computed } from 'vue';
	import { useProductStore } from '../../../../stores/product';

	const product_store = useProductStore();

	const selected_image = computed(() => {
		return product_store.selected_image || product_store.product?.images[0];
	});
</script>
