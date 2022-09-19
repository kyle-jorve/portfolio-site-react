import logoIcon from '../../assets/icons-logos/logo-circle-icon.svg';
import styles from './CV.module.css';

function Bio(props) {
	const heroImg = require(`../../assets/${props.heroImg.url}`);

	return (
		<div className={styles.bio}>
			<div className={styles['bio__hero']} aria-hidden="true">
				<img
					className={styles['bio__bg']}
					src={heroImg}
					alt=""
					loading="eager"
					fetchpriority="low"
				/>
			</div>

			<section className={`section ${styles['bio__content']}`}>
				<div className="wrapper wrapper--narrow">
					<div className={styles['bio__img-cont']}>
						<img
							className={styles['bio__img']}
							src={heroImg}
							alt={props.heroImg.alt}
							loading="eager"
							fetchpriority="low"
						/>
					</div>

					<h1 className={`underline underline--center ${styles['bio__title']}`}>
						{props.bio.title}
					</h1>

					{props.bio.content}
				</div>
			</section>

			<img
				className="logo-icon"
				src={logoIcon}
				alt=""
				aria-hidden="true"
				loading="lazy"
				fetchpriority="low"
			/>
		</div>
	);
}

export default Bio;
