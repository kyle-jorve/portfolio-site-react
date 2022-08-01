import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ScreenContext from '../../../context/screen';
import styles from './Nav.module.css';

function NavItem(props) {
	const navigate = useNavigate();
	const screenContext = useContext(ScreenContext);
	const onClick = props.onClick || (() => {});
	const url = new URL(
		props.url.includes('http')
			? props.url
			: `${window.location.protocol}//${window.location.host}${props.url}`
	);
	const curHost = window.location.host;
	const externalLink = curHost !== url.host;
	let classes = [!props.isMobile && styles['nav__a'], props.className];

	function navLinkClickHandler(event) {
		event.preventDefault();

		screenContext.setLoadStatus('in');

		setTimeout(() => {
			navigate(props.url);

			onClick();

			screenContext.setLoadStatus('out');
		}, screenContext.loadDuration);
	}

	return externalLink ? (
		<a href={props.url} target="_blank" rel="noopener noreferrer" className={classes.join(' ')}>
			{props.children}
		</a>
	) : (
		<NavLink
			onClick={navLinkClickHandler}
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
