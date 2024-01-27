<template>
	<button
		v-if="!props.link"
		type="button"
		:class="['text-button', color_class]">
		{{ props.label }}
	</button>

	<router-link
		v-else
		:to="link"
		:class="['text-button', color_class]">
		{{ props.label }}
	</router-link>
</template>

<script setup>
	import { computed } from 'vue';

	const props = defineProps({
		label: String,
		color: String,
		link: [String, Object]
	});

	const color_class = computed(() => {
		if (!props.color) return null;
		return `text-button--${props.color}`;
	});
</script>

<style lang="scss">
	@import './TextButton.scss';
</style>
