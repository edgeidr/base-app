<template>
	<section>
		<div class="wrapper">
			<div class="category-list">
				<div
					v-for="category in categories"
					:key="category.slug">
					<div class="category-header">
						<h3 class="category-title">{{ category.title }}</h3>
						<router-link
							:to="category.url"
							class="text-sm">
							View all
						</router-link>
					</div>

					<div class="category-body">
						<router-link
							v-for="product in category.products"
							:key="product.slug"
							:to="product.url">
							<div class="category-item">
								<div class="product-image-wrapper">
									<img
										:src="product.image"
										alt=""
										class="product-image" />
								</div>
								<p class="product-title">{{ product.title }}</p>
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import img_sunny from '../../../../assets/images/sample/SUNYY.png';
	import img_aisha from '../../../../assets/images/sample/AISHA.png';
	import img_bloom from '../../../../assets/images/sample/BLOOM.png';

	const categories = [
		{
			title: 'Tops',
			slug: 'tops',
			url: { name: 'category', params: { category: 'tops' } },
			products: [
				{ title: 'Product 1', image: img_sunny, slug: 'product-1', url: { name: 'product', params: { category: 'tops', product: 'product-1' } } },
				{ title: 'Product 2', image: img_sunny, slug: 'product-2', url: { name: 'product', params: { category: 'tops', product: 'product-2' } } },
				{ title: 'Product 3', image: img_sunny, slug: 'product-3', url: { name: 'product', params: { category: 'tops', product: 'product-3' } } },
				{ title: 'Product 4', image: img_sunny, slug: 'product-4', url: { name: 'product', params: { category: 'tops', product: 'product-4' } } },
				{ title: 'Product 5', image: img_sunny, slug: 'product-5', url: { name: 'product', params: { category: 'tops', product: 'product-5' } } }
			]
		},
		{
			title: 'Bottoms',
			slug: 'bottoms',
			url: { name: 'category', params: { category: 'bottoms' } },
			products: [
				{ title: 'Product 1', image: img_aisha, slug: 'product-1', url: { name: 'product', params: { category: 'bottoms', product: 'product-1' } } },
				{ title: 'Product 2', image: img_aisha, slug: 'product-2', url: { name: 'product', params: { category: 'bottoms', product: 'product-2' } } },
				{ title: 'Product 3', image: img_aisha, slug: 'product-3', url: { name: 'product', params: { category: 'bottoms', product: 'product-3' } } },
				{ title: 'Product 4', image: img_aisha, slug: 'product-4', url: { name: 'product', params: { category: 'bottoms', product: 'product-4' } } },
				{ title: 'Product 5', image: img_aisha, slug: 'product-5', url: { name: 'product', params: { category: 'bottoms', product: 'product-5' } } }
			]
		},
		{
			title: 'Handbags',
			slug: 'handbags',
			url: { name: 'category', params: { category: 'handbags' } },
			products: [
				{ title: 'Product 1', image: img_bloom, slug: 'product-1', url: { name: 'product', params: { category: 'handbags', product: 'product-1' } } },
				{ title: 'Product 2', image: img_bloom, slug: 'product-2', url: { name: 'product', params: { category: 'handbags', product: 'product-2' } } },
				{ title: 'Product 3', image: img_bloom, slug: 'product-3', url: { name: 'product', params: { category: 'handbags', product: 'product-3' } } },
				{ title: 'Product 4', image: img_bloom, slug: 'product-4', url: { name: 'product', params: { category: 'handbags', product: 'product-4' } } },
				{ title: 'Product 5', image: img_bloom, slug: 'product-5', url: { name: 'product', params: { category: 'handbags', product: 'product-5' } } }
			]
		}
	];
</script>
