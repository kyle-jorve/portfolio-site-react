import Neighbors from './Neighbors';
import styles from './Showcase.module.css';

function ContentShowcase(props) {
	return (
		<div className={styles['showcase__content-cont']}>
			<div className={`${styles['showcase__content']} wrapper wrapper--content`}>
				<h1 className={`underline ${styles['showcase__title']}`}>{props.item.title}</h1>

				{props.children}

				{(!!props.item.purchaseLink || !!props.item.downloadLink) && (
					<div className={styles['showcase__buttons']}>
						{!!props.item.purchaseLink && (
							<a
								className="button button--primary button--shop"
								href={props.item.purchaseLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								Purchase
							</a>
						)}

						{!!props.item.downloadLink && (
							<a
								className="button button--primary button--download"
								href={props.item.downloadLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								Download
							</a>
						)}
					</div>
				)}

				<Neighbors item={props.item} />
			</div>
		</div>
	);
}

export default ContentShowcase;
