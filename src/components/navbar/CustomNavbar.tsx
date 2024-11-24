import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendarDays,
  faCircleInfo,
  faDumbbell,
  faHouse,
  faRightFromBracket,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./CustomNavbar.module.scss";

export default function CustomNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className={styles["nav-title-section"]}>
        <h1 className={styles["nav-title"]}>Oslo Fullkontakt Karate</h1>
      </div>
      <div className={styles["nav-main"]}>
        <button className={styles["dropdown-toggle"]} onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faBars} /> 
          <span>Oslo Fullkontakt Karate</span>
        </button>
        <div
          className={`${styles["nav-section-1"]} ${
            isDropdownOpen ? styles["open"] : ""
          }`}
        >
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

        {/*
          TODO: Display different options here based on user logged in or not  
        */}
        
        <div className={styles["nav-section-2"]}>
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
    </>
  );
}
