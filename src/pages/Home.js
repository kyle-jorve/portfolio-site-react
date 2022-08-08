import { Fragment, useEffect, useContext } from 'react';
import ScreenContext from '../context/screen';
import FeaturedWork from '../components/gallery/FeaturedWork';
import HomeHero from '../components/hero/HomeHero';
import HomeBio from '../components/cv/HomeBio';
import useGlobalData from '../hooks/data/global-data';
import { homeData } from '../hooks/data/home-data';
import useCVData from '../hooks/data/cv-data';
import useGalleryData from '../hooks/data/gallery-data';

let timeout;

function Home() {
	const globalData = useGlobalData();
	const galleryData = useGalleryData();
	const featuredItems = galleryData.items
		.filter((item) => item.featured)
		.slice(0, homeData.gallery.itemsLimit);
	const screenContext = useContext(ScreenContext);
	const cvData = useCVData();

	useEffect(() => {
		if (timeout) clearTimeout(timeout);

		if (screenContext.fromSection) {
			const section = document.querySelector(`#${screenContext.fromSection}`);

			if (!section) return;

			section.scrollIntoView();
		}

		timeout = setTimeout(() => {
			screenContext.setVisited(true);
		}, 3000); // total time for hero to animate in
	}, [screenContext.fromSection]);

	return (
		<Fragment>
			<HomeHero imageKey={homeData.intro.heroImageKey} />

			<FeaturedWork featuredItems={featuredItems} />

			<HomeBio
				img={homeData.bio.img}
				title={cvData.bio.title}
				content={cvData.bio.content}
				url={globalData.nav.find((item) => item.pageID === 'cv').url}
				buttonText={homeData.bio.buttonText}
			/>
		</Fragment>
	);
}

export default Home;
