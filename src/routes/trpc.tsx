import { createAsync } from '@solidjs/router';
import { api } from '~/lib/api';
import { createSignal, startTransition } from 'solid-js';

export default function Page() {
	const [text, setText] = createSignal('World');
	const helloQuery = createAsync(() => api.example.hello.query(text()));


	// onInput trigger on every key stroke
	const onInput = (ev: SolidInputEvent) => {
		const value = ev.currentTarget.value;
		// SolidJS use transition to make recalling smooth :)
		void startTransition(() => setText(value));
	};

	return (
		<form class="min-h-screen flex flex-(col) items-center justify-center gap-4">
			<input
				class="border-2 rounded px-2 py-1"
				type="text"
				onInput={onInput}
				value={text()}
			/>
			{helloQuery()}
		</form>
	);
}
