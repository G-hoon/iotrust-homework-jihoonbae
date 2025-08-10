import { useTranslation } from 'react-i18next';
import { useModalStore } from '@/app/store/useModalStore';
import { AppListItem, useApps, useFavoriteApps } from '@/entities/app';
import { AppDetailModal } from '@/entities/app/ui/modal/AppDetailModal';
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
	const { t, i18n } = useTranslation();
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

	const handleClickApp = (id: string) => {
		const selectedApp = apps?.find((app) => app.id === id);
		showModal({
			component: AppDetailModal,
			props: {
				iconUrl: selectedApp?.iconUrl,
				title: selectedApp?.name,
				description:
					selectedApp?.description[
						i18n.language as keyof typeof selectedApp.description
					],
				link: selectedApp?.url,
			},
		});
	};

	return (
		<main className="bg-white flex flex-col gap-[30px] h-real-screen max-w-[634px] mx-auto">
			{/* 상단 배너 섹션 */}
			<section className="bg-white mb-[10px]">
				<BannerCarouselContainer
					language={i18n.language.startsWith('ko') ? 'ko' : 'en'}
				/>
			</section>

			{/* 즐겨찾기 섹션 */}
			<section className="px-7">
				<h2 className="text-[18px]">{t('favorite')}</h2>
				<div className="h-[1px] bg-gray-300 mt-2" />
				{favoritesLoading && <LoadingIndicator className="h-[200px]" />}
				{favoritesError && (
					<div className="flex items-center justify-center py-8">
						<div className="text-red-500">
							즐겨찾기를 불러오는 중 오류가 발생했습니다.
						</div>
					</div>
				)}
				{!favoritesLoading && !favoritesError && favoriteApps && (
					<div className="flex flex-col">
						{favoriteApps.map((app) => (
							<AppListItem
								key={app.id}
								app={app}
								isFavorite
								onDeleteFavorite={() => handleDeleteFavorite(app.id)}
								onClick={() => handleClickApp(app.id)}
							/>
						))}
					</div>
				)}
			</section>

			{/* 앱 목록 섹션 */}
			<section className="px-7">
				<h2 className="text-[18px]">{t('list')}</h2>
				<div className="h-[1px] bg-gray-300 mt-2" />
				{appsLoading && <LoadingIndicator className="h-[200px]" />}
				{appsError && (
					<div className="flex items-center h-[200px] justify-center py-8">
						<p className="text-red-500">
							앱 목록을 불러오는 중 오류가 발생했습니다.
						</p>
					</div>
				)}
				{!appsLoading && !appsError && apps && (
					<div className="flex flex-col">
						{apps.map((app) => (
							<AppListItem
								key={app.id}
								app={app}
								onClick={() => handleClickApp(app.id)}
							/>
						))}
					</div>
				)}
			</section>
		</main>
	);
}
