import { useContext } from 'react';
import { useMatch } from 'react-router-dom';
import useGlobalData from '../../../hooks/data/global-data';
import ScreenContext from '../../../context/screen';
import FooterIcons from './FooterIcons';
import Copyright from './Copyright';
import styles from './Footer.module.css';

function Footer() {
	const screenContext = useContext(ScreenContext);
	const isCVPage = useMatch('/cv');
	const globalData = useGlobalData();
	const socialIcons = {
		standard: globalData.socialIcons.standard,
		commerce: globalData.socialIcons.commerce,
	};

	return (
		<footer
			className={`${styles.footer}${!!isCVPage ? ` ${styles['footer--light']}` : ''}`}
			aria-hidden={screenContext.navOpen}
		>
			<FooterIcons socialIcons={socialIcons} />

			<Copyright />
		</footer>
	);
}

export default Footer;
