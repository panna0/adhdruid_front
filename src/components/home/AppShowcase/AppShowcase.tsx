'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AppShowcase.module.scss';

/*
 * ============================================================================
 *  CONFIGURAZIONE — sostituisci qui i contenuti reali
 * ============================================================================
 */

// 👉 Nome dell'app mostrato nel copy / negli aria-label.
const APP_NAME = 'ADHDruid';

// 👉 Icona dell'app: sostituisci con il path della tua immagine quadrata
//    (es. '/app-icon.png'). Lascia `null` per usare il placeholder grafico.
const APP_ICON_SRC: string | null = null;

// 👉 Screenshot dell'app: inserisci qui i path delle tue immagini verticali
//    (es. '/screens/home.png'). Ogni stringa diventa una slide del carousel.
//    Lascia l'array vuoto per usare i placeholder colorati.
const APP_SCREENSHOTS: string[] = [
  // '/screens/01.png',
  // '/screens/02.png',
  // '/screens/03.png',
];

// 👉 Link agli store: sostituisci con gli URL reali delle tue schede.
const APP_STORE_URL = '#'; // es. 'https://apps.apple.com/app/idXXXXXXXX'
const GOOGLE_PLAY_URL = '#'; // es. 'https://play.google.com/store/apps/details?id=...'

// Tempo (ms) tra uno scorrimento automatico e l'altro.
const AUTOPLAY_INTERVAL = 3500;

// Numero di slide placeholder se non sono stati forniti screenshot reali.
const PLACEHOLDER_SLIDES = 4;

const AppleIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.36 12.65c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.75 2.28-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.29 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.65zM14.09 5.8c.64-.78 1.07-1.85.95-2.93-.92.04-2.03.61-2.69 1.38-.59.69-1.11 1.79-.97 2.85 1.02.08 2.07-.52 2.71-1.3z" />
  </svg>
);

const GooglePlayIcon = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3.6 2.3c-.3.3-.5.7-.5 1.3v16.8c0 .6.2 1 .5 1.3l.1.1L13 12.1v-.2L3.7 2.2l-.1.1z" fill="#00d4ff" />
    <path d="m16.5 15.6-3.5-3.5v-.2l3.5-3.5.1.1 4.1 2.4c1.2.7 1.2 1.8 0 2.5l-4.1 2.3-.1-.1z" fill="#ffce00" />
    <path d="m16.6 15.5-3.6-3.6L3.6 21.7c.4.4 1.1.5 1.8.1l11.2-6.3z" fill="#ff3d44" />
    <path d="M16.6 8.4 5.4 2.1c-.7-.4-1.4-.3-1.8.1L13 11.9l3.6-3.5z" fill="#00f076" />
  </svg>
);

export default function AppShowcase() {
  const slides =
    APP_SCREENSHOTS.length > 0
      ? APP_SCREENSHOTS
      : Array.from({ length: PLACEHOLDER_SLIDES }, () => null);

  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(id);
  }, [slides.length]);

  const goTo = (index: number) => {
    setActive((index + slides.length) % slides.length);
  };

  return (
    <div className={styles.showcase}>
      {/* Colonna testo */}
      <div className={styles.textCol}>
        <span className={styles.appIcon} aria-hidden={APP_ICON_SRC ? undefined : 'true'}>
          {APP_ICON_SRC ? (
            // 👉 Sostituisci src con il path della tua icona app
            // eslint-disable-next-line @next/next/no-img-element
            <img src={APP_ICON_SRC} alt={`Icona ${APP_NAME}`} />
          ) : (
            <span className={styles.appIconPlaceholder}></span>
          )}
        </span>

        <h3 className={styles.title}>Porta {APP_NAME} sempre con te</h3>

        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Scarica {APP_NAME} e
          trasforma ogni partita in un&apos;avventura sempre a portata di mano.
        </p>

        <div className={styles.storeButtons}>
          {/* 👉 Sostituisci href con il link reale all'App Store */}
          <a
            href={APP_STORE_URL}
            className={styles.storeButton}
            aria-label={`Scarica ${APP_NAME} su App Store`}
          >
            <span className={styles.storeIcon}>{AppleIcon}</span>
            <span className={styles.storeText}>
              <span className={styles.storeSmall}>Scarica su</span>
              <span className={styles.storeBig}>App Store</span>
            </span>
          </a>

          {/* 👉 Sostituisci href con il link reale al Google Play Store */}
          <a
            href={GOOGLE_PLAY_URL}
            className={styles.storeButton}
            aria-label={`Scarica ${APP_NAME} su Google Play`}
          >
            <span className={styles.storeIcon}>{GooglePlayIcon}</span>
            <span className={styles.storeText}>
              <span className={styles.storeSmall}>Disponibile su</span>
              <span className={styles.storeBig}>Google Play</span>
            </span>
          </a>
        </div>
      </div>

      {/* Colonna mockup telefono */}
      <div className={styles.phoneCol}>
        <div
          className={styles.phone}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div className={styles.notch} aria-hidden="true" />

          <div className={styles.screen}>
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {slides.map((src, index) => (
                <div className={styles.slide} key={index} aria-hidden={active !== index}>
                  {src ? (
                    // 👉 Sostituisci src con il path del tuo screenshot
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={src} alt={`Schermata ${index + 1} di ${APP_NAME}`} />
                  ) : (
                    <div className={`${styles.slidePlaceholder} ${styles[`ph${index % 4}`]}`}>
                      <span>Screenshot {index + 1}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Frecce minimali */}
            {slides.length > 1 && (
              <>
                <button
                  type="button"
                  className={`${styles.arrow} ${styles.arrowPrev}`}
                  onClick={() => goTo(active - 1)}
                  aria-label="Schermata precedente"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className={`${styles.arrow} ${styles.arrowNext}`}
                  onClick={() => goTo(active + 1)}
                  aria-label="Schermata successiva"
                >
                  ›
                </button>
              </>
            )}

            {/* Indicatori */}
            {slides.length > 1 && (
              <div className={styles.dots} role="tablist" aria-label="Schermate dell'app">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-selected={active === index}
                    aria-label={`Vai alla schermata ${index + 1}`}
                    className={active === index ? styles.dotActive : styles.dot}
                    onClick={() => goTo(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
