import Link from 'next/link';
import CurvedLoop from '@/components/ui/CurvedLoop/CurvedLoop';
import styles from './Footer.module.scss';

const MARQUEE_TEXT =
  'Il Circolo dei Druidi · Il Circolo dei Druidi';

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
            <span className={styles.eyebrow}>Press kit</span>
            <h2 className={styles.title}>{FOOTER_TITLE}</h2>
            <p className={styles.subtitle}>{FOOTER_SUBTITLE}</p>
            <a href={PRESS_KIT_URL} download className={styles.cta}>
              <svg
                className={styles.ctaIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="m7 11 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
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
            <span className={styles.classicEyebrow}>Press kit</span>
            <h2 className={styles.classicTitle}>{FOOTER_TITLE}</h2>
            <p className={styles.classicSubtitle}>{FOOTER_SUBTITLE}</p>
            <a href={PRESS_KIT_URL} download className={styles.classicCta}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="m7 11 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
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
