import { Fragment } from 'react';
import FeaturedWork from '../components/gallery/FeaturedWork';
import HomeHero from '../components/hero/HomeHero';
import HomeBio from '../components/cv/HomeBio';
import { globalData } from '../hooks/data/global-data';
import { homeData } from '../hooks/data/home-data';
import useCVData from '../hooks/data/cv-data';
import { galleryData } from '../hooks/data/gallery-data';

const featuredItems = galleryData.items
	.filter((item) => item.featured)
	.slice(0, homeData.gallery.itemsLimit);

function Home() {
	const cvData = useCVData();

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
