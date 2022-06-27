export const homeData = {
	get intro() {
		return {
			title: 'Kyle Jorve',
			subtitle: 'Illustration and Design',
		};
	},
	get gallery() {
		return {
			itemsLimit: 4,
			heading: 'Featured Work',
			btnText: 'View Gallery',
		};
	},
	get bio() {
		return {
			buttonText: 'See R&eacute;sum&eacute;',
			img: {
				sources: [
					{
						url: 'images/portrait/portrait-1920.jpg',
						minScreenSize: 1440,
					},
					{
						url: 'images/portrait/portrait-1440.jpg',
						minScreenSize: 1024,
					},
					{
						url: 'images/portrait/portrait-1024.jpg',
						minScreenSize: 640,
					},
				],
				mobileSource: 'images/portrait/portrait-640.jpg',
				square: 'images/portrait/portrait-square-640.jpg',
				alt: 'A photograph of Kyle Jorve smiling at the camera, a blurred scene of lush plant life behind him',
			},
		};
	},
};
