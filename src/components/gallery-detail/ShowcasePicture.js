import useDetailImageConfig from '../../hooks/detail-image-config';
import styles from './Showcase.module.css';

function ShowcasePicture(props) {
	const config = useDetailImageConfig(props.path);
	const imgSrc = require(`../../assets/gallery/${config.mobile.url}`);

	return (
		<picture>
			{config.sources.map((src, index) => {
				const srcset = require(`../../assets/gallery/${src.url}`);

				return (
					<source
						key={index}
						srcSet={srcset}
						media={`(min-width: ${src.minScreenWidth}px)`}
					/>
				);
			})}

			<img className={styles['showcase__img']} src={imgSrc} alt={props.alt} loading="lazy" />
		</picture>
	);
}

export default ShowcasePicture;
