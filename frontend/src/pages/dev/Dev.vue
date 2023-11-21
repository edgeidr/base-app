<template>
	<div class="[ main-wrapper ] [ py-xl ]">
		<h1 class="text-center mb-2xl">{{ title }}</h1>

		<div class="px-2xl">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup>
	import { computed, ref } from 'vue';
	import { useRoute } from 'vue-router';

	const title = computed(() => {
		return useRoute().meta.title;
	});
</script>
