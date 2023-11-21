<template>
	<div class="[ main-wrapper ] [ py-xl ]">
		<h1 class="text-center mb-2xl">{{ title }}</h1>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const title = ref('Input');
</script>
