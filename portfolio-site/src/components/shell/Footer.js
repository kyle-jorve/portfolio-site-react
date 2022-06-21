import { globalData } from '../../data/global-data';
import styles from './Footer.module.css';
import socialStyles from './Social.module.css';
import SocialIcon from './SocialIcon';

const data = {
	socialIcons: {
		standard: [
			...globalData.socialIcons.standard,
			{
				name: 'email',
				cssClass: 'envelope',
				url: `mailto:${globalData.email}`,
			},
		],
		commerce: globalData.socialIcons.commerce,
	},
	copyright: globalData.copyright,
};

function Footer() {
	return (
		<footer className={styles.footer}>
			<section
				className={styles['footer__icons']}
				style={`grid-template: auto / minmax(0, ${data.socialIcons.standard.length}fr) minmax(0, ${data.socialIcons.commerce.length}fr);`}
			>
				<div
					className={`${socialStyles.social} ${socialStyles['social--footer']} ${socialStyles['social--standard']}`}
				>
					{data.socialIcons.standard.map((item) => {
						return (
							<SocialIcon
								name={item.name}
								url={item.url}
								className={item.cssClass}
								icon={item.icon}
							/>
						);
					})}
				</div>

				<div
					className={`${socialStyles.social} ${socialStyles['social--footer']} ${socialStyles['social--commerce']}`}
				>
					{data.socialIcons.commerce.map((item) => {
						return (
							<SocialIcon
								name={item.name}
								url={item.url}
								className={item.cssClass}
								icon={item.icon}
							/>
						);
					})}
				</div>
			</section>

			<section className={styles['footer__copyright']}>
				<div className="wrapper wrapper--content">{data.copyright}</div>
			</section>
		</footer>
	);
}

export default Footer;
