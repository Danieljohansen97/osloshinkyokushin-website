import styles from './Training.module.scss';

const Training = () => {
  // 1x1 transparent placeholder image. Replace with real images when ready.
  const placeholderImg =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

  return (
    <div className={styles.trainingPage} data-testid="trainingPage">
      <header className={styles.header}>
        <h1>Trening</h1>
        <p className={styles.ingress}>
          Hos oss trener vi Kyokushin/Fullkontakt karate med fokus på teknikk,
          kondisjon, styrke og sparring. Alle er velkomne – enten du er
          nybegynner eller har trent før.
        </p>
      </header>

      <section className={styles.infoGrid}>
        <div className={styles.card} data-testid="training.times">
          <h2>Treningstider</h2>
          <ul className={styles.list}>
            <li>Mandager: 19:00 – 20:30</li>
            <li>Onsdager: 19:00 – 20:00</li>
          </ul>
        </div>

        <div className={styles.card} data-testid="training.location">
          <h2>Sted</h2>
          <address className={styles.address}>Brinken 20, 0654 Oslo</address>
          <p className={styles.meta}>Nærmeste T-bane: Tøyen</p>
          <div className={styles.links}>
            <a
              href="https://maps.google.com/?q=Brinken%2020,%200654%20Oslo"
              target="_blank"
              rel="noreferrer"
            >
              Åpne i Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className={styles.whatWeDo} data-testid="training.activities">
        <h2>Hva gjør vi på trening?</h2>
        <div className={styles.activitiesGrid}>
          <div className={styles.activity}>
            <h3>Teknikk (Kihon)</h3>
            <p>
              Vi jobber med grunnteknikker for slag, spark, blokkeringer og
              fotarbeid – med fokus på presisjon, balanse og form.
            </p>
          </div>
          <div className={styles.activity}>
            <h3>Bevegelse og Mønster (Kata)</h3>
            <p>
              Kata gir flyt, rytme og god forståelse av hvordan teknikkene
              settes sammen i praksis.
            </p>
          </div>
          <div className={styles.activity}>
            <h3>Sparring</h3>
            <p>
              Kontrollerte runder med fokus på timing, avstand og taktikk.
              Tilpasses nivå og erfaring.
            </p>
          </div>
          <div className={styles.activity}>
            <h3>Styrke og Kondisjon</h3>
            <p>
              Effektive økter for kjernemuskulatur, mobilitet og utholdenhet –
              alt du trenger for å bli sterkere og mer robust.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.gallery} data-testid="training.gallery">
        <h2>Bilder fra trening</h2>
        <p className={styles.galleryInfo}>
          Under er plassholdere – bytt gjerne ut med egne bilder når de er
          klare.
        </p>
        <div className={styles.grid}>
          <figure className={styles.figure}>
            <img
              className={styles.image}
              src={placeholderImg}
              alt="Plassholder: oppvarming"
            />
            <figcaption>Oppvarming</figcaption>
          </figure>
          <figure className={styles.figure}>
            <img
              className={styles.image}
              src={placeholderImg}
              alt="Plassholder: teknikktrening"
            />
            <figcaption>Teknikktrening</figcaption>
          </figure>
          <figure className={styles.figure}>
            <img
              className={styles.image}
              src={placeholderImg}
              alt="Plassholder: kata"
            />
            <figcaption>Kata</figcaption>
          </figure>
          <figure className={styles.figure}>
            <img
              className={styles.image}
              src={placeholderImg}
              alt="Plassholder: sparring"
            />
            <figcaption>Sparring</figcaption>
          </figure>
          <figure className={styles.figure}>
            <img
              className={styles.image}
              src={placeholderImg}
              alt="Plassholder: styrke"
            />
            <figcaption>Styrke</figcaption>
          </figure>
          <figure className={styles.figure}>
            <img
              className={styles.image}
              src={placeholderImg}
              alt="Plassholder: uttøying"
            />
            <figcaption>Uttøying</figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Training;
