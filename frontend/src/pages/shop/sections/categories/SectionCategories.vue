<template>
	<section>
		<div class="wrapper">
			<div class="category-list">
				<div
					v-for="category in categories_store.categories"
					:key="category.slug">
					<div class="category-header">
						<h3 class="category-title">{{ category.title }}</h3>
						<router-link
							:to="{ name: 'category', params: { category: category.slug } }"
							class="text-sm">
							View all
						</router-link>
					</div>

					<div class="category-body">
						<router-link
							v-for="product in category.products"
							:key="product.slug"
							:to="{ name: 'product', params: { category: category.slug, product: product.slug } }">
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
	import { useCategoriesStore } from '../../../../stores/categories';

	const categories_store = useCategoriesStore();
</script>
