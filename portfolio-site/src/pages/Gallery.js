import { galleryData } from '../data/gallery-data';
import styles from '../components/gallery/Gallery.module.css';
import GalleryItem from '../components/gallery/GalleryItem';

function Gallery() {
	return (
		<section className={styles.gallery}>
			<h1 className={styles['gallery__title']}>{galleryData.title}</h1>

			<div className={styles['gallery__grid']}>
				{galleryData.items.map((item, index) => {
					return (
						<GalleryItem
							isNew={index === 0}
							name={item.name}
							title={item.title}
							thumbnailKey={item.thumbnailKey}
							dimensions={item.dimensions}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Gallery;
