import { useContext } from 'react';
import ScreenContext from '../../context/screen';
import CustomLink from '../shell/navigation/CustomLink';
import useThumbnailConfig from '../../hooks/thumbnail-config';
import styles from './Gallery.module.css';

function GalleryItem(props) {
	const screenContext = useContext(ScreenContext);
	const mediaConfig = useThumbnailConfig(props);
	const mobileImgSrc = require(`../../assets/gallery/${mediaConfig.mobile.url}`);

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
		}, screenContext.loadDuration);
	}

	return (
		<article
			className={`${styles['gallery__item']}${props.className ? ` ${props.className}` : ''}`}
			style={props.style}
		>
			{props.isNew ? <span className={styles['gallery__new-badge']}>New</span> : ''}

			<CustomLink
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
						loading="lazy"
					/>
				</picture>

				<h3 className={styles['gallery__item-title']}>{props.title}</h3>
			</CustomLink>
		</article>
	);
}

export default GalleryItem;
