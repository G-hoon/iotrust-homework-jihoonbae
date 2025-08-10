// app/router/routes.tsx
import type { RouteObject } from 'react-router-dom';
import { DiscoveryPage } from '@/pages/DiscoveryPage';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <DiscoveryPage />,
	},
];
