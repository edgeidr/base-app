import { vOnClickOutside } from '@vueuse/components';

export default function register_vueuse_directives(app) {
	app.directive('on-click-outside', vOnClickOutside);
}
