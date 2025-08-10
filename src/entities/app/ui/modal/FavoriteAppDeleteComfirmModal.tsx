import { useTranslation } from 'react-i18next';
import { LoadingIndicator } from '@/widgets/LoadingIndicator';
import { useRemoveFavoriteApp } from '../../api/queries';

export default function FavoriteAppDeleteComfirmModal({
	appId,
	onConfirm,
	onClose,
}: {
	appId: string;
	onConfirm?: () => void;
	onClose?: () => void;
}) {
	const { t } = useTranslation();
	const removeFavoriteMutation = useRemoveFavoriteApp();

	const handleConfirm = () => {
		removeFavoriteMutation.mutate(appId);
		onConfirm?.();
	};

	return (
		<div className="w-[350px] flex flex-col h-[180px] items-center rounded-lg bg-white py-4 px-[10px]">
			<div className="border-b-2 w-full border-dashed border-gray-300 pb-3 text-center">
				<h1 className="text-[20px]">{t('delete_favorite')}</h1>
			</div>
			<p className="text-[16px] text-center py-[18px]">
				{t('delete_favorite_confirm')}
			</p>
			<div className="flex items-center justify-center w-full gap-5">
				<button
					type="button"
					className="w-[140px] h-8 rounded-lg outline outline-gray-300 text-gray-500 bg-white hover:bg-gray-400 hover:text-white disabled:opacity-50"
					onClick={onClose}
					disabled={removeFavoriteMutation.isPending}
				>
					{t('cancel')}
				</button>
				<button
					type="button"
					className="w-[140px] h-8 rounded-lg outline outline-gray-300 text-gray-500 bg-white hover:bg-gray-400 hover:text-white"
					onClick={handleConfirm}
					disabled={removeFavoriteMutation.isPending}
				>
					{removeFavoriteMutation.isPending ? (
						<LoadingIndicator size={14} />
					) : (
						t('button_confirm')
					)}
				</button>
			</div>
		</div>
	);
}
