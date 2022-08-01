import CustomLink from '../navigation/CustomLink';
import logo from '../../../assets/icons-logos/logo-circle.svg';
import styles from './Header.module.css';

function Logo() {
	return (
		<CustomLink className={styles['header__logo-cont']} to="/">
			<img
				className={styles['header__logo']}
				src={logo}
				alt="The Art of Kyle Jorve logo"
				loading="eager"
			/>
		</CustomLink>
	);
}

export default Logo;
