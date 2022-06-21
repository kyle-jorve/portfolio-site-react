import { Fragment } from 'react';
import { Link, useMatch } from 'react-router-dom';
import Navigation from './MainNavigation';
import NavButton from './NavButton';
import logo from '../assets/icons-logos/logo-circle.svg';
import styles from './Header.module.css';

function Header() {
	const isDetailPage = useMatch('/portfolio/:itemID');

	return (
		<Fragment>
			<header className={styles.header}>
				<Link className={styles['header__logo-wrp']} to="/">
					<img
						className={styles['header__logo']}
						src={logo}
						alt="The Art of Kyle Jorve logo"
					/>
				</Link>

				<NavButton closeBtn={isDetailPage} />
			</header>

			{!isDetailPage && <Navigation />}
		</Fragment>
	);
}

export default Header;
