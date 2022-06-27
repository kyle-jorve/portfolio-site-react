import styles from './Social.module.css';
import iconStyles from './Icons.module.css';

function SocialIcon(props) {
	const iconClass = props.className || props.name;
	const cssClasses = `${styles['social__item']}${
		!props.icon ? ` ${iconStyles.icon} ${iconStyles[`icon--${iconClass}`]}` : ''
	}`;

	return (
		<a
			className={cssClasses}
			href={props.url}
			target="_blank"
			rel="noreferrer"
			title={props.name}
		>
			{props.icon || ''}
			<span className={iconStyles['icon__text']}>{props.name}</span>
		</a>
	);
}

export default SocialIcon;
