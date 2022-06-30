import Neighbors from './Neighbors';
import styles from './Showcase.module.css';

function ContentShowcase(props) {
	return (
		<div className={styles['showcase__content-cont']}>
			<div className={`${styles['showcase__content']} wrapper wrapper--content`}>
				<h1 className={styles['showcase__title']}>{props.title}</h1>

				{props.children}

				{(!!props.purchaseLink || !!props.downloadLink) && (
					<div className={styles['showcase__buttons']}>
						{!!props.purchaseLink && (
							<a
								className="button button--primary"
								href={props.purchaseLink}
								target="_blank"
								rel="noreferrer"
							>
								Purchase
							</a>
						)}

						{!!props.downloadLink && (
							<a
								className="button button--primary button--download"
								href={props.downloadLink}
								target="_blank"
								rel="noreferrer"
							>
								Download
							</a>
						)}
					</div>
				)}

				<hr className={styles['showcase__hr']} />

				<Neighbors item={props.item} />
			</div>
		</div>
	);
}

export default ContentShowcase;
