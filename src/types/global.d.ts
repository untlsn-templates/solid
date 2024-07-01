/// <reference types="@solidjs/start/env" />
import { JSX } from 'solid-js';

declare global {
	type JSXElement = JSX.Element;
	type SolidInputEvent = InputEvent & { currentTarget: HTMLInputElement, target: HTMLInputElement };
}
