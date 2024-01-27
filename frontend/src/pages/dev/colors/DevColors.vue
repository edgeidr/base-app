<template>
	<div class="color-labels">
		<span></span>

		<span
			v-for="i in 9"
			:key="i"
			class="color-label">
			{{ i * 100 }}
		</span>

		<span class="color-label">translucent</span>

		<span class="color-label">transparent</span>
	</div>

	<div class="color-samples">
		<template v-for="color in colors">
			<label class="color-label">{{ color }}</label>

			<div
				v-for="i in 9"
				:key="i"
				:style="{ '--_clr-background': `var(--clr-${color}--${i * 100})` }"
				class="color-sample"></div>

			<div
				:style="{ '--_clr-background': `var(--clr-${color}--translucent)` }"
				class="color-sample"></div>

			<div
				:style="{ '--_clr-background': `var(--clr-${color}--transparent)` }"
				class="color-sample"></div>
		</template>
	</div>
</template>

<script setup>
	const colors = ['primary', 'secondary', 'accent', 'text', 'background', 'success', 'danger', 'warning', 'info'];
</script>
