import { useContext } from 'react';
import SiteContext from '../../context/global';
import CustomLink from '../shell/navigation/CustomLink';
import useThumbnailConfig from '../../hooks/thumbnail-config';
import styles from './Gallery.module.css';
import { GalleryItemType } from '../../hooks/data/gallery-data';

type GalleryItemProps = GalleryItemType & {
	className: string;
	fromPage: string | null;
	fromSection: string | null;
	isNew: boolean;
	attributes: {
		tabIndex: number | undefined;
	};
	style: {
		[prop: string]: string;
	};
};

function GalleryItem(props: GalleryItemProps) {
	const siteContext = useContext(SiteContext);
	const mediaConfig = useThumbnailConfig({
		isNew: props.isNew,
		thumbnailKey: props.thumbnailKey,
	});
	const mobileImgSrc = require(`../../assets/gallery/${mediaConfig.mobile.url}`);
	const classes = [styles['gallery__item'], props.className].filter(c => c);

	function galleryItemClickHandler() {
		siteContext.toggleLoader();

		setTimeout(() => {
			siteContext.closeNav();

			if (props.fromPage) {
				siteContext.setFromPage(props.fromPage);
			}

			if (props.fromSection) {
				siteContext.setFromSection(props.fromSection);
			} else {
				siteContext.setFromSection(null);
			}
		}, siteContext.longTransitionDuration);
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

						return <source key={index} srcSet={imgSrc} media={`(min-width: ${src.minScreenWidth}px)`} />;
					})}

					<img
						className={`img--lazy ${styles['gallery__img']}`}
						style={{
							objectPosition: `center ${props.orientation}`,
						}}
						src={mobileImgSrc}
						alt={props.thumbnailKey.alt}
						loading="lazy"
						onLoad={event => event.currentTarget.classList.add('loaded')}
					/>
				</picture>

				<h3 className={styles['gallery__item-title']}>{props.title}</h3>
			</CustomLink>
		</article>
	);
}

export default GalleryItem;
