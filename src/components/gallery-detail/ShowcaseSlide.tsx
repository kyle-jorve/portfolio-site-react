import ShowcasePicture from './ShowcasePicture';
import styles from './Showcase.module.css';

function ShowcaseSlide(props) {
	const slideClasses = [
		styles['showcase__slide'],
		props.index === props.activeIndex
			? styles['showcase__slide--active']
			: props.index < props.activeIndex
			? styles['showcase__slide--prev']
			: '',
		!!props.item.source && styles['showcase__slide--video'],
	].filter((c) => c);

	return (
		<div
			className={slideClasses.join(' ')}
			style={{
				zIndex: props.zIndex,
			}}
			data-index={props.index}
		>
			<div className={styles['showcase__img-cont']}>
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
