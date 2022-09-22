import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SiteContext from '../../../context/global';
import logo from '../../../assets/icons-logos/logo-circle.svg';
import styles from './Header.module.css';

function Logo() {
	const navigate = useNavigate();
	const siteContext = useContext(SiteContext);

	function logoClickHandler(event: React.MouseEvent) {
		if (siteContext.desktop) {
			event.preventDefault();

			siteContext.toggleLoader();

			setTimeout(() => {
				navigate('/');

				siteContext.closeNav();

				siteContext.toggleLoader(false);
			}, siteContext.longTransitionDuration);
		} else if (siteContext.navOpen) {
			siteContext.closeNav();
		}
	}

	return (
		<Link className={styles['header__logo-cont']} to="/" onClick={logoClickHandler} aria-label="go to home page">
			<img className={styles['header__logo']} src={logo} alt="The Art of Kyle Jorve logo" loading="eager" />
		</Link>
	);
}

export default Logo;
