import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useGlobalData from '../hooks/data/global-data';

const resizeEvents = ['resize', 'orientationchange'];
const breakpoints = [640, 1024];
const ScreenContext = React.createContext({
	mobile: true,
	navOpen: false,
	fromPage: 'home',
	fromSection: 'featured-work',
	loadStatus: 'idle',
});

export function ScreenContextProvider(props) {
	const navButtonRef = useRef();
	const globalData = useGlobalData();
	const pages = globalData.nav;
	const [visited, setVisited] = useState(false);
	const [mobile, setMobile] = useState(true);
	const [desktop, setDesktop] = useState(true);
	const [navOpen, setNavOpen] = useState(false);
	const [navRevealed, setNavRevealed] = useState(false);
	const [fromPage, setFromPage] = useState(null);
	const [fromSection, setFromSection] = useState(null);
	const [toSection, setToSection] = useState(null);
	const [loadStatus, setLoadStatus] = useState('idle');
	const navigate = useNavigate();
	const longTransitionDuration = 600; // milliseconds
	const transitionDuration = 300; // milliseconds
	const transitionDelay = 100;

	useEffect(() => {
		function resizeHandler() {
			if (window.innerWidth >= breakpoints[1]) {
				setDesktop(true);
				setMobile(false);
			} else if (window.innerWidth >= breakpoints[0]) {
				setDesktop(false);
				setMobile(false);
			} else {
				setDesktop(false);
				setMobile(true);
			}
		}

		resizeHandler();

		resizeEvents.forEach((ev) => window.addEventListener(ev, resizeHandler));

		return () => {
			resizeEvents.forEach((ev) => window.removeEventListener(ev, resizeHandler));
		};
	}, []);

	function navToggleHandler() {
		navButtonRef.current.style.pointerEvents = 'none';

		setTimeout(() => {
			navButtonRef.current.style.pointerEvents = '';
		}, transitionDuration + [...globalData.socialIcons.standard, ...globalData.socialIcons.commerce].length * 100);

		setNavOpen((prev) => {
			if (!prev) {
				setNavRevealed(true);
			} else {
				setTimeout(() => {
					setNavRevealed(false);
				}, transitionDuration);
			}

			return !prev;
		});
	}

	function closeNav() {
		setNavOpen(false);

		setTimeout(() => {
			setNavRevealed(false);
		}, transitionDuration);
	}

	function returnToOriginPage() {
		const timeout = desktop ? longTransitionDuration : 0;
		let page;

		setLoadStatus('in');

		setTimeout(() => {
			if (!fromPage) {
				navigate('/');

				return;
			}

			page = pages.find((p) => p.pageID === fromPage);

			if (!page) return;

			navigate(page.url);
		}, timeout);
	}

	return (
		<ScreenContext.Provider
			value={{
				mobile,
				breakpoints,
				navOpen,
				navRevealed,
				fromPage,
				fromSection,
				toSection,
				loadStatus,
				longTransitionDuration,
				transitionDuration,
				transitionDelay,
				desktop,
				navButtonRef,
				visited,
				navToggleHandler,
				closeNav,
				setFromPage,
				setFromSection,
				setToSection,
				returnToOriginPage,
				setLoadStatus,
				setVisited,
			}}
		>
			{props.children}
		</ScreenContext.Provider>
	);
}

export default ScreenContext;
