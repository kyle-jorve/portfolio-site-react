import { Fragment, useContext } from 'react';
import DetailPageContext from '../../context/detail-page';
import ShowcaseSlide from './ShowcaseSlide';
import ShowcasePicture from './ShowcasePicture';
import styles from './Showcase.module.css';
import { GalleryItemType } from '../../hooks/data/gallery-data';

type MediaShowcaseProps = {
	item: GalleryItemType;
};

function MediaShowcase(props: MediaShowcaseProps) {
	const context = useContext(DetailPageContext);
	const item = props.item;
	const slidesLength = item.detailKeys?.length;

	function dotClickHandler(event: React.MouseEvent) {
		const target = event.currentTarget as HTMLButtonElement;
		const index = Number(target.dataset.index);

		context.goToSlide(index);
	}

	function arrowClickHandler(event: React.MouseEvent) {
		const target = event.currentTarget as HTMLButtonElement;
		const isPrev = target.dataset.direction === 'prev';

		if (isPrev) {
			context.goToPrevSlide(slidesLength);
		} else {
			context.goToNextSlide(slidesLength);
		}
	}

	return (
		<div className={styles['showcase__media']}>
			<div className={styles['showcase__slider']}>
				{item.detailKeys?.map((key, index) => {
					const zIndex = item.detailKeys && item.detailKeys.length - index + 1;

					return (
						<ShowcaseSlide
							key={index}
							index={index}
							activeIndex={context.activeSlideIndex}
							zIndex={zIndex || undefined}
							item={key}
						/>
					);
				})}
			</div>

			{item.detailKeys && item.detailKeys.length > 1 && (
				<Fragment>
					<div className={styles['slider__arrows']}>
						<button
							onClick={arrowClickHandler}
							className={`${styles['slider__arrow']} ${styles['slider__arrow--prev']}`}
							data-direction="prev"
						></button>

						<button
							onClick={arrowClickHandler}
							className={`${styles['slider__arrow']} ${styles['slider__arrow--next']}`}
							data-direction="next"
						></button>
					</div>

					<div className={styles['slider__dots']}>
						{item.detailKeys.map((key, index) => {
							return (
								<button
									key={index}
									onClick={dotClickHandler}
									className={`${styles['slider__dot']}${
										index === context.activeSlideIndex ? ` ${styles['slider__dot--active']}` : ''
									}`}
									data-index={index}
								></button>
							);
						})}
					</div>
				</Fragment>
			)}

			<div className={styles['showcase__bg']} aria-hidden="true">
				<ShowcasePicture path={item.detailKeys?.[0]?.path} alt="" />
			</div>
		</div>
	);
}

export default MediaShowcase;
