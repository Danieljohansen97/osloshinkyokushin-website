import styles from './History.module.scss';

const History = () => {
  return (
    <div className={styles.historyPage} data-testid="aboutHistoryPage">
      <header className={styles.header}>
        <h1>Historien om Shin Kyokushin</h1>
        <p className={styles.ingress}>
          Shin Kyokushin (Shinkyokushin) er en gren av Kyokushin-karate
          organisert av World Karate Organization (WKO). Retningen viderefører
          arven etter grunnleggeren Masutatsu (Mas) Oyama og er i dag aktiv over
          hele verden – inkludert i Norge.
        </p>
      </header>

      <section className={styles.content}>
        <h2>Fra Kyokushin til Shinkyokushin</h2>
        <p>
          Mas Oyama (1923–1994) etablerte Kyokushin-dojoen i Tokyo på
          1950–60-tallet og utviklet en treningsform kjent for disiplin, styrke
          og fullkontakt kumite. Etter Oyamas bortgang oppstod det flere
          organisasjoner som bar arven videre. Én av disse ble WKO
          Shinkyokushinkai, ledet av Kenji Midori (verdensmester i 1991).
        </p>

        <p>
          WKO ble formalisert tidlig på 2000-tallet og samlet klubber globalt
          rundt prinsipper som karakterbygging, respekt og «Osu no Seishin». I
          dag organiserer WKO regionale og internasjonale mesterskap i
          knockdown-karate og vedlikeholder et moderne pensum for kihon
          (grunnteknikk), kata og kumite.
        </p>

        <div className={styles.milestones}>
          <h3>Viktige milepæler</h3>
          <ul>
            <li>1950–60: Mas Oyama etablerer Kyokushin i Tokyo.</li>
            <li>1964: International Karate Organization (IKO) grunnlegges.</li>
            <li>
              1975: Første World Open i knockdown-karate arrangeres i Tokyo.
            </li>
            <li>1994: Mas Oyama går bort; flere organisasjoner oppstår.</li>
            <li>
              2003: WKO Shinkyokushinkai formaliseres med Kenji Midori som
              president.
            </li>
            <li>
              I dag: Globalt nettverk, pensum og jevnlige mesterskap under WKO.
            </li>
          </ul>
        </div>

        <div className={styles.features}>
          <h3>Hva kjennetegner Shin Kyokushin?</h3>
          <ul>
            <li>Fullkontakt knockdown-kamp med klare sikkerhetsrammer.</li>
            <li>Kihon, kata og kumite i et helhetlig pensum.</li>
            <li>Fokus på fysisk og mental styrke, disiplin og respekt.</li>
            <li>Budo-etikette og «Osu»-kultur som preger treningsmiljøet.</li>
            <li>
              Trening tilpasset alle nivå – fra nybegynnere til viderekomne.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default History;
