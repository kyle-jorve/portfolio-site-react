import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ScreenContext from '../../../context/screen';
import { globalData } from '../../../hooks/data/global-data';
import { galleryData } from '../../../hooks/data/gallery-data';
import NavItem from './NavItem';
import SocialIcon from '../icons/SocialIcon';
import GalleryItem from '../../gallery/GalleryItem';
import styles from './Nav.module.css';
import socialStyles from '../icons/Social.module.css';
import galleryStyles from '../../gallery/Gallery.module.css';

const navItems = globalData.nav;
const recentWork = galleryData.items.slice(0, globalData.recentWorkLimit);

function MainNavigation() {
	const location = useLocation();
	const page = globalData.nav.find((p) => p.url === location.pathname);
	const screenContext = useContext(ScreenContext);

	return (
		<nav className={`${styles.nav}${screenContext.navOpen ? ` ${styles['nav--active']}` : ''}`}>
			<section className={styles['nav__inner']}>
				{navItems.map((item, index) => {
					return (
						<NavItem key={index} url={item.url} onClick={screenContext.closeNav}>
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
							<SocialIcon key={index} name={item.name} url={item.url}>
								{!!item.icon && item.icon}
							</SocialIcon>
						);
					})}
				</div>

				<div
					className={`${socialStyles['social__row']} ${socialStyles['social__row--commerce']}`}
				>
					{globalData.socialIcons.commerce.map((item, index) => {
						return (
							<SocialIcon key={index} name={item.name} url={item.url}>
								{!!item.icon && item.icon}
							</SocialIcon>
						);
					})}
				</div>
			</section>

			<section className={styles['nav__recent-work']}>
				<div className="wrapper wrapper--section">
					<h2 className={`flex-line ${styles['nav__recent-work-title']}`}>Recent Work</h2>

					<div
						className={`${galleryStyles['gallery__grid']} ${galleryStyles['gallery__grid--nav']}`}
					>
						{recentWork.map((item, index) => {
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
