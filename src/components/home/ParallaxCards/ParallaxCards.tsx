'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './ParallaxCards.module.scss';


type CardConfig = {
  /** Quadrante di partenza */
  corner: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  /** 👉 Immagine della card: sostituisci con il path della tua immagine
   *  (es. '/parallax/card-1.jpg'). L'immagine riempie tutta la card. */
  image: string;
  /** Testo alternativo per accessibilità */
  alt: string;
  /** Rotazioni statiche (asse X, Y, Z in gradi) per l'aspetto "fluttuante" */
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  /** Scala: >1 = più vicina allo schermo, <1 = più lontana */
  scale: number;
  /** Profondità di sovrapposizione */
  zIndex: number;
  /** Quanto la card "cade" verso il basso (px) a fine scroll.
   *  Le card più vicine cadono di più, quelle lontane di meno. */
  fall: number;
};

const CARDS: CardConfig[] = [
  {
    corner: 'topLeft',
    image: '/card1.png',
    alt: '',
    rotateX: 8,
    rotateY: -14,
    rotateZ: -8,
    scale: 1.05,
    zIndex: 4,
    fall: 620, // vicina → cade velocemente
  },
  {
    corner: 'topRight',
    image: '/card2.png',
    alt: '',
    rotateX: -10,
    rotateY: 12,
    rotateZ: 6,
    scale: 0.82,
    zIndex: 2,
    fall: 420, // lontana → cade lentamente
  },
  {
    corner: 'bottomLeft',
    image: '/card3.png',
    alt: '',
    rotateX: 12,
    rotateY: 10,
    rotateZ: 7,
    scale: 0.9,
    zIndex: 3,
    fall: 600,
  },
  {
    corner: 'bottomRight',
    image: '/card4.png',
    alt: '',
    rotateX: -8,
    rotateY: -12,
    rotateZ: -10,
    scale: 1.12,
    zIndex: 5,
    fall: 900, // la più vicina → la più veloce
  },
];

// 👉 Testo centrale: modifica qui la scritta che fa da perno visivo.
const CENTER_TEXT = 'Scopri di più sul rito';

// 👉 Link al regolamento: sostituisci con il path reale (es. '/regolamento.pdf').
const REGOLAMENTO_URL = '#';

// Su mobile mostriamo solo 2 carte: alto-destra e basso-sinistra.
const MOBILE_CORNERS: CardConfig['corner'][] = ['topRight', 'bottomLeft'];

// Su mobile la caduta dev'essere contenuta (max ~200px) per non far uscire
// subito le carte dallo schermo. Mappiamo le velocità desktop (420..900px)
// su un range ridotto (100..200px) mantenendo le proporzioni relative.
function getMobileFall(desktopFall: number): number {
  const inMin = 420;
  const inMax = 900;
  const outMin = 100;
  const outMax = 200;
  const t = Math.min(1, Math.max(0, (desktopFall - inMin) / (inMax - inMin)));
  return Math.round(outMin + t * (outMax - outMin));
}

function ParallaxCard({
  card,
  progress,
  isMobile,
}: {
  card: CardConfig;
  progress: MotionValue<number>;
  isMobile: boolean;
}) {
  // Mappa l'avanzamento dello scroll (0 → 1) sullo spostamento verticale.
  // Desktop: valori originali invariati. Mobile: caduta contenuta.
  const fall = isMobile ? getMobileFall(card.fall) : card.fall;
  const y = useTransform(progress, [0, 1], [0, fall]);

  // Su mobile riduciamo molto le rotazioni 3D per non "rompere" le carte.
  const rotateX = isMobile ? card.rotateX * 0.4 : card.rotateX;
  const rotateY = isMobile ? card.rotateY * 0.4 : card.rotateY;
  const rotateZ = isMobile ? card.rotateZ * 0.5 : card.rotateZ;

  return (
    <motion.div
      className={`${styles.card} ${styles[card.corner]}`}
      style={{
        // `y` è il motion value animato dallo scroll; le altre proprietà di
        // trasformazione sono statiche e vengono composte da Framer Motion.
        y,
        rotateX,
        rotateY,
        rotateZ,
        scale: isMobile ? 1 : card.scale,
        transformPerspective: 1200,
        zIndex: card.zIndex,
      }}
    >
      {/* 👉 Sostituisci src con il path della tua immagine */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={card.image} alt={card.alt} className={styles.cardImage} draggable={false} />
    </motion.div>
  );
}

export default function ParallaxCards() {
  const sectionRef = useRef<HTMLElement>(null);

  // Stessa struttura pinned/sticky su desktop e mobile. Su mobile (<=768px)
  // cambiano solo i valori di caduta/rotazione (vedi `ParallaxCard`) e le
  // dimensioni/altezze gestite via SCSS. Il desktop resta del tutto invariato.
  const isMobile = useMediaQuery('(max-width: 768px)') ?? false;
  const visibleCards = isMobile
    ? CARDS.filter((card) => MOBILE_CORNERS.includes(card.corner))
    : CARDS;

  // Traccia lo scroll dentro questa specifica sezione (il wrapper esterno):
  // start → quando l'inizio sezione tocca l'inizio viewport
  // end → quando la fine sezione tocca la fine viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Componente fisica">
      <div className={styles.sticky}>
        <div className={styles.centerBlock}>
          <h2 className={styles.centerText}>{CENTER_TEXT}</h2>
          {/* 👉 Sostituisci href con il link reale al regolamento */}
          <a href={REGOLAMENTO_URL} download className={styles.cta}>
            Scarica il regolamento
          </a>
        </div>

        <div className={styles.cardsLayer}>
          {visibleCards.map((card) => (
            <ParallaxCard
              key={card.corner}
              card={card}
              progress={scrollYProgress}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
