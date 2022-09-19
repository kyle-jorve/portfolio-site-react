import { DetailPageContextProvider } from '../context/detail-page';
import useGalleryData from '../hooks/data/gallery-data';
import { useParams } from 'react-router-dom';
import MediaShowcase from '../components/gallery-detail';
import ContentShowcase from '../components/gallery-detail';
import styles from '../components/gallery-detail/Showcase.module.css';

function GalleryDetail() {
	const galleryData = useGalleryData();
	const params = useParams();
	const itemID = params.itemID;
	const galleryItem = galleryData.items.find((item) => item.name === itemID);

	return (
		<DetailPageContextProvider>
			<section className={styles.showcase}>
				<MediaShowcase item={galleryItem} />

				<ContentShowcase item={galleryItem}>{galleryItem.content}</ContentShowcase>
			</section>
		</DetailPageContextProvider>
	);
}

export default GalleryDetail;
