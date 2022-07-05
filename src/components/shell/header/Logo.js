import { Link } from 'react-router-dom';
import logo from '../../../assets/icons-logos/logo-circle.svg';
import styles from './Header.module.css';

function Logo() {
	return (
		<Link className={styles['header__logo-cont']} to="/">
			<img className={styles['header__logo']} src={logo} alt="The Art of Kyle Jorve logo" />
		</Link>
	);
}

export default Logo;
