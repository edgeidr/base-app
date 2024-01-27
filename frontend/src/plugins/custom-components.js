import Card from '../components/card/Card.vue';
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';
import TextButton from '../components/text-button/TextButton.vue';
import Link from '../components/link/Link.vue';
import Icon from '../components/icon/Icon.vue';

export default function register_custom_components(app) {
	app.component('ECard', Card);
	app.component('EInput', Input);
	app.component('EButton', Button);
	app.component('ETextButton', TextButton);
	app.component('ELink', Link);
	app.component('EIcon', Icon);
}
