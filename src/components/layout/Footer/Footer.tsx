import Link from 'next/link';
import CurvedLoop from '@/components/ui/CurvedLoop/CurvedLoop';
import styles from './Footer.module.scss';

const MARQUEE_TEXT =
  'ADHDruid · Il tuo spazio per organizzarti · Privacy · Assistenza · ';

const FOOTER_TITLE = 'Parla di ADHDruid';
const FOOTER_SUBTITLE =
  'Scarica il press kit con loghi, immagini e tutto il materiale per la stampa.';
const PRESS_KIT_URL = '/press-kit.zip';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerDesktop}>
        <div className={styles.marqueeTrack}>
          <CurvedLoop marqueeText={MARQUEE_TEXT} />
        </div>

        <div className={styles.inner}>
          <div className={styles.ctaBlock}>
            <h2 className={styles.title}>{FOOTER_TITLE}</h2>
            <p className={styles.subtitle}>{FOOTER_SUBTITLE}</p>
            <a href={PRESS_KIT_URL} download className={styles.cta}>
              Scarica press kit
            </a>
          </div>

          <nav className={styles.nav} aria-label="Link del footer">
            <Link href="/privacy" className={styles.link}>
              Privacy
            </Link>
            <Link href="/assistenza" className={styles.link}>
              Assistenza
            </Link>
          </nav>

          <p className={styles.copyright}>
            &copy; {currentYear} ADHDruid. Tutti i diritti riservati.
          </p>
        </div>
      </div>

      <div className={styles.footerMobile}>
        <div className={styles.classicInner}>
          <div className={styles.classicCtaBlock}>
            <h2 className={styles.classicTitle}>{FOOTER_TITLE}</h2>
            <p className={styles.classicSubtitle}>{FOOTER_SUBTITLE}</p>
            <a href={PRESS_KIT_URL} download className={styles.classicCta}>
              Scarica press kit
            </a>
          </div>

          <nav className={styles.classicNav} aria-label="Link del footer">
            <Link href="/privacy" className={styles.classicLink}>
              Privacy
            </Link>
            <Link href="/assistenza" className={styles.classicLink}>
              Assistenza
            </Link>
          </nav>

          <p className={styles.classicCopyright}>
            &copy; {currentYear} ADHDruid. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
