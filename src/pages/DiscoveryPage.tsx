import { useModalStore } from '@/app/store/useModalStore';
import { AppListItem, useApps, useFavoriteApps } from '@/entities/app';
import FavoriteAppDeleteComfirmModal from '@/entities/app/ui/modal/FavoriteAppDeleteComfirmModal';
import { BannerCarouselContainer } from '@/features/banner';
import { LoadingIndicator } from '@/widgets/LoadingIndicator';

export function DiscoveryPage() {
	const { data: apps, isLoading: appsLoading, error: appsError } = useApps();
	const {
		data: favoriteApps,
		isLoading: favoritesLoading,
		error: favoritesError,
	} = useFavoriteApps();
	const { showModal, hideModal } = useModalStore();

	const handleDeleteFavorite = (id: string) => {
		showModal({
			component: FavoriteAppDeleteComfirmModal,
			props: {
				appId: id,
				onConfirm: () => {
					hideModal();
				},
			},
		});
	};
	return (
		<main className="bg-white flex flex-col gap-[30px] h-real-screen max-w-[634px] mx-auto">
			{/* 상단 배너 섹션 */}
			<section className="bg-white mb-[10px]">
				<BannerCarouselContainer language="ko" />
			</section>

			{/* 즐겨찾기 섹션 */}
			<section className="px-7">
				<h2 className="text-[18px]">즐겨찾기</h2>
				<div className="h-[1px] bg-gray-300 mt-2" />
				{favoritesLoading ? (
					<LoadingIndicator className="h-[200px]" />
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
				{appsLoading && <LoadingIndicator className="h-[200px]" />}
				{appsError && (
					<div className="flex items-center h-[200px] justify-center py-8">
						<p className="text-red-500">
							앱 목록을 불러오는 중 오류가 발생했습니다.
						</p>
					</div>
				)}
				{!appsLoading && !appsError && (
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
