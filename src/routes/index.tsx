import { Title } from '@solidjs/meta';
import Counter from '~/components/Counter';

export default function Page() {
	return (
		<main class="min-h-screen flex flex-(col) items-center justify-center p-4">
			<Title>SolidStart - Basic</Title>
			<h1 class="mx-auto my-16 text-4rem text-[#335d92] font-300 leading-[1.1] uppercase">Hello world!</h1>
			<Counter />
			<p class="mx-auto my-8 max-w-56 leading-[1.35]">
				Visit{' '}
				<a href="https://start.solidjs.com" target="_blank" class="mr-1 text-blue-9 underline">
					start.solidjs.com
				</a>{' '}
				to learn how to build SolidStart apps.
			</p>
		</main>
	);
}
