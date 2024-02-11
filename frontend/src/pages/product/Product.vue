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
		product_store.product = {
			title: 'Product 1',
			image: img_sunny,
			slug: 'product-1',
			images: [img_sunny, img_aisha, img_bloom],
			description_line_one: 'Lemonade Top in Orange',
			description_line_two: '100% Cotton',
			price: '550.00',
			details: [
				{
					title: 'Features',
					body: `
						<p class="text-muted mb-sm"> 100% Cotton </p>
						<p> Knitty Gritty is our pocket rocket, fighting the good fight in Indigo. Responsibly woven from ethically and certified mohair, don’t truck with me collar and with real shell buttons (as opposed to those immoral fakies), she’s that friend you want to have at the dinner table when Uncle Boomer peps up about, well, pretty much anything. Come on, Uncle Boomer it’s 2021. </p>
						<p> - One size knit with long sleeves and a collar </p>
						<p> - Real shell buttons on the front </p>
						<p> - Hip length </p>
						<p> - Oversized relaxed fit </p>
						<p> - Mmmohair wool blend (70% mohair 30% wool) </p>`
				},
				{
					title: 'Sizing and Fit',
					body: `
						<p> - One size knit with long sleeves and a collar </p>
						<p> - Real shell buttons on the front </p>
						<p> - Hip length </p>
						<p> - Oversized relaxed fit </p>
						<p> - Mmmohair wool blend (70% mohair 30% wool) </p>`
				},
				{
					title: 'Shipping and Returns',
					body: `
						<p> Knitty Gritty is our pocket rocket, fighting the good fight in Indigo. Responsibly woven from ethically and certified mohair, don’t truck with me collar and with real shell buttons (as opposed to those immoral fakies), she’s that friend you want to have at the dinner table when Uncle Boomer peps up about, well, pretty much anything. Come on, Uncle Boomer it’s 2021. </p>`
				},
				{
					title: 'Care and Contact',
					body: `
						<p> Knitty Gritty is our pocket rocket, fighting the good fight in Indigo. Responsibly woven from ethically and certified mohair, don’t truck with me collar and with real shell buttons (as opposed to those immoral fakies), she’s that friend you want to have at the dinner table when Uncle Boomer peps up about, well, pretty much anything. Come on, Uncle Boomer it’s 2021. </p>
						<p> - One size knit with long sleeves and a collar </p>
						<p> - Real shell buttons on the front </p>
						<p> - Hip length </p>
						<p> - Oversized relaxed fit </p>
						<p> - Mmmohair wool blend (70% mohair 30% wool) </p>
						<p> - One size knit with long sleeves and a collar </p>
						<p> - Real shell buttons on the front </p>
						<p> - Hip length </p>
						<p> - Oversized relaxed fit </p>
						<p> - Mmmohair wool blend (70% mohair 30% wool) </p>`
				}
			]
		};
	});
</script>
