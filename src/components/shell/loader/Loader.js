import { useContext } from 'react';
import ScreenContext from '../../../context/screen';
import styles from './Loader.module.css';

function Loader() {
	const screenContext = useContext(ScreenContext);
	const classes = [
		styles.loader,
		screenContext.loadStatus === 'in'
			? styles['loader--slide-in']
			: screenContext.loadStatus === 'out' || screenContext.loadStatus === 'done'
			? styles['loader--slide-out']
			: '',
	].filter((c) => c);

	return (
		<div
			className={classes.join(' ')}
			aria-hidden="true"
			style={{
				animationDuration: `${screenContext.longTransitionDuration}ms`,
			}}
		>
			<span className={styles['loader__track']}>
				<span className={styles['loader__bar']}></span>
			</span>
		</div>
	);
}

export default Loader;
