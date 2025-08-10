import { useTranslation } from 'react-i18next';
import BookMarkIcon from '@/shared/assets/icons/bookmark.svg?react';
import type { AppData } from '../types';

interface AppListItemProps {
	app: AppData;
	isFavorite?: boolean;
	onDeleteFavorite?: () => void;
	onClick?: () => void;
}

export function AppListItem({
	app,
	isFavorite,
	onDeleteFavorite,
	onClick,
}: AppListItemProps) {
	const { t, i18n } = useTranslation();
	return (
		<div className="flex items-center justify-between border-b border-gray-300 py-[14px]">
			<button type="button" key={app.id} className="w-full" onClick={onClick}>
				<article className="flex items-center gap-3">
					<div className="w-[70px] aspect-square rounded-lg flex items-center justify-center outline outline-gray-300 object-cover">
						<img
							src={app.iconUrl}
							alt={app.name}
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col gap-2 flex-1 min-w-0 items-start">
						<h3 className="text-[24px] leading-[1] font-medium text-gray-900 truncate line-clamp-1">
							{app.name}
						</h3>
						<p className="text-[15px] text-gray-500 text-left line-clamp-1">
							{i18n.language.startsWith('ko')
								? app.description.ko
								: app.description.en}
						</p>
					</div>
				</article>
			</button>
			{isFavorite && (
				<button
					type="button"
					className="px-1 flex items-center justify-center flex-col text-gray-400"
					onClick={onDeleteFavorite}
				>
					<BookMarkIcon className="w-8 h-8" />
					<span className="text-[14px]">{t('delete')}</span>
				</button>
			)}
		</div>
	);
}
