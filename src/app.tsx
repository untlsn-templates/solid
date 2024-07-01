// @refresh reload
import { Suspense } from 'solid-js';
import '@un-tlsn/unocss/reset';
import 'uno.css';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { MetaProvider } from '@solidjs/meta';


export default function App() {
	return (
		<Router root={(props) => {
			return (
				<MetaProvider>
					<Suspense>
						{props.children}
					</Suspense>
				</MetaProvider>
			);
		}}
		>
			<FileRoutes />
		</Router>
	);
}
