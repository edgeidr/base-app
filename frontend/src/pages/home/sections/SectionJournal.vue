<template>
	<section class="bg-lavender h-auto">
		<div class="[ wrapper py-section ][ section-item-list section-journal ]">
			<div class="section-info">
				<h2>Journal</h2>
				<p>Stories behind the knots.</p>

				<div>
					<ETextButton
						label="MORE JOURNAL ENTRIES"
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
						<h4 class="f-body font-normal text-md">{{ item.name }}</h4>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import camping from '@/assets/images/sample/camping.jpg';
	import food from '@/assets/images/sample/food.webp';

	const new_arrivals = [
		{ name: 'Camping in Luzon', brief_description: '100% Cotton', price: '₱ 550.00', image: camping },
		{ name: 'Taiwan Food Memories', brief_description: '100% Acrylic', price: '₱ 550.00', image: food }
	];
</script>
