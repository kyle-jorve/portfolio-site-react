import { useContext } from 'react';
import ScreenContext from '../../../context/screen';
import styles from './Loader.module.css';

function Loader(props) {
	const screenContext = useContext(ScreenContext);
	let classes = [
		styles.loader,
		screenContext.loadStatus === 'in'
			? styles['loader--slide-in']
			: screenContext.loadStatus === 'out'
			? styles['loader--slide-out']
			: '',
	];

	classes = classes.filter((c) => c);

	return (
		<div
			className={classes.join(' ')}
			aria-hidden="true"
			style={{
				animationDuration: `${screenContext.loadDuration}ms`,
			}}
		>
			<span className={styles['loader__track']}>
				<span className={styles['loader__bar']}></span>
			</span>
		</div>
	);
}

export default Loader;
