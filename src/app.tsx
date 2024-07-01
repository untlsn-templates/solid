// @refresh reload
import { Suspense } from 'solid-js';
import '@un-tlsn/unocss/reset';
import 'uno.css';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { MetaProvider } from '@solidjs/meta';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { SolidQueryDevtools } from '@tanstack/solid-query-devtools';

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export default function App() {
	return (
		<Router root={(props) => {
			return (
				<MetaProvider>
					<QueryClientProvider client={client}>
						<Suspense>
							{props.children}
						</Suspense>
						<SolidQueryDevtools />
					</QueryClientProvider>
				</MetaProvider>
			);
		}}
		>
			<FileRoutes />
		</Router>
	);
}
