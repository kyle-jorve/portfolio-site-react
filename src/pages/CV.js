import { Fragment } from 'react';
import useCVData from '../hooks/data/cv-data';
import Bio from '../components/cv/Bio';
import Resume from '../components/cv/Resume';

function CV() {
	const cvData = useCVData();

	return (
		<Fragment>
			<Bio heroImg={cvData.heroImg} bio={cvData.bio} />
			<Resume resume={cvData.resume} />
		</Fragment>
	);
}

export default CV;
