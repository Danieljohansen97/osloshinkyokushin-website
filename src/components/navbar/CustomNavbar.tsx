import { useState } from "react";
import LinkWithIcon from "../linkWithIcon/LinkWithIcon";
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
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./CustomNavbar.module.scss";
import Banner from "../banner/Banner";

export default function CustomNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <Banner />
      <div className={styles["nav-main"]}>
        <button className={styles["dropdown-toggle"]} onClick={toggleDropdown}>
          <FontAwesomeIcon
            className={styles["dropdown-icon"]}
            icon={isDropdownOpen ? faXmark : faBars}
          />
          <span>Oslo Fullkontakt Karate</span>
        </button>
        <div
          className={`${styles["nav-section-1"]} ${
            isDropdownOpen ? styles["open"] : ""
          }`}
        >
          <LinkWithIcon to="/" icon={faHouse} label="Hjem" />
          <LinkWithIcon to="/about" icon={faCircleInfo} label="Om oss" />
          <LinkWithIcon to="/training" icon={faDumbbell} label="Trening" />
          <LinkWithIcon to="/program" icon={faCalendarDays} label="Program" />
        </div>

        {/*
          TODO: Display different options here based on user logged in or not  
        */}

        <div className={styles["nav-section-2"]}>
          <LinkWithIcon to="/user" icon={faUser} label="Min Side" />
          <LinkWithIcon
            to="/login"
            icon={faRightFromBracket}
            label="Logg inn"
          />
          <LinkWithIcon to="/logout" icon={faRightToBracket} label="Logg ut" />
        </div>
      </div>
    </>
  );
}
