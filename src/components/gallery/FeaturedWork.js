import { Link, useLocation } from 'react-router-dom';
import { globalData } from '../../hooks/data/global-data';
import GalleryItem from './GalleryItem';
import styles from './Gallery.module.css';

function FeaturedWork(props) {
	const location = useLocation();
	const page = globalData.nav.find((p) => p.url === location.pathname);
	const id = 'featured-work';

	return (
		<section className={`section ${styles.featured}`} id={id}>
			<h2 className={`underline ${styles['featured__title']}`}>Featured Work</h2>

			<div className={`${styles['gallery__grid']} ${styles['gallery__grid--featured']}`}>
				{props.featuredItems.map((item, index) => {
					return (
						<GalleryItem
							key={index}
							isNew={index === 0}
							name={item.name}
							title={item.title}
							thumbnailKey={item.thumbnailKey}
							isFeatured={true}
							orientation={item.orientation}
							fromPage={page ? page.pageID : null}
							fromSection={id}
						/>
					);
				})}
			</div>

			<div className={styles['featured__button-cont']}>
				<Link className="button button--primary" to="/gallery">
					View Gallery
				</Link>
			</div>
		</section>
	);
}

export default FeaturedWork;
