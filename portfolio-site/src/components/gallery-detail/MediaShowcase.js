import { Fragment } from 'react';
import ShowcaseSlide from './ShowcaseSlide';
import styles from './Showcase.module.css';

function MediaShowcase(props) {
	const item = props.item;

	return (
		<div className={styles['showcase__media']}>
			<div className={styles['showcase__slider']}>
				{item.detailKeys.map((key, index) => {
					const zIndex = item.detailKeys.length - index + 1;

					return <ShowcaseSlide key={index} index={index} zIndex={zIndex} item={key} />;
				})}
			</div>

			{item.detailKeys.length > 1 && (
				<Fragment>
					<div className={styles['slider__arrows']}>
						<button
							className={`${styles['slider__arrow']} ${styles['slider__arrow--prev']}`}
						></button>
						<button
							className={`${styles['slider__arrow']} ${styles['slider__arrow--next']}`}
						></button>
					</div>

					<div className={styles['slider__dots']}>
						{item.detailKeys.map((key, index) => {
							let dotDataAttrs = [
								`data-index="${index}"`,
								index === 0 && 'data-active',
							];

							return (
								<button
									key={index}
									className={`${styles['slider__dot']}${
										index === 0 && ` ${styles['slider__dot--active']}`
									}`}
									{...dotDataAttrs}
								></button>
							);
						})}
					</div>
				</Fragment>
			)}
		</div>
	);
}

export default MediaShowcase;
