export interface AppData {
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

export interface FavoriteApp extends AppData {
	isFavorite: true;
}