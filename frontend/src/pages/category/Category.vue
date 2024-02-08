<template>
	<section>
		<div class="wrapper">
			<h1>{{ title }}</h1>
		</div>
	</section>
</template>

<script setup>
	import { useRoute } from 'vue-router';
	import { useCategoriesStore } from '../../stores/categories';
	import { computed } from 'vue';

	const categories_store = useCategoriesStore();
	const route = useRoute();

	const title = computed(() => {
		return categories_store.categories.find((item) => item.slug === route.params.category)?.title;
	});
</script>
