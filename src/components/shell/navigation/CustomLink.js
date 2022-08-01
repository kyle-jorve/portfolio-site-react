import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScreenContext from '../../../context/screen';

function CustomLink(props) {
	const onClick = props.onClick || (() => {});
	const navigate = useNavigate();
	const screenContext = useContext(ScreenContext);

	function linkClickHandler(event) {
		event.preventDefault();

		onClick();

		screenContext.setLoadStatus('in');

		setTimeout(() => {
			navigate(props.to);

			screenContext.setLoadStatus('out');
		}, screenContext.loadDuration);
	}

	return (
		<Link className={props.className} to={props.to} onClick={linkClickHandler}>
			{props.children}
		</Link>
	);
}

export default CustomLink;
