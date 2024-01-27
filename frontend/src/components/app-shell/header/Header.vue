<template>
	<header>
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
	import knotjam_logo from '../../../assets/images/KnotJam-logo.png';

	const left_nav = [
		{ label: 'New Arrivals', link: '' },
		{ label: 'Shop', link: '' },
		{ label: 'About', link: '' }
	];
	const right_nav = [
		{ label: 'Journal', link: '' },
		{ label: 'Search', link: '' },
		{ label: 'Cart', link: '' }
	];
</script>

<style lang="scss">
	@import './Header.scss';
</style>
