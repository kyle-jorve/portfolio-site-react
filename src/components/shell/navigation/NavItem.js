import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

function NavItem(props) {
	const url = new URL(
		props.url.includes('http')
			? props.url
			: `${window.location.protocol}//${window.location.host}${props.url}`
	);
	const curHost = window.location.host;
	const externalLink = curHost !== url.host;
	let classes = [!props.isMobile && styles['nav__a'], props.className];

	return externalLink ? (
		<a href={props.url} target="_blank" rel="noopener noreferrer" className={classes.join(' ')}>
			{props.children}
		</a>
	) : (
		<NavLink
			onClick={props.onClick}
			to={props.url}
			className={(navData) => {
				if (navData.isActive) {
					classes.push(styles['nav__a--current']);
				}

				return classes.join(' ');
			}}
		>
			{props.children}
		</NavLink>
	);
}

export default NavItem;
