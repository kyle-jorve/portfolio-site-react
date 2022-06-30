import ShowcasePicture from './ShowcasePicture';
import styles from './Showcase.module.css';

function ShowcaseSlide(props) {
	let slideClasses = [
		styles['showcase__slide'],
		props.index === 0 && styles['showcase__slide--active'],
		!!props.item.source && styles['showcase__slide--video'],
	];
	let slideDataAttrs = [`data-index="${props.index}"`, props.index === 0 && 'data-active'];

	slideClasses = slideClasses.filter((sc) => sc);
	slideDataAttrs = slideDataAttrs.filter((sd) => sd);

	return (
		<div
			className={slideClasses.join(' ')}
			style={{
				zIndex: props.zIndex,
			}}
			data-index={props.index}
			{...slideDataAttrs}
		>
			<div
				className={`${styles['showcase__img-cont']}${
					props.index === 0 && ` ${styles['showcase__img-cont--active']}`
				}`}
			>
				{!!props.item.source ? (
					props.item.source
				) : (
					<ShowcasePicture
						path={props.item.path}
						alt={props.item.alt}
						dimensions={props.item.dimensions}
					/>
				)}
			</div>
		</div>
	);
}

export default ShowcaseSlide;
