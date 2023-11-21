<template>
	<div
		@focus="input_ref.focus()"
		:class="['input-wrapper', validity_class]"
		tabindex="-1">
		<label
			class="input-label"
			:for="input_ref">
			{{ props.label }}
		</label>

		<input
			v-bind="$attrs"
			class="input"
			:value="props.modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			ref="input_ref" />
	</div>
</template>

<script setup>
	import { computed, ref } from 'vue';

	defineOptions({ inheritAttrs: false });
	const props = defineProps({
		label: String,
		modelValue: String,
		valid: Boolean
	});

	const input_ref = ref(null);

	const validity_class = computed(() => {
		if (!props.modelValue) return null;
	});
</script>

<style lang="scss">
	@import './Input.scss';
</style>
