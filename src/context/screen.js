import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGlobalData from '../hooks/data/global-data';

const resizeEvents = ['resize', 'orientationchange'];
const breakpoint = 640;
const ScreenContext = React.createContext({
	mobile: true,
	navOpen: false,
	fromPage: 'home',
	fromSection: 'featured-work',
	loadStatus: 'idle',
});

export function ScreenContextProvider(props) {
	const globalData = useGlobalData();
	const pages = globalData.nav;
	const [mobile, setMobile] = useState(true);
	const [navOpen, setNavOpen] = useState(false);
	const [fromPage, setFromPage] = useState(null);
	const [fromSection, setFromSection] = useState(null);
	const [toSection, setToSection] = useState(null);
	const [loadStatus, setLoadStatus] = useState('idle');
	const navigate = useNavigate();
	const loadDuration = 600; // milliseconds

	useEffect(() => {
		function resizeHandler() {
			if (window.innerWidth >= breakpoint) {
				setMobile(false);
			} else {
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
		setNavOpen((prev) => !prev);
	}

	function closeNav() {
		setNavOpen(false);
	}

	function returnToOriginPage() {
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
		}, loadDuration);
	}

	return (
		<ScreenContext.Provider
			value={{
				mobile,
				breakpoint,
				navOpen,
				fromPage,
				fromSection,
				toSection,
				loadStatus,
				loadDuration,
				navToggleHandler,
				closeNav,
				setFromPage,
				setFromSection,
				setToSection,
				returnToOriginPage,
				setLoadStatus,
			}}
		>
			{props.children}
		</ScreenContext.Provider>
	);
}

export default ScreenContext;
