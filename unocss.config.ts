import * as u from 'unocss';
import { presetAio } from '@un-tlsn/unocss';


export default u.defineConfig({
	theme: {
		colors: {},
	},
	presets: [
		u.presetUno(),
		u.presetWind(),
		u.presetIcons(),
		u.presetTypography(),
		u.presetWebFonts(),
		presetAio(),
	],
	transformers: [
		u.transformerDirectives(),
		u.transformerCompileClass(),
		u.transformerVariantGroup(),
	]
})
