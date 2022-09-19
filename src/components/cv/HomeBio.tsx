import { useContext } from 'react';
import CustomLink from '../shell/navigation/CustomLink';
import ScreenContext from '../../context/screen';
import styles from './CV.module.css';

function HomeBio(props) {
	const screenContext = useContext(ScreenContext);
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
						<img
							className={styles['bio__img']}
							src={squareImg}
							alt=""
							loading="lazy"
							fetchpriority="low"
						/>
					</div>

					<div className={styles['bio-home__box']}>
						<h2 className={`underline underline--center ${styles['bio-home__title']}`}>
							{props.title}
						</h2>

						{props.content}

						<div className={`${styles['bio-home__button-cont']}`}>
							<CustomLink
								className="button button--primary"
								to={props.url}
								onClick={() => screenContext.setToSection('resume')}
								attributes={{
									tabIndex: screenContext.navOpen ? -1 : null,
								}}
							>
								See R&eacute;sum&eacute;
							</CustomLink>
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
								loading="lazy"
								fetchpriority="low"
							/>
						</picture>
					</div>
				</article>
			</div>
		</section>
	);
}

export default HomeBio;
