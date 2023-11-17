import { glob } from 'glob';
import fs from 'fs';

const files = glob.sync('./src/assets/scss/*/**/*.scss');

const import_statements = files
	.map((file) => {
		let file_path = file.replaceAll('\\', '/').replace('src/assets/scss/', './');

		return `@import '${file_path}';`;
	})
	.join('\n');

fs.writeFileSync('./src/assets/scss/styles.scss', import_statements, 'utf-8');

console.log('All SCSS files imported to styles.scss');
