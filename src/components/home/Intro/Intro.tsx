'use client';

import { motion, type Variants } from 'framer-motion';
import styles from './Intro.module.scss';

// 👉 Testo d'impatto: modifica qui la frase. Va a capo naturalmente su ~3 righe.
const HEADLINE =
  'Trasformiamo attenzione, energia ed emozioni in un’avventura da giocare insieme, una carta alla volta.';

// Contenitore: orchestra l'apparizione progressiva delle parole (stagger).
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
};

// Ogni parola parte nascosta sotto la "maschera" e sale fluida verso l'alto.
const wordVariants: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export default function Intro() {
  const words = HEADLINE.split(' ');

  return (
    <section id="sezione-0" className={styles.intro} aria-label="Introduzione">
      <motion.h1
        className={styles.headline}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-15%' }}
      >
        {words.map((word, index) => (
          // Maschera con overflow nascosto: nasconde la parola finché non sale.
          <span key={`${word}-${index}`} className={styles.wordMask}>
            <motion.span className={styles.word} variants={wordVariants}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h1>
    </section>
  );
}
