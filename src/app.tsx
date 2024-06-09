// @refresh reload
import { Suspense } from 'solid-js';
import 'untcss-reset';
import 'uno.css';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';


export default function App() {
	return (
		<Router root={(props) => {
			return (
				<Suspense>
					{props.children}
				</Suspense>
			);
		}}
		>
			<FileRoutes />
		</Router>
	);
}
