import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScreenContext from '../../../context/screen';

function CustomLink(props) {
	const onClick = props.onClick || (() => {});
	const navigate = useNavigate();
	const screenContext = useContext(ScreenContext);

	function linkClickHandler(event) {
		if (!screenContext.desktop) {
			onClick();

			return;
		}

		event.preventDefault();

		onClick();

		screenContext.setLoadStatus('in');

		setTimeout(() => {
			navigate(props.to);

			screenContext.setLoadStatus('out');

			setTimeout(() => {
				screenContext.setLoadStatus('done');
			}, screenContext.longTransitionDuration);
		}, screenContext.longTransitionDuration);
	}

	return (
		<Link
			className={props.className}
			to={props.to}
			onClick={linkClickHandler}
			{...props.attributes}
		>
			{props.children}
		</Link>
	);
}

export default CustomLink;
