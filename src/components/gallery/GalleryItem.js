import { useContext } from 'react';
import ScreenContext from '../../context/screen';
import { Link } from 'react-router-dom';
import useThumbnailConfig from '../../hooks/thumbnail-config';
import styles from './Gallery.module.css';

function GalleryItem(props) {
	const screenContext = useContext(ScreenContext);
	const mediaConfig = useThumbnailConfig(props);
	const mobileImgSrc = require(`../../assets/gallery/${mediaConfig.mobile.url}`);

	// URL method for keeping track of where we clicked the gallery item
	// ${props.fromPage || props.fromSection ? '?' : ''}${
	//     props.fromPage ? `from=${props.fromPage}` : ''
	// }${props.fromPage && props.fromSection ? '&' : ''}${
	//     props.fromSection ? `section=${props.fromSection}` : ''
	// }

	function galleryItemClickHandler() {
		screenContext.closeNav();

		if (props.fromPage) {
			screenContext.setFromPage(props.fromPage);
		}

		if (props.fromSection) {
			screenContext.setFromSection(props.fromSection);
		}
	}

	return (
		<article className={styles['gallery__item']}>
			{props.isNew ? <span className={styles['gallery__new-badge']}>New</span> : ''}

			<Link
				className={styles['gallery__item-link']}
				to={`/gallery/${props.name}`}
				onClick={galleryItemClickHandler}
			>
				<picture>
					{mediaConfig.sources.map((src, index) => {
						const imgSrc = require(`../../assets/gallery/${src.url}`);

						return (
							<source
								key={index}
								srcSet={imgSrc}
								media={`(min-width: ${src.minScreenWidth}px)`}
							/>
						);
					})}

					<img
						className={styles['gallery__img']}
						style={{
							objectPosition: `center ${props.orientation}`,
						}}
						src={mobileImgSrc}
						alt={props.thumbnailKey.alt}
					/>
				</picture>

				<h3 className={styles['gallery__item-title']}>{props.title}</h3>
			</Link>
		</article>
	);
}

export default GalleryItem;
