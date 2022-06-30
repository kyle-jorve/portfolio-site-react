import { Fragment } from 'react';
import ShowcaseSlide from './ShowcaseSlide';
import styles from './Showcase.module.css';
import MediaShowcase from './MediaShowcase';
import ContentShowcase from './ContentShowcase';

function Showcase(props) {
	return (
		<section className={styles.showcase}>
			<MediaShowcase item={props.item} />

			<ContentShowcase item={props.item}>{props.content}</ContentShowcase>
		</section>
	);
}

export default Showcase;
