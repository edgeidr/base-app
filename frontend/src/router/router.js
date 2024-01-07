import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/global/auth';

const routes = [
	{
		meta: { authenticated: null },
		component: () => import('../components/page-layouts/user-layout/UserLayout.vue'),
		children: [
			{
				path: '/',
				name: 'home',
				component: () => import('../pages/home/Home.vue')
			},
			{
				path: '/home',
				redirect: { name: 'home' }
			},
			{
				path: '/about',
				name: 'about',
				component: () => import('../pages/about/About.vue')
			}
		]
	},
	{
		meta: { authenticated: false },
		component: () => import('../components/page-layouts/auth-layout/AuthLayout.vue'),
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

	if (auth_store.is_logged_in) {
		if (to.meta.authenticated) {
			next();
		} else if (to.meta.authenticated == null) {
			next();
		} else {
			next(from.name);
		}
	} else {
		if (to.meta.authenticated) {
			next(from.name);
		} else if (to.meta.authenticated == null) {
			next();
		} else {
			next();
		}
	}
});

export default router;
