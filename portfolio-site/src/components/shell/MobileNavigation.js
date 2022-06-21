import { NavLink } from 'react-router-dom';
import { globalData } from '../../data/global-data';
import NavItem from './NavItem';
import styles from './Nav.module.css';
import NavButton from './NavButton';

const navItems = globalData.nav.filter((item) => item.showInMobileNav);

function MobileNavigation() {
	return (
		<nav className={styles['mobile-nav']}>
			{navItems.map((item) => {
				return (
					<NavItem url={item.url} className={item.cssClass}>
						<img
							className={styles['mobile-nav__icon']}
							src={item.icon}
							alt={item.alt}
							aria-hidden="true"
						/>
						<span className={styles['mobile-nav__label']}>{item.pageName}</span>
					</NavItem>
				);
			})}

			<NavButton />
		</nav>
	);
}

export default MobileNavigation;
