import styles from './Social.module.css';

function SocialIcon(props) {
	const iconClass = props.className || props.name;
	const cssClasses = `${styles['social__item']}${!props.icon ? ` icon icon--${iconClass}` : ''}`;

	return (
		<a
			className={cssClasses}
			href={props.url}
			target="_blank"
			rel="noopener noreferrer"
			title={props.name}
			aria-label={props.name}
		>
			{props.children}
		</a>
	);
}

export default SocialIcon;
