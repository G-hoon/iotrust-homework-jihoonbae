import type { AppData } from '@/entities/app/types';
import { mockApiCall } from '@/shared/lib/api-client';

const mockAppsData: AppData[] = [
	{
		id: 'moonpay',
		name: 'MoonPay',
		iconUrl: '/src/shared/assets/images/discovery/icon_moonpay.png',
		url: 'https://buy.moonpay.com',
		description: {
			en: 'MoonPay offers simple and safer way to buy crypto instantly using VISA/Mastercard payment',
		},
		supportedNetworks: [],
		conditions: {
			languages: ['en'],
			platforms: ['ios'],
			environments: ['dev', 'stage', 'prod'],
		},
		remarks: '영어를 사용하는 아이폰 사용자에게만 노출',
	},
	{
		id: 'ftso-portal',
		name: 'FTSO Portal',
		iconUrl: '/src/shared/assets/images/discovery/icon_ftso.png',
		url: 'https://ftsoportal.com/',
		description: {
			ko: 'FTSO Portal은 사용자가 원하는 FTSO provider에 Vote Power 쉽고 빠르게 위임할 수 있는 기능을 제공하는 디센트의 서비스입니다. 사용자는 Vote Power 위임을 통해 패시브인컴(passive income)을 보상으로 받을 수 있습니다.',
			en: "FTSO Portal is a service by D'CENT to provide fast and easy way to delegate Vote Power to the user's favorite FTSO provider. By delegating Vote Power, users can earn passive income as reward.",
		},
		supportedNetworks: ['Songbird', 'Flare'],
		conditions: {
			languages: ['ko', 'en'],
			platforms: ['android', 'ios'],
			environments: ['dev', 'stage', 'prod'],
		},
	},
	{
		id: 'astar-portal',
		name: 'Astar Portal',
		iconUrl: '/src/shared/assets/images/discovery/icon_astar.png',
		url: 'https://portal.astar.network/',
		description: {
			ko: '아스타포탈은 Astar Network에서 제공하는 모든 것을 사용하기 위한 Astar Network의 공식 애플리케이션입니다.',
			en: 'Astar Portal is the official Astar Network application for using everything that Astar Network offers.',
		},
		supportedNetworks: ['Astar'],
		conditions: {
			languages: ['ko', 'en'],
			platforms: ['android', 'ios'],
			environments: ['dev', 'stage'],
		},
		remarks: 'dev/stage 환경에서만 노출',
	},
	{
		id: '1inch',
		name: '1inch',
		iconUrl: '/src/shared/assets/images/discovery/icon_1inch.png',
		url: 'https://app.1inch.io/',
		description: {
			ko: '1inch는 모든 주요 DEX 거래소의 유동성과 가격 정보를 하나의 플랫폼에서 제공합니다. 원하는 거래의 가격을 쉽게 조회하여 토큰을 교환할 수 있습니다.',
			en: "1inch is a decentralized exchange (DEX) aggregator. It's designed to roll liquidity and pricing from all major DEXes into one platform, making it easy to get the best price for the desired trade.",
		},
		supportedNetworks: ['Ethereum'],
		conditions: {
			languages: ['ko', 'en'],
			platforms: ['android', 'ios'],
			environments: ['dev', 'stage', 'prod'],
		},
	},
	{
		id: 'xdsea',
		name: 'XDSea',
		iconUrl: '/src/shared/assets/images/discovery/icon_xdsea.png',
		url: '',
		description: {
			ko: 'XDSea는 XDC 네트워크에 구축된 NFT를 사고 파는 세계 최초이자 최대 규모의 P2P 분산형 시장입니다.',
			en: "XDSea is the world's first and largest peer-to-peer decentralized marketplace for buying and selling NFTs built on the XDC Network.",
		},
		supportedNetworks: ['XDC Network'],
		conditions: {
			languages: ['ko', 'en'],
			platforms: ['android', 'ios'],
			environments: ['dev', 'stage', 'prod'],
		},
	},
	{
		id: 'compound',
		name: 'Compound',
		iconUrl: '/src/shared/assets/images/discovery/icon_compound.png',
		url: 'https://app.compound.finance/',
		description: {
			ko: 'Compound는 담보를 통해 이자를 얻거나 자산을 빌릴 수 있는 이더리움 기반의 머니 마켓 프로토콜입니다. 컴파운드의 유동성 풀에 자산을 공급하면 복리이자를 얻을 수 있습니다.',
			en: "Compound is Ethereum's algorithmic money market protocol that allows users to earn interest or borrow assets through collateral. Anyone can supply assets to Compound's liquidity pool and earn continuous compound interest immediately.",
		},
		supportedNetworks: ['Ethereum'],
		conditions: {
			languages: ['ko', 'en'],
			platforms: ['android', 'ios'],
			environments: ['dev', 'stage', 'prod'],
		},
	},
	{
		id: 'pooltogether',
		name: 'PoolTogether',
		iconUrl: '/src/shared/assets/images/discovery/icon_pooltogether.png',
		url: 'https://app.pooltogether.com/',
		description: {
			ko: 'PoolTogether는 저축을 재미있게 하는 이더리움 기반의 서비스입니다. 자산을 예치하면 "저축 티켓"을 받아 \'풀\'에 참여합니다. 각 저축 티켓은 풀에서 발생한 이자를 받을 수있는 기회를 제공하지만, 당첨되지 않더라도 손실이 없습니다.',
			en: 'PoolTogether is an Ethereum based application that makes saving money as fun as a game. You join a pool by getting a "savings ticket". Each Savings Ticket gives you a chance to win a prize, but even if you don\'t win, you keep all your money!',
		},
		supportedNetworks: ['Ethereum'],
		conditions: {
			languages: ['ko', 'en'],
			platforms: ['android', 'ios'],
			environments: ['dev', 'stage', 'prod'],
		},
	},
	{
		id: 'opensea',
		name: 'OpenSea',
		iconUrl: '/src/shared/assets/images/discovery/icon_opensea.png',
		url: 'https://opensea.io/',
		description: {
			ko: 'OpenSea는 수집품, 게임 아이템, 디지털 아트와 같은 이더리움 기반의 디지털 상품 및 디지털 자산을 거래할 수 있는 마켓 플레이스입니다.',
			en: 'OpenSea is a marketplace for digital goods, including collectibles, game items, digital art, and other digital assets backed by blockchain such as Ethereum.',
		},
		supportedNetworks: ['Ethereum', 'Polygon'],
		conditions: {
			languages: ['ko', 'en'],
			platforms: ['android', 'ios'],
			environments: ['dev', 'stage', 'prod'],
		},
	},
	{
		id: 'bluewhale',
		name: 'BlueWhale',
		iconUrl: '/src/shared/assets/images/discovery/icon_bluewhale.png',
		url: 'https://bwpm.io/',
		description: {
			ko: '블루웨일 프로토콜은 사용하기 쉬운 디파이 서비스를 지향하는 프로젝트입니다. 디파이 대시보드, DEX 어그리게이터, 자동 재예치 서비스 등 탈중앙화 금융(DeFi) 관련 서비스 제공을 통해 클레이튼 디파이 생태계 활동을 더 쉽고 효율적으로 만듭니다.',
		},
		supportedNetworks: ['Kaia'],
		conditions: {
			languages: ['ko'],
			platforms: ['android', 'ios'],
			environments: ['dev', 'stage', 'prod'],
		},
		remarks: '한국어 사용자들에게만 노출',
	},
];

const mockFavoriteAppsData: AppData[] = [
	{
		id: 'opensea',
		name: 'OpenSea',
		iconUrl: '/src/shared/assets/images/discovery/icon_opensea.png',
		url: 'https://opensea.io/',
		description: {
			ko: 'OpenSea는 수집품, 게임 아이템, 디지털 아트와 같은 이더리움 기반의 디지털 상품 및 디지털 자산을 거래할 수 있는 마켓 플레이스입니다.',
			en: 'OpenSea is a marketplace for digital goods, including collectibles, game items, digital art, and other digital assets backed by blockchain such as Ethereum.',
		},
		supportedNetworks: ['Ethereum', 'Polygon'],
		conditions: {
			languages: ['ko', 'en'],
			platforms: ['android', 'ios'],
			environments: ['dev', 'stage', 'prod'],
		},
	},
	{
		id: 'moonpay',
		name: 'MoonPay',
		iconUrl: '/src/shared/assets/images/discovery/icon_moonpay.png',
		url: 'https://buy.moonpay.com',
		description: {
			en: 'MoonPay offers simple and safer way to buy crypto instantly using VISA/Mastercard payment',
		},
		supportedNetworks: [],
		conditions: {
			languages: ['en'],
			platforms: ['ios'],
			environments: ['dev', 'stage', 'prod'],
		},
		remarks: '영어를 사용하는 아이폰 사용자에게만 노출',
	},
];

export const appsApi = {
	async getApps(filters: {
		language: string;
		platform: 'ios' | 'android';
		environment: 'dev' | 'stage' | 'prod';
	}): Promise<AppData[]> {
		const { language, platform, environment } = filters;

		const filteredData = mockAppsData.filter((app) => {
			const { conditions } = app;
			if (!conditions) return true;

			const languageMatch = conditions.languages.includes(language);
			const platformMatch = conditions.platforms.includes(platform);
			const environmentMatch = conditions.environments.includes(environment);

			return languageMatch && platformMatch && environmentMatch;
		});

		return mockApiCall('/apps', 'GET', filteredData, 500);
	},

	async getFavoriteApps(): Promise<AppData[]> {
		return mockApiCall('/apps/favorites', 'GET', mockFavoriteAppsData, 300);
	},

	async removeFavoriteApp(appId: string): Promise<void> {
		return mockApiCall(`/apps/favorites/${appId}`, 'DELETE', undefined, 200);
	},
};
