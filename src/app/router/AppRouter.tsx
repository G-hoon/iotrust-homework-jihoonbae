import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoadingIndicator } from '@/widgets/LoadingIndicator';

const MainPage = lazy(() =>
	import('@/pages/DiscoveryPage').then((module) => ({
		default: module.DiscoveryPage,
	})),
);

export const AppRouter: React.FC = () => (
	<Suspense
		fallback={<LoadingIndicator className="h-real-screen bg-white/50" />}
	>
		<Routes>
			<Route path="/" element={<MainPage />} />
		</Routes>
	</Suspense>
);
