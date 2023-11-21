import Card from '../components/card/Card.vue';
import Input from '../components/input/Input.vue';

export default function register_custom_components(app) {
	app.component('ECard', Card);
	app.component('EInput', Input);
}
