import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ScreenContext from '../../../context/screen';
import useGlobalData from '../../../hooks/data/global-data';
import useGalleryData from '../../../hooks/data/gallery-data';
import NavItem from './NavItem';
import SocialIcon from '../icons/SocialIcon';
import GalleryItem from '../../gallery/GalleryItem';
import styles from './Nav.module.css';
import socialStyles from '../icons/Social.module.css';
import galleryStyles from '../../gallery/Gallery.module.css';

let timeout = {
	social: null,
	gallery: null,
};

function MainNavigation() {
	const globalData = useGlobalData();
	const galleryData = useGalleryData();
	const [socialIconsAnimationDone, setSocialIconsAnimationDone] = useState(false);
	const [galleryAnimationDone, setGalleryAnimationDone] = useState(false);
	const navItems = globalData.nav;
	const recentWork = galleryData.items.slice(0, globalData.recentWorkLimit);
	const location = useLocation();
	const page = globalData.nav.find((p) => p.url === location.pathname);
	const screenContext = useContext(ScreenContext);
	const totalDelay = {
		icons:
			([...globalData.socialIcons.standard, ...globalData.socialIcons.commerce].length - 1) *
				screenContext.transitionDelay +
			screenContext.transitionDuration,
		gallery:
			recentWork.length * screenContext.transtionDelay + screenContext.transitionDuration,
		navItems:
			navItems.length * screenContext.transitionDelay + screenContext.transitionDuration,
	};
	const classes = [
		styles.nav,
		screenContext.navOpen && styles['nav--active'],
		screenContext.navRevealed && styles['nav--revealed'],
	].filter((c) => c);

	useEffect(() => {
		if (screenContext.navOpen) {
			timeout.social = setTimeout(() => {
				setSocialIconsAnimationDone(true);
			}, totalDelay.icons);

			timeout.gallery = setTimeout(() => {
				setGalleryAnimationDone(true);
			}, totalDelay.gallery);
		} else {
			setSocialIconsAnimationDone(false);
			setGalleryAnimationDone(false);
		}

		return () => {
			if (timeout.social) clearTimeout(timeout.social);
			if (timeout.gallery) clearTimeout(timeout.gallery);
		};
	}, [screenContext.navOpen, totalDelay.icons, totalDelay.gallery]);

	return (
		<nav className={classes.join(' ')} aria-hidden={!screenContext.navOpen}>
			<section className={styles['nav__inner']}>
				{navItems.map((item, index) => {
					return (
						<NavItem
							isMainNav={true}
							totalDelay={totalDelay.navItems}
							key={index}
							index={index}
							url={item.url}
							onClick={screenContext.closeNav}
							attributes={{
								tabIndex: screenContext.navOpen ? null : -1,
							}}
						>
							{item.pageName}
						</NavItem>
					);
				})}
			</section>

			<section className={`${socialStyles.social} ${socialStyles['social--header']}`}>
				<div
					className={`${socialStyles['social__row']} ${socialStyles['social__row--standard']}`}
				>
					{globalData.socialIcons.standard.map((item, index) => {
						return (
							<SocialIcon
								className={styles['social__item--nav']}
								key={index}
								name={item.name}
								url={item.url}
								style={{
									transitionDelay: !socialIconsAnimationDone
										? `${index * screenContext.transitionDelay}ms`
										: '',
								}}
								attributes={{
									tabIndex: screenContext.navOpen ? null : -1,
								}}
							>
								{!!item.icon && item.icon}
							</SocialIcon>
						);
					})}
				</div>

				<div className={socialStyles['social__row']}>
					{globalData.socialIcons.commerce.map((item, index) => {
						return (
							<SocialIcon
								className={styles['social__item--nav']}
								key={index}
								name={item.name}
								url={item.url}
								style={{
									transitionDelay: !socialIconsAnimationDone
										? `${index * screenContext.transitionDelay}ms`
										: '',
								}}
								attributes={{
									tabIndex: screenContext.navOpen ? null : -1,
								}}
							>
								{!!item.icon && item.icon}
							</SocialIcon>
						);
					})}
				</div>
			</section>

			<section>
				<div className="wrapper wrapper--section">
					<h2 className="flex-line">Recent Work</h2>

					<div
						className={`${galleryStyles['gallery__grid']} ${galleryStyles['gallery__grid--nav']}`}
					>
						{recentWork.map((item, index) => {
							return (
								<GalleryItem
									key={index}
									className={
										!screenContext.navRevealed
											? galleryStyles['gallery__item--animated']
											: ''
									}
									isNew={index === 0}
									name={item.name}
									title={item.title}
									thumbnailKey={item.thumbnailKey}
									orientation={item.orientation}
									isInNav={true}
									fromPage={page ? page.pageID : null}
									fromSection={null}
									style={{
										transitionDelay: !galleryAnimationDone
											? `${index * screenContext.transitionDelay}ms`
											: '',
									}}
									attributes={{
										tabIndex: screenContext.navOpen ? null : -1,
									}}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</nav>
	);
}

export default MainNavigation;
