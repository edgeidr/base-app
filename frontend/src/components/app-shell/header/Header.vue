<template>
	<header :class="hidden_class">
		<nav class="[ breakout ][ header-nav ]">
			<ul class="header-nav--left">
				<li
					v-for="(item, index) in left_nav"
					:key="index">
					<router-link
						:to="item.link"
						class="nav-link">
						{{ item.label }}
					</router-link>
				</li>
			</ul>

			<router-link
				:to="{ name: 'home' }"
				class="main-logo-wrapper">
				<img
					:src="knotjam_logo"
					alt="KnotJam Logo"
					class="main-logo" />
			</router-link>

			<ul class="header-nav--right">
				<li
					v-for="(item, index) in right_nav"
					:key="index">
					<router-link
						:to="item.link"
						class="nav-link">
						{{ item.label }}
					</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
	import { computed } from 'vue';
	import knotjam_logo from '../../../assets/images/KnotJam-logo.png';
	import { useWindowScroll } from '@vueuse/core';

	const { y } = useWindowScroll();

	const left_nav = [
		{ label: 'New Arrivals', link: '' },
		{ label: 'Shop', link: '' },
		{ label: 'About', link: { name: 'about' } }
	];
	const right_nav = [
		{ label: 'Journal', link: '' },
		{ label: 'Search', link: '' },
		{ label: 'Cart', link: '' }
	];

	const hidden_class = computed(() => {
		return y.value >= 100 ? 'hidden' : null;
	});
</script>

<style lang="scss">
	@import './Header.scss';
</style>
