// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'GIP Plateforme de l\'inclusion - n8n workflows',
			logo: {
				src: './src/assets/logo-plateforme-inclusion-horizontal.svg',
				replacesTitle: true,
			},
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },

				},
				{
					label: 'Workflows',
					autogenerate: { directory: 'workflows' },
				},
			],
		}),
	],
});
