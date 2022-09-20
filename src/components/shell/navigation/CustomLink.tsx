import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScreenContext from '../../../context/screen';

type CustomLinkProps = {
	onClick?: React.MouseEventHandler;
	to: string;
	className?: string;
	attributes?: {
		tabIndex?: number | undefined;
	};
} & React.PropsWithChildren;

function CustomLink(props: CustomLinkProps) {
	const onClick = props.onClick || (() => {});
	const navigate = useNavigate();
	const screenContext = useContext(ScreenContext);

	function linkClickHandler(event: React.MouseEvent) {
		if (!screenContext.desktop) {
			onClick(event);

			return;
		}

		event.preventDefault();

		onClick(event);

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
		<Link className={props.className} to={props.to} onClick={linkClickHandler} {...props.attributes}>
			{props.children}
		</Link>
	);
}

export default CustomLink;
