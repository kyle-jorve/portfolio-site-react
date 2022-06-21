import { Fragment } from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import Header from './components/shell/Header';
import PortfolioDetail from './pages/PortfolioDetail';
import Footer from './components/shell/Footer';
import MobileNavigation from './components/shell/MobileNavigation';

function App() {
	const isDetailPage = useMatch('/portfolio/:itemID');

	return (
		<Fragment>
			<Header />

			<Routes>
				{/* portfolio detail page */}
				<Route path="/portfolio/:itemID" element={<PortfolioDetail />} />
			</Routes>

			{!isDetailPage && <MobileNavigation />}

			<Footer />
		</Fragment>
	);
}

export default App;
