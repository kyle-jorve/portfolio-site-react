import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const galleryData = {
	get title() {
		return 'Gallery';
	},
	get items() {
		return [
			{
				name: 'andel-portrait',
				title: 'Andel Sommer Portrait',
				content: (
					<blockquote className="blockquote">
						<p>
							Do you know what we've lost, Pendrake? Do you even care? Warend Joring
							is the duke of Torencald. The trade agreements I meant to draft between
							our duchies would have enriched the Sommers for generations and made
							both us and the Jorings two of the most powerful families in Dayle. I've
							spent years building to this point, and in a single evening you've
							managed to dash it all away. And for what, Pendrake? For a gods-damned
							scullion? Do you know how long the damage you've done will take to
							repair? Generations, Pendrake. Your children and your children's
							children will be dead and buried long before we've heard the last echoes
							of this scandal.
						</p>
					</blockquote>
				),
				orientation: 'center',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/andel-portrait/',
				downloadLink: 'https://kylejorve.gumroad.com/l/ungde',
				thumbnailKey: {
					path: 'andel-portrait/final/kyle-jorve_andel-portrait',
					alt: 'a portrait of Andel Sommer',
				},
				detailKeys: [
					{
						path: 'andel-portrait/final/kyle-jorve_andel-portrait',
						alt: 'a portrait of Andel Sommer',
					},
					{
						path: 'andel-portrait/wip-1/kyle-jorve_andel-portrait-wip-1',
						alt: `a progress snapshot of Andel Sommer's portrait in which the line drawing is complete`,
					},
					{
						path: 'andel-portrait/wip-2/kyle-jorve_andel-portrait-wip-2',
						alt: `a progress snapshot of Andel Sommer's portrait in which the flat colors have been applied`,
					},
					{
						path: 'andel-portrait/wip-3/kyle-jorve_andel-portrait-wip-3',
						alt: `a progress snapshot of Andel Sommer's portrait in which the light and shadows have been applied and colorized`,
					},
					{
						path: 'andel-portrait/wip-4/kyle-jorve_andel-portrait-wip-4',
						alt: `a progress snapshot of Andel Sommer's portrait in which the painting is nearly finished`,
					},
					{
						source: (
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/W6acBvEQXug"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						),
					},
				],
			},
			{
				name: 'andel',
				title: 'Andel Sommer',
				content: (
					<Fragment>
						<p>
							<strong>Andel Sommer</strong> is the duke of Tersing and father to{' '}
							<Link to="/gallery/pendrake">Pendrake</Link> and{' '}
							<Link to="/gallery/talis">Talis</Link>. He wants nothing more than to
							ensure a bright future for his duchy&mdash;even if doing so requires
							extreme methods.
						</p>
						<p>
							Andel is, to put it mildly, not overly fond of his son, Pendrake. Even
							so, he tries, often in vain, to mold his heir into a worthy successor.
						</p>
					</Fragment>
				),
				orientation: 'top',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/andel-sommer/',
				downloadLink: 'https://kylejorve.gumroad.com/l/vqdvkj',
				thumbnailKey: {
					path: 'andel/final/kyle-jorve_andel',
					alt: `a vignette of Andel Sommer, who stands wearing his duke's finery, holding a sword in one hand and a heavy tome in another`,
				},
				detailKeys: [
					{
						path: 'andel/final/kyle-jorve_andel',
						alt: 'Andel Sommer stands proudly, a sheathed sword in one hand and a heavy tome in the other',
					},
					{
						path: 'andel/wip-1/kyle-jorve_andel-wip-1',
						alt: 'an in-progress image of Andel in the nude pose phase of the piece',
					},
					{
						path: 'andel/wip-2/kyle-jorve_andel-wip-2',
						alt: 'an in-progress image of Andel in which the design is fully drawn',
					},
					{
						path: 'andel/wip-3/kyle-jorve_andel-wip-3',
						alt: 'an in-progress image of Andel in which flat colors are applied to the drawing',
					},
					{
						path: 'andel/wip-4/kyle-jorve_andel-wip-4',
						alt: 'an in-progress image of Andel in which the shadows and light are colorized',
					},
					{
						path: 'andel/wip-5/kyle-jorve_andel-wip-5',
						alt: 'an in-progress image of Andel in which the painting is nearly finished',
					},
					{
						source: (
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/XEaCkUcbfUo"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						),
					},
				],
			},
			{
				name: 'pendrake-portrait',
				title: 'Pendrake Sommer Portrait',
				content: (
					<blockquote className="blockquote">
						<p>
							If Pendrake Sommer were half the man his father is, well, perhaps
							Tersing would be in a better spot. As it is, I hate to think what will
							come of our duchy when that boy finally becomes duke.
						</p>
						<cite className="cite">
							<small>&mdash;Captain Nils of the Auerstel Soldiery</small>
						</cite>
					</blockquote>
				),
				orientation: 'center',
				featured: false,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/pendrake-portrait/',
				downloadLink: 'https://kylejorve.gumroad.com/l/hhgin',
				thumbnailKey: {
					path: 'pendrake-portrait/final/kyle-jorve_pendrake-portrait',
					alt: 'a portrait of Pendrake Sommer',
				},
				detailKeys: [
					{
						path: 'pendrake-portrait/final/kyle-jorve_pendrake-portrait',
						alt: 'a portrait of Pendrake Sommer',
					},
					{
						path: 'pendrake-portrait/wip-1/kyle-jorve_pendrake-portrait-wip-1',
						alt: `a progress snapshot of Pendrake's portrait in which the line drawing has been finished`,
					},
					{
						path: 'pendrake-portrait/wip-2/kyle-jorve_pendrake-portrait-wip-2',
						alt: `a progress snapshot of Pendrake's portrait in which the flat colors have been applied`,
					},
					{
						path: 'pendrake-portrait/wip-3/kyle-jorve_pendrake-portrait-wip-3',
						alt: `a progress snapshot of Pendrake's portrait in which the light and shadows have been applied and colorized`,
					},
					{
						path: 'pendrake-portrait/wip-4/kyle-jorve_pendrake-portrait-wip-4',
						alt: `a progress snapshot of Pendrake's portrait in which the painting is nearly finished`,
					},
					{
						source: (
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/CetjOlb5zWk"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						),
					},
				],
			},
			{
				name: 'pendrake',
				title: 'Pendrake Sommer',
				content: (
					<Fragment>
						<p>
							<strong>Pendrake Sommer</strong> is the main protagonist of the
							in-progress fantasy novel, <i>The Order of Ashes</i>, and twin brother
							to <Link to="/gallery/talis">Talis Sommer</Link>.
						</p>
						<p>
							Pendrake Sommer is less of a fighter than his sister, and far more of a
							romantic. Some say he would happily sell his duchy for the object of his
							affection, were he given the chance.
						</p>
					</Fragment>
				),
				orientation: 'top',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/pendrake-sommer/',
				downloadLink: 'https://kylejorve.gumroad.com/l/ndwgm',
				thumbnailKey: {
					path: 'pendrake/final/kyle-jorve_pendrake',
					alt: 'a vignette of Pendrake Sommer, looking backward with a puzzled expression while gripping his saber',
				},
				detailKeys: [
					{
						path: 'pendrake/final/kyle-jorve_pendrake',
						alt: 'a vignette of Pendrake Sommer, looking backward with a puzzled expression while gripping his saber',
					},
					{
						path: 'pendrake/wip-1/kyle-jorve_pendrake-wip-1',
						alt: `a nude pose study for Pendrake's vignette`,
					},
					{
						path: 'pendrake/wip-2/kyle-jorve_pendrake-wip-2',
						alt: `a progress snapshot of Pendrake's vignette in which the line drawing is complete`,
					},
					{
						path: 'pendrake/wip-3/kyle-jorve_pendrake-wip-3',
						alt: `a progress snapshot of Pendrake's vignette in which the flat colors have been applied`,
					},
					{
						path: 'pendrake/wip-4/kyle-jorve_pendrake-wip-4',
						alt: `a progress snapshot of Pendrake's vignette in which the light and shadows have been applied and colorized`,
					},
					{
						path: 'pendrake/wip-5/kyle-jorve_pendrake-wip-5',
						alt: `a progress snapshot of Pendrake's vignette in which the painting is nearly finished`,
					},
					{
						source: (
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/id079cuwXfE"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						),
					},
				],
			},
			{
				name: 'talis-portrait',
				title: 'Talis Sommer Portrait',
				content: (
					<blockquote className="blockquote">
						<p>
							The lady of Tersing? I wouldn't call her a lady so much as a force of
							nature never to be trifled with. Every man who crosses blades with her
							lives to regret it—that is, if they live through the encounter at all.
						</p>
						<cite className="cite">
							<small>&mdash;Howle of the Auerstel Castle guard</small>
						</cite>
					</blockquote>
				),
				orientation: 'center',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/talis-portrait/',
				downloadLink: 'https://kylejorve.gumroad.com/l/bgvVML',
				thumbnailKey: {
					path: 'talis-portrait/final/kyle-jorve_talis-portrait',
					alt: 'a portrait of Talis Sommer',
				},
				detailKeys: [
					{
						path: 'talis-portrait/final/kyle-jorve_talis-portrait',
						alt: 'a portrait of Talis Sommer',
					},
					{
						path: 'talis-portrait/wip-1/kyle-jorve_talis-portrait-wip-1',
						alt: `a progress snapshot of Talis's portrait in which the line drawing is complete`,
					},
					{
						path: 'talis-portrait/wip-2/kyle-jorve_talis-portrait-wip-2',
						alt: `a progress snapshot of Talis's portrait in which the flat colors have been applied`,
					},
					{
						path: 'talis-portrait/wip-3/kyle-jorve_talis-portrait-wip-3',
						alt: `a progress snapshot of Talis's portrait in which the light and shadow have been applied and colorized`,
					},
					{
						path: 'talis-portrait/wip-4/kyle-jorve_talis-portrait-wip-4',
						alt: `a progress snapshot of Talis's portrait in which the painting is nearly finished`,
					},
					{
						source: (
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/FooxBhjNG3E"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						),
					},
				],
			},
			{
				name: 'talis',
				title: 'Talis Sommer',
				content: (
					<Fragment>
						<p>
							<strong>Talis Sommer</strong> is the twin sister of the{' '}
							<Link to="/gallery/pendrake">main protagonist</Link> in the story I'm
							currently writing, <i>The Order of Ashes</i>. She is the lady of the
							Tersing duchy, daughter of the duke and sister to the heir of the
							dukedom.
						</p>
						<p>
							Unlike her noble contemporaries, Talis prefers to spend her time honing
							her skills with a saber and bow. As such, she's earned the admiration
							and respect of her peers in the soldiery.
						</p>
						<p>
							In stark contrast with her brother, Talis is highly disciplined and
							dedicates herself fully to everything she pursues. Some have even
							speculated that she should be the heir instead of her brother.
						</p>
					</Fragment>
				),
				orientation: 'top',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/talis-sommer/',
				downloadLink: 'https://kylejorve.gumroad.com/l/CQNFi',
				thumbnailKey: {
					path: 'talis/final/kyle-jorve_talis',
					alt: 'Talis stands with an amused expression, her hand resting on the saber mounted to her belt',
				},
				detailKeys: [
					{
						path: 'talis/final/kyle-jorve_talis',
						alt: 'Talis stands with an amused expression, her hand resting on the saber mounted to her belt',
					},
					{
						path: 'talis/wip-1/kyle-jorve_talis-wip-1',
						alt: `a progress snapshot of Talis's vignette in which the line drawing is complete`,
					},
					{
						path: 'talis/wip-2/kyle-jorve_talis-wip-2',
						alt: `a progress snapshot of Talis's vignette in which the flat colors have been applied`,
					},
					{
						path: 'talis/wip-3/kyle-jorve_talis-wip-3',
						alt: `a progress snapshot of Talis's vignette in which the light and shadow have been applied and colorized`,
					},
					{
						path: 'talis/wip-4/kyle-jorve_talis-wip-4',
						alt: `a progress snapshot of Talis's vignette in which the painting is nearly finished`,
					},
					{
						source: (
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/M8TVkpTIlI0"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						),
					},
				],
			},
			{
				name: 'cargha-portrait',
				title: 'Cargha Bezamik Portrait',
				content: (
					<blockquote className="blockquote">
						<p>
							I was only a thief back then, part of a guild of them, living on a
							little Sylranian island called <i>Dorokilson</i>. In Daylish you might
							call it the Island of Holes. It was an apt name, for whoever came
							through there, if they'd anything worth losing, we made sure it was
							lost&mdash;eaten by the Island.
						</p>
						<cite className="cite">
							<small>&mdash;Cargha Bezamik</small>
						</cite>
					</blockquote>
				),
				orientation: 'center',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/cargha-portrait/',
				downloadLink: 'https://kylejorve.gumroad.com/l/LNffV',
				thumbnailKey: {
					path: 'cargha-portrait/final/kyle-jorve_cargha-portrait',
					alt: 'a portrait of Cargha Bezamik which features his scarred-over left eye and the tattoo which covers it',
				},
				detailKeys: [
					{
						path: 'cargha-portrait/final/kyle-jorve_cargha-portrait',
						alt: 'a portrait of Cargha Bezamik which features his scarred-over left eye and the tattoo which covers it',
					},
					{
						path: 'cargha-portrait/wip-1/kyle-jorve_cargha-portrait-wip-1',
						alt: `a progress snapshot of Cargha's portrait in which the line drawing is complete`,
					},
					{
						path: 'cargha-portrait/wip-2/kyle-jorve_cargha-portrait-wip-2',
						alt: `a progress snapshot of Cargha's portrait in which the flat colors have been applied`,
					},
					{
						path: 'cargha-portrait/wip-3/kyle-jorve_cargha-portrait-wip-3',
						alt: `a progress snapshot of Cargha's portrait in which the light and shadow have been applied and colorized`,
					},
					{
						path: 'cargha-portrait/wip-4/kyle-jorve_cargha-portrait-wip-4',
						alt: `a progress snapshot of Cargha's portrait in which the painting is nearly finished`,
					},
				],
			},
			{
				name: 'cargha',
				title: 'Cargha Bezamik',
				content: (
					<p>
						<strong>Cargha Bezamik</strong> is employed as a spy and assassin for the
						antagonist in an in-progress fantasy novel. As with much else in this story,
						Cargha is not quite what he seems at first, and his motivations are often
						nebulous.
					</p>
				),
				orientation: 'top',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/cargha-bezamik/',
				downloadLink: 'https://kylejorve.gumroad.com/l/olwWz',
				thumbnailKey: {
					path: 'cargha/final/kyle-jorve_cargha',
					alt: 'Cargha stands stoically, a dagger in one hand and a khopesh in the other',
				},
				detailKeys: [
					{
						path: 'cargha/final/kyle-jorve_cargha',
						alt: 'Cargha stands stoically, a dagger in one hand and a khopesh in the other',
					},
					{
						path: 'cargha/wip-1/kyle-jorve_cargha-wip-1',
						alt: `a nude pose study for Cargha's vignette`,
					},
					{
						path: 'cargha/wip-2/kyle-jorve_cargha-wip-2',
						alt: `a progress snapshot of Cargha's vignette in which the line drawing is complete`,
					},
					{
						path: 'cargha/wip-3/kyle-jorve_cargha-wip-3',
						alt: `a progress snapshot of Cargha's vignette in which the flat colors have been applied`,
					},
					{
						path: 'cargha/wip-4/kyle-jorve_cargha-wip-4',
						alt: `a progress snapshot of Cargha's vignette in which the light and shadow have been applied and colorized`,
					},
					{
						path: 'cargha/wip-5/kyle-jorve_cargha-wip-5',
						alt: `a progress snapshot of Cargha's vignette in which the painting is nearly complete`,
					},
					{
						source: (
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/_FzmNukhxFo"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						),
					},
				],
			},
			{
				name: 'crow',
				title: 'Crow',
				content: (
					<Fragment>
						<blockquote className="blockquote">
							<p>
								Have you met the boy? I'd sooner take my chances outside the Ark
								than match blades with him. Crow's his name, killing's his
								profession. And be damned certain, he's a professional.
								<cite className="cite">
									<small>&mdash;Councillor Genteid, Valkyrie</small>
								</cite>
							</p>
						</blockquote>
						<p>
							Yet another iteration of my original character,{' '}
							<Link to="/gallery/crows">Crow</Link>.
						</p>
						<p>
							Crow is a professional assassin and the protagonist of a science fiction
							story in progress called{' '}
							<strong>
								<i>Post-Autumn</i>
							</strong>
							.
						</p>
						<p>
							In it, mankind has been forced by a cataclysmic event to live in domed
							cities called Arks. When tensions between Arks escalate, having no means
							to do battle out in the uninhabitable wastelands between cities,
							governments must quell their conflicts by more surgical means.
						</p>
					</Fragment>
				),
				orientation: 'top',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/crow/',
				downloadLink: 'https://gumroad.com/l/fTSADI',
				thumbnailKey: {
					path: 'crow/final/kyle-jorve_crow',
					alt: 'Crow stands against a wall smoking an e-cigarette, his mechanical right eye glowing green',
				},
				detailKeys: [
					{
						path: 'crow/final/kyle-jorve_crow',
						alt: 'Crow stands against a wall smoking an e-cigarette, his mechanical right eye glowing green',
					},
					{
						path: 'crow/detail-1/kyle-jorve_crow-detail-1',
						alt: `a detailed crop showing Crow's face`,
					},
					{
						path: 'crow/detail-2/kyle-jorve_crow-detail-2',
						alt: 'a detail crop showing the upper portion of the illustration',
					},
					{
						source: (
							<iframe
								src="https://www.youtube.com/embed/oRzRz7eev2c"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						),
					},
				],
			},
			{
				name: 'pendrakes-chamber',
				title: "Pendrake's Chamber",
				content: (
					<blockquote className="blockquote">
						<p>
							I was seventeen, by all means still a boy, yet I was possessed of the
							sort of steel-hard conviction only youth can muster that I was as good
							as a man grown. I was entirely given to my appetites, boisterous and
							inconsiderate, and a downright embarrassment to my father and his court.
							I was, in other words, a young Daylish noble. And, like many young
							Daylish nobles, I was hopelessly, stupidly, recklessly in love.
							<cite className="cite">
								<small>&mdash;Pendrake Sommer, Duke of Tersing</small>
							</cite>
						</p>
					</blockquote>
				),
				orientation: 'center',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/pendrakes-chamber/',
				downloadLink: 'https://gumroad.com/l/mQzix',
				thumbnailKey: {
					path: 'pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1',
					alt: 'a close-up crop of Pendrake and Kyra lying in bed together',
				},
				detailKeys: [
					{
						path: 'pendrakes-chamber/final/kyle-jorve_pendrakes-chamber',
						alt: `Pendrake's bedroom in isometric perspective`,
					},
					{
						path: 'pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1',
						alt: 'a close-up crop of Pendrake and Kyra lying in bed together',
					},
					{
						path: 'pendrakes-chamber/detail-2/kyle-jorve_pendrakes-chamber-detail-2',
						alt: `a close-up crop of the vanity in the corner of Pendrake's room`,
					},
					{
						path: 'pendrakes-chamber/detail-3/kyle-jorve_pendrakes-chamber-detail-3',
						alt: 'a close-up crop of the hearth, from which a fire illuminates the entire room',
					},
					{
						path: 'pendrakes-chamber/detail-4/kyle-jorve_pendrakes-chamber-detail-4',
						alt: `a close-up crop of the storage chest at the foot of Pendrake's bed; a saber rests beside it`,
					},
					{
						path: 'pendrakes-chamber/detail-5/kyle-jorve_pendrakes-chamber-detail-5',
						alt: 'Pendrake and Kyra doze together in bed; various props are scattered over the neighboring nighstand',
					},
				],
			},
			{
				name: 'berned',
				title: 'Berned',
				content: (
					<Fragment>
						<blockquote className="blockquote">
							<p>
								I wouldn't call him a kind man, but he's loyal. As soon slug you in
								the face as laugh at your jesting. All depends on which side of him
								you lie on. I wouldn't want to be on his bad side, though. Fair lot
								of trouble follows those what fall on his bad side.
								<cite className="cite">
									<small>&mdash;Malder, Foothills Tavern</small>
								</cite>
							</p>
						</blockquote>
						<p>
							Berned is Auerstel Town's constable&mdash;at times of help, at times an
							obstacle, and sometimes, when he feels like it, a downright villain.
						</p>
						<p>
							He plays a critical role in the{' '}
							<strong>
								<i>Ignoble Blood</i>
							</strong>{' '}
							series, which is a fantasy story in progress. In it, Berned apprehends a
							woman named Sol Ferro and charges her with the crime of murdering{' '}
							<Link to="/gallery/becoming-runa">Luna</Link>, a series protagonist, who
							at this point in the story has gone strangely missing without a trace.
						</p>
					</Fragment>
				),
				orientation: 'center',
				featured: false,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/berned/',
				downloadLink: 'https://gumroad.com/l/JKDSd',
				thumbnailKey: {
					path: 'berned/kyle-jorve_berned',
					alt: 'Berned stands before the circular red door to his house',
				},
				detailKeys: [
					{
						path: 'berned/kyle-jorve_berned',
						alt: 'Berned stands before the circular red door to his house',
					},
				],
			},
			{
				name: 'olfactory',
				title: 'Olfactory',
				content: (
					<Fragment>
						<p>
							<strong>
								I have no idea why, but I love doing portraits of aliens.
							</strong>
						</p>
						<p>
							This is a creature that lives on a planet whose atmosphere is so thick
							that the sense of sight never evolved, so instead this species developed
							extra-sensitive olfactory senses. Threads stretching over the holes in
							its "face" protect against contaminants as it inhales.
						</p>
					</Fragment>
				),
				orientation: 'center',
				featured: false,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/olfactory/',
				downloadLink: 'https://gumroad.com/l/KMcGj',
				thumbnailKey: {
					path: 'olfactory/kyle-jorve_olfactory',
					alt: 'an alien breathes in the thick atmoshpere of its home planet through a mouth overgrown with filtering cilia',
				},
				detailKeys: [
					{
						path: 'olfactory/kyle-jorve_olfactory',
						alt: 'an alien breathes in the thick atmoshpere of its home planet through a mouth overgrown with filtering cilia',
					},
				],
			},
			{
				name: 'becoming-runa',
				title: 'Becoming Runa',
				content: (
					<Fragment>
						<blockquote className="blockquote">
							<p>
								Fennory is gone, Bethany. Call him dead, and leave it at that. Mourn
								him as if you'd seen his body and known the stillness of it. There
								will be no peace for you until you do.
								<cite className="cite">
									<small>&mdash;Pendrake Sommer, Duke of Tersing</small>
								</cite>
							</p>
						</blockquote>
						<p>
							The character depicted here is a protagonist of the{' '}
							<strong>
								<i>Ignoble Blood</i>
							</strong>{' '}
							series, which is a work of fantasy in progress. Fennory is his real
							name, but by this point in the story he goes by the alias of Luna, as he
							is hiding from a powerful enemy.
						</p>
						<p>
							A darker, more malevolent force whisks him away, however, forcing those
							closest to him into a desperate search, while outside their quiet town a
							greater threat, once thought defeated, rises from the ashes.
						</p>
					</Fragment>
				),
				orientation: 'center',
				featured: true,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/becoming-runa/',
				downloadLink: 'https://gumroad.com/l/UluBo',
				thumbnailKey: {
					path: 'becoming-runa/kyle-jorve_becoming-runa',
					alt: 'Luna stands naked and emaciated beneath the symbol of the Order of the Runa, crystalline growths covering his body as his extremities fade from existence',
				},
				detailKeys: [
					{
						path: 'becoming-runa/kyle-jorve_becoming-runa',
						alt: 'Luna stands naked beneath the symbol of the Order of the Runa, crystalline growths covering his body as his extremities fade from existence',
					},
					{
						source: (
							<iframe
								src="https://www.youtube.com/embed/PxoZ4MjlxOY"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						),
					},
				],
			},
			{
				name: 'crows',
				title: 'Crows',
				content: (
					<Fragment>
						<blockquote className="blockquote">
							<p>
								The Ravens still exist, if you can believe it. Though they take a
								different form today. Different stories tell it different ways, but
								I prefer to believe they linger as men now, having forgotten all
								they once were.
								<cite className="cite">
									<small>&mdash;Eden, The Sunken Valley</small>
								</cite>
							</p>
						</blockquote>
						<p>
							<Link to="/gallery/crow">Crow</Link> is a professional assassin and the
							protagonist of an in-progress science fiction story called{' '}
							<strong>
								<i>Post-Autumn</i>
							</strong>
							.
						</p>
						<p>
							In it, mankind has been forced by a cataclysmic event to live in domed
							cities called Arks. When tensions between Arks escalate, having no means
							to do battle out in the uninhabitable wastelands between cities,
							governments must quell their conflicts by more surgical means.
						</p>
					</Fragment>
				),
				orientation: 'top',
				featured: false,
				purchaseLink: 'https://www.inprnt.com/gallery/kylejorve/crows/',
				downloadLink: 'https://gumroad.com/l/itBYi',
				thumbnailKey: {
					path: 'crows/kyle-jorve_crows',
					alt: 'Crow stands before a cluster of dead ravens as more fall from the sky, a dead white raven at his feet',
				},
				detailKeys: [
					{
						path: 'crows/kyle-jorve_crows',
						alt: 'Crow stands before a cluster of dead ravens as more fall from the sky, a dead white raven at his feet',
					},
				],
			},
			{
				name: 'kingdom-hearts-1',
				title: "The Future Doesn't Scare Me",
				content: (
					<Fragment>
						<p>
							<strong>
								Part of a duology. Its companion,{' '}
								<i>Where Fears and Lies Melt Away</i>, can be found{' '}
								<Link to="/gallery/kingdom-hearts-2">here</Link>.
							</strong>
						</p>
						<p>
							<i>Kingdom Hearts</i> is copyrighted and owned by Disney and Square
							Enix.
						</p>
					</Fragment>
				),
				orientation: 'center',
				featured: false,
				thumbnailKey: {
					path: 'kingdom-hearts-1/kyle-jorve_kingdom-hearts-1',
					alt: 'Sora, Riku, and Kairi stand on a sandy beach on Destiny Island',
				},
				detailKeys: [
					{
						path: 'kingdom-hearts-1/kyle-jorve_kingdom-hearts-1',
						alt: 'Sora, Riku, and Kairi stand on a sandy beach on Destiny Island',
					},
				],
			},
			{
				name: 'kingdom-hearts-2',
				title: 'Where Fears and Lies Melt Away',
				content: (
					<Fragment>
						<p>
							<strong>
								Part of a duology. Its companion,{' '}
								<em>The Future Doesn't Scare Me</em>, can be found{' '}
								<Link to="/gallery/kingdom-hearts-1">here</Link>.
							</strong>
						</p>
						<p>
							<i>Kingdom Hearts</i> is copyrighted and owned by Disney and Square
							Enix.
						</p>
					</Fragment>
				),
				orientation: 'center',
				featured: false,
				thumbnailKey: {
					path: 'kingdom-hearts-2/kyle-jorve_kingdom-hearts-2',
					alt: 'Riku, Namine, and Roxas stand on a dark, destroyed beach on Destiny Island; fissures crack the landscape; Mickey stands hidden in the distance; a heart-shaped moon glows overhead',
				},
				detailKeys: [
					{
						path: 'kingdom-hearts-2/kyle-jorve_kingdom-hearts-2',
						alt: 'Riku, Namine, and Roxas stand on a dark, destroyed beach on Destiny Island; fissures crack the landscape; Mickey stands hidden in the distance; a heart-shaped moon glows overhead',
					},
				],
			},
		];
	},
};
