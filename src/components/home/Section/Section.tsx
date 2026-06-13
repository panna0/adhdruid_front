import type { ReactNode } from 'react';
import styles from './Section.module.scss';

type SectionProps = {
  id: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  children,
  className,
}: SectionProps) {
  const sectionClassName = className
    ? `${styles.section} ${className}`
    : styles.section;

  return (
    <section
      id={id}
      className={sectionClassName}
      aria-labelledby={`${id}-title`}
    >
      <div className={styles.inner}>
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
        {children ? (
          <div className={styles.content}>{children}</div>
        ) : (
          <p className={styles.placeholder}>
            Contenuto in arrivo — questa sezione è pronta per essere
            personalizzata.
          </p>
        )}
      </div>
    </section>
  );
}
