<template>
	<div
		:class="['input-wrapper', validity_class]"
		tabindex="-1">
		<label class="input-label">
			{{ props.label }}
		</label>

		<input
			v-bind="$attrs"
			class="input"
			:value="props.modelValue"
			@input="$emit('update:modelValue', $event.target.value)" />
	</div>
</template>

<script setup>
	import { computed } from 'vue';

	defineOptions({ inheritAttrs: false });
	const props = defineProps({
		label: String,
		modelValue: String,
		valid: Boolean
	});

	const validity_class = computed(() => {
		if (!props.modelValue) return null;
	});
</script>

<style lang="scss">
	@import './Input.scss';
</style>
