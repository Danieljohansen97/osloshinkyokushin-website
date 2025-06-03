import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import translationKeys from '#translations';
import { NavigationLink } from '#components/NavigationLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCalendarDays,
  faCircleInfo,
  faDumbbell,
  faHouse,
  faNewspaper,
  faRightFromBracket,
  faRightToBracket,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import { Banner } from '#components/Banner';

const Header = () => {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <Banner testid="header.banner" />
      <div className={styles['nav-main']}>
        <button className={styles['dropdown-toggle']} onClick={toggleDropdown}>
          <FontAwesomeIcon
            className={styles['dropdown-icon']}
            icon={isDropdownOpen ? faXmark : faBars}
          />
          <span>{t(translationKeys.common.club_name)}</span>
        </button>
        <div
          className={`${styles['nav-section-1']} ${
            isDropdownOpen ? styles['open'] : ''
          }`}
        >
          <NavigationLink
            testid="header.home"
            to="/"
            icon={faHouse}
            label={t(translationKeys.navbar.home)}
          />
          <NavigationLink
            testid="header.news"
            to="/news"
            icon={faNewspaper}
            label={t(translationKeys.navbar.news)}
          />
          <NavigationLink
            testid="header.about_us"
            to="/about"
            icon={faCircleInfo}
            label={t(translationKeys.navbar.about_us)}
          />
          <NavigationLink
            testid="header.training"
            to="/training"
            icon={faDumbbell}
            label={t(translationKeys.navbar.training)}
          />
          <NavigationLink
            testid="header.schedule"
            to="/schedule"
            icon={faCalendarDays}
            label={t(translationKeys.navbar.schedule)}
          />
        </div>

        {/*
          TODO: Display different options here based on user logged in or not
        */}

        <div className={styles['nav-section-2']}>
          <NavigationLink to="/user" icon={faUser} label="Min Side" />
          <NavigationLink
            to="/login"
            icon={faRightToBracket}
            label="Logg inn"
          />
          <NavigationLink
            to="/logout"
            icon={faRightFromBracket}
            label="Logg ut"
          />
        </div>
      </div>
    </>
  );
};

export { Header };
