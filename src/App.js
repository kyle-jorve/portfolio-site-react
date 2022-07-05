import { Fragment, useContext, useEffect, useRef } from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import ScreenContext from './context/screen';
import Header from './components/shell/header/Header';
import DetailHeader from './components/shell/header/DetailHeader';
import Home from './pages/Home';
import CV from './pages/CV';
import Gallery from './pages/Gallery';
import GalleryDetail from './pages/GalleryDetail';
import Footer from './components/shell/footer/Footer';
import MobileNavigation from './components/shell/navigation/MobileNavigation';

const body = document.querySelector('body');
let timeout;

function App() {
	const navRef = useRef();
	const screenContext = useContext(ScreenContext);
	const isDetailPage = useMatch('/gallery/:itemID');

	useEffect(() => {
		if (timeout) clearTimeout(timeout);

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
		<Fragment>
			{isDetailPage ? <DetailHeader /> : <Header />}

			<Routes>
				{/* home page */}
				<Route path="/" element={<Home />} />

				{/* CV page */}
				<Route path="/cv" element={<CV />} />

				{/* gallery page */}
				<Route path="/gallery" element={<Gallery />} />

				{/* gallery detail page */}
				<Route path="/gallery/:itemID" element={<GalleryDetail />} />
			</Routes>

			{!isDetailPage && screenContext.mobile && <MobileNavigation ref={navRef} />}

			<Footer />
		</Fragment>
	);
}

export default App;
