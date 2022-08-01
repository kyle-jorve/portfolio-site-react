import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import CustomLink from '../shell/navigation/CustomLink';
import useGlobalData from '../../hooks/data/global-data';
import GalleryItem from './GalleryItem';
import styles from './Gallery.module.css';

const ioOptions = {
	threshold: 0.25,
};
const delay = 100;
let transitionDur;
let totalDelay;
let io;

function FeaturedWork(props) {
	const sectionRef = useRef();
	const globalData = useGlobalData();
	const location = useLocation();
	const [intersected, setIntersected] = useState(false);
	const [animationDone, setAnimationDone] = useState(false);
	const page = globalData.nav.find((p) => p.url === location.pathname);
	const id = 'featured-work';

	const ioHandler = useCallback((entries, observer) => {
		entries.forEach((ent) => {
			if (!ent.isIntersecting) return;

			setIntersected(true);

			setTimeout(() => {
				setAnimationDone(true);
			}, totalDelay);

			observer.disconnect();
		});
	}, []);

	useEffect(() => {
		transitionDur =
			parseFloat(
				getComputedStyle(document.documentElement).getPropertyValue('--transition-dur')
			) * 1000;
		totalDelay = (props.featuredItems.length - 1) * delay + transitionDur;

		io = new IntersectionObserver(ioHandler, ioOptions);

		io.observe(sectionRef.current);

		return () => {
			io.disconnect();
		};
	}, [props.featuredItems.length, ioHandler]);

	return (
		<section ref={sectionRef} className={`section ${styles.featured}`} id={id}>
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
							className={!intersected ? styles['gallery__item--animated'] : ''}
							style={{
								transitionDelay: !animationDone ? `${index * delay}ms` : '',
							}}
						/>
					);
				})}
			</div>

			<div className={styles['featured__button-cont']}>
				<CustomLink className="button button--primary" to="/gallery">
					View Gallery
				</CustomLink>
			</div>
		</section>
	);
}

export default FeaturedWork;
