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
						srcset={srcset}
						media={`(min-width: ${src.minScreenWidth})`}
					/>
				);
			})}

			<img
				className={styles['showcase__img']}
				src={imgSrc}
				alt={props.alt}
				width={props.dimensions[0]}
				height={props.dimensions[1]}
			/>
		</picture>
	);
}

export default ShowcasePicture;
