import { useContext } from 'react';
import ScreenContext from '../../context/screen';
import styles from './Hero.module.css';
import logo from '../../assets/icons-logos/logo-circle.svg';

function HomeHero(props) {
	const screenContext = useContext(ScreenContext);
	const bgConfig = {
		sources: [
			{
				srcset: require(`../../assets/${props.imageKey}-1920.jpg`),
				minScreenWidth: 1440,
			},
			{
				srcset: require(`../../assets/${props.imageKey}-1440.jpg`),
				minScreenWidth: 1024,
			},
			{
				srcset: require(`../../assets/${props.imageKey}-1024.jpg`),
				minScreenWidth: 640,
			},
		],
		mobile: {
			src: require(`../../assets/${props.imageKey}-640.jpg`),
		},
	};
	const classes = [
		'section',
		styles.hero,
		screenContext.loadStatus === 'done' && styles['hero--animate'],
		screenContext.visited && styles['hero--static'],
	].filter((c) => c);

	function scrollIconClickHandler() {
		const featuredWorkSection = document.querySelector('#featured-work');

		if (!featuredWorkSection) return;

		featuredWorkSection.scrollIntoView({
			behavior: 'smooth',
		});
	}

	return (
		<section className={classes.join(' ')}>
			<img
				className={styles['hero__logo']}
				src={logo}
				alt=""
				loading="eager"
				aria-hidden="true"
			/>

			<h1 className={styles['hero__title']}>
				<span className={styles['hero__title-1']}>Kyle Jorve</span>
				<small className={styles['hero__title-2']}>Illustration and Design</small>
			</h1>

			<button
				className={styles['scroll']}
				aria-label="scroll to Featured Work"
				onClick={scrollIconClickHandler}
			>
				<span className={styles['scroll__track']}>
					<span className={styles['scroll__ball']}></span>
				</span>
			</button>

			<div className={styles['hero__bg']} aria-hidden="true">
				<div className={styles['hero__img-frame']}>
					<picture>
						{bgConfig.sources.map((src, index) => {
							return (
								<source
									key={index}
									srcSet={src.srcset}
									media={`(min-width: ${src.minScreenWidth}px)`}
								/>
							);
						})}

						<img
							className={styles['hero__bg-img']}
							src={bgConfig.mobile.src}
							alt=""
							loading="eager"
						/>
					</picture>
				</div>

				<picture>
					{bgConfig.sources.map((src, index) => {
						return (
							<source
								key={index}
								srcSet={src.srcset}
								media={`(min-width: ${src.minScreenWidth}px)`}
							/>
						);
					})}

					<img
						className={`${styles['hero__bg-img']} ${styles['hero__bg-img--blur']}`}
						src={bgConfig.mobile.src}
						alt=""
						loading="eager"
					/>
				</picture>
			</div>
		</section>
	);
}

export default HomeHero;
