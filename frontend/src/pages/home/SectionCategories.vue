<template>
	<section class="bg-mint h-auto">
		<div class="[ section-categories ][ py-section wrapper ]">
			<div class="category-list">
				<div class="category-item">
					<router-link
						to=""
						class="contents">
						<div class="category-content">
							<img
								:src="tops"
								alt=""
								class="category-image" />
							<h2 class="mt-md">Tops</h2>
						</div>
					</router-link>
				</div>

				<div class="category-item">
					<router-link
						to=""
						class="contents">
						<div class="category-content category-content--sm">
							<img
								:src="handbags"
								alt=""
								class="category-image" />
							<h2 class="mt-md">Handbags</h2>
						</div>
					</router-link>
				</div>
			</div>

			<div class="category-list mt-2xl">
				<div class="category-item">
					<router-link
						to=""
						class="contents">
						<div class="category-content category-content--sm">
							<img
								:src="dresses"
								alt=""
								class="category-image" />
							<h2 class="mt-md">Dresses</h2>
						</div>
					</router-link>
				</div>

				<div class="category-item">
					<router-link
						to=""
						class="contents">
						<div class="category-content">
							<img
								:src="bottoms"
								alt=""
								class="category-image" />
							<h2 class="mt-md">Bottoms</h2>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import tops from '../../assets/images/sample/AISHA.png';
	import handbags from '../../assets/images/sample/BLOOM.png';
	import dresses from '../../assets/images/sample/LIA.png';
	import bottoms from '../../assets/images/sample/SUNYY.png';
</script>
