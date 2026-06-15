import type { CSSProperties } from 'react';
import type { GalleryCardProps } from './types';
import styles from './GalleryCard.module.scss';

export default function GalleryCard({
  title,
  subtitle,
  description,
  image,
  themeColor,
  className,
  imageAlt = '',
}: GalleryCardProps) {
  const cardClassName = className ? `${styles.card} ${className}` : styles.card;

  return (
    <article
      className={cardClassName}
      style={{ '--theme-color': themeColor } as CSSProperties}
    >
      <img
        src={image}
        alt={imageAlt || title}
        className={styles.background}
        aria-hidden={imageAlt ? undefined : true}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.subtitle}>{subtitle}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
