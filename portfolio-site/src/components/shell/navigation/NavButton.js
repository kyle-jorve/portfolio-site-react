import styles from './Nav.module.css';

function NavButton(props = { closeBtn: false }) {
	return (
		<button className={styles['nav__button']}>
			{props.closeBtn ? (
				<div className={styles['nav__button-lines']} aria-hidden="true">
					<span
						className={`${styles['nav__button-line']} ${styles['nav__button-line--1']}`}
					></span>
					<span
						className={`${styles['nav__button-line']} ${styles['nav__button-line--2']}`}
					></span>
				</div>
			) : (
				<div
					className={styles['nav__button-blocks']}
					aria-hidden="true"
				>
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
			)}
		</button>
	);
}

export default NavButton;
