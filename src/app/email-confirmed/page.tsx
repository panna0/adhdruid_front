import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/layout/Footer/Footer';
import styles from './email-confirmed.module.scss';

export const metadata: Metadata = {
  title: 'Email confermata',
  description: 'Il tuo account ADHDruid è stato attivato con successo',
};

export default function EmailConfirmedPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.card} aria-labelledby="email-confirmed-title">
          <span className={styles.flag} aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>

          <h1 id="email-confirmed-title" className={styles.title}>
            Congratulazioni!
          </h1>
          <p className={styles.description}>
            Il tuo account ADHDruid è stato attivato con successo. Ora puoi accedere
            all&apos;app e iniziare la tua avventura.
          </p>

          <Link href="/" className={styles.cta}>
            Torna alla home
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
