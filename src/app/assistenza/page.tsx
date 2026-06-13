import type { Metadata } from 'next';
import Button from '@/components/ui/Button/Button';
import Footer from '@/components/layout/Footer/Footer';
import styles from './assistenza.module.scss';

export const metadata: Metadata = {
  title: 'Assistenza',
  description: 'Contatta il team di supporto ADHDruid',
};

const SUPPORT_EMAIL = 'help@adhdruid.it';

export default function AssistenzaPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.card} aria-labelledby="assistenza-title">
          <h1 id="assistenza-title" className={styles.title}>
            Hai bisogno di assistenza?
          </h1>
          <p className={styles.description}>
            Il nostro team è a disposizione per rispondere alle tue domande e
            supportarti nel tuo percorso. Scrivici e ti risponderemo il prima
            possibile.
          </p>
          <Button
            href={`mailto:${SUPPORT_EMAIL}?subject=Richiesta%20di%20assistenza%20ADHDruid`}
            className={styles.cta}
          >
            Contattaci via email
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
