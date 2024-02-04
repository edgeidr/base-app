<template>
	<header :class="hidden_class">
		<nav class="[ breakout ][ header-nav ]">
			<ul class="header-nav--left">
				<li
					class="header-nav-item header-nav-menu"
					data-display="mobile">
					<button class="btn-menu">
						<div class="menu-line"></div>
						<div class="menu-line"></div>
						<div class="menu-line"></div>
					</button>
				</li>

				<li
					v-for="(item, index) in left_nav"
					:key="index"
					class="header-nav-item">
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
					:key="index"
					class="header-nav-item"
					:data-display="item.display">
					<router-link
						:to="item.link"
						class="nav-link">
						{{ item.label }}
					</router-link>
				</li>

				<li
					class="header-nav-item"
					data-display="all">
					<router-link
						:to="''"
						class="nav-link">
						Cart ({{ cart_count }})
					</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
	import { computed } from 'vue';
	import knotjam_logo from '@/assets/images/KnotJam-logo.png';
	import { useWindowScroll } from '@vueuse/core';
	import { useAuthStore } from '@/stores/global/auth';

	const auth_store = useAuthStore();
	const { y } = useWindowScroll();

	const left_nav = [
		{ label: 'New Arrivals', link: '' },
		{ label: 'Shop', link: { name: 'shop' } },
		{ label: 'About', link: { name: 'about' } }
	];
	const right_nav = [
		{ label: 'Journal', link: '' },
		{ label: 'Search', link: '' }
	];

	const hidden_class = computed(() => {
		return y.value >= 100 ? 'hidden' : null;
	});

	const cart_count = computed(() => {
		return auth_store.cart_count;
	});
</script>

<style lang="scss">
	@import './Header.scss';
</style>
