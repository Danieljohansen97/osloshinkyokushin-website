import styles from "../navbar/CustomNavbar.module.scss";

const Banner = () => {
  return (
    <div className={styles["nav-title-section"]}>
      <h1 className={styles["nav-title"]}>Oslo Fullkontakt Karate</h1>
    </div>
  );
};

export default Banner;