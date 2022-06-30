import { galleryData } from '../../data/gallery-data';
import styles from './Showcase.module.css';

function truncateTitle(title) {
	const titleArr = title.split(' ');
	const maxLength = 25;
	let truncTitle = '';

	for (let i = 0; i < titleArr.length; i++) {
		const word = titleArr[i];
		const isLastWord = i === titleArr.length - 1;

		if (truncTitle.length + word.length <= maxLength) {
			truncTitle += `${word}${isLastWord ? '' : ' '}`;
		} else {
			truncTitle = truncTitle.trim();

			if (truncTitle.length < title.length) {
				truncTitle += '...';
			}

			break;
		}
	}

	return truncTitle;
}

function Neighbors(props) {
	const itemIndex = galleryData.items.findIndex((item) => item.name === props.item.name);
	const neighbors = {
		next: galleryData[itemIndex + 1],
		prev: galleryData[itemIndex - 1],
	};
	const solo = Object.values(neighbors).filter((val) => val).length < 2;

	return (
		<div className={styles['showcase__neighbors']}>
			{Object.entries(neighbors).map((n) => {
				const [key, value] = n;

				if (!value) return '';

				return (
					<article
						className={`${styles['showcase__neighbor']} ${
							styles[`showcase__neighbor--${key}`]
						}${solo && ` ${styles['showcase__neighbor--solo']}`}`}
					></article>
				);
			})}
		</div>
	);
}

export default Neighbors;
