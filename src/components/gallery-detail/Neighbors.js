import Neighbor from './Neighbor';
import useGalleryData from '../../hooks/data/gallery-data';
import styles from './Showcase.module.css';

function Neighbors(props) {
	const galleryData = useGalleryData();
	const itemIndex = galleryData.items.findIndex((item) => item.name === props.item.name);
	const neighbors = {
		next: galleryData.items[itemIndex + 1],
		prev: galleryData.items[itemIndex - 1],
	};
	const solo = Object.values(neighbors).filter((val) => val).length < 2;

	for (let key in neighbors) {
		if (!neighbors[key]) continue;

		neighbors[key].isDetail = true;
	}

	return (
		<div className={styles['neighbors']}>
			{Object.entries(neighbors).map((n, index) => {
				const [key, value] = n;

				if (!value) return '';

				return <Neighbor key={index} direction={key} solo={solo} item={value} />;
			})}
		</div>
	);
}

export default Neighbors;
