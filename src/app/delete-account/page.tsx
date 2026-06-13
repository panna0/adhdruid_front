import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer/Footer';
import styles from './delete-account.module.scss';

export const metadata: Metadata = {
  title: 'Elimina account',
  description: 'Richiedi la cancellazione del tuo account ADHDruid',
};

const PRIVACY_EMAIL = 'privacy@adhdruid.it';

export default function DeleteAccountPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.card} aria-labelledby="delete-account-title">
          <h1 id="delete-account-title" className={styles.title}>
            Elimina account
          </h1>
          <p className={styles.description}>
            Per richiedere la cancellazione del tuo account ADHDruid invia una email a{' '}
            <a href={`mailto:${PRIVACY_EMAIL}`} className={styles.link}>
              {PRIVACY_EMAIL}
            </a>{' '}
            indicando il tuo username. Elaboreremo la richiesta entro 30 giorni.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
