import { QueryProvider } from './QueryProvider';
import { RouterProvider } from './RouteProvider';

export const AppProviders = () => {
	return (
		<QueryProvider>
			<RouterProvider />
		</QueryProvider>
	);
};
