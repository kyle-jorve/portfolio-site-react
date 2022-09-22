import React, { Suspense, useContext, useEffect, useRef } from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import SiteContext from './context/global';
import Home from './pages/Home';
import Header from './components/shell/header/Header';
import MainNavigation from './components/shell/navigation/MainNavigation';
import DetailHeader from './components/shell/header/DetailHeader';
import Footer from './components/shell/footer/Footer';
import MobileNavigation from './components/shell/navigation/MobileNavigation';
import Loader from './components/shell/loader/Loader';

const body = document.querySelector('body') as HTMLBodyElement;
const CV = React.lazy(() => {
	return import('./pages/CV');
});
const Gallery = React.lazy(() => {
	return import('./pages/Gallery');
});
const GalleryDetail = React.lazy(() => {
	return import('./pages/GalleryDetail');
});
const NotFound = React.lazy(() => {
	return import('./pages/NotFound');
});
let timeout: ReturnType<typeof setTimeout>;

function App() {
	const navRef = useRef() as React.MutableRefObject<HTMLElement>;
	const siteContext = useContext(SiteContext);
	const isDetailPage = useMatch('/gallery/:itemID');

	useEffect(() => {
		if (timeout) clearTimeout(timeout);

		siteContext.toggleLoader(false);

		if (isDetailPage) {
			body.style.paddingBottom = '';
		}
		else {
			timeout = setTimeout(() => {
				if (siteContext.mobile) {
					body.style.paddingBottom = `${navRef.current?.offsetHeight}px`;
				} else {
					body.style.paddingBottom = '';
				}
			}, 200);
		}
	}, [siteContext.mobile, isDetailPage, siteContext.longTransitionDuration]);

	return (
		<Suspense>
			{isDetailPage ? <DetailHeader /> : <Header />}

			<MainNavigation />

			<Loader />

			<main aria-hidden={siteContext.navOpen}>
				<Routes>
					{/* home page */}
					<Route path="/" element={<Home />} />

					{/* CV page */}
					<Route path="/cv" element={<CV />} />

					{/* gallery page */}
					<Route path="/gallery" element={<Gallery />} />

					{/* gallery detail page */}
					<Route path="/gallery/:itemID" element={<GalleryDetail />} />

					{/* 404 page */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>

			<Footer />

			{!isDetailPage && siteContext.mobile && <MobileNavigation ref={navRef} />}
		</Suspense>
	);
}

export default App;
