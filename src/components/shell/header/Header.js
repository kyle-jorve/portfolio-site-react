import { useContext } from 'react';
import { useMatch } from 'react-router-dom';
import ScreenContext from '../../../context/screen';
import Logo from './Logo';
import NavButton from '../navigation/NavButton';
import styles from './Header.module.css';

function Header() {
	const isHomePage = useMatch('/');
	const screenContext = useContext(ScreenContext);
	const classes = [
		styles.header,
		screenContext.loadStatus !== 'done' &&
			!screenContext.visited &&
			window.scrollY < 10 &&
			styles['header--hidden'],
		!!isHomePage && styles['header--home'],
	].filter((c) => c);

	return (
		<header className={classes.join(' ')}>
			<Logo />

			{!screenContext.mobile && <NavButton />}
		</header>
	);
}

export default Header;
