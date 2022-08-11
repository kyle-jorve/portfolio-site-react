import { useContext } from 'react';
import ScreenContext from '../context/screen';
import CustomLink from '../components/shell/navigation/CustomLink';
import styles from '../components/hero/Hero.module.css';

function NotFound() {
	const screenContext = useContext(ScreenContext);

	return (
		<section
			className={`section ${styles.hero} ${styles['hero--short']} ${styles['hero--content']}`}
		>
			<div className="wrapper wrapper--content">
				<h1 className="underline underline--center">Page Not Found</h1>

				<p>
					I'm not sure how you ended up here, but click{' '}
					<CustomLink
						to="/"
						attributes={{
							tabIndex: screenContext.navOpen ? -1 : null,
						}}
					>
						here
					</CustomLink>{' '}
					to return to safe ground.
				</p>
			</div>
		</section>
	);
}

export default NotFound;
