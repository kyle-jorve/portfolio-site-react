import { Link } from 'react-router-dom';
import GalleryItem from './GalleryItem';
import styles from './Gallery.module.css';

function FeaturedWork(props) {
	return (
		<section className={styles.featured} id="featured">
			<h2 className={styles['featured__title']}>{props.title}</h2>

			<div className={`${styles['gallery__grid']} ${styles['gallery__grid--featured']}`}>
				{props.featuredItems.map((item, index) => {
					return (
						<GalleryItem
							isNew={index === 0}
							name={item.name}
							title={item.title}
							thumbnailKey={item.thumbnailKey}
							dimensions={item.dimensions}
							isFeatured={true}
						/>
					);
				})}
			</div>

			<div className={styles['featured__button-cont']}>
				<Link className="button button--primary" to="/gallery">
					{props.buttonText}
				</Link>
			</div>
		</section>
	);
}

export default FeaturedWork;
