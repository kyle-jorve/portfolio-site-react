import useDetailImageConfig from '../../hooks/detail-image-config';
import styles from './Showcase.module.css';

type ShowcasePictureProps = {
	path?: string;
	alt?: string;
};

function ShowcasePicture(props: ShowcasePictureProps) {
	const config = useDetailImageConfig(props.path ? props.path : false);
	const imgSrc = config ? require(`../../assets/gallery/${config.mobile.url}`) : undefined;

	return (
		<picture>
			{!!config &&
				config.sources.map((src, index) => {
					const srcset = require(`../../assets/gallery/${src.url}`);

					return <source key={index} srcSet={srcset} media={`(min-width: ${src.minScreenWidth}px)`} />;
				})}

			<img
				className={`img--lazy ${styles['showcase__img']}`}
				src={imgSrc}
				alt={props.alt}
				loading="eager"
				onLoad={event => event.currentTarget.classList.add('loaded')}
			/>
		</picture>
	);
}

export default ShowcasePicture;
