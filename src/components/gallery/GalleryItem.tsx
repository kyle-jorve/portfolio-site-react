import { useContext } from 'react';
import ScreenContext from '../../context/screen';
import CustomLink from '../shell/navigation/CustomLink';
import useThumbnailConfig from '../../hooks/thumbnail-config';
import styles from './Gallery.module.css';

function GalleryItem(props) {
	const screenContext = useContext(ScreenContext);
	const mediaConfig = useThumbnailConfig(props);
	const mobileImgSrc = require(`../../assets/gallery/${mediaConfig.mobile.url}`);
	const classes = [styles['gallery__item'], props.className].filter((c) => c);

	function galleryItemClickHandler() {
		screenContext.setLoadStatus('in');

		setTimeout(() => {
			screenContext.closeNav();

			if (props.fromPage) {
				screenContext.setFromPage(props.fromPage);
			}

			if (props.fromSection) {
				screenContext.setFromSection(props.fromSection);
			} else {
				screenContext.setFromSection(null);
			}
		}, screenContext.longTransitionDuration);
	}

	return (
		<article className={classes.join(' ')} style={props.style}>
			{props.isNew ? <span className={styles['gallery__new-badge']}>New</span> : ''}

			<CustomLink
				className={styles['gallery__item-link']}
				to={`/gallery/${props.name}`}
				onClick={galleryItemClickHandler}
				attributes={props.attributes}
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
						className={`img--lazy ${styles['gallery__img']}`}
						style={{
							objectPosition: `center ${props.orientation}`,
						}}
						src={mobileImgSrc}
						alt={props.thumbnailKey.alt}
						loading="lazy"
						fetchpriority="low"
						onLoad={(event) => event.currentTarget.classList.add('loaded')}
					/>
				</picture>

				<h3 className={styles['gallery__item-title']}>{props.title}</h3>
			</CustomLink>
		</article>
	);
}

export default GalleryItem;
