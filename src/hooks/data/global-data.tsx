import GumroadIcon from '../../components/svgs/Gumroad';

function useGlobalData() {
	return {
		get email() {
			return 'kyle@kylejorve.com';
		},
		get recentWorkLimit() {
			return 4;
		},
		get nav() {
			return [
				{
					pageID: 'home',
					pageName: 'Home',
					url: '/',
				},
				{
					pageID: 'gallery',
					pageName: 'Gallery',
					url: '/gallery',
					showInMobileNav: true,
				},
				{
					pageID: 'cv',
					pageName: 'CV',
					url: '/cv',
					showInMobileNav: true,
				},
				{
					pageID: 'shop',
					pageName: 'Shop',
					url: 'https://www.inprnt.com/gallery/kylejorve/',
					showInMobileNav: true,
				},
				{
					pageID: 'patreon',
					pageName: 'Support My Work',
					url: 'https://www.patreon.com/kylejorve',
				},
			];
		},
		get socialIcons() {
			return {
				standard: [
					{
						name: 'artstation',
						url: 'https://www.artstation.com/kylejorve',
					},
					{
						name: 'instagram',
						url: 'https://www.instagram.com/kylejorve/',
					},
					{ name: 'tumblr', url: 'https://kylejorve.tumblr.com/' },
					{
						name: 'email',
						url: 'mailto:kyle@kylejorve.com',
					},
				],
				commerce: [
					{ name: 'patreon', url: 'https://www.patreon.com/kylejorve' },
					{
						name: 'shop',
						url: 'https://www.inprnt.com/gallery/kylejorve/',
					},
					{
						name: 'gumroad',
						icon: <GumroadIcon />,
						url: 'https://gumroad.com/kylejorve',
					},
				],
			};
		},
	};
}

export default useGlobalData;
