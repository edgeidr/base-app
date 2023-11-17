import { RouterView, createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Root',
		component: RouterView
	}
];

export const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
