import type { CSSProperties } from 'react';
import type { GalleryCardProps } from './types';
import styles from './GalleryCard.module.scss';

export default function GalleryCard({
  title,
  description,
  image,
  color,
  className,
  imageAlt = '',
}: GalleryCardProps) {
  const cardClassName = className ? `${styles.card} ${className}` : styles.card;

  return (
    <article
      className={cardClassName}
      style={{ '--card-color': color } as CSSProperties}
    >
      <div className={styles.imageWrap}>
        <img src={image} alt={imageAlt || title} className={styles.image} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
