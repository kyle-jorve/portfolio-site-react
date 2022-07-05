import { useContext } from 'react';
import ScreenContext from '../../../context/screen';
import styles from './Nav.module.css';

function NavButton() {
	const screenContext = useContext(ScreenContext);

	return (
		<button
			onClick={screenContext.navToggleHandler}
			className={`${styles['nav__button']}${
				screenContext.navOpen ? ` ${styles['nav__button--active']}` : ''
			}`}
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
