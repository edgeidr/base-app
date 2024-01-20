<template>
	<div class="icon-wrapper">
		<component
			:is="icon"
			:class="['icon', color_class, size_class]" />
	</div>
</template>

<script setup>
	import { computed, defineAsyncComponent } from 'vue';

	const props = defineProps({
		name: String,
		color: String,
		size: String
	});

	const icon = defineAsyncComponent(() => {
		return import(`../../assets/icons/${props.name}.svg`);
	});

	const color_class = computed(() => {
		if (!props.color) return;
		return `icon--${props.color}`;
	});

	const size_class = computed(() => {
		if (!props.size) return;
		return `icon--${props.size}`;
	});
</script>

<style lang="scss">
	@import './Icon.scss';
</style>
