import { Link } from 'react-router-dom';
import styles from './CV.module.css';

function HomeBio(props) {
	const squareImg = require(`../../assets/${props.img.square}`);

	return (
		<section className={styles['bio-home']} id="bio">
			<div className={`wrapper wrapper--wide ${styles['bio-home__row']}`}>
				<article className={styles['bio-home__content']}>
					<div className={styles['bio-home__mobile-img-cont']} aria-hidden="true">
						<img
							className={styles['bio-home__mobile-img']}
							src={squareImg}
							alt={props.bio.img.alt}
						/>
					</div>

					<div className={styles['bio-home__box']}>
						<h2 className={styles['bio-home__title']}>{props.title}</h2>
						{props.content}
					</div>

					<div className={`${styles['bio-home__button-cont']}`}>
						<Link className="button button--primary" to={props.url}>
							{props.buttonText}
						</Link>
					</div>
				</article>
			</div>
		</section>
	);
}

export default HomeBio;
