import styles from './About.module.scss';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.aboutPage} data-testid="aboutPage">
      <header className={styles.header}>
        <h1>Om oss</h1>
        <p className={styles.ingress}>
          Vi trener fullkontakt Kyokushin karate. Her finner du informasjon om
          klubben vår og videre lesing om retningen Shin Kyokushin.
        </p>
      </header>

      <section className={styles.links}>
        <div className={styles.card}>
          <h2>Historien om Shin Kyokushin</h2>
          <p>
            Lær mer om arven etter Mas Oyama, etableringen av WKO og hva som
            kjennetegner Shinkyokushin i dag.
          </p>
          <Link className={styles.link} to="/about/history">
            Les historien
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
