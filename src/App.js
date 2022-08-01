import React, { Suspense, useContext, useEffect, useRef } from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import ScreenContext from './context/screen';
import Home from './pages/Home';
import Header from './components/shell/header/Header';
import DetailHeader from './components/shell/header/DetailHeader';
import Footer from './components/shell/footer/Footer';
import MobileNavigation from './components/shell/navigation/MobileNavigation';
import Loader from './components/shell/loader/Loader';

const body = document.querySelector('body');
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
let timeout;

function App() {
	const navRef = useRef();
	const screenContext = useContext(ScreenContext);
	const isDetailPage = useMatch('/gallery/:itemID');

	useEffect(() => {
		if (timeout) clearTimeout(timeout);

		screenContext.setLoadStatus('out');

		if (isDetailPage) {
			body.style.paddingBottom = '';

			return;
		}

		timeout = setTimeout(() => {
			if (screenContext.mobile) {
				body.style.paddingBottom = `${navRef.current.offsetHeight}px`;
			} else {
				body.style.paddingBottom = '';
			}
		}, 200);
	}, [screenContext.mobile, isDetailPage]);

	return (
		<Suspense>
			{isDetailPage ? <DetailHeader /> : <Header />}

			<Loader />

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

			{!isDetailPage && screenContext.mobile && <MobileNavigation ref={navRef} />}

			<Footer />
		</Suspense>
	);
}

export default App;
