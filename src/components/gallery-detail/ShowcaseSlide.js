import ShowcasePicture from './ShowcasePicture';
import styles from './Showcase.module.css';

function ShowcaseSlide(props) {
	let slideClasses = [
		styles['showcase__slide'],
		props.active && styles['showcase__slide--active'],
		!!props.item.source && styles['showcase__slide--video'],
	];
	let slideDataAttrs = {
		'data-index': props.index,
	};

	slideClasses = slideClasses.filter((sc) => sc);

	return (
		<div
			className={slideClasses.join(' ')}
			style={{
				zIndex: props.zIndex,
			}}
			{...slideDataAttrs}
		>
			<div
				className={`${styles['showcase__img-cont']}${
					props.active ? ` ${styles['showcase__img-cont--active']}` : ''
				}`}
			>
				{!!props.item.source ? (
					props.item.source
				) : (
					<ShowcasePicture path={props.item.path} alt={props.item.alt} />
				)}
			</div>
		</div>
	);
}

export default ShowcaseSlide;
