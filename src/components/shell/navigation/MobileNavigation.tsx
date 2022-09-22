import React, { useContext } from 'react';
import SiteContext from '../../../context/global';
import useGlobalData from '../../../hooks/data/global-data';
import NavItem from './NavItem';
import styles from './Nav.module.css';
import NavButton from './NavButton';

const MobileNavigation = React.forwardRef<HTMLElement>((props, ref) => {
	const globalData = useGlobalData();
	const navItems = globalData.nav.filter(item => item.showInMobileNav);
	const siteContext = useContext(SiteContext);

	return (
		<nav className={`${styles['mobile-nav']}${siteContext.navOpen ? ` ${styles['mobile-nav--hide']}` : ''}`} ref={ref}>
			{navItems.map((item, index) => {
				return (
					<NavItem
						key={index}
						index={index}
						url={item.url}
						isMobile={true}
						className={`${styles[`mobile-nav__item--${item.pageID}`]} ${styles['mobile-nav__item']}`}
						attributes={{
							tabIndex: siteContext.navOpen ? -1 : undefined,
						}}
					>
						<span className={styles['mobile-nav__label']}>{item.pageName}</span>
					</NavItem>
				);
			})}

			<NavButton />
		</nav>
	);
});

export default MobileNavigation;
