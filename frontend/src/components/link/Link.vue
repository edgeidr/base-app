<template>
	<router-link :class="['link', color_class]">
		<slot></slot>
	</router-link>
</template>

<script setup>
	import { computed } from 'vue';

	const props = defineProps({
		color: String
	});

	const color_class = computed(() => {
		if (!props.color) return null;
		return `link--${props.color}`;
	});
</script>

<style lang="scss">
	@import './Link.scss';
</style>
