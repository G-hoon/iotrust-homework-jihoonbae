import { BrowserRouter } from 'react-router-dom';
import { DevTool } from '@/widgets/DevTool';
import { AppRouter } from '../router/AppRouter';
import { ModalRenderer } from './ModalRenderer';
import { QueryProvider } from './QueryProvider';

export const AppProviders = () => {
	return (
		<QueryProvider>
			<BrowserRouter>
				<ModalRenderer />
				<AppRouter />
				{(import.meta.env.VITE_APP_ENV === 'dev' ||
					import.meta.env.VITE_APP_ENV === 'stage') && <DevTool />}
			</BrowserRouter>
		</QueryProvider>
	);
};
