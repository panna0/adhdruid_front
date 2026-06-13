import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer/Footer';
import styles from './privacy.module.scss';

const PRIVACY_EMAIL = 'adhdruid.help@gmail.com';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Informativa sulla privacy di ADHDruid',
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.article}>
          <h1 className={styles.title}>Informativa sulla Privacy</h1>
          <p className={styles.sub}>
            Applicazione <strong>ADHDruid</strong> — Ultimo aggiornamento: 11/06/2026
          </p>

          <p>
            La presente informativa descrive le modalità di trattamento dei dati personali
            degli utenti dell&apos;applicazione mobile <strong>ADHDruid</strong> (di seguito,
            l&apos;&quot;App&quot;), companion digitale di un gioco da tavolo fisico che consente
            la registrazione di un account, l&apos;autenticazione, la gestione del profilo e
            l&apos;utilizzo delle funzioni di gioco. Il trattamento avviene nel rispetto del
            Regolamento (UE) 2016/679 (&quot;GDPR&quot;) e della normativa italiana applicabile.
          </p>

          <h2 className={styles.heading}>1. Titolare del trattamento</h2>
          <p>
            Il Titolare del trattamento è Ethimad Salah Abdel Rahman, contattabile all&apos;indirizzo
            email{' '}
            <a href={`mailto:${PRIVACY_EMAIL}`} className={styles.link}>
              {PRIVACY_EMAIL}
            </a>
            . Per qualsiasi richiesta relativa ai tuoi dati personali o all&apos;esercizio dei tuoi
            diritti puoi scrivere a tale indirizzo.
          </p>

          <h2 className={styles.heading}>2. Dati personali trattati</h2>
          <p>Trattiamo esclusivamente i dati necessari al funzionamento dell&apos;App. In particolare:</p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th>Dati</th>
                  <th>Origine</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dati dell&apos;account</td>
                  <td>
                    Indirizzo email, username, password (trasmessa in forma cifrata e conservata in
                    forma protetta, mai in chiaro)
                  </td>
                  <td>Forniti dall&apos;utente in fase di registrazione</td>
                </tr>
                <tr>
                  <td>Dati del profilo</td>
                  <td>
                    Avatar scelto tra i personaggi predefiniti, eventuale codice associato alla
                    scatola del gioco (&quot;box code&quot;)
                  </td>
                  <td>Forniti / scelti dall&apos;utente</td>
                </tr>
                <tr>
                  <td>Sicurezza dell&apos;account</td>
                  <td>
                    Configurazione dell&apos;autenticazione a due fattori (app authenticator o OTP
                    via email) e codici di recupero, se l&apos;utente la attiva
                  </td>
                  <td>Generati su richiesta dell&apos;utente</td>
                </tr>
                <tr>
                  <td>Dati tecnici locali</td>
                  <td>
                    Token di sessione (nel Portachiavi/Keychain di iOS) e copia locale del profilo
                    (nelle preferenze dell&apos;App), per il funzionamento sul dispositivo
                  </td>
                  <td>Generati automaticamente</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Fotocamera.</strong> L&apos;App richiede l&apos;accesso alla fotocamera
            unicamente per inquadrare e leggere i codici QR presenti sulle carte del gioco. Le
            immagini sono elaborate in tempo reale sul dispositivo:{' '}
            <strong>non vengono salvate, archiviate né trasmesse</strong> ai nostri server o a terzi.
          </p>

          <p>
            <strong>Dati che NON trattiamo.</strong> Non utilizziamo strumenti di tracciamento
            pubblicitario o di profilazione di terze parti; non raccogliamo dati di geolocalizzazione;
            non utilizziamo cookie di profilazione; non vendiamo né cediamo i dati a terzi per
            finalità di marketing.
          </p>

          <h2 className={styles.heading}>3. Finalità e basi giuridiche del trattamento (art. 6 GDPR)</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Finalità</th>
                  <th>Dati interessati</th>
                  <th>Base giuridica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Creazione e gestione dell&apos;account ed erogazione del servizio</td>
                  <td>email, username, password, avatar, box code</td>
                  <td>Esecuzione di un servizio richiesto dall&apos;utente (art. 6.1.b)</td>
                </tr>
                <tr>
                  <td>Sicurezza dell&apos;account e prevenzione di accessi non autorizzati</td>
                  <td>dati 2FA, codici di recupero</td>
                  <td>
                    Esecuzione del servizio e legittimo interesse (art. 6.1.b / 6.1.f)
                  </td>
                </tr>
                <tr>
                  <td>Funzionamento dell&apos;App sul dispositivo</td>
                  <td>token di sessione, copia locale del profilo</td>
                  <td>Esecuzione del servizio (art. 6.1.b)</td>
                </tr>
                <tr>
                  <td>Lettura dei codici QR di gioco</td>
                  <td>flusso video elaborato localmente (non conservato)</td>
                  <td>Esecuzione del servizio (art. 6.1.b)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className={styles.heading}>4. Conservazione dei dati</h2>
          <p>
            I dati dell&apos;account sono conservati per tutto il tempo in cui l&apos;account rimane
            attivo. L&apos;utente può eliminare il proprio account direttamente dall&apos;App, nella
            schermata Profilo: in tal caso i relativi dati personali vengono cancellati dai nostri
            sistemi entro 30 giorni, salvo eventuali obblighi di legge di conservazione. I dati
            tecnici locali (token di sessione, copia del profilo) vengono rimossi dal dispositivo al
            logout o alla disinstallazione dell&apos;App.
          </p>

          <h2 className={styles.heading}>5. Luogo del trattamento e destinatari</h2>
          <p>
            I dati sono trattati tramite i server gestiti per conto del Titolare (dominio{' '}
            <code className={styles.code}>adhdruid.it</code>), ubicati in{' '}
            <span className={styles.fill}>[Paese/area dei server, es. Unione Europea]</span>. I dati
            possono essere trattati da fornitori tecnici (ad esempio il provider di hosting) che
            agiscono quali responsabili del trattamento ai sensi dell&apos;art. 28 GDPR,
            esclusivamente per le finalità sopra indicate e sulla base di apposito contratto.{' '}
            <span className={styles.sub}>
              [Se i server o i fornitori si trovano fuori dall&apos;Unione Europea, indicarlo qui e
              specificare le garanzie adottate, ad es. Clausole Contrattuali Standard approvate dalla
              Commissione Europea.]
            </span>
          </p>

          <h2 className={styles.heading}>6. Diritti dell&apos;interessato (artt. 15–22 GDPR)</h2>
          <p>
            In qualità di interessato hai diritto di: accedere ai tuoi dati e ottenerne copia;
            chiederne la rettifica; chiederne la cancellazione (&quot;diritto all&apos;oblio&quot;), che
            puoi esercitare anche autonomamente eliminando l&apos;account dall&apos;App; chiedere la
            limitazione del trattamento; opporti al trattamento basato sul legittimo interesse; ottenere
            la portabilità dei dati che hai fornito; revocare in qualsiasi momento il consenso
            eventualmente prestato, senza pregiudicare la liceità del trattamento precedente.
          </p>
          <p>
            Per esercitare tali diritti scrivi a{' '}
            <a href={`mailto:${PRIVACY_EMAIL}`} className={styles.link}>
              {PRIVACY_EMAIL}
            </a>
            . Hai inoltre il diritto di proporre reclamo all&apos;autorità di controllo competente: in
            Italia, il <strong>Garante per la protezione dei dati personali</strong> (
            <a
              href="https://www.garanteprivacy.it"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              www.garanteprivacy.it
            </a>
            ).
          </p>

          <h2 className={styles.heading}>7. Minori</h2>
          <p>
            L&apos;App non è destinata a minori di 14 anni e non raccogliamo consapevolmente dati di
            minori al di sotto di tale età senza il consenso di chi esercita la responsabilità
            genitoriale. Qualora un genitore o tutore ritenga che un minore ci abbia fornito dati
            personali, può contattarci ai recapiti indicati e provvederemo a rimuoverli.{' '}
            <span className={styles.sub}>
              [14 anni è la soglia prevista dalla normativa italiana; puoi indicare un&apos;età
              superiore se preferisci.]
            </span>
          </p>

          <h2 className={styles.heading}>8. Sicurezza</h2>
          <p>
            Adottiamo misure tecniche e organizzative ragionevoli per proteggere i dati, tra cui la
            trasmissione cifrata tramite HTTPS, la conservazione protetta delle credenziali e
            l&apos;archiviazione dei token di sessione nel Portachiavi (Keychain) di iOS.
          </p>

          <h2 className={styles.heading}>9. Modifiche alla presente informativa</h2>
          <p>
            La presente informativa può essere aggiornata nel tempo. La versione vigente è sempre
            disponibile a questo indirizzo, con indicazione della data di ultimo aggiornamento. In caso
            di modifiche sostanziali ne sarà dato avviso attraverso l&apos;App o via email.
          </p>

          <h2 className={styles.heading}>10. Contatti</h2>
          <p>
            Per qualunque domanda relativa alla presente informativa o al trattamento dei tuoi dati
            personali:{' '}
            <a href={`mailto:${PRIVACY_EMAIL}`} className={styles.link}>
              {PRIVACY_EMAIL}
            </a>
            .
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
