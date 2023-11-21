<template>
	<div class="mb-sm">
		<EInput
			type="email"
			label="Email"
			v-model="email"></EInput>
	</div>

	<div class="mb-sm">
		<EInput
			type="password"
			label="Password"
			v-model="password"></EInput>
	</div>

	<div class="mb-sm">
		<EInput
			type="date"
			label="Date">
		</EInput>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const email = ref('');
	const password = ref('');
</script>
