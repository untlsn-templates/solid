import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import css from 'unocss/vite';
import autoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    solid({ ssr: false }),
    css(),
    autoImport({
      imports: [
        'solid-js',
        {
          'solid-start': ['A'],
        },
      ],
      dts: './src/auto-imports.d.ts',
    }),
  ],
});
