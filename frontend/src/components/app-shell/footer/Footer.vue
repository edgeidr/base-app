<template>
	<footer class="footer">
		<div class="[ footer-inner ] [ main-wrapper ]">
			<div class="footer-body">
				<div class="footer-branding">
					<div>
						<div>
							<img
								class="footer-logo"
								:src="knotjam_logo"
								alt="KnotJam Logo" />
						</div>

						<div class="mt-md">
							<EIcon
								name="logo-facebook"
								size="xs"
								color="accent">
							</EIcon>
							<EIcon
								name="logo-instagram"
								size="xs"
								color="accent">
							</EIcon>
						</div>
					</div>

					<div>
						<div class="mb-md text-sm">
							<p class="text-bold">Handcrafted crochet</p>
							<p>Made with love</p>
							<p>Bulacan, Philippines</p>
						</div>

						<div class="text-sm">
							<a
								:href="email_href"
								class="text-text no-line">
								{{ email }}
							</a>
						</div>
					</div>
				</div>

				<nav class="footer-nav">
					<div>
						<ul class="footer-nav-list">
							<li
								v-for="(item, index) in left_nav"
								:key="index">
								<router-link
									:to="item.link"
									class="footer-nav-link">
									{{ item.label }}
								</router-link>
							</li>
						</ul>
					</div>

					<div>
						<ul class="footer-nav-list">
							<li
								v-for="(item, index) in right_nav"
								:key="index">
								<router-link
									:to="item.link"
									class="footer-nav-link">
									{{ item.label }}
								</router-link>
							</li>
						</ul>
					</div>
				</nav>
			</div>

			<div class="footer-copyright">
				<p>{{ copyright_message }}</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
	import { computed } from 'vue';
	import knotjam_logo from '@/assets/images/KnotJam-logo.png';

	const email = 'iknotjam@gmail.com';
	const left_nav = [
		{ label: 'Contact', link: '' },
		{ label: 'Custom Orders', link: '' },
		{ label: 'Crochet Care Guide', link: '' },
		{ label: 'Felt Flowers', link: '' },
		{ label: 'Our Process', link: '' }
	];
	const right_nav = [
		{ label: 'Shipping', link: '' },
		{ label: 'Returns & Exchanges', link: '' },
		{ label: 'About', link: '' },
		{ label: 'Terms of Service', link: '' },
		{ label: 'Privacy Policy', link: '' },
		{ label: 'FAQs', link: '' }
	];

	const email_href = computed(() => {
		return `mailto:${email}`;
	});

	const copyright_message = computed(() => {
		let current_year = new Date().getFullYear();
		return `© ${current_year} KNOTJAM / Jam Gascon`;
	});
</script>

<style lang="scss">
	@import './Footer.scss';
</style>
