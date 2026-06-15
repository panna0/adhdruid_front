'use client';

import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './FlipCards.module.scss';

type FlipCard = {
  icon: ReactNode;
  title: string;
  description: string;
};

type FlipCardsProps = {
  title?: string;
  subtitle?: string;
  cards?: FlipCard[];
};

// Concentrazione → bersaglio a cerchi concentrici (focus sul centro)
const FocusIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
  </svg>
);

// Impulsività → fulmine (scatto improvviso, energia)
const ImpulseIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
  </svg>
);

// Cooperazione → due persone (lavoro di squadra)
const CooperationIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const DEFAULT_TITLE = 'Collegamento ADHD e storia';
const DEFAULT_SUBTITLE =
  'Un percorso che intreccia la comprensione dell’ADHD con la narrazione e il gioco.';

const DEFAULT_CARDS: FlipCard[] = [
  {
    icon: FocusIcon,
    title: 'Concentrazione',
    description:
      'Allena il focus e mantieni l’attenzione su un obiettivo alla volta.',
  },
  {
    icon: ImpulseIcon,
    title: 'Impulsività',
    description:
      'Riconosci gli scatti improvvisi e trasformali in energia positiva.',
  },
  {
    icon: CooperationIcon,
    title: 'Cooperazione',
    description:
      'Gioca insieme agli altri e costruisci strategie condivise.',
  },
];

// Variant del contenitore: orchestra lo stagger tra le card figlie.
const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

// Variant della singola card: dal retro (0°) al fronte (180°) con effetto fisico.
const cardVariants: Variants = {
  hidden: { rotateY: 0 },
  visible: {
    rotateY: 180,
    transition: { type: 'spring', stiffness: 60, damping: 15 },
  },
};

export default function FlipCards({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  cards = DEFAULT_CARDS,
}: FlipCardsProps) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </header>

      <motion.ul
        className={styles.grid}
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {cards.map((card) => (
          <li key={card.title} className={styles.perspective}>
            <motion.div className={styles.cardInner} variants={cardVariants}>
              {/* Retro: faccia visibile inizialmente */}
              <div className={`${styles.face} ${styles.back}`}>
                <span className={styles.backMark} aria-hidden="true">
                  ADHDruid
                </span>
              </div>

              {/* Fronte: contenuto reale, parte già ruotato di 180° */}
              <div className={`${styles.face} ${styles.front}`}>
                {/* Spazio immagine (in alto) con l'icona */}
                <div className={styles.cardImage}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    {card.icon}
                  </span>
                </div>
                {/* Titolo + blocco di testo (in basso) */}
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              </div>
            </motion.div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
