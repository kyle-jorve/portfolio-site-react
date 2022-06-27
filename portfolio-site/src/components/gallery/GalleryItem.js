import { Link } from 'react-router-dom';
import useThumbnailConfig from '../../hooks/thumbnail-config';
import styles from './Gallery.module.css';

function GalleryItem(props) {
	const mediaConfig = useThumbnailConfig(props);
	const mobileImgSrc = require(`../../assets/gallery/${mediaConfig.mobile.url}`);

	return (
		<article className={styles['gallery__item']}>
			{props.isNew ? <span className={styles['gallery__new-badge']}>New</span> : ''}

			<Link className={styles['gallery__item-link']} to={`/gallery/${props.name}`}>
				<picture>
					{mediaConfig.sources.map((src) => {
						const imgSrc = require(`../../assets/gallery/${src.url}`);

						return (
							<source srcset={imgSrc} media={`(min-width: ${src.minScreenWidth})`} />
						);
					})}

					<img
						className={styles['gallery__img']}
						src={mobileImgSrc.mobile.url}
						alt={props.thumbnailKey.alt}
						width={props.dimensions[0]}
						height={props.dimensions[1]}
					/>
				</picture>

				<h3 className={styles['gallery__itemTitle']}>${props.title}</h3>
			</Link>
		</article>
	);
}

export default GalleryItem;
