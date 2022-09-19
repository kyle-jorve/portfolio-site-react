import { useEffect, useRef, useState, useCallback, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ScreenContext from '../../context/screen';
import CustomLink from '../shell/navigation/CustomLink';
import useGlobalData from '../../hooks/data/global-data';
import GalleryItem from './GalleryItem';
import styles from './Gallery.module.css';

const ioOptions = {
	threshold: 0.25,
};
let io;

function FeaturedWork(props) {
	const screenContext = useContext(ScreenContext);
	const sectionRef = useRef();
	const globalData = useGlobalData();
	const location = useLocation();
	const [intersected, setIntersected] = useState(false);
	const [animationDone, setAnimationDone] = useState(false);
	const page = globalData.nav.find((p) => p.url === location.pathname);
	const id = 'featured-work';
	const totalDelay =
		(props.featuredItems.length - 1) * screenContext.transitionDelay +
		screenContext.transitionDuration;

	const ioHandler = useCallback(
		(entries, observer) => {
			entries.forEach((ent) => {
				if (!ent.isIntersecting) return;

				setIntersected(true);

				setTimeout(() => {
					setAnimationDone(true);
				}, totalDelay);

				observer.disconnect();
			});
		},
		[totalDelay]
	);

	useEffect(() => {
		io = new IntersectionObserver(ioHandler, ioOptions);

		io.observe(sectionRef.current);

		return () => {
			io.disconnect();
		};
	}, [ioHandler]);

	return (
		<section ref={sectionRef} className="section" id={id}>
			<div className="wrapper wrapper--wide">
				<h2 className="underline">Featured Work</h2>

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
									transitionDelay: !animationDone
										? `${index * screenContext.transitionDelay}ms`
										: '',
								}}
								attributes={{
									tabIndex: screenContext.navOpen ? -1 : null,
								}}
							/>
						);
					})}
				</div>

				<div className={styles['featured__button-cont']}>
					<CustomLink
						className="button button--primary"
						to="/gallery"
						attributes={{
							tabIndex: screenContext.navOpen ? -1 : null,
						}}
					>
						View Gallery
					</CustomLink>
				</div>
			</div>
		</section>
	);
}

export default FeaturedWork;
