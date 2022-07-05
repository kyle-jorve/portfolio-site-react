import { Link } from 'react-router-dom';
import styles from './CV.module.css';

function HomeBio(props) {
	const squareImg = require(`../../assets/${props.img.square}`);
	const imgConfig = {
		sources: props.img.sources.map((src) => {
			return {
				srcset: require(`../../assets/${src.url}`),
				minScreenWidth: src.minScreenWidth,
			};
		}),
		mobile: {
			src: require(`../../assets/${props.img.mobileSource}`),
		},
	};

	return (
		<section className={`section ${styles['bio-home']}`} id="bio">
			<div className="wrapper wrapper--wide">
				<article className={styles['bio-home__content']}>
					<div className={styles['bio__img-cont']} aria-hidden="true">
						<img className={styles['bio__img']} src={squareImg} alt="" />
					</div>

					<div className={styles['bio-home__box']}>
						<h2 className={`underline underline--center ${styles['bio-home__title']}`}>
							{props.title}
						</h2>

						{props.content}

						<div className={`${styles['bio-home__button-cont']}`}>
							<Link className="button button--primary" to={props.url}>
								See R&eacute;sum&eacute;
							</Link>
						</div>
					</div>

					<div className={styles['bio-home__img-cont']}>
						<picture>
							{imgConfig.sources.map((src, index) => {
								return (
									<source
										key={index}
										srcSet={src.srcset}
										media={`(min-width: ${src.minScreenWidth}px)`}
									/>
								);
							})}

							<img
								className={styles['bio-home__img']}
								src={imgConfig.mobile.src}
								alt={props.img.alt}
							/>
						</picture>
					</div>
				</article>
			</div>
		</section>
	);
}

export default HomeBio;
