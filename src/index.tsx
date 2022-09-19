import React from 'react';
import ReactDOM from 'react-dom/client';
import ScrollToTop from './components/shell/navigation';
import { BrowserRouter } from 'react-router-dom';
import { ScreenContextProvider } from './context/screen';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<ScreenContextProvider>
				<App />
			</ScreenContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
