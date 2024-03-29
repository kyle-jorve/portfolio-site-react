import { useContext } from 'react';
import SocialIcon from '../icons/SocialIcon';
import ScreenContext from '../../../context/screen';
import styles from './Footer.module.css';
import socialStyles from '../icons/Social.module.css';

function FooterIcons(props) {
	const screenContext = useContext(ScreenContext);
	const iconsLength = props.socialIcons.standard.length + props.socialIcons.commerce.length;
	let ratio = [1, 1];

	if (props.socialIcons.standard.length > props.socialIcons.commerce.length) {
		ratio[0] = 1 + iconsLength / 100;
	} else if (props.socialIcons.commerce.length > props.socialIcons.standard.length) {
		ratio[1] = 1 + iconsLength / 100;
	}

	return (
		<section
			className={styles['footer__icons']}
			style={{
				gridTemplate: `auto / minmax(0, ${ratio[0]}fr) minmax(0, ${ratio[1]}fr)`,
			}}
		>
			<div
				className={`${socialStyles.social} ${styles['footer__social']} ${styles['footer__social--standard']}`}
			>
				{props.socialIcons.standard.map((item, index) => {
					return (
						<SocialIcon
							key={index}
							name={item.name}
							url={item.url}
							attributes={{
								tabIndex: screenContext.navOpen ? -1 : null,
							}}
						>
							{!!item.icon && item.icon}
						</SocialIcon>
					);
				})}
			</div>

			<div
				className={`${socialStyles.social} ${styles['footer__social']} ${styles['footer__social--commerce']}`}
			>
				{props.socialIcons.commerce.map((item, index) => {
					return (
						<SocialIcon
							key={index}
							name={item.name}
							url={item.url}
							attributes={{
								tabIndex: screenContext.navOpen ? -1 : null,
							}}
						>
							{!!item.icon && item.icon}
						</SocialIcon>
					);
				})}
			</div>
		</section>
	);
}

export default FooterIcons;
