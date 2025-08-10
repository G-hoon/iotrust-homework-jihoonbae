import { useBanners } from '../api/queries';
import { BannerCarousel } from './BannerCarousel';

interface BannerCarouselContainerProps {
	language?: 'ko' | 'en';
	autoSlide?: boolean;
	autoSlideInterval?: number;
}

export function BannerCarouselContainer({
	language = 'ko',
	autoSlide = true,
	autoSlideInterval = 4000,
}: BannerCarouselContainerProps) {
	const { data: banners, isLoading, error } = useBanners();

	if (isLoading) {
		return (
			<div className="relative w-full aspect-[634/200] bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
				<div className="text-gray-500">배너 로딩 중...</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="relative w-full h-[200px] bg-gray-100 flex items-center justify-center">
				<div className="text-gray-500">배너를 불러올 수 없습니다.</div>
			</div>
		);
	}

	if (!banners || banners.length === 0) {
		return (
			<div className="relative w-full h-[200px] bg-gray-100 flex items-center justify-center">
				<div className="text-gray-500">표시할 배너가 없습니다.</div>
			</div>
		);
	}

	return (
		<BannerCarousel
			banners={banners}
			language={language}
			autoSlide={autoSlide}
			autoSlideInterval={autoSlideInterval}
		/>
	);
}
