import { Fragment } from 'react';
import styles from './CV.module.css';

function CVItem(props) {
	return (
		<Fragment>
			<div>
				<h3 className={styles['resume__item-title']}>{props.title}</h3>

				{props.content}
			</div>
			{props.showHR && <hr className={styles['resume__hr']} />}
		</Fragment>
	);
}

export default CVItem;
