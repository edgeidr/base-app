<template>
	<div class="product-information">
		<div>
			<h2 class="text-2xl">{{ product?.title }}</h2>

			<div class="mt-sm">
				<p class="text-sm">{{ product?.description_line_one }}</p>
				<p class="text-sm text-muted">{{ product?.description_line_two }}</p>
			</div>

			<p class="mt-sm text-sm">{{ general_store.parse_price(product?.price) }}</p>

			<EButton
				label="ADD TO CART"
				color="black"
				class="[ btn-add-to-cart ][ mt-lg ]">
			</EButton>
		</div>

		<div class="mt-2xl grid gap-sm">
			<div
				v-for="(item, index) in product?.details"
				:key="item.title"
				:class="['product-details', active_class(index)]">
				<div
					class="product-details-header"
					@click="show_details(index)">
					<h3 class="text-sm f-body">{{ item.title }}</h3>
					<EIcon
						name="chevron-down-outline"
						class="[ product-details-icon ][ text-xs ]"></EIcon>
				</div>

				<div class="product-details-body-wrapper">
					<div class="overflow-hidden">
						<p
							v-html="item.body"
							class="[ product-details-body ][ text-sm py-xs ]"></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { computed } from 'vue';
	import { useProductStore } from '../../../../stores/product';
	import { useGeneralStore } from '../../../../stores/global/general';

	const product_store = useProductStore();
	const general_store = useGeneralStore();

	const product = computed(() => {
		return product_store.product;
	});

	const active_class = (index) => {
		return product_store.active_detail === index ? 'active' : null;
	};

	const show_details = (index) => {
		product_store.active_detail = product_store.active_detail === index ? null : index;
	};
</script>
