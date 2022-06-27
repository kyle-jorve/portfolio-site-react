import { Fragment } from 'react';
import CVItem from '../components/cv/CVItem';
import { cvData } from '../data/cv-data';
import logoIcon from '../assets/icons-logos/logo-circle-icon.svg';
import resume from '../assets/documents/resume_kyle-jorve.pdf';
import styles from '../components/cv/CV.module.css';

function CV() {
	const heroImg = require(`../assets/${cvData.heroImg.url}`);

	return (
		<Fragment>
			<section className={styles.bio}>
				<div className={styles['bio__hero']} aria-hidden="true">
					<img className={styles['bio__bg']} src={heroImg} alt="" />
				</div>

				<div className={styles['bio__content']}>
					<div className="wrapper wrapper--content">
						<div className={styles['bio__img-cont']}>
							<img
								className={styles['bio__img']}
								src={heroImg}
								alt={cvData.heroImg.alt}
							/>
						</div>

						<h1 className="bio__title">{cvData.bio.title}</h1>

						{cvData.bio.content}
					</div>
				</div>

				<img className="logo-icon" src={logoIcon} alt="" aria-hidden="true" />
			</section>

			<section className={styles.resume} id="resume">
				<div class="wrapper wrapper--content">
					<h2 className={styles['resume__title']}>{cvData.resume.title}</h2>

					<div className={styles['resume__button-cont']}>
						<a
							className="button button--primary button--download"
							href={resume}
							download
						>
							{cvData.resume.btnText}
						</a>
					</div>

					{cvData.resume.items.map((item, index) => {
						return (
							<CVItem
								title={item.heading}
								content={item.content}
								showHR={index + 1 < cvData.resume.items.length}
							/>
						);
					})}
				</div>
			</section>
		</Fragment>
	);
}

export default CV;
