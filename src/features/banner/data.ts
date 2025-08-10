import type { BannerData } from './types';

export const bannerData: BannerData[] = [
	{
		id: 'mapo-airdrop',
		type: 'campaign',
		title: {
			ko: 'Campaign MAPO Airdrop',
			en: 'Campaign MAPO Airdrop',
		},
		image: {
			ko: '/src/shared/assets/images/banner/banner_mapo_kr.png',
			en: '/src/shared/assets/images/banner/banner_mapo_en.png',
		},
		link: {
			ko: 'https://store-kr.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol',
			en: 'https://store.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol',
		},
	},
	{
		id: 'dcent-wallet',
		type: 'product',
		description: {
			ko: '디센트 지문인증형 지갑으로 한층 더 강화된 보안을 경험하세요!',
			en: "Enhance your security with D\'CENT biometric wallet",
		},
		image: {
			default: '/src/shared/assets/images/banner/banner_dcent.png',
		},
		link: {
			ko: 'https://store-kr.dcentwallet.com',
			en: 'https://store.dcentwallet.com',
		},
		buttonText: {
			ko: '구매하기',
			en: 'Buy Now',
		},
	},
	{
		id: 'dcent-blog',
		type: 'blog',
		description: {
			ko: '새로운 디센트 블로그를 방문하여 최신 업데이트를 먼저 확인해보세요!',
			en: "Visit the new D\'CENT Blog to explore the latest updates first!",
		},
		image: {
			default: '/src/shared/assets/images/banner/banner_blog.png',
		},
		link: {
			ko: 'https://store-kr.dcentwallet.com/blogs/post',
			en: 'https://store.dcentwallet.com/blogs/post',
		},
		buttonText: {
			ko: '확인하기',
			en: 'Explore',
		},
	},
];
