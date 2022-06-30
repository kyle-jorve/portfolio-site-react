import { Fragment } from 'react';
import { galleryData } from '../data/gallery-data';
import { useParams } from 'react-router-dom';
import Showcase from '../components/gallery-detail/Showcase';

function GalleryDetail() {
	const params = useParams();
	const itemID = params.itemID;
	const galleryItem = galleryData.items.find((item) => item.name === itemID);

	return (
		<Fragment>
			<Showcase item={galleryItem} />
		</Fragment>
	);
}

export default GalleryDetail;
