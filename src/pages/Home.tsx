import { Fragment, useEffect, useContext } from 'react';
import SiteContext from '../context/global';
import FeaturedWork from '../components/gallery/FeaturedWork';
import HomeHero from '../components/hero/HomeHero';
import HomeBio from '../components/cv/HomeBio';
import useGlobalData from '../hooks/data/global-data';
import { homeData } from '../hooks/data/home-data';
import useCVData from '../hooks/data/cv-data';
import useGalleryData from '../hooks/data/gallery-data';

let timeout: ReturnType<typeof setTimeout>;

function Home() {
	const globalData = useGlobalData();
	const galleryData = useGalleryData();
	const featuredItems = galleryData.items.filter(item => item.featured).slice(0, homeData.gallery.itemsLimit);
	const siteContext = useContext(SiteContext);
	const cvData = useCVData();

	useEffect(() => {
		if (timeout) clearTimeout(timeout);

		if (siteContext.fromSection) {
			const section = document.querySelector(`#${siteContext.fromSection}`);

			if (!section) return;

			section.scrollIntoView();
		}

		timeout = setTimeout(() => {
			siteContext.setVisited(true);
		}, 3000); // total time for hero to animate in
	}, [siteContext.fromSection]);

	return (
		<Fragment>
			<HomeHero imageKey={homeData.intro.heroImageKey} />

			<FeaturedWork featuredItems={featuredItems} />

			<HomeBio
				img={homeData.bio.img}
				title={cvData.bio.title}
				content={cvData.bio.content}
				url={globalData.nav.find(item => item.pageID === 'cv')!.url}
			/>
		</Fragment>
	);
}

export default Home;
