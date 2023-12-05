import Card from '../components/card/Card.vue';
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';
import Link from '../components/link/Link.vue';

export default function register_custom_components(app) {
	app.component('ECard', Card);
	app.component('EInput', Input);
	app.component('EButton', Button);
	app.component('ELink', Link);
}
