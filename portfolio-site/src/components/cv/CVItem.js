import styles from './CV.module.css';

function CVItem(props) {
	return (
		<div className={styles['resume__item']}>
			<h3 className={styles['resume__itemHeading']}>{props.title}</h3>

			{props.content}

			{props.showHR && <hr className={styles['resume__hr']} />}
		</div>
	);
}

export default CVItem;
