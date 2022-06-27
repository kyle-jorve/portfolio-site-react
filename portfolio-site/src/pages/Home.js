import { Fragment } from 'react';
import FeaturedWork from '../components/gallery/FeaturedWork';
import HomeHero from '../components/hero/HomeHero';
import HomeBio from '../components/cv/HomeBio';
import { homeData } from '../data/home-data';
import { cvData } from '../data/cv-data';
import { galleryData } from '../data/gallery-data';

const featuredItems = galleryData.items
	.filter((item) => item.featured)
	.slice(0, homeData.gallery.itemsLimit);

function Home() {
	return (
		<Fragment>
			<HomeHero title={homeData.intro.title} subtitle={homeData.intro.subtitle} />

			<FeaturedWork
				featuredItems={featuredItems}
				title={homeData.gallery.heading}
				buttonText={homeData.gallery.btnText}
			/>

			<HomeBio
				img={homeData.bio.img}
				title={cvData.bio.title}
				content={cvData.bio.content}
				url={cvData.url}
				buttonText={homeData.bio.buttonText}
			/>
		</Fragment>
	);
}

export default Home;
