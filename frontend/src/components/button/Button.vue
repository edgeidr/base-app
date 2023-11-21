<template>
	<button
		type="button"
		:class="['button', color_class]">
		{{ props.label }}
	</button>
</template>

<script setup>
	import { computed } from 'vue';

	const props = defineProps({
		label: String,
		color: String
	});

	const color_class = computed(() => {
		if (!props.color) return null;
		return `button--${props.color}`;
	});
</script>

<style lang="scss">
	@import './Button.scss';
</style>
