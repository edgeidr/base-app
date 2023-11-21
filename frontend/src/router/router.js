import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/global/auth';

const routes = [
	{
		meta: { authenticated: true },
		component: () => import('../components/page-layouts/admin-layout/AdminLayout.vue'),
		children: [
			{
				path: '/',
				name: 'home',
				component: () => import('../pages/home/Home.vue')
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
		component: () => import('../pages/dev/Dev.vue')
	}
];

export const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach((to, from, next) => {
	const auth_store = useAuthStore();
	const admin_redirect = { name: 'home' };
	const user_redirect = { name: 'home' };

	if (auth_store.is_logged_in) {
		if (to.meta.authenticated) {
			next();
		} else {
			if (auth_store.user.role_id === 1) {
				next(admin_redirect);
			} else {
				next(user_redirect);
			}
		}
	} else {
		if (to.meta.authenticated) {
			next({ name: 'login' });
		} else {
			next();
		}
	}
});

export default router;
