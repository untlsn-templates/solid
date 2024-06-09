// @ts-check

import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
// @ts-ignore
import react from 'eslint-plugin-react'
import solid from "eslint-plugin-solid";
// @ts-ignore
import * as tsParser from "@typescript-eslint/parser";


export default tsEslint.config(
	eslint.configs.recommended,
	...tsEslint.configs.recommended,
	{
		files: ["**/*.{ts,tsx}"],
		...solid.configs['flat/typescript'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: "tsconfig.json",
			},
		},
		rules: {
			'solid/jsx-no-undef': 0,
			'solid/self-closing-comp': 0,
		}
	},
	{
		plugins: { react },
		rules: {
			'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'multiline' }],
			'react/jsx-closing-bracket-location': 1,
			'react/jsx-indent': [1, 'tab'],
			'react/jsx-first-prop-new-line': 1,
			'react/button-has-type': [1, { reset: true }],
			'react/jsx-tag-spacing': 1,
		}
	},
	{

		rules: {
			semi:                      [1, 'always'],
			'no-multiple-empty-lines': [ 1, { max: 2, maxEOF: 0 } ],
			'prefer-const':            1,
			'arrow-parens':            [1, 'always'],
			indent:                    [1, 'tab', { SwitchCase: 1 }],
			'comma-dangle':            [1, 'always-multiline'],
			'quote-props':             [1, 'as-needed'],
			'object-curly-spacing':    [1, 'always'],
			'object-curly-newline':    [1, { multiline: true, consistent: true }],
			'no-trailing-spaces':      1,
			'no-console':              [1, { allow: ['warn', 'error'] }],
			quotes:                    [1, 'single'],
			'jsx-quotes':              1,
			'key-spacing':             [ 1, { align: 'value' } ],

			'@typescript-eslint/key-spacing': [ 1, { align: 'value' } ],
			'@typescript-eslint/no-unused-vars': 1,
			'@typescript-eslint/no-explicit-any': 0,
			'@typescript-eslint/no-non-null-assertion': 0,
			'@typescript-eslint/ban-ts-comment': 0,
			'@typescript-eslint/ban-types': 1,
		},
	},
);
