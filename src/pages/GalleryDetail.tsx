import useGalleryData from '../hooks/data/gallery-data';
import { useParams } from 'react-router-dom';
import MediaShowcase from '../components/gallery-detail/MediaShowcase';
import ContentShowcase from '../components/gallery-detail/ContentShowcase';
import styles from '../components/gallery-detail/Showcase.module.css';
import NotFound from './NotFound';

function GalleryDetail() {
	const galleryData = useGalleryData();
	const params = useParams();
	const itemID = params.itemID;
	const galleryItem = galleryData.items.find(item => item.name === itemID);

	if (!galleryItem) {
		return <NotFound />
	}

	return (
		<section className={styles.showcase}>
			<MediaShowcase item={galleryItem} />

			<ContentShowcase item={galleryItem}>{!!galleryItem?.content && galleryItem.content}</ContentShowcase>
		</section>
	);
}

export default GalleryDetail;
