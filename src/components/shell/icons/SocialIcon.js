import styles from './Social.module.css';

function SocialIcon(props) {
	const iconClass = props.name;
	const classes = [
		props.className,
		styles['social__item'],
		!props.icon && `icon icon--${iconClass}`,
	].filter((c) => c);

	return (
		<a
			className={classes.join(' ')}
			href={props.url}
			target="_blank"
			rel="noopener noreferrer"
			title={props.name}
			aria-label={props.name}
			style={props.style}
			{...props.attributes}
		>
			{props.children}
		</a>
	);
}

export default SocialIcon;
