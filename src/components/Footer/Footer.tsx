import FacebookLogo from '#assets/Facebook_Logo_Primary.png';
import InstagramLogo from '#assets/Instagram_Glyph_Gradient.png';
import YoutubeLogo from '#assets/yt_logo_rgb_light.png';
import styles from './Footer.module.scss';

const Footer = () => {
  const ContactInfo = () => {
    return (
      <div
        data-testid="footer.contactInfo"
        className={styles['footer-section']}
      >
        <h2>Kontakt</h2>
        <ul className={styles['footer-list']}>
          <li data-testid="contactInfo.address">
            <label title="Adresse">Adresse: </label>Brinken 20, Oslo, Norway
          </li>
          <li data-testid="contactInfo.telephone">
            <label title="Telefonnummer">Tlf: </label>413 54 537
          </li>
          <li data-testid="contactInfo.email">
            <label title="e-post">E-post: </label>
            osloshinkyokushin@gmail.com
          </li>
        </ul>
      </div>
    );
  };

  const TrainingHours = () => {
    return (
      <ul data-testid="footer.openingHours" className={styles['footer-list']}>
        <li>Mandag 1900-2030</li>
        <li>Onsdag 1900-2000</li>
      </ul>
    );
  };

  const SocialMediaLinks = () => {
    return (
      <div
        data-testid="footer.socialMediaLinks"
        className={styles['footer-section']}
      >
        <h2>Følg oss på sosiale medier!</h2>
        <ul className={styles['footer-list']}>
          <li>
            <a
              href="https://www.facebook.com/oslofullkontakt"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FacebookLogo} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kyokushin.oslo"
              target="_blank"
              rel="noreferrer"
            >
              <img src={InstagramLogo} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@OsloShinkyokushin"
              target="_blank"
              rel="noreferrer"
            >
              <img src={YoutubeLogo} />
            </a>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-section']}>
        <h2>Oslo Fullkontakt Karate</h2>
        <TrainingHours />
      </div>
      <ContactInfo />
      <SocialMediaLinks />
    </footer>
  );
};

export { Footer };
