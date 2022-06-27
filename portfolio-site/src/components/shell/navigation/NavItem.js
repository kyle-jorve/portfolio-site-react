import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

function NavItem(props) {
	const url = new URL(props.url);
	const curHost = window.location.host;
	const externalLink = curHost === url.host;

	return externalLink ? (
		<a href={props.url} target="_blank" rel="noreferrer" className={styles['nav__a']}>
			{props.children}
		</a>
	) : (
		<NavLink
			to={props.url}
			className={`${styles['nav__a']} ${(navData) =>
				navData.isActive ? styles['nav__a--current'] : ''}`}
		>
			{props.children}
		</NavLink>
	);
}

export default NavItem;
