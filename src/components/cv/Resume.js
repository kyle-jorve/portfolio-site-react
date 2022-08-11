import { useContext } from 'react';
import ScreenContext from '../../context/screen';
import CVItem from './CVItem';
import styles from './CV.module.css';

function Resume(props) {
	const screenContext = useContext(ScreenContext);
	const resume = require(`../../assets/${props.resume.docUrl}`);

	return (
		<section className={`section ${styles.resume}`} id="resume">
			<div className="wrapper wrapper--content">
				<div className={styles['resume__title-row']}>
					<h2 className={`underline underline--center ${styles['resume__title']}`}>
						R&eacute;sum&eacute;
					</h2>

					<div className={styles['resume__button-cont']}>
						<a
							className="button button--primary button--download"
							href={resume}
							download
							tabIndex={screenContext.navOpen ? -1 : null}
						>
							Download
						</a>
					</div>
				</div>

				{props.resume.items.map((item, index) => {
					return (
						<CVItem
							key={index}
							title={item.heading}
							content={item.content}
							showHR={index + 1 < props.resume.items.length}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Resume;
