import type { FormStoreHandle, GenT } from '~/hooks/FormStore/types';
import type { RouteAction } from 'solid-start/data/createRouteAction';

// Shortcut to wrap createServerAction callback with FormStore handleSubmit
export const createServerHandleSubmit = <T extends GenT = any>(
	handle: FormStoreHandle<T>,
	[mutation, cb]: RouteAction<T, unknown>,
) => [
	mutation,
	handle(cb),
] as const;
