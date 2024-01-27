<template>
	<section class="bg-white h-auto">
		<div class="[ wrapper py-section ][ section-item-list ]">
			<div class="section-info">
				<h2>New Arrivals</h2>
				<p>Let your personality shine with handcrafted pieces made just for you.</p>

				<div>
					<ETextButton
						label="SHOP ALL NEW"
						link="">
					</ETextButton>
				</div>
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
						<h4 class="f-body font-normal">{{ item.name }}</h4>
						<p class="text-muted">{{ item.brief_description }}</p>
					</div>

					<p>{{ item.price }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import top from '@/assets/images/sample/top.jpg';
	import bag from '@/assets/images/sample/bag.jpg';

	const new_arrivals = [
		{ name: 'Lemonade Top in Orange', brief_description: '100% Cotton', price: '₱ 550.00', image: top },
		{ name: 'Orange Bag in Lemonade', brief_description: '100% Acrylic', price: '₱ 550.00', image: bag }
	];
</script>
