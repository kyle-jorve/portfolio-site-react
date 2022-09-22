import { useContext } from 'react';
import SiteContext from '../../context/global';
import CustomLink from '../shell/navigation/CustomLink';
import useThumbnailConfig from '../../hooks/thumbnail-config';
import styles from './Showcase.module.css';
import { GalleryItemType } from '../../hooks/data/gallery-data';

type NeighborProps = {
	item: GalleryItemType;
	direction: string;
};

function truncateTitle(title: string) {
	const titleArr = title.split(' ');
	const maxLength = 22;
	let truncTitle = '';

	for (let i = 0; i < titleArr.length; i++) {
		const word = titleArr[i];
		const isLastWord = i === titleArr.length - 1;

		if (truncTitle.length + word.length <= maxLength) {
			truncTitle += `${word}${isLastWord ? '' : ' '}`;
		} else {
			truncTitle = truncTitle.trim();

			if (truncTitle.length < title.length) {
				truncTitle += '...';
			}

			break;
		}
	}

	return truncTitle;
}

function Neighbor(props: NeighborProps) {
	const context = useContext(SiteContext);
	const thumb = useThumbnailConfig({
		isDetail: true,
		thumbnailKey: props.item.thumbnailKey,
	});
	const mobileImg = require(`../../assets/gallery/${thumb.mobile.url}`);
	const neighborClasses = [styles['neighbor'], styles[`neighbor--${props.direction}`]].filter(c => c);

	return (
		<article className={neighborClasses.join(' ')}>
			<CustomLink className={styles['neighbor__link']} to={`/gallery/${props.item.name}`} onClick={context.resetSlideIndex}>
				<div className={styles['neighbor__img-cont']}>
					<picture>
						{thumb.sources.map((s, index) => {
							const srcset = require(`../../assets/gallery/${s.url}`);

							return <source key={index} srcSet={srcset} media={`(min-width: ${s.minScreenWidth}px)`} />;
						})}

						<img
							className={styles['neighbor__img']}
							src={mobileImg}
							alt={props.item.thumbnailKey.alt}
							style={{
								objectPosition: `center ${props.item.orientation}`,
							}}
							loading="lazy"
						/>
					</picture>
				</div>

				<div className={styles['neighbor__inner']}>
					<button
						className={`${styles['neighbor__arrow']} ${styles[`neighbor__arrow--${props.direction}`]}`}
						aria-hidden="true"
					></button>

					<div className={styles['neighbor__content']}>
						<h2 className={styles['neighbor__title']}>{props.direction}</h2>

						<h3 className={styles['neighbor__subtitle']}>{truncateTitle(props.item.title)}</h3>
					</div>
				</div>
			</CustomLink>
		</article>
	);
}

export default Neighbor;
