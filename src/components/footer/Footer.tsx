
import FacebookLogo from '../../assets/Facebook_Logo_Primary.png';
import InstagramLogo from "../../assets/Instagram_Glyph_Gradient.png"
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-section"]}>
                <h2>Oslo Fullkontakt Karate</h2>
                <p>Brinken 20, Oslo, Norway</p>
                <ul className={styles["footer-list"]}>
                    <li>Mandag 1900-2030</li>
                    <li>Onsdag 1900-2000</li>
                </ul>
            </div>
            <div className={styles["footer-section"]}>
                <h2>Kontakt</h2>
                <ul className={styles["footer-list"]}>
                    <li>Tlf: 413 54 537</li>
                    <li>E-post: osloshinkyokushin@gmail.com</li>
                </ul>
            </div>
            <div className={styles["footer-section"]}>
                <h2>Følg oss</h2>
                <ul className={styles["footer-list"]}>
                    <li>
                        <a href="https://www.facebook.com/oslofullkontakt" target="_blank" rel="noreferrer">
                            <img src={FacebookLogo} />
                            <span>Oslo Fullkontakt Karate</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/kyokushin.oslo" target="_blank" rel="noreferrer">
                            <img src={InstagramLogo} />
                            <span>@kyokushin.oslo</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;