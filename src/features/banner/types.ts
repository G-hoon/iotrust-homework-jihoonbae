export interface BannerData {
	id: string;
	type: 'campaign' | 'product' | 'blog';
	title?: {
		ko?: string;
		en?: string;
	};
	description?: {
		ko?: string;
		en?: string;
	};
	image: {
		ko?: string;
		en?: string;
		default?: string;
	};
	link: {
		ko: string;
		en: string;
	};
	buttonText?: {
		ko?: string;
		en?: string;
	};
}
