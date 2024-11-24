import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCircleInfo,
  faDumbbell,
  faHandFist,
  faHouse,
  faRightFromBracket,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./CustomNavbar.module.scss";

export default function CustomNavbar() {
  return (
    <div className={styles["nav-main"]}>
      <div className={styles["nav-section"]}>
        <div className={styles["link-container"]}>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
            <span>Hjem</span>
          </Link>
        </div>
        <div className={styles["link-container"]}>
          <Link to="/about">
            <FontAwesomeIcon icon={faCircleInfo} />
            <span>Om oss</span>
          </Link>
        </div>
        <div className={styles["link-container"]}>
          <Link to="/training">
            <FontAwesomeIcon icon={faDumbbell} />
            <span>Trening</span>
          </Link>
        </div>
        <div className={styles["link-container"]}>
          <Link to="/program">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span>Program</span>
          </Link>
        </div>
      </div>

      <div className={styles["nav-section"]}>
        <h1 className={styles["nav-title"]}>Oslo Fullkontakt Karate</h1>
      </div>

      <div className={styles["nav-section"]}>
        <div className={styles["link-container"]}>
          <Link to="/user">
            <FontAwesomeIcon icon={faUser} />
            <span>Min side</span>
          </Link>
        </div>
        <div className={styles["link-container"]}>
          <Link to="/login">
            <FontAwesomeIcon icon={faRightToBracket} />
            <span>Logg inn</span>
          </Link>
        </div>
        <div className={styles["link-container"]}>
          <Link to="/logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Logg ut</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
