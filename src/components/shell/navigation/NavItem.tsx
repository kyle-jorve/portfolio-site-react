import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ScreenContext from '../../../context/screen';
import styles from './Nav.module.css';

let timeout;

function NavItem(props) {
	const navigate = useNavigate();
	const [navItemsAnimationDone, setNavItemsAnimationDone] = useState(false);
	const screenContext = useContext(ScreenContext);
	const onClick = props.onClick || (() => {});
	const url = new URL(
		props.url.includes('http')
			? props.url
			: `${window.location.protocol}//${window.location.host}${props.url}`
	);
	const curHost = window.location.host;
	const externalLink = curHost !== url.host;
	const totalDelay = props.totalDelay;
	let classes = [!props.isMobile && styles['nav__a'], props.className];

	function navLinkClickHandler(event) {
		if (!screenContext.desktop) {
			onClick();

			return;
		}

		event.preventDefault();

		screenContext.setLoadStatus('in');

		setTimeout(() => {
			navigate(props.url);

			onClick();

			screenContext.setLoadStatus('out');

			setTimeout(() => {
				screenContext.setLoadStatus('done');
			}, screenContext.longTransitionDuration);
		}, screenContext.longTransitionDuration);
	}

	useEffect(() => {
		if (screenContext.navOpen) {
			timeout = setTimeout(() => {
				setNavItemsAnimationDone(true);
			}, totalDelay);
		} else {
			setNavItemsAnimationDone(false);
		}

		return () => {
			if (timeout) clearTimeout(timeout);
		};
	}, [screenContext.navOpen, totalDelay]);

	return externalLink ? (
		<a
			href={props.url}
			target="_blank"
			rel="noopener noreferrer"
			className={classes.join(' ')}
			style={{
				transitionDelay:
					props.isMainNav && !navItemsAnimationDone && screenContext.desktop
						? `${props.index * 100}ms`
						: '',
			}}
			{...props.attributes}
		>
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
			style={{
				transitionDelay:
					props.isMainNav && !navItemsAnimationDone && screenContext.desktop
						? `${props.index * screenContext.transitionDelay}ms`
						: '',
			}}
			{...props.attributes}
		>
			{props.children}
		</NavLink>
	);
}

export default NavItem;
