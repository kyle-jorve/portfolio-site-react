import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { globalData } from '../hooks/data/global-data';

const resizeEvents = ['resize', 'orientationchange'];
const breakpoint = 640;
const pages = globalData.nav;
const ScreenContext = React.createContext({
	mobile: true,
	navOpen: false,
	fromPage: 'home',
	fromSection: 'featured-work',
});

export function ScreenContextProvider(props) {
	const [mobile, setMobile] = useState(true);
	const [navOpen, setNavOpen] = useState(false);
	const [fromPage, setFromPage] = useState(null);
	const [fromSection, setFromSection] = useState(null);
	const [toSection, setToSection] = useState(null);
	const navigate = useNavigate();

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

		if (!fromPage) {
			navigate('/');

			return;
		}

		page = pages.find((p) => p.pageID === fromPage);

		if (!page) return;

		navigate(page.url);
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
				navToggleHandler,
				closeNav,
				setFromPage,
				setFromSection,
				setToSection,
				returnToOriginPage,
			}}
		>
			{props.children}
		</ScreenContext.Provider>
	);
}

export default ScreenContext;
