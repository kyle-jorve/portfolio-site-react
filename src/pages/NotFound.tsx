import { useContext, useEffect } from 'react';
import SiteContext from '../context/global';
import CustomLink from '../components/shell/navigation/CustomLink';
import styles from '../components/hero/Hero.module.css';

function NotFound() {
	const siteContext = useContext(SiteContext);

	useEffect(() => {
		siteContext.setPageNotFound(true);
		
		return () => {
			siteContext.setPageNotFound(false);
		}
	});

	return (
		<section className={`section ${styles.hero} ${styles['hero--short']} ${styles['hero--content']}`}>
			<div className="wrapper wrapper--content">
				<h1 className="underline underline--center">Page Not Found</h1>

				<p>
					I'm not sure how you ended up here, but click{' '}
					<CustomLink
						to="/"
						attributes={{
							tabIndex: siteContext.navOpen ? -1 : undefined,
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
