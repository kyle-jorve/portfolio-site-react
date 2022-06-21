import { Link } from 'react-router-dom';
import useMediaConfig from '../../hooks/media-config';
import styles from './Portfolio.module.css';

function PortfolioItem(props) {
	const mediaConfig = useMediaConfig(props);

	return (
		<article className={styles['portfolio__item']}>
			{props.isNew ? <span className={styles['portfolio__new-badge']}>New</span> : ''}

			<Link className={styles['portfolio__item-link']} to={`/portfolio/${props.name}`}>
				<picture>
					{mediaConfig.sources.map((src) => {
						return (
							<source srcset={src.url} media={`(min-width: ${src.minScreenWidth})`} />
						);
					})}

					<img
						className={styles['portfolio__img']}
						src={mediaConfig.mobile.url}
						alt={props.thumbnailKey.alt}
					/>
				</picture>
			</Link>
		</article>
	);
}

export default PortfolioItem;
