import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import type { BannerData } from '../types';

interface BannerCarouselProps {
	banners: BannerData[];
	language?: 'ko' | 'en';
	autoSlide?: boolean;
	autoSlideInterval?: number;
}

export function BannerCarousel({
	banners,
	language = 'ko',
	autoSlide = true,
	autoSlideInterval = 4000,
}: BannerCarouselProps) {
	const { t } = useTranslation();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [translateX, setTranslateX] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const getImageSrc = (banner: BannerData) => {
		if (banner.image[language]) {
			return banner.image[language];
		}
		return banner.image.default || '';
	};

	const getDescription = (banner: BannerData) => {
		return banner.description?.[language] || '';
	};

	const getButtonText = (banner: BannerData) => {
		return banner.buttonText?.[language] || '';
	};

	const getTitle = (banner: BannerData) => {
		return banner.title?.[language] || '';
	};

	const goToNext = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % banners.length);
	}, [banners.length]);

	const goToPrev = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
	}, [banners.length]);

	// Auto slide functionality
	useEffect(() => {
		if (!autoSlide || banners.length <= 1) return;

		const interval = setInterval(goToNext, autoSlideInterval);
		return () => clearInterval(interval);
	}, [autoSlide, autoSlideInterval, banners.length, goToNext]);

	// Touch/Mouse drag handlers
	const handleStart = (clientX: number) => {
		setIsDragging(true);
		setStartX(clientX);
		setTranslateX(0);
	};

	const handleMove = (clientX: number) => {
		if (!isDragging) return;

		const diff = clientX - startX;
		const containerWidth = containerRef.current?.offsetWidth || 0;
		const maxTranslate = containerWidth * 0.3; // 30% of container width

		setTranslateX(Math.max(-maxTranslate, Math.min(maxTranslate, diff)));
	};

	const handleEnd = () => {
		if (!isDragging) return;

		const containerWidth = containerRef.current?.offsetWidth || 0;
		const threshold = containerWidth * 0.1; // 10% threshold

		if (translateX > threshold) {
			goToPrev();
		} else if (translateX < -threshold) {
			goToNext();
		}

		setIsDragging(false);
		setTranslateX(0);
	};

	// Mouse events
	const handleMouseDown = (e: React.MouseEvent) => {
		e.preventDefault();
		handleStart(e.clientX);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		handleMove(e.clientX);
	};

	const handleMouseUp = () => {
		handleEnd();
	};

	// Touch events
	const handleTouchStart = (e: React.TouchEvent) => {
		handleStart(e.touches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		handleMove(e.touches[0].clientX);
	};

	const handleTouchEnd = () => {
		handleEnd();
	};

	return (
		<div className="relative w-full">
			<section
				ref={containerRef}
				className="overflow-hidden"
				aria-label="배너 캐러셀"
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				<div
					className="flex transition-transform duration-300 ease-out"
					style={{
						transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
					}}
				>
					{banners.map((banner) => (
						<div key={banner.id} className="w-full flex-shrink-0">
							<Link
								to={banner.link[language]}
								target="_blank"
								rel="noopener noreferrer"
								className="relative w-full h-full overflow-hidden block"
							>
								<img
									src={getImageSrc(banner)}
									alt={getTitle(banner) || getDescription(banner)}
									className="w-full h-full object-cover"
									draggable={false}
								/>
								{(getDescription(banner) || getButtonText(banner)) && (
									<div className="absolute h-[70%] top-[15%] left-[3%] flex flex-col justify-between gap-2">
										{getDescription(banner) && (
											<p className="max-w-[330px] text-white text-sm text-[22px] text-left leading-[1.1]">
												{t(getDescription(banner))}
											</p>
										)}
										{getButtonText(banner) && (
											<div className="bg-white text-black text-[16px] flex w-[95px] h-[40px] items-center justify-center text-sm font-medium rounded-full">
												{t(getButtonText(banner))}
											</div>
										)}
									</div>
								)}
							</Link>
						</div>
					))}
				</div>
			</section>

			{/* Fixed Pagination */}
			<div className="absolute bottom-[4%] right-[2%] text-white px-3 py-1 text-sm">
				{currentIndex + 1} / {banners.length}
			</div>
		</div>
	);
}
