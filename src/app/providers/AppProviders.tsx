import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '../router/AppRouter';
import { ModalRenderer } from './ModalRenderer';
import { QueryProvider } from './QueryProvider';

export const AppProviders = () => {
	return (
		<QueryProvider>
			<BrowserRouter>
				<ModalRenderer />
				<AppRouter />
			</BrowserRouter>
		</QueryProvider>
	);
};
