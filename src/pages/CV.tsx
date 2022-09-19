import { Fragment, useEffect, useContext } from 'react';
import ScreenContext from '../context/screen';
import useCVData from '../hooks/data/cv-data';
import Bio from '../components/cv';
import Resume from '../components/cv';

function CV() {
	const screenContext = useContext(ScreenContext);
	const cvData = useCVData();

	useEffect(() => {
		if (screenContext.toSection) {
			const section = document.querySelector(`#${screenContext.toSection}`);

			screenContext.setToSection(null);

			if (!section) return;

			section.scrollIntoView();
		}
	}, [screenContext.toSection]);

	return (
		<Fragment>
			<Bio heroImg={cvData.heroImg} bio={cvData.bio} />
			<Resume resume={cvData.resume} />
		</Fragment>
	);
}

export default CV;
