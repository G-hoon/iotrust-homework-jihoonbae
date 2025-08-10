import BookMarkIcon from '@/shared/assets/icons/bookmark.svg?react';
import type { AppData } from '../types';

interface AppListItemProps {
	app: AppData;
	isFavorite?: boolean;
	onDeleteFavorite?: () => void;
}

export function AppListItem({
	app,
	isFavorite,
	onDeleteFavorite,
}: AppListItemProps) {
	return (
		<li key={app.id} className="border-b border-gray-300 py-[14px]">
			<article className="flex items-center gap-3">
				<div className="w-[70px] aspect-square rounded-lg flex items-center justify-center outline outline-gray-300 object-cover">
					<img src={app.iconUrl} alt={app.name} className="w-full h-full object-cover rounded-lg" />
				</div>
				<div className="flex flex-col gap-2 flex-1 min-w-0">
					<h3 className="text-[24px] leading-[1] font-medium text-gray-900 truncate line-clamp-1">
						{app.name}
					</h3>
					<p className="text-[15px] text-gray-500  line-clamp-1">
						{app.description.ko || app.description.en}
					</p>
				</div>
				{isFavorite && (
					<button
						type="button"
						className="flex items-center justify-center flex-col text-gray-400"
						onClick={onDeleteFavorite}
					>
						<BookMarkIcon className="w-8 h-8" />
						<span className="text-[14px]">삭제</span>
					</button>
				)}
			</article>
		</li>
	);
}
