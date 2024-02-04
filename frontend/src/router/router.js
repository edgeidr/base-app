import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/global/auth';

const routes = [
	{
		path: '/',
		component: () => import('../components/page-layouts/user-layout/UserLayout.vue'),
		redirect: { name: 'home' },
		children: [
			{
				path: '',
				name: 'home',
				component: () => import('../pages/home/Home.vue')
			},
			{
				path: '/about',
				name: 'about',
				component: () => import('../pages/about/About.vue')
			},
			{
				path: '/shop',
				name: 'shop',
				component: () => import('../pages/shop/Shop.vue'),
				children: [
					{
						path: ':category',
						name: 'category',
						component: () => import('../pages/shop/Shop.vue'),
						children: [
							{
								path: ':product',
								name: 'product',
								component: () => import('../pages/shop/Shop.vue')
							}
						]
					}
				]
			},
			{
				path: '/:collection',
				name: 'collection',
				component: () => import('../pages/shop/Shop.vue')
			}
		]
	},
	{
		path: '/auth',
		name: 'auth',
		component: () => import('../components/page-layouts/auth-layout/AuthLayout.vue'),
		redirect: { name: 'login' },
		meta: { authenticated: false },
		children: [
			{
				path: '/login',
				name: 'login',
				component: () => import('../pages/auth/Login.vue')
			},
			{
				path: '/register',
				name: 'register',
				component: () => import('../pages/auth/Register.vue')
			}
		]
	},
	{
		path: '/dev',
		name: 'dev',
		component: () => import('../pages/dev/Dev.vue'),
		children: [
			{
				path: 'colors',
				name: 'dev-colors',
				meta: { title: 'Colors' },
				component: () => import('../pages/dev/colors/DevColors.vue')
			}
		]
	}
];

export const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach((to, from, next) => {
	const auth_store = useAuthStore();
	const is_logged_in = auth_store.is_logged_in;

	if (to.meta?.authenticated === true && !is_logged_in) {
		next(from.name || '/auth');
	} else if (to.meta?.authenticated === false && is_logged_in) {
		next(from.name || '/');
	} else {
		next();
	}
});

export default router;
