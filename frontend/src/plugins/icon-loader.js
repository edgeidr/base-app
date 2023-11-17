const iconCache = {};

export async function preloadAllIcons() {
	const icons = import.meta.globEager(`../assets/icons/*.svg`);

	for (const key in icons) {
		if (Object.hasOwnProperty.call(icons, key)) {
			const iconName = key.replace(/^\.\/(.+)\.svg$/, '$1');
			if (!iconCache[iconName]) {
				const iconImport = icons[key];
				iconCache[iconName] = iconImport.default;
			}
		}
	}
}

export function preloadIcon(name) {
	if (!iconCache[name]) {
		const iconImport = import(`../assets/icons/${name}.svg`);
		iconCache[name] = iconImport;
	}
	return iconCache[name];
}
