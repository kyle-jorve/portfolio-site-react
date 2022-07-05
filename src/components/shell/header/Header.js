import { Fragment, useContext } from 'react';
import ScreenContext from '../../../context/screen';
import Logo from './Logo';
import MainNavigation from '../navigation/MainNavigation';
import NavButton from '../navigation/NavButton';
import styles from './Header.module.css';

function Header() {
	const screenContext = useContext(ScreenContext);

	return (
		<Fragment>
			<header className={styles.header}>
				<Logo />

				{!screenContext.mobile && <NavButton />}
			</header>

			<MainNavigation />
		</Fragment>
	);
}

export default Header;
