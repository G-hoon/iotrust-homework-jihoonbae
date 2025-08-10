import { useQuery } from '@tanstack/react-query';
import { bannersApi } from '@/shared/api/banners';

export const BANNERS_QUERY_KEYS = {
	all: ['banners'] as const,
	banners: () => [...BANNERS_QUERY_KEYS.all, 'list'] as const,
} as const;

export function useBanners() {
	return useQuery({
		queryKey: BANNERS_QUERY_KEYS.banners(),
		queryFn: bannersApi.getBanners,
		staleTime: 1000 * 60 * 10,
	});
}
