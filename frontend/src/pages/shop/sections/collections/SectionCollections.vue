<template>
	<section class="bg-mint">
		<div class="wrapper">
			<div class="collection-list">
				<div
					v-for="collection in collections"
					:key="collection.slug"
					class="collection-group">
					<div class="collection-header">
						<h3 class="collection-title">{{ collection.title }}</h3>
						<router-link :to="collection.url">View all</router-link>
					</div>

					<div class="collection-body">
						<router-link
							v-for="product in collection.products"
							:key="product.slug"
							:to="product.url">
							<div class="collection-item">
								<img
									:src="product.image"
									alt=""
									class="product-image" />
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
	const collections = [
		{
			title: 'New Arrivals',
			slug: 'new-arrivals',
			url: { name: 'collection', params: { collection: 'new-arrivals' } },
			products: [
				{ title: 'Product 1', image: '', slug: 'product-1', url: { name: 'product', params: { category: 'top', product: 'product-1' } } },
				{ title: 'Product 2', image: '', slug: 'product-2', url: { name: 'product', params: { category: 'top', product: 'product-2' } } },
				{ title: 'Product 3', image: '', slug: 'product-3', url: { name: 'product', params: { category: 'top', product: 'product-3' } } },
				{ title: 'Product 4', image: '', slug: 'product-4', url: { name: 'product', params: { category: 'top', product: 'product-4' } } },
				{ title: 'Product 5', image: '', slug: 'product-5', url: { name: 'product', params: { category: 'top', product: 'product-5' } } }
			]
		},
		{
			title: 'Top Picks',
			slug: 'top-picks',
			url: { name: 'collection', params: { collection: 'top-picks' } },
			products: [
				{ title: 'Product 1', image: '', slug: 'product-1', url: { name: 'product', params: { category: 'top', product: 'product-1' } } },
				{ title: 'Product 2', image: '', slug: 'product-2', url: { name: 'product', params: { category: 'top', product: 'product-2' } } },
				{ title: 'Product 3', image: '', slug: 'product-3', url: { name: 'product', params: { category: 'top', product: 'product-3' } } },
				{ title: 'Product 4', image: '', slug: 'product-4', url: { name: 'product', params: { category: 'top', product: 'product-4' } } },
				{ title: 'Product 5', image: '', slug: 'product-5', url: { name: 'product', params: { category: 'top', product: 'product-5' } } }
			]
		},
		{
			title: 'Most Popular',
			slug: 'most-popular',
			url: { name: 'collection', params: { collection: 'most-popular' } },
			products: [
				{ title: 'Product 1', image: '', slug: 'product-1', url: { name: 'product', params: { category: 'top', product: 'product-1' } } },
				{ title: 'Product 2', image: '', slug: 'product-2', url: { name: 'product', params: { category: 'top', product: 'product-2' } } },
				{ title: 'Product 3', image: '', slug: 'product-3', url: { name: 'product', params: { category: 'top', product: 'product-3' } } },
				{ title: 'Product 4', image: '', slug: 'product-4', url: { name: 'product', params: { category: 'top', product: 'product-4' } } },
				{ title: 'Product 5', image: '', slug: 'product-5', url: { name: 'product', params: { category: 'top', product: 'product-5' } } }
			]
		}
	];
</script>
