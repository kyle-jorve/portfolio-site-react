import styles from './Hero.module.css';

function HomeHero(props) {
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

	return (
		<section className={`section ${styles.hero}`}>
			<h1 className={styles['hero__title']}>
				<span className={styles['hero__title-text']}>Kyle Jorve</span>
				<small className={styles['hero__subtitle']}>Illustration and Design</small>
			</h1>

			<a
				className={styles['scroll']}
				href="#featured-work"
				title="Featured Work"
				aria-label="scroll to Featured Work"
			>
				<span className={styles['scroll__track']}>
					<span className={styles['scroll__ball']}></span>
				</span>
			</a>

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

						<img className={styles['hero__bg-img']} src={bgConfig.mobile.src} alt="" />
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
					/>
				</picture>
			</div>
		</section>
	);
}

export default HomeHero;
