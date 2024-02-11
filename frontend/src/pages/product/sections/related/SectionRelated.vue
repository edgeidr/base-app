<template>
	<section>
		<div class="[ wrapper ][ related-list ]">
			<div class="section-info">
				<h2>Check these beauties too</h2>
			</div>

			<div class="item-list">
				<div
					v-for="(item, index) in new_arrivals"
					:key="index"
					class="item">
					<img
						:src="item.image"
						class="item-image" />

					<div>
						<h4 class="f-body font-normal text-md">{{ item.name }}</h4>
						<p class="text-muted">{{ item.brief_description }}</p>
					</div>

					<p>{{ general_store.parse_price(item.price) }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import top from '@/assets/images/sample/top.jpg';
	import bag from '@/assets/images/sample/bag.jpg';
	import { useGeneralStore } from '../../../../stores/global/general';

	const general_store = useGeneralStore();

	const new_arrivals = [
		{ name: 'Lemonade Top in Orange', brief_description: '100% Cotton', price: '550.00', image: top },
		{ name: 'Orange Bag in Lemonade', brief_description: '100% Acrylic', price: '550.00', image: bag }
	];
</script>
