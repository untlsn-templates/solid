import * as u from 'unocss';
import { presetAio } from 'untlsn-unocss';


export default u.defineConfig({
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
