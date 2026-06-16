import styles from './Hero.module.scss';

export default function Hero() {
  const particles = Array.from({ length: 100 });
  return (
    <section className={styles.hero}>
      {/* Container delle particelle */}
      

      {/* Il tuo contenuto principale */}
      <div className={styles.content}>
        <h1 className={styles.title}>Niente Piani. Solo Caos e Magia.</h1>
        <p className={styles.description}>
        Sfida la tua concentrazione in un'avventura in cui il vero nemico da battere è la distrazione.
        </p>
      </div>
    </section>
  );
}
