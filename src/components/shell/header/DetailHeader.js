import { useContext } from 'react';
import ScreenContext from '../../../context/screen';
import Logo from './Logo';
import styles from './Header.module.css';

function DetailHeader() {
	const screenContext = useContext(ScreenContext);

	return (
		<header className={styles.header}>
			<Logo />

			<button
				className="close-button"
				aria-label={`return to ${screenContext.fromPage} page`}
				onClick={screenContext.returnToOriginPage}
			></button>
		</header>
	);
}

export default DetailHeader;
