import { motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function AppDetailModal({
	iconUrl,
	title,
	description,
	link,
	onClickLink,
	onClose,
}: {
	title: string;
	iconUrl: string;
	description: string;
	link: string;
	onClickLink: () => void;
	onClose?: () => void;
}) {
	const [isClosing, setIsClosing] = useState(false); // 닫기 애니메이션 상태 관리

	const handleClose = () => {
		setIsClosing(true);
	};

	// 애니메이션 완료 시 실제 모달 닫기
	const handleAnimationComplete = () => {
		if (isClosing) {
			onClose?.();
		}
	};
	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: 모달 컴포넌트
		// biome-ignore lint/a11y/useKeyWithClickEvents: 모달 컴포넌트
		<div
			className="xs:items-center h-real-screen bg-opacity-50 flex w-screen items-end justify-center"
			onClick={handleClose}
		>
			<motion.div
				className="rounded-t-[24px] bg-white w-full pt-[45px] pb-[25px] flex flex-col px-9 justify-between absolute h-[480px] bottom-0 left-0 right-0"
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-title"
				initial={{ opacity: 0.5, y: '100%' }}
				animate={isClosing ? { opacity: 0, y: '100%' } : { opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: '100%' }}
				transition={{ ease: 'easeOut', duration: 0.2 }}
				onAnimationComplete={handleAnimationComplete}
				onClick={(e) => e.stopPropagation()} // 모
			>
				<button
					onClick={handleClose}
					type="button"
					aria-label="close"
					className="absolute top-6 right-6"
				>
					<XIcon className="w-[24px] h-[24px]" />
				</button>
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-8">
						<img
							src={iconUrl}
							alt="app icon"
							className="w-[70px] h-[70px] object-cover rounded-lg"
						/>
						<h1 className="text-[24px] font-bold">{title}</h1>
					</div>
					<div className="flex flex-col gap-3">
						<h2 className="text-[20px] font-semibold">Description</h2>
						<p className="text-[14px] leading-[20px] text-gray-500">
							{description}
						</p>
					</div>
				</div>
				<div className="flex justify-center">
					<Link
						to={link}
						className="w-[80%] h-[40px] bg-green-500 text-white flex items-center justify-center rounded-full"
						onClick={onClickLink}
					>
						이동
					</Link>
				</div>
			</motion.div>
		</div>
	);
}
