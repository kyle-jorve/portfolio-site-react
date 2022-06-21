export const portfolioData = {
	get url() {
		return '/portfolio/';
	},
	get title() {
		return 'Gallery';
	},
	get seo() {
		return {
			canon: 'portfolio',
			metaTitle: 'Gallery',
		};
	},
	get items() {
		return [
			{
				name: 'andel',
				title: 'Andel Sommer',
				content: `<blockquote class="blockquote"><p><strong>Do you know what we've lost, Pendrake? Do you even care? Warend Joring is the duke of Torencald. The trade agreements I meant to draft between our duchies would have enriched the Sommers for generations and made both us and the Jorings two of the most powerful families in Dayle. I've spent years building to this point, and in a single evening you've managed to dash it all away. And for what, Pendrake? For a gods-damned scullion? Do you know how long the damage you've done will take to repair? Generations, Pendrake. Your children and your children's children will be dead and buried long before we've heard the last echoes of this scandal.</strong></p></blockquote>
                <p><strong>Andel Sommer</strong> is the duke of Tersing and father to <a href="/portfolio/detail/?piece=pendrake">Pendrake</a> and <a href="/portfolio/detail/?piece=talis">Talis</a>. He wants nothing more than to ensure a bright future for his duchy&mdash;even if doing so requires extreme methods.</p>
                <p>Andel is, to put it mildly, not overly fond of his son, Pendrake. Even so, he tries, often in vain, to mold his heir into a worthy successor.</p>`,
				dimensions: [640, 828],
				orientation: 'center',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/',
				downloadLink: 'https://app.gumroad.com/kylejorve',
				thumbnailKey: {
					path: '../assets/portfolio/andel/portrait/kyle-jorve_andel-portrait',
					alt: 'a portrait of Andel Sommer',
				},
				detailKeys: [
					{
						path: '../assets/portfolio/andel/portrait/kyle-jorve_andel-portrait',
						alt: 'a portrait of Andel Sommer',
					},
					{
						path: '../assets/portfolio/andel/final/kyle-jorve_andel',
						alt: 'Andel Sommer stands proudly, a sheathed sword in one hand and a heavy tome in the other',
					},
					{
						path: '../assets/portfolio/andel/wip-1/kyle-jorve_andel-wip-1',
						alt: 'an in-progress image of Andel in the nude pose phase of the piece',
					},
					{
						path: '../assets/portfolio/andel/wip-2/kyle-jorve_andel-wip-2',
						alt: 'an in-progress image of Andel in which the design is fully drawn',
					},
					{
						path: '../assets/portfolio/andel/wip-3/kyle-jorve_andel-wip-3',
						alt: 'an in-progress image of Andel in which flat colors are applied to the drawing',
					},
					{
						path: '../assets/portfolio/andel/wip-4/kyle-jorve_andel-wip-4',
						alt: 'an in-progress image of Andel in which the light and shadows are painted against gray',
					},
					{
						path: '../assets/portfolio/andel/wip-5/kyle-jorve_andel-wip-5',
						alt: 'an in-progress image of Andel in which the shadows and light are colorized',
					},
					{
						path: '../assets/portfolio/andel/wip-6/kyle-jorve_andel-wip-6',
						alt: 'an in-progress image of Andel in which the painting is nearly finished',
					},
					{
						source: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XEaCkUcbfUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
					},
					{
						source: `<iframe width="560" height="315" src="https://www.youtube.com/embed/W6acBvEQXug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
					},
				],
			},
			{
				name: 'pendrake',
				title: 'Pendrake Sommer',
				content: `<blockquote class="blockquote"><p><strong>If Pendrake Sommer were half the man his father is, well, perhaps Tersing would be in a better spot. As it is, I hate to think what will come of our duchy when that boy finally becomes duke.</strong></p><cite class="cite"><small>&mdash;Captain Nils of the Auerstel Soldiery</small></cite></blockquote>
                <p><strong>Pendrake Sommer</strong> is the main protagonist of the in-progress fantasy novel, <i>Ashes of the Eidolon</i>, and twin brother to <a href="/portfolio/detail/?piece=talis">Talis Sommer</a>.</p>
                <p>Pendrake Sommer is less of a fighter than his sister, and far more of a romantic. Some say he would happily sell his duchy for the object of his affection, were he given the chance.</p>`,
				dimensions: [640, 854],
				orientation: 'center',
				featured: false,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/',
				downloadLink: 'https://app.gumroad.com/kylejorve',
				thumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-480.jpg',
							minScreenSize: 1024,
						},
						{
							url: '/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-512.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-320.jpg',
					alt: 'a portrait of Pendrake Sommer',
					mediaIndex: 0,
				},
				newThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-1024.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-640.jpg',
					alt: 'a portrait of Pendrake Sommer',
					mediaIndex: 0,
				},
				featuredThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-640.jpg',
							minScreenSize: 1440,
						},
						{
							url: '/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-320.jpg',
					alt: 'a portrait of Pendrake Sommer',
					mediaIndex: 0,
				},
				detailThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-640.jpg',
					alt: 'a portrait of Pendrake Sommer',
				},
				media: [
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrake/portrait/kyle-jorve_pendrake-portrait-640.jpg',
						alt: 'a portrait of Pendrake Sommer',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrake/final/kyle-jorve_pendrake-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrake/final/kyle-jorve_pendrake-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrake/final/kyle-jorve_pendrake-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrake/final/kyle-jorve_pendrake-640.jpg',
						alt: 'Pendrake turns with a puzzled expresion, gripping his saber',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrake/wip-1/kyle-jorve_pendrake-wip-1-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrake/wip-1/kyle-jorve_pendrake-wip-1-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrake/wip-1/kyle-jorve_pendrake-wip-1-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrake/wip-1/kyle-jorve_pendrake-wip-1-640.jpg',
						alt: 'an in-progress image of Pendrake in the nude pose phase of the piece',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrake/wip-2/kyle-jorve_pendrake-wip-2-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrake/wip-2/kyle-jorve_pendrake-wip-2-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrake/wip-2/kyle-jorve_pendrake-wip-2-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrake/wip-2/kyle-jorve_pendrake-wip-2-640.jpg',
						alt: 'an in-progress image of Pendrake in which the design is fully drawn',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrake/wip-3/kyle-jorve_pendrake-wip-3-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrake/wip-3/kyle-jorve_pendrake-wip-3-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrake/wip-3/kyle-jorve_pendrake-wip-3-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrake/wip-3/kyle-jorve_pendrake-wip-3-640.jpg',
						alt: 'an in-progress image of Pendrake in which flat colors are applied to the drawing',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrake/wip-4/kyle-jorve_pendrake-wip-4-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrake/wip-4/kyle-jorve_pendrake-wip-4-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrake/wip-4/kyle-jorve_pendrake-wip-4-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrake/wip-4/kyle-jorve_pendrake-wip-4-640.jpg',
						alt: 'an in-progress image of Pendrake in which the light and shadows are painted against gray',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrake/wip-5/kyle-jorve_pendrake-wip-5-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrake/wip-5/kyle-jorve_pendrake-wip-5-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrake/wip-5/kyle-jorve_pendrake-wip-5-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrake/wip-5/kyle-jorve_pendrake-wip-5-640.jpg',
						alt: 'an in-progress image of Pendrake in which the shadows and light are colorized',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrake/wip-6/kyle-jorve_pendrake-wip-6-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrake/wip-6/kyle-jorve_pendrake-wip-6-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrake/wip-6/kyle-jorve_pendrake-wip-6-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrake/wip-6/kyle-jorve_pendrake-wip-6-640.jpg',
						alt: 'an in-progress image of Pendrake in which the painting is nearly finished',
					},
					{
						source: `<iframe width="560" height="315" src="https://www.youtube.com/embed/id079cuwXfE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
						bgIndex: 0,
						video: true,
					},
					{
						source: `<iframe width="560" height="315" src="https://www.youtube.com/embed/CetjOlb5zWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
						bgIndex: 0,
						video: true,
					},
				],
			},
			{
				name: 'talis',
				title: 'Talis Sommer',
				content: `<blockquote class="blockquote"><p><strong>The lady of Tersing? I wouldn't call her a lady so much as a force of nature never to be trifled with. Every man who crosses blades with her lives to regret it—that is, if they live through the encounter at all.</strong></p><cite class="cite"><small>&mdash;Howle of the Auerstel Castle guard</small></cite></blockquote><p><strong>Talis Sommer</strong> is the twin sister of the <a href="/portfolio/detail/?piece=pendrake">main protagonist</a> in the story I'm currently writing, <i>Ashes of the Eidolon</i>. She is the lady of the Tersing duchy, daughter of the duke and sister to the heir of the dukedom.</p>
                <p>Unlike her noble contemporaries, Talis prefers to spend her time honing her skills with a saber and bow. As such, she's earned the admiration and respect of her peers in the soldiery.</p>
                <p>In stark contrast with her brother, Talis is highly disciplined and dedicates herself fully to everything she pursues. Some have even speculated that she should be the heir instead of her brother.</p>`,
				dimensions: [640, 854],
				orientation: 'center',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/',
				downloadLink: 'https://app.gumroad.com/kylejorve',
				thumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-480.jpg',
							minScreenSize: 1024,
						},
						{
							url: '/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-512.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-320.jpg',
					alt: 'a portrait of Talis Sommer',
					mediaIndex: 0,
				},
				newThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-1024.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-640.jpg',
					alt: 'a portrait of Talis Sommer',
					mediaIndex: 0,
				},
				featuredThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-640.jpg',
							minScreenSize: 1440,
						},
						{
							url: '/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-320.jpg',
					alt: 'a portrait of Talis Sommer',
					mediaIndex: 0,
				},
				detailThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-640.jpg',
					alt: 'a portrait of Talis Sommer',
				},
				media: [
					{
						sources: [
							{
								url: '/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/talis/portrait/kyle-jorve_talis-portrait-640.jpg',
						alt: 'a portrait of Talis Sommer',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/talis/final/kyle-jorve_talis-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/talis/final/kyle-jorve_talis-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/talis/final/kyle-jorve_talis-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource: '/dist/media/portfolio/talis/final/kyle-jorve_talis-640.jpg',
						alt: 'Talis stands with an amused expression, her hand resting on the saber mounted to her belt',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/talis/wip-1/kyle-jorve_talis-portrait-wip-1-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/talis/wip-1/kyle-jorve_talis-portrait-wip-1-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/talis/wip-1/kyle-jorve_talis-portrait-wip-1-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/talis/wip-1/kyle-jorve_talis-portrait-wip-1-640.jpg',
						alt: 'an in-progress image of Talis in the line art phase of the piece',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/talis/wip-2/kyle-jorve_talis-portrait-wip-2-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/talis/wip-2/kyle-jorve_talis-portrait-wip-2-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/talis/wip-2/kyle-jorve_talis-portrait-wip-2-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/talis/wip-2/kyle-jorve_talis-portrait-wip-2-640.jpg',
						alt: 'an in-progress image of Talis in which flat, local colors are established',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/talis/wip-3/kyle-jorve_talis-portrait-wip-3-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/talis/wip-3/kyle-jorve_talis-portrait-wip-3-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/talis/wip-3/kyle-jorve_talis-portrait-wip-3-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/talis/wip-3/kyle-jorve_talis-portrait-wip-3-640.jpg',
						alt: 'an in-progress image of Talis in which light sources and ambient occlusion are established',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/talis/wip-4/kyle-jorve_talis-portrait-wip-4-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/talis/wip-4/kyle-jorve_talis-portrait-wip-4-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/talis/wip-4/kyle-jorve_talis-portrait-wip-4-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/talis/wip-4/kyle-jorve_talis-portrait-wip-4-640.jpg',
						alt: 'an in-progress image of Talis in which the light and shadows are colorized',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/talis/wip-5/kyle-jorve_talis-portrait-wip-5-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/talis/wip-5/kyle-jorve_talis-portrait-wip-5-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/talis/wip-5/kyle-jorve_talis-portrait-wip-5-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/talis/wip-5/kyle-jorve_talis-portrait-wip-5-640.jpg',
						alt: 'an in-progress image of Talis in which the painting is nearly complete',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/talis/wip-7/kyle-jorve_talis-portrait-wip-7-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/talis/wip-7/kyle-jorve_talis-portrait-wip-7-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/talis/wip-7/kyle-jorve_talis-portrait-wip-7-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/talis/wip-7/kyle-jorve_talis-portrait-wip-7-640.jpg',
						alt: 'an in-progress image of Talis in which the final details have been added',
					},
					{
						source: `<iframe width="560" height="315" src="https://www.youtube.com/embed/FooxBhjNG3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
						bgIndex: 0,
						video: true,
					},
					{
						source: `<iframe width="560" height="315" src="https://www.youtube.com/embed/M8TVkpTIlI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
						bgIndex: 0,
						video: true,
					},
				],
			},
			{
				name: 'cargha',
				title: 'Cargha Bezamik',
				content: `<blockquote class="blockquote"><p><strong>I was only a thief back then, part of a guild of them, living on a little Sylranian island called <i>Dorokilson</i>. In Daylish you might call it the Island of Holes. It was an apt name, for whoever came through there, if they'd anything worth losing, we made sure it was lost&mdash;eaten by the Island.</strong></p><cite class="cite"><small>&mdash;Cargha Bezamik</small></cite></blockquote><p><strong>Cargha Bezamik</strong> is employed as a spy and assassin for the antagonist in an in-progress fantasy novel. As with much else in this story, Cargha is not quite what he seems at first, and his motivations are often nebulous.</p>`,
				dimensions: [640, 848],
				orientation: 'center',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/',
				downloadLink: 'https://app.gumroad.com/kylejorve',
				thumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/cargha/portrait/kyle-jorve_cargha-portrait-480.jpg',
							minScreenSize: 1024,
						},
						{
							url: '/dist/media/portfolio/cargha/portrait/kyle-jorve_cargha-portrait-512.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/cargha/portrait/kyle-jorve_cargha-portrait-320.jpg',
					alt: 'a portrait of Cargha, featuring his scarred-over left eye and the tattoo that covers it',
					mediaIndex: 0,
				},
				featuredThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/cargha/portrait/kyle-jorve_cargha-portrait-640.jpg',
							minScreenSize: 1440,
						},
						{
							url: '/dist/media/portfolio/cargha/portrait/kyle-jorve_cargha-portrait-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/cargha/portrait/kyle-jorve_cargha-portrait-320.jpg',
					alt: 'a portrait of Cargha, featuring his scarred-over left eye and the tattoo that covers it',
					mediaIndex: 0,
				},
				detailThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/cargha/portrait/kyle-jorve_cargha-portrait-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/cargha/portrait/kyle-jorve_cargha-portrait-640.jpg',
					alt: 'a portrait of Cargha, featuring his scarred-over left eye and the tattoo that covers it',
				},
				media: [
					{
						sources: [
							{
								url: '/dist/media/portfolio/cargha/portrait/kyle-jorve_cargha-portrait-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/cargha/portrait/kyle-jorve_cargha-portrait-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/cargha/portrait/kyle-jorve_cargha-portrait-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/cargha/portrait/kyle-jorve_cargha-portrait-640.jpg',
						alt: 'a portrait of Cargha, featuring his scarred-over left eye and the tattoo that covers it',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/cargha/final/kyle-jorve_cargha-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/cargha/final/kyle-jorve_cargha-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/cargha/final/kyle-jorve_cargha-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/cargha/final/kyle-jorve_cargha-640.jpg',
						alt: 'Cargha stands stoically holding a dagger in one hand and a khopesh in the other',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/cargha/wip-1/kyle-jorve_cargha-wip-1-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/cargha/wip-1/kyle-jorve_cargha-wip-1-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/cargha/wip-1/kyle-jorve_cargha-wip-1-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/cargha/wip-1/kyle-jorve_cargha-wip-1-640.jpg',
						alt: 'an in-progress image of Cargha in the anatomy phase of the piece',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/cargha/wip-2/kyle-jorve_cargha-wip-2-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/cargha/wip-2/kyle-jorve_cargha-wip-2-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/cargha/wip-2/kyle-jorve_cargha-wip-2-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/cargha/wip-2/kyle-jorve_cargha-wip-2-640.jpg',
						alt: 'an in-progress image of Cargha after he has been fully designed and the final linework is set',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/cargha/wip-3/kyle-jorve_cargha-wip-3-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/cargha/wip-3/kyle-jorve_cargha-wip-3-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/cargha/wip-3/kyle-jorve_cargha-wip-3-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/cargha/wip-3/kyle-jorve_cargha-wip-3-640.jpg',
						alt: 'an in-progress image of Cargha with flat colors',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/cargha/wip-4/kyle-jorve_cargha-wip-4-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/cargha/wip-4/kyle-jorve_cargha-wip-4-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/cargha/wip-4/kyle-jorve_cargha-wip-4-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/cargha/wip-4/kyle-jorve_cargha-wip-4-640.jpg',
						alt: 'an in-progress image of Cargha in color, light and shadow added',
					},
					{
						source: `<iframe src="https://www.youtube.com/embed/_FzmNukhxFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
						bgIndex: 0,
						video: true,
					},
				],
			},
			{
				name: 'crow',
				title: 'Crow',
				content: `<blockquote class="blockquote"><p><strong>Have you met the boy? I\'d sooner take my chances outside the Ark than match blades with him. Crow\'s his name, killing\'s his profession. And be damned certain, he\'s a professional.</strong><cite class="cite"><small>&mdash;Councillor Genteid, Valkyrie</small></cite></p></blockquote><p>Yet another iteration of my original character, <a href="/portfolio/detail/?piece=crows">Crow</a>.</p><p>Crow is a professional assassin and the protagonist of a science fiction story in progress called <strong><i>Post-Autumn</i></strong>.</p><p>In it, mankind has been forced by a cataclysmic event to live in domed cities called Arks. When tensions between Arks escalate, having no means to do battle out in the uninhabitable wastelands between cities, governments must quell their conflicts by more surgical means.</p>`,
				dimensions: [640, 853],
				orientation: 'top',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/crow/',
				downloadLink: 'https://gumroad.com/l/fTSADI',
				thumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/crow/final/kyle-jorve_crow-480.jpg',
							minScreenSize: 1024,
						},
						{
							url: '/dist/media/portfolio/crow/final/kyle-jorve_crow-512.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/crow/final/kyle-jorve_crow-320.jpg',
					alt: 'Crow stands against a wall smoking an e-cigarette, his mechanical right eye glowing',
					mediaIndex: 0,
				},
				featuredThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/crow/final/kyle-jorve_crow-640.jpg',
							minScreenSize: 1440,
						},
						{
							url: '/dist/media/portfolio/crow/final/kyle-jorve_crow-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/crow/final/kyle-jorve_crow-320.jpg',
					alt: 'Crow stands against a wall smoking an e-cigarette, his mechanical right eye glowing',
					mediaIndex: 0,
				},
				detailThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/crow/final/kyle-jorve_crow-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/crow/final/kyle-jorve_crow-640.jpg',
					alt: 'Crow stands against a wall smoking an e-cigarette, his mechanical right eye glowing',
				},
				media: [
					{
						sources: [
							{
								url: '/dist/media/portfolio/crow/final/kyle-jorve_crow-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/crow/final/kyle-jorve_crow-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/crow/final/kyle-jorve_crow-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource: '/dist/media/portfolio/crow/final/kyle-jorve_crow-640.jpg',
						alt: 'Crow stands against a wall smoking an e-cigarette, his mechanical right eye glowing',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/crow/detail-1/kyle-jorve_crow-detail-1-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/crow/detail-1/kyle-jorve_crow-detail-1-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/crow/detail-1/kyle-jorve_crow-detail-1-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/crow/detail-1/kyle-jorve_crow-detail-1-640.jpg',
						alt: "a detailed crop showing Crow's face",
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/crow/detail-2/kyle-jorve_crow-detail-2-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/crow/detail-2/kyle-jorve_crow-detail-2-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/crow/detail-2/kyle-jorve_crow-detail-2-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/crow/detail-2/kyle-jorve_crow-detail-2-640.jpg',
						alt: 'a detail crop showing the upper portion of the illustration',
					},
					{
						source: `<iframe src="https://www.youtube.com/embed/oRzRz7eev2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
						bgIndex: 0,
						video: true,
					},
				],
			},
			{
				name: 'tyene',
				title: 'Tyene',
				content: `<p>A commission of a <i>Dungeons and Dragons</i> half-elf ranger character.</p>`,
				dimensions: [640, 986],
				orientation: 'top',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/tyene/',
				thumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/tyene/final/kyle-jorve_tyene-480.jpg',
							minScreenSize: 1024,
						},
						{
							url: '/dist/media/portfolio/tyene/final/kyle-jorve_tyene-512.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/tyene/final/kyle-jorve_tyene-320.jpg',
					alt: 'Tyene, a half-elf ranger, stands in the middle of a forest, a pond at her back, looking at and reaching up toward a pixie',
					mediaIndex: 0,
				},
				featuredThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/tyene/final/kyle-jorve_tyene-640.jpg',
							minScreenSize: 1440,
						},
						{
							url: '/dist/media/portfolio/tyene/final/kyle-jorve_tyene-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/tyene/final/kyle-jorve_tyene-320.jpg',
					alt: 'Tyene, a half-elf ranger, stands in the middle of a forest, a pond at her back, looking at and reaching up toward a pixie',
					mediaIndex: 0,
				},
				detailThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/tyene/final/kyle-jorve_tyene-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/tyene/final/kyle-jorve_tyene-640.jpg',
					alt: 'Tyene, a half-elf ranger, stands in the middle of a forest, a pond at her back, looking at and reaching up toward a pixie',
				},
				media: [
					{
						sources: [
							{
								url: '/dist/media/portfolio/tyene/final/kyle-jorve_tyene-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/tyene/final/kyle-jorve_tyene-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/tyene/final/kyle-jorve_tyene-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource: '/dist/media/portfolio/tyene/final/kyle-jorve_tyene-640.jpg',
						alt: 'Tyene, a half-elf ranger, stands in the middle of a forest, a pond at her back, looking at and reaching up toward a pixie',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/tyene/detail-1/kyle-jorve_tyene-detail-1-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/tyene/detail-1/kyle-jorve_tyene-detail-1-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/tyene/detail-1/kyle-jorve_tyene-detail-1-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/tyene/detail-1/kyle-jorve_tyene-detail-1-640.jpg',
						alt: 'a detail crop showing the upper portion of the illustration',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/tyene/detail-2/kyle-jorve_tyene-detail-2-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/tyene/detail-2/kyle-jorve_tyene-detail-2-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/tyene/detail-2/kyle-jorve_tyene-detail-2-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/tyene/detail-2/kyle-jorve_tyene-detail-2-640.jpg',
						alt: "a detail crop showing a close-up of Tyene's face",
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/tyene/detail-3/kyle-jorve_tyene-detail-3-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/tyene/detail-3/kyle-jorve_tyene-detail-3-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/tyene/detail-3/kyle-jorve_tyene-detail-3-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/tyene/detail-3/kyle-jorve_tyene-detail-3-640.jpg',
						alt: 'a detail crop showing a close-up of some lush greenery',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/tyene/detail-4/kyle-jorve_tyene-detail-4-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/tyene/detail-4/kyle-jorve_tyene-detail-4-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/tyene/detail-4/kyle-jorve_tyene-detail-4-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/tyene/detail-4/kyle-jorve_tyene-detail-4-640.jpg',
						alt: 'a detail crop showing the waterfall that feeds the pond',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/tyene/detail-5/kyle-jorve_tyene-detail-5-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/tyene/detail-5/kyle-jorve_tyene-detail-5-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/tyene/detail-5/kyle-jorve_tyene-detail-5-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/tyene/detail-5/kyle-jorve_tyene-detail-5-640.jpg',
						alt: "a detail crop showing the tools wrapped around Tyene's waist",
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/tyene/detail-6/kyle-jorve_tyene-detail-6-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/tyene/detail-6/kyle-jorve_tyene-detail-6-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/tyene/detail-6/kyle-jorve_tyene-detail-6-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/tyene/detail-6/kyle-jorve_tyene-detail-6-640.jpg',
						alt: 'a detail crop showing a close-up of the pixie',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/tyene/wip-1/kyle-jorve_tyene-wip-1-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/tyene/wip-1/kyle-jorve_tyene-wip-1-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/tyene/wip-1/kyle-jorve_tyene-wip-1-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/tyene/wip-1/kyle-jorve_tyene-wip-1-640.jpg',
						alt: 'an in-progress image showing various iterations of Tyene in the conception phase',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/tyene/wip-2/kyle-jorve_tyene-wip-2-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/tyene/wip-2/kyle-jorve_tyene-wip-2-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/tyene/wip-2/kyle-jorve_tyene-wip-2-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/tyene/wip-2/kyle-jorve_tyene-wip-2-640.jpg',
						alt: 'an in-progress image showing various iterations of Tyene in the conception phase',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/tyene/wip-3/kyle-jorve_tyene-wip-3-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/tyene/wip-3/kyle-jorve_tyene-wip-3-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/tyene/wip-3/kyle-jorve_tyene-wip-3-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/tyene/wip-3/kyle-jorve_tyene-wip-3-640.jpg',
						alt: "an in-progress image showing various iterations of Tyene's facial markings",
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/tyene/wip-4/kyle-jorve_tyene-wip-4-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/tyene/wip-4/kyle-jorve_tyene-wip-4-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/tyene/wip-4/kyle-jorve_tyene-wip-4-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/tyene/wip-4/kyle-jorve_tyene-wip-4-640.jpg',
						alt: "an in-progress image showing various iterations of Tyene's dreadlocked hair",
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/tyene/wip-5/kyle-jorve_tyene-wip-5-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/tyene/wip-5/kyle-jorve_tyene-wip-5-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/tyene/wip-5/kyle-jorve_tyene-wip-5-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/tyene/wip-5/kyle-jorve_tyene-wip-5-640.jpg',
						alt: "some concept sketches for Tyene's bow",
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/tyene/wip-6/kyle-jorve_tyene-wip-6-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/tyene/wip-6/kyle-jorve_tyene-wip-6-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/tyene/wip-6/kyle-jorve_tyene-wip-6-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/tyene/wip-6/kyle-jorve_tyene-wip-6-640.jpg',
						alt: 'an early sketch of the upper half of Tyene',
					},
				],
			},
			{
				name: 'pendrakes-chamber',
				title: "Pendrake's Chamber",
				content: `<blockquote class="blockquote"><p><strong>I was seventeen, by all means still a boy, yet I was possessed of the sort of steel-hard conviction only youth can muster that I was as good as a man grown. I was entirely given to my appetites, boisterous and inconsiderate, and a downright embarrassment to my father and his court. I was, in other words, a young Daylish noble. And, like many young Daylish nobles, I was hopelessly, stupidly, recklessly in love.</strong><cite class="cite"><small>&mdash;Pendrake Sommer, Duke of Tersing</small></cite></p></blockquote>`,
				dimensions: [640, 640],
				orientation: 'center',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/pendrakes-chamber/',
				downloadLink: 'https://gumroad.com/l/mQzix',
				thumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1-480.jpg',
							minScreenSize: 1024,
						},
						{
							url: '/dist/media/portfolio/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1-512.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1-320.jpg',
					alt: 'a close-up crop of Pendrake and Kyra lying in bed together',
					mediaIndex: 1,
				},
				featuredThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1-640.jpg',
							minScreenSize: 1440,
						},
						{
							url: '/dist/media/portfolio/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1-320.jpg',
					alt: 'a close-up crop of Pendrake and Kyra lying in bed together',
					mediaIndex: 1,
				},
				detailThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1-640.jpg',
					alt: 'a close-up crop of Pendrake and Kyra lying in bed together',
				},
				media: [
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrakes-chamber/final/kyle-jorve_pendrakes-chamber-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrakes-chamber/final/kyle-jorve_pendrakes-chamber-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrakes-chamber/final/kyle-jorve_pendrakes-chamber-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrakes-chamber/final/kyle-jorve_pendrakes-chamber-640.jpg',
						alt: "the full image; Pendrake's bedroom in isometric perspective",
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1-640.jpg',
						alt: 'a close-up crop of Pendrake and Kyra lying in bed together',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-2/kyle-jorve_pendrakes-chamber-detail-2-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-2/kyle-jorve_pendrakes-chamber-detail-2-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-2/kyle-jorve_pendrakes-chamber-detail-2-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrakes-chamber/detail-2/kyle-jorve_pendrakes-chamber-detail-2-640.jpg',
						alt: "a close-up crop of the vanity in the corner of Pendrake's room",
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-3/kyle-jorve_pendrakes-chamber-detail-3-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-3/kyle-jorve_pendrakes-chamber-detail-3-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-3/kyle-jorve_pendrakes-chamber-detail-3-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrakes-chamber/detail-3/kyle-jorve_pendrakes-chamber-detail-3-640.jpg',
						alt: 'a close-up crop of the hearth, from which a fire illuminates the entire room',
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-4/kyle-jorve_pendrakes-chamber-detail-4-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-4/kyle-jorve_pendrakes-chamber-detail-4-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-4/kyle-jorve_pendrakes-chamber-detail-4-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrakes-chamber/detail-4/kyle-jorve_pendrakes-chamber-detail-4-640.jpg',
						alt: "a close-up crop of the storage chest at the foot of Pendrake's bed; a saber rests beside it",
					},
					{
						sources: [
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-5/kyle-jorve_pendrakes-chamber-detail-5-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-5/kyle-jorve_pendrakes-chamber-detail-5-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/pendrakes-chamber/detail-5/kyle-jorve_pendrakes-chamber-detail-5-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/pendrakes-chamber/detail-5/kyle-jorve_pendrakes-chamber-detail-5-640.jpg',
						alt: 'Pendrake and Kyra doze together in bed; various props are scattered over the neighboring nighstand',
					},
				],
			},
			{
				name: 'berned',
				title: 'Berned',
				content: `<blockquote class="blockquote"><p><strong>I wouldn\'t call him a kind man, but he\'s loyal. As soon slug you in the face as laugh at your jesting. All depends on which side of him you lie on. I wouldn\'t want to be on his bad side, though. Fair lot of trouble follows those what fall on his bad side.</strong><cite class="cite"><small>&mdash;Malder, Foothills Tavern</small></cite></p></blockquote><p>Berned is Auerstel Town\'s constable&mdash;at times of help, at times an obstacle, and sometimes, when he feels like it, a downright villain.</p><p>He plays a critical role in the <strong><i>Ignoble Blood</i></strong> series, which is a fantasy story in progress. In it, Berned apprehends <a href="/portfolio/detail/?piece=sol">Sol Ferro</a> and charges her with the crime of murdering <a href="/portfolio/detail/?piece=becoming-eidolon">Luna</a>, a series protagonist, who at this point in the story has gone strangely missing without a trace.</p>`,
				dimensions: [640, 853],
				orientation: 'center',
				featured: false,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/berned/',
				downloadLink: 'https://gumroad.com/l/JKDSd',
				thumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/berned/kyle-jorve_berned-480.jpg',
							minScreenSize: 1024,
						},
						{
							url: '/dist/media/portfolio/berned/kyle-jorve_berned-512.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/berned/kyle-jorve_berned-320.jpg',
					alt: 'Berned stands before the circular, red door to his house',
					mediaIndex: 0,
				},
				featuredThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/berned/kyle-jorve_berned-640.jpg',
							minScreenSize: 1440,
						},
						{
							url: '/dist/media/portfolio/berned/kyle-jorve_berned-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/berned/kyle-jorve_berned-320.jpg',
					alt: 'Berned stands before the circular, red door to his house',
					mediaIndex: 0,
				},
				detailThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/berned/kyle-jorve_berned-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/berned/kyle-jorve_berned-640.jpg',
					alt: 'Berned stands before the circular, red door to his house',
				},
				media: [
					{
						sources: [
							{
								url: '/dist/media/portfolio/berned/kyle-jorve_berned-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/berned/kyle-jorve_berned-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/berned/kyle-jorve_berned-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource: '/dist/media/portfolio/berned/kyle-jorve_berned-640.jpg',
						alt: 'Berned stands before the circular, red door to his house',
					},
				],
			},
			{
				name: 'olfactory',
				title: 'Olfactory',
				content: `<p><strong>I have no idea why, but I love doing portraits of aliens.</strong></p><p>This is a creature that lives on a planet whose atmosphere is so thick that the sense of sight never evolved, so instead this species developed extra-sensitive olfactory senses. Threads stretching over the holes in its "face" protect against contaminants as it inhales.</p>`,
				dimensions: [640, 896],
				orientation: 'center',
				featured: false,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/olfactory/',
				downloadLink: 'https://gumroad.com/l/KMcGj',
				thumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/olfactory/kyle-jorve_olfactory-480.jpg',
							minScreenSize: 1024,
						},
						{
							url: '/dist/media/portfolio/olfactory/kyle-jorve_olfactory-512.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/olfactory/kyle-jorve_olfactory-320.jpg',
					alt: 'an alien breathes in the thick atmoshpere of its home planet through a mouth overgrown with filtering cilia',
					mediaIndex: 0,
				},
				featuredThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/olfactory/kyle-jorve_olfactory-640.jpg',
							minScreenSize: 1440,
						},
						{
							url: '/dist/media/portfolio/olfactory/kyle-jorve_olfactory-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/olfactory/kyle-jorve_olfactory-320.jpg',
					alt: 'an alien breathes in the thick atmoshpere of its home planet through a mouth overgrown with filtering cilia',
					mediaIndex: 0,
				},
				detailThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/olfactory/kyle-jorve_olfactory-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/olfactory/kyle-jorve_olfactory-640.jpg',
					alt: 'an alien breathes in the thick atmoshpere of its home planet through a mouth overgrown with filtering cilia',
				},
				media: [
					{
						sources: [
							{
								url: '/dist/media/portfolio/olfactory/kyle-jorve_olfactory-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/olfactory/kyle-jorve_olfactory-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/olfactory/kyle-jorve_olfactory-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/olfactory/kyle-jorve_olfactory-640.jpg',
						alt: 'an alien breathes in the thick atmoshpere of its home planet through a mouth overgrown with filtering cilia',
					},
				],
			},
			{
				name: 'becoming-eidolon',
				title: 'Becoming Eidolon',
				content: `<blockquote class="blockquote"><p><strong>Fennory is gone, Bethany. Call him dead, and leave it at that. Mourn him as if you'd seen his body and known the stillness of it. There will be no peace for you until you do.</strong><cite class="cite"><small>&mdash;Pendrake Sommer, Duke of Tersing</small></cite></p></blockquote><p>The character depicted here is a protagonist of the <strong><i>Ignoble Blood</i></strong> series, which is a work of fantasy in progress. Fennory is his real name, but by this point in the story he goes by the alias of Luna, as he is hiding from a powerful enemy.</p><p>A darker, more malevolent force whisks him away, however, forcing those closest to him into a desperate search, while outside their quiet town a greater threat, once thought defeated, rises from the ashes.</p>`,
				dimensions: [640, 1252],
				orientation: 'center',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/becoming-eidolon/',
				downloadLink: 'https://gumroad.com/l/UluBo',
				thumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/becoming-eidolon/kyle-jorve_becoming-eidolon-480.jpg',
							minScreenSize: 1024,
						},
						{
							url: '/dist/media/portfolio/becoming-eidolon/kyle-jorve_becoming-eidolon-512.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/becoming-eidolon/kyle-jorve_becoming-eidolon-320.jpg',
					alt: 'Luna stands naked beneath the symbol of the Order of the Eidolon--a dark star shedding rays of shadow over a darkened moon--crystalline growths covering his body as his extremities fade from existence',
					mediaIndex: 0,
				},
				featuredThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/becoming-eidolon/kyle-jorve_becoming-eidolon-640.jpg',
							minScreenSize: 1440,
						},
						{
							url: '/dist/media/portfolio/becoming-eidolon/kyle-jorve_becoming-eidolon-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/becoming-eidolon/kyle-jorve_becoming-eidolon-320.jpg',
					alt: 'Luna stands naked beneath the symbol of the Order of the Eidolon--a dark star shedding rays of shadow over a darkened moon--crystalline growths covering his body as his extremities fade from existence',
					mediaIndex: 0,
				},
				detailThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/becoming-eidolon/kyle-jorve_becoming-eidolon-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/becoming-eidolon/kyle-jorve_becoming-eidolon-640.jpg',
					alt: 'Luna stands naked beneath the symbol of the Order of the Eidolon--a dark star shedding rays of shadow over a darkened moon--crystalline growths covering his body as his extremities fade from existence',
				},
				media: [
					{
						sources: [
							{
								url: '/dist/media/portfolio/becoming-eidolon/kyle-jorve_becoming-eidolon-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/becoming-eidolon/kyle-jorve_becoming-eidolon-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/becoming-eidolon/kyle-jorve_becoming-eidolon-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/becoming-eidolon/kyle-jorve_becoming-eidolon-640.jpg',
						alt: 'Luna stands naked beneath the symbol of the Order of the Eidolon--a dark star shedding rays of shadow over a darkened moon--crystalline growths covering his body as his extremities fade from existence',
					},
					{
						source: '<iframe src="https://www.youtube.com/embed/PxoZ4MjlxOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
						bgIndex: 0,
						video: true,
					},
				],
			},
			{
				name: 'crows',
				title: 'Crows',
				content: `<blockquote class="blockquote"><p><strong>The Ravens still exist, if you can believe it. Though they take a different form today. Different stories tell it different ways, but I prefer to believe they linger as men now, having forgotten all they once were.</strong><cite class="cite"><small>&mdash;Eden, The Sunken Valley</small></cite></p></blockquote><p><a href="/portfolio/detail/?piece=crow">Crow</a> is a professional assassin and the protagonist of an in-progress science fiction story called <strong><i>Post-Autumn</i></strong>.</p><p>In it, mankind has been forced by a cataclysmic event to live in domed cities called Arks. When tensions between Arks escalate, having no means to do battle out in the uninhabitable wastelands between cities, governments must quell their conflicts by more surgical means.</p>`,
				dimensions: [640, 1047],
				orientation: 'top',
				featured: false,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/crows/',
				downloadLink: 'https://gumroad.com/l/itBYi',
				thumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/crows/kyle-jorve_crows-480.jpg',
							minScreenSize: 1024,
						},
						{
							url: '/dist/media/portfolio/crows/kyle-jorve_crows-512.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/crows/kyle-jorve_crows-320.jpg',
					alt: 'Crow stands before a cluster of dead ravens as more fall from the sky; the raven immediately before him is white',
					mediaIndex: 0,
				},
				featuredThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/crows/kyle-jorve_crows-640.jpg',
							minScreenSize: 1440,
						},
						{
							url: '/dist/media/portfolio/crows/kyle-jorve_crows-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/crows/kyle-jorve_crows-320.jpg',
					alt: 'Crow stands before a cluster of dead ravens as more fall from the sky; the raven immediately before him is white',
					mediaIndex: 0,
				},
				detailThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/crows/kyle-jorve_crows-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/crows/kyle-jorve_crows-640.jpg',
					alt: 'Crow stands before a cluster of dead ravens as more fall from the sky; the raven immediately before him is white',
				},
				media: [
					{
						sources: [
							{
								url: '/dist/media/portfolio/crows/kyle-jorve_crows-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/crows/kyle-jorve_crows-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/crows/kyle-jorve_crows-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource: '/dist/media/portfolio/crows/kyle-jorve_crows-640.jpg',
						alt: 'Crow stands before a cluster of dead ravens as more fall from the sky; the raven immediately before him is white',
					},
				],
			},
			{
				name: 'sol',
				title: 'Sol',
				content: `<blockquote class="blockquote"><p><strong>More than one reason they call her the Girl in Black. They say she\'s a witch, what can talk to the dead, spirits and the like. She\'ll not be coming back to this town, no. If she does, there\'ll be trouble, and from more than just me.</strong><cite class="cite"><small>&mdash;Junas</small></cite></p></blockquote><p>Sol is a mysterious helper in the <strong><i>Ignoble Blood</i></strong> series, which is a work of fantasy in progress. She appears at a strange time to help one of the story\'s protagonists locate her missing husband, <a href="/portfolio/detail/?piece=becoming-eidolon">Luna</a>, who has disappeared without a trace.</p>`,
				dimensions: [640, 1158],
				orientation: 'top',
				featured: false,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/sol/',
				downloadLink: 'https://gumroad.com/l/ZCzd',
				thumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/sol/kyle-jorve_sol-480.jpg',
							minScreenSize: 1024,
						},
						{
							url: '/dist/media/portfolio/sol/kyle-jorve_sol-512.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/sol/kyle-jorve_sol-320.jpg',
					alt: 'Sol stands in a forest, looking warily toward the viewer, clutching the handle of her dagger',
					mediaIndex: 0,
				},
				featuredThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/sol/kyle-jorve_sol-640.jpg',
							minScreenSize: 1440,
						},
						{
							url: '/dist/media/portfolio/sol/kyle-jorve_sol-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/sol/kyle-jorve_sol-320.jpg',
					alt: 'Sol stands in a forest, looking warily toward the viewer, clutching the handle of her dagger',
					mediaIndex: 0,
				},
				detailThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/sol/kyle-jorve_sol-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource: '/dist/media/portfolio/sol/kyle-jorve_sol-640.jpg',
					alt: 'Sol stands in a forest, looking warily toward the viewer, clutching the handle of her dagger',
				},
				media: [
					{
						sources: [
							{
								url: '/dist/media/portfolio/sol/kyle-jorve_sol-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/sol/kyle-jorve_sol-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/sol/kyle-jorve_sol-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource: '/dist/media/portfolio/sol/kyle-jorve_sol-640.jpg',
						alt: 'Sol stands in a forest, looking warily toward the viewer, clutching the handle of her dagger',
					},
					{
						source: `<iframe src="https://www.youtube.com/embed/G6oRYT55IWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
						bgIndex: 0,
						video: true,
					},
				],
			},
			{
				name: 'kingdom-hearts-1',
				title: "The Future Doesn't Scare Me",
				content: `<p><strong>Part of a duology. Its companion, <i>Where Fears and Lies Melt Away</i>, can be found <a href="/portfolio/detail/?piece=kingdom-hearts-2">here</a>.</strong></p><p><i>Kingdom Hearts</i> is copyrighted and owned by Disney and Square Enix.</p>`,
				dimensions: [640, 915],
				orientation: 'center',
				featured: false,
				thumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1-480.jpg',
							minScreenSize: 1024,
						},
						{
							url: '/dist/media/portfolio/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1-512.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1-320.jpg',
					alt: 'Sora, Riku, and Kairi stand on a sandy beach on Destiny Island',
					mediaIndex: 0,
				},
				featuredThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1-640.jpg',
							minScreenSize: 1440,
						},
						{
							url: '/dist/media/portfolio/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1-320.jpg',
					alt: 'Sora, Riku, and Kairi stand on a sandy beach on Destiny Island',
					mediaIndex: 0,
				},
				detailThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1-640.jpg',
					alt: 'Sora, Riku, and Kairi stand on a sandy beach on Destiny Island',
				},
				media: [
					{
						sources: [
							{
								url: '/dist/media/portfolio/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1-640.jpg',
						alt: 'Sora, Riku, and Kairi stand on a sandy beach on Destiny Island',
					},
				],
			},
			{
				name: 'kingdom-hearts-2',
				title: 'Where Fears and Lies Melt Away',
				content: `<p><strong>Part of a duology. Its companion, <em>The Future Doesn\'t Scare Me</em>, can be found <a href="/portfolio/detail/?piece=kingdom-hearts-1">here</a>.</strong></p><p><i>Kingdom Hearts</i> is copyrighted and owned by Disney and Square Enix.</p>`,
				dimensions: [640, 915],
				orientation: 'center',
				featured: false,
				thumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2-480.jpg',
							minScreenSize: 1024,
						},
						{
							url: '/dist/media/portfolio/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2-512.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2-320.jpg',
					alt: 'Riku, Namine, and Roxas stand on a dark, destroyed beach on Destiny Island; fissures crack the landscape; Mickey stands hidden in the distance; the heart-shaped moon glows overhead',
					mediaIndex: 0,
				},
				featuredThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2-640.jpg',
							minScreenSize: 1440,
						},
						{
							url: '/dist/media/portfolio/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2-320.jpg',
					alt: 'Riku, Namine, and Roxas stand on a dark, destroyed beach on Destiny Island; fissures crack the landscape; Mickey stands hidden in the distance; the heart-shaped moon glows overhead',
					mediaIndex: 0,
				},
				detailThumbnail: {
					sources: [
						{
							url: '/dist/media/portfolio/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2-480.jpg',
							minScreenSize: 640,
						},
					],
					mobileSource:
						'/dist/media/portfolio/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2-640.jpg',
					alt: 'Riku, Namine, and Roxas stand on a dark, destroyed beach on Destiny Island; fissures crack the landscape; Mickey stands hidden in the distance; the heart-shaped moon glows overhead',
				},
				media: [
					{
						sources: [
							{
								url: '/dist/media/portfolio/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2-1920.jpg',
								minScreenSize: 1440,
							},
							{
								url: '/dist/media/portfolio/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2-1440.jpg',
								minScreenSize: 1024,
							},
							{
								url: '/dist/media/portfolio/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2-1024.jpg',
								minScreenSize: 640,
							},
						],
						mobileSource:
							'/dist/media/portfolio/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2-640.jpg',
						alt: 'Riku, Namine, and Roxas stand on a dark, destroyed beach on Destiny Island; fissures crack the landscape; Mickey stands hidden in the distance; the heart-shaped moon glows overhead',
					},
				],
			},
		];
	},
};
