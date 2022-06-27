import { Fragment } from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import Header from './components/shell/header/Header';
import GalleryDetail from './pages/GalleryDetail';
import Footer from './components/shell/footer';
import MobileNavigation from './components/shell/MobileNavigation';

function App() {
	const isDetailPage = useMatch('/gallery/:itemID');

	return (
		<Fragment>
			<Header />

			<Routes>
				{/* gallery detail page */}
				<Route path="/gallery/:itemID" element={<GalleryDetail />} />
			</Routes>

			{!isDetailPage && <MobileNavigation />}

			<Footer />
		</Fragment>
	);
}

export default App;
