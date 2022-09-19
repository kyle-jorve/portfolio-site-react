import { useContext } from 'react';
import ScreenContext from '../../../context/screen';
import styles from './Nav.module.css';

function NavButton() {
	const screenContext = useContext(ScreenContext);
	const classes = [
		styles['nav__button'],
		screenContext.navOpen && styles['nav__button--active'],
	].filter((c) => c);

	return (
		<button
			ref={screenContext.navButtonRef}
			onClick={screenContext.navToggleHandler}
			className={classes.join(' ')}
			aria-controls="main-navigation"
			aria-label="toggle main navigation"
			aria-expanded={screenContext.navOpen}
		>
			<div className={styles['nav__button-blocks']} aria-hidden="true">
				<span className={styles['nav__button-block']}></span>
				<span
					className={`${styles['nav__button-block']} ${styles['nav__button-block--disapparate']}`}
				></span>
				<span className={styles['nav__button-block']}></span>

				<span
					className={`${styles['nav__button-block']} ${styles['nav__button-block--disapparate']}`}
				></span>
				<span className={styles['nav__button-block']}></span>
				<span
					className={`${styles['nav__button-block']} ${styles['nav__button-block--disapparate']}`}
				></span>

				<span className={styles['nav__button-block']}></span>
				<span
					className={`${styles['nav__button-block']} ${styles['nav__button-block--disapparate']}`}
				></span>
				<span className={styles['nav__button-block']}></span>
			</div>
		</button>
	);
}

export default NavButton;
