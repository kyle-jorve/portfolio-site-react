import { useEffect, useCallback, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useGlobalData from '../hooks/data/global-data';
import useGalleryData from '../hooks/data/gallery-data';
import ScreenContext from '../context/screen';
import styles from '../components/gallery/Gallery.module.css';
import GalleryItem from '../components/gallery';

function Gallery() {
	const screenContext = useContext(ScreenContext);
	const [reveal, setReveal] = useState(false);
	const [animationDone, setAnimationDone] = useState(false);
	const globalData = useGlobalData();
	const galleryData = useGalleryData();
	const location = useLocation();
	const page = globalData.nav.find((p) => p.url === location.pathname);
	const totalDelay =
		(galleryData.items.length - 1) * screenContext.transitionDelay +
		screenContext.transitionDuration;

	const transitionItems = useCallback(() => {
		setReveal(true);

		setTimeout(() => {
			setAnimationDone(true);
		}, totalDelay);
	}, [totalDelay]);

	useEffect(() => {
		if (screenContext.loadStatus === 'done') {
			transitionItems();
		}
	}, [transitionItems, screenContext.loadStatus]);

	return (
		<section className={`section ${styles.gallery}`}>
			<h1 className="underline">{galleryData.title}</h1>

			<div className={styles['gallery__grid']}>
				{galleryData.items.map((item, index) => {
					return (
						<GalleryItem
							key={index}
							isNew={index === 0}
							name={item.name}
							title={item.title}
							thumbnailKey={item.thumbnailKey}
							orientation={item.orientation}
							fromPage={page ? page.pageID : null}
							fromSection={null}
							style={{
								transitionDelay: !animationDone
									? `${index * screenContext.transitionDelay}ms`
									: '',
							}}
							className={!reveal ? styles['gallery__item--animated'] : ''}
							attributes={{
								tabIndex: screenContext.navOpen ? -1 : null,
							}}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Gallery;
