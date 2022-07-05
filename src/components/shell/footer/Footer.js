import { globalData } from '../../../hooks/data/global-data';
import FooterIcons from './FooterIcons';
import Copyright from './Copyright';
import styles from './Footer.module.css';

const socialIcons = {
	standard: globalData.socialIcons.standard,
	commerce: globalData.socialIcons.commerce,
};

function Footer() {
	return (
		<footer className={styles.footer}>
			<FooterIcons socialIcons={socialIcons} />

			<Copyright />
		</footer>
	);
}

export default Footer;
