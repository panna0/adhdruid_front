import styles from './Hero.module.scss';

export default function Hero() {
  const particles = Array.from({ length: 100 });
  return (
    <section className={styles.hero}>
      {/* Container delle particelle */}
      

      {/* Il tuo contenuto principale */}
      <div className={styles.content}>
        <h1 className={styles.title}>Il tuo spazio per organizzarti meglio</h1>
        <p className={styles.description}>
          Una landing page in costruzione. Qui troverai presto tutte le
          informazioni sul progetto.
        </p>
      </div>
    </section>
  );
}
