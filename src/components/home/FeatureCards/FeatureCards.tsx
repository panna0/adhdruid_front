import type { ReactNode } from 'react';
import styles from './FeatureCards.module.scss';

type FeatureCard = {
  icon: ReactNode;
  title: string;
  description: string;
};

type FeatureCardsProps = {
  description?: string;
  cards?: FeatureCard[];
};

const BookIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const BrainIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 5a3 3 0 0 0-5.6-1.5A2.5 2.5 0 0 0 4 8a2.5 2.5 0 0 0 .5 4.5A2.5 2.5 0 0 0 7 17a3 3 0 0 0 5 .5z" />
    <path d="M12 5a3 3 0 0 1 5.6-1.5A2.5 2.5 0 0 1 20 8a2.5 2.5 0 0 1-.5 4.5A2.5 2.5 0 0 1 17 17a3 3 0 0 1-5 .5z" />
    <path d="M12 5v13" />
  </svg>
);

const SparkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v4" />
    <path d="M12 17v4" />
    <path d="M3 12h4" />
    <path d="M17 12h4" />
    <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4z" />
  </svg>
);

const DEFAULT_DESCRIPTION =
  'Un percorso che intreccia la comprensione dell’ADHD con la narrazione e il gioco, per trasformare la routine quotidiana in un’esperienza coinvolgente.';

const DEFAULT_CARDS: FeatureCard[] = [
  {
    icon: BookIcon,
    title: 'Radici storiche',
    description:
      'Dalle prime osservazioni cliniche alla comprensione odierna, un filo che lega scienza e racconto.',
  },
  {
    icon: BrainIcon,
    title: 'Mente in gioco',
    description:
      'Strumenti pensati sul funzionamento attentivo, per valorizzare focus, energia e creatività.',
  },
  {
    icon: SparkIcon,
    title: 'Esperienza condivisa',
    description:
      'Il gioco da tavolo e il companion digitale si uniscono in un’unica avventura quotidiana.',
  },
];

export default function FeatureCards({
  description = DEFAULT_DESCRIPTION,
  cards = DEFAULT_CARDS,
}: FeatureCardsProps) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.description}>{description}</p>

      <ul className={styles.grid}>
        {cards.map((card) => (
          <li key={card.title} className={styles.card}>
            <span className={styles.iconWrap} aria-hidden="true">
              {card.icon}
            </span>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
