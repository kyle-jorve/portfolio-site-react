import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScreenContext from '../../../context/screen';
import logo from '../../../assets/icons-logos/logo-circle.svg';
import styles from './Header.module.css';

function Logo() {
	const navigate = useNavigate();
	const screenContext = useContext(ScreenContext);

	function logoClickHandler(event) {
		if (screenContext.desktop) {
			event.preventDefault();

			screenContext.setLoadStatus('in');

			setTimeout(() => {
				navigate('/');

				screenContext.closeNav();

				screenContext.setLoadStatus('out');

				setTimeout(() => {
					screenContext.setLoadStatus('done');
				}, screenContext.longTransitionDuration);
			}, screenContext.longTransitionDuration);
		} else if (screenContext.navOpen) {
			screenContext.closeNav();
		}
	}

	return (
		<Link
			className={styles['header__logo-cont']}
			to="/"
			onClick={logoClickHandler}
			aria-label="go to home page"
		>
			<img
				className={styles['header__logo']}
				src={logo}
				alt="The Art of Kyle Jorve logo"
				loading="eager"
				fetchpriority="high"
			/>
		</Link>
	);
}

export default Logo;
