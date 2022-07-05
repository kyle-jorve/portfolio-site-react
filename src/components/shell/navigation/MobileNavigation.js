import React, { useContext } from 'react';
import ScreenContext from '../../../context/screen';
import { globalData } from '../../../hooks/data/global-data';
import NavItem from './NavItem';
import styles from './Nav.module.css';
import NavButton from './NavButton';

const navItems = globalData.nav.filter((item) => item.showInMobileNav);

const MobileNavigation = React.forwardRef((props, ref) => {
	const screenContext = useContext(ScreenContext);

	return (
		<nav
			className={`${styles['mobile-nav']}${
				screenContext.navOpen ? ` ${styles['mobile-nav--hide']}` : ''
			}`}
			ref={ref}
		>
			{navItems.map((item, index) => {
				return (
					<NavItem
						key={index}
						url={item.url}
						isMobile={true}
						className={`${styles[`mobile-nav__item--${item.pageID}`]} ${
							styles['mobile-nav__item']
						}`}
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
