import BookMarkIcon from '@/shared/assets/icons/bookmark.svg?react';

interface AppData {
	id: string;
	name: string;
	iconUrl: string;
	url: string;
	description: {
		ko?: string;
		en?: string;
	};
	supportedNetworks: string[];
	conditions: {
		languages: string[];
		platforms: string[];
		environments: string[];
	};
	remarks?: string;
}

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
				<div className="w-[100px] aspect-square rounded-lg flex items-center justify-center outline outline-gray-300 object-cover">
					<img src={'https://picsum.photos/600/400'} alt={app.name} />
				</div>
				<div className="flex flex-col gap-3 flex-1 min-w-0">
					<h3 className="text-[36px] leading-[1] font-medium text-gray-900 truncate line-clamp-1">
						{app.name}
					</h3>
					<p className="text-[18px] text-gray-500 leading-[22px] line-clamp-1">
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
						<span>삭제</span>
					</button>
				)}
			</article>
		</li>
	);
}
