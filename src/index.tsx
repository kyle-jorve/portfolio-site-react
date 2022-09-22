import React from 'react';
import ReactDOM from 'react-dom/client';
import ScrollToTop from './components/shell/navigation/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';
import { SiteContextProvider } from './context/global';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<SiteContextProvider>
				<App />
			</SiteContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
