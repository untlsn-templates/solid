import { createSignal } from 'solid-js';

export default function Counter() {
	const [count, setCount] = createSignal(0);
	return (
		<button
			class="w-50 border-(2 transparent) rounded-xl bg-[#446B9E]/10 px-4 py-2 text-[#335d92] tabular-nums hocus:border-[#446B9E] active:bg-[#446B9E]/20"
			onClick={() => setCount(count() + 1)}
			type="button"
		>
			Clicks: {count()}
		</button>
	);
}
