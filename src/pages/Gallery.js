import { useLocation } from 'react-router-dom';
import { globalData } from '../hooks/data/global-data';
import { galleryData } from '../hooks/data/gallery-data';
import styles from '../components/gallery/Gallery.module.css';
import GalleryItem from '../components/gallery/GalleryItem';

function Gallery() {
	const location = useLocation();
	const page = globalData.nav.find((p) => p.url === location.pathname);

	return (
		<section className={`section ${styles.gallery}`}>
			<h1 className="underline">{galleryData.title}</h1>

			<div className={styles['gallery__grid']}>
				{galleryData.items.map((item, index) => {
					return (
						<GalleryItem
							key={index}
							isNew={index === 0}
							name={item.name}
							title={item.title}
							thumbnailKey={item.thumbnailKey}
							orientation={item.orientation}
							fromPage={page ? page.pageID : null}
							fromSection={null}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Gallery;
