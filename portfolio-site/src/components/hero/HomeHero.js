import { useState, useEffect, useCallback } from 'react';
import styles from './Hero.module.css';

function HomeHero(props) {
	const [screenState, setScreenState] = useState({
		desktop: false,
		largeTablet: false,
		tablet: false,
		mobile: false,
	});
	const imgConfig = {
		desktop: require(`../../assets/images/home-hero/home-hero-1920.jpg`),
		largeTablet: require(`../../assets/images/home-hero/home-hero-1440.jpg`),
		tablet: require(`../../assets/images/home-hero/home-hero-1024.jpg`),
		mobile: require(`../../assets/images/home-hero/home-hero-640.jpg`),
	};

	const resizeHandler = useCallback(() => {
		const breakpoints = {
			desktop: 1440,
			largeTablet: 1024,
			tablet: 640,
		};

		for (let key in breakpoints) {
			if (window.innerWidth >= breakpoints[key]) {
				setScreenState((prev) => {
					let newState = {};

					for (let state in prev) {
						if (state === key) continue;

						newState[state] = false;
					}

					return {
						...newState,
						[key]: true,
					};
				});

				break;
			}
		}

		if (!Object.values(breakpoints).some((bp) => window.innerWidth >= bp)) {
			setScreenState({
				desktop: false,
				largeTablet: false,
				tablet: false,
				mobile: true,
			});
		}
	}, []);

	useEffect(() => {
		['resize', 'orientationchange'].forEach((ev) => window.addEventListener(ev, resizeHandler));
	}, [resizeHandler]);

	return (
		<section
			className={styles.hero}
			style={`background-image: url('${imgConfig[screenState]}');`}
		>
			<h1 className={styles['hero__title']}>
				<span className={styles['hero__title-text']}>{props.title}</span>
				<small className={styles['hero__subtitle']}>{props.subtitle}</small>
			</h1>

			<a className={styles['hero__scroll']} href="#featured-work">
				<span className={styles['hero__scroll-icon']}>
					<span className={styles['hero__scroll-track']}>
						<span className={styles['hero__scroll-ball']}></span>
					</span>
				</span>
			</a>
		</section>
	);
}

export default HomeHero;
