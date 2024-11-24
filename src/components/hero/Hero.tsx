import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero-text"]}>
        <h3>OSU</h3>
      </div>
    </div>
  );
};

export default Hero;
