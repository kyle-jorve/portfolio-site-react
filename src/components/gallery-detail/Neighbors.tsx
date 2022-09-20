import Neighbor from './Neighbor';
import useGalleryData, { GalleryItemType } from '../../hooks/data/gallery-data';
import styles from './Showcase.module.css';

type NeighborsProps = {
	item: GalleryItemType;
};

function Neighbors(props: NeighborsProps) {
	const galleryData = useGalleryData();
	const itemIndex = galleryData.items.findIndex(item => item.name === props.item.name);
	const neighbors: {
		next: (GalleryItemType & { isDetail?: boolean }) | null;
		prev: (GalleryItemType & { isDetail?: boolean }) | null;
	} = {
		next: galleryData.items[itemIndex + 1],
		prev: galleryData.items[itemIndex - 1],
	};
	let key: keyof typeof neighbors;

	for (key in neighbors) {
		if (!neighbors[key]) continue;

		neighbors[key]!.isDetail = true;
	}

	return (
		<div className={styles['neighbors']}>
			{Object.entries(neighbors).map((n, index) => {
				const [key, value] = n;

				if (!value) return '';

				return <Neighbor key={index} direction={key} item={value} />;
			})}
		</div>
	);
}

export default Neighbors;
