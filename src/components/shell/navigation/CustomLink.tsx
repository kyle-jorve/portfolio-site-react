import { useContext } from 'react';
import { Link, useNavigate, matchPath } from 'react-router-dom';
import SiteContext from '../../../context/global';

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
	const siteContext = useContext(SiteContext);
	
	function linkClickHandler(event: React.MouseEvent) {
		const isDetailRoute = matchPath('/gallery/:itemID', props.to);

		if (!siteContext.desktop) {
			onClick(event);

			return;
		}

		event.preventDefault();

		onClick(event);

		siteContext.toggleLoader();

		setTimeout(() => {
			navigate(props.to);

			siteContext.toggleLoader(false, !!isDetailRoute);
		}, siteContext.longTransitionDuration);
	}

	return (
		<Link className={props.className} to={props.to} onClick={linkClickHandler} {...props.attributes}>
			{props.children}
		</Link>
	);
}

export default CustomLink;
