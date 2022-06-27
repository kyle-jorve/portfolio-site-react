import { globalData } from '../../data/global-data';
import { galleryData } from '../../data/gallery-data';
import NavItem from './NavItem';
import SocialIcon from './SocialIcon';
import GalleryItem from '../../gallery/GalleryItem';
import styles from './Nav.module.css';
import socialStyles from './Social.module.css';
import galleryStyles from '../gallery/Gallery.module.css';

const navItems = globalData.nav;
const socialItems = [...globalData.socialIcons.standard, ...globalData.socialIcons.commerce];
const recentWork = galleryData.items.slice(0, globalData.recentWorkLimit);

function Navigation() {
	return (
		<nav className={styles.nav}>
			<section className={styles['nav__inner']}>
				{navItems.map((item) => {
					return <NavItem url={item.url}>{item.pageName}</NavItem>;
				})}
			</section>

			<section className={`${socialStyles.social} ${socialStyles['social--header']}`}>
				{socialItems.map((item) => {
					return (
						<SocialIcon
							name={item.name}
							url={item.url}
							className={item.cssClass}
							icon={item.icon}
						/>
					);
				})}
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
									isNew={index === 0}
									name={item.name}
									title={item.title}
									thumbnailKey={item.thumbnailKey}
									dimensions={item.dimensions}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</nav>
	);
}

export default Navigation;
