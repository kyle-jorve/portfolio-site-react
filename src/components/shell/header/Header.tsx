import { useContext } from 'react';
import { useMatch } from 'react-router-dom';
import SiteContext from '../../../context/global';
import Logo from './Logo';
import NavButton from '../navigation/NavButton';
import styles from './Header.module.css';

function Header() {
	const isHomePage = useMatch('/');
	const siteContext = useContext(SiteContext);
	const classes = [
		styles.header,
		siteContext.loadStatus !== 'done' &&
			!siteContext.visited &&
			window.scrollY < 10 &&
			styles['header--hidden'],
		!!isHomePage && styles['header--home'],
	].filter((c) => c);

	return (
		<header className={classes.join(' ')}>
			<Logo />

			{!siteContext.mobile && <NavButton />}
		</header>
	);
}

export default Header;
