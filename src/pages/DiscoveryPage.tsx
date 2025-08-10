import {
	AppListItem,
	useApps,
	useFavoriteApps,
	useRemoveFavoriteApp,
} from '@/entities/app';
import { BannerCarouselContainer } from '@/features/banner';

export function DiscoveryPage() {
	const { data: apps, isLoading: appsLoading, error: appsError } = useApps();
	const {
		data: favoriteApps,
		isLoading: favoritesLoading,
		error: favoritesError,
	} = useFavoriteApps();
	const removeFavoriteMutation = useRemoveFavoriteApp();

	const handleDeleteFavorite = (id: string) => {
		removeFavoriteMutation.mutate(id);
	};
	return (
		<main className="bg-white flex flex-col gap-[30px] min-h-screen max-w-[634px] mx-auto">
			{/* 상단 배너 섹션 */}
			<section className="bg-white mb-[10px]">
				<BannerCarouselContainer language="ko" />
			</section>

			{/* 즐겨찾기 섹션 */}
			<section className="px-7">
				<h2 className="text-[18px]">즐겨찾기</h2>
				<div className="h-[1px] bg-gray-300 mt-2" />
				{favoritesLoading ? (
					<div className="flex h-[250px] items-center justify-center">
						<div className="border-black h-[20px] w-[20px] animate-spin rounded-full border-2 border-t-transparent" />
					</div>
				) : favoritesError ? (
					<div className="flex items-center justify-center py-8">
						<div className="text-red-500">
							즐겨찾기를 불러오는 중 오류가 발생했습니다.
						</div>
					</div>
				) : (
					<ul className="flex flex-col">
						{favoriteApps?.map((app) => (
							<AppListItem
								key={app.id}
								app={app}
								isFavorite
								onDeleteFavorite={() => handleDeleteFavorite(app.id)}
							/>
						))}
					</ul>
				)}
			</section>

			{/* 앱 목록 섹션 */}
			<section className="px-7">
				<h2 className="text-[18px]">목록</h2>
				<div className="h-[1px] bg-gray-300 mt-2" />
				{appsLoading ? (
					<div className="flex h-[250px] items-center justify-center">
						<div className="border-black h-[20px] w-[20px] animate-spin rounded-full border-2 border-t-transparent" />
					</div>
				) : appsError ? (
					<div className="flex items-center justify-center py-8">
						<div className="text-red-500">
							앱 목록을 불러오는 중 오류가 발생했습니다.
						</div>
					</div>
				) : (
					<ul className="flex flex-col">
						{apps?.map((app) => (
							<AppListItem key={app.id} app={app} />
						))}
					</ul>
				)}
			</section>
		</main>
	);
}
