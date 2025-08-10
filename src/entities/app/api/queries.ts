import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { appsApi } from '@/shared/api/apps';
import type { AppData } from '../types';

export const APPS_QUERY_KEYS = {
	all: ['apps'] as const,
	apps: () => [...APPS_QUERY_KEYS.all, 'list'] as const,
	favorites: () => [...APPS_QUERY_KEYS.all, 'favorites'] as const,
} as const;

export function useApps() {
	return useQuery({
		queryKey: APPS_QUERY_KEYS.apps(),
		queryFn: appsApi.getApps,
		staleTime: 1000 * 60 * 5, // 5 minutes
	});
}

export function useFavoriteApps() {
	return useQuery({
		queryKey: APPS_QUERY_KEYS.favorites(),
		queryFn: appsApi.getFavoriteApps,
		staleTime: 1000 * 60 * 5,
	});
}

export function useRemoveFavoriteApp() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: appsApi.removeFavoriteApp,
		onMutate: async (appId: string) => {
			await queryClient.cancelQueries({
				queryKey: APPS_QUERY_KEYS.favorites(),
			});

			const previousFavorites = queryClient.getQueryData(
				APPS_QUERY_KEYS.favorites(),
			);

			queryClient.setQueryData(
				APPS_QUERY_KEYS.favorites(),
				(old: AppData[] | undefined) => {
					if (!old) return [];
					return old.filter((app) => app.id !== appId);
				},
			);

			return { previousFavorites };
		},
	});
}
