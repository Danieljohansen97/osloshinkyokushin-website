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

  const closeDropdown = () => setIsDropdownOpen(false);

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
            onClick={closeDropdown}
          />
          <NavigationLink
            testid="header.news"
            to="/news"
            icon={faNewspaper}
            label={t(translationKeys.navbar.news)}
            onClick={closeDropdown}
          />

          {/* About with sub-pages */}
          <div className={styles['menu-group']}>
            <NavigationLink
              testid="header.about_us"
              to="/about"
              icon={faCircleInfo}
              label={t(translationKeys.navbar.about_us)}
              onClick={closeDropdown}
            />
            <div className={styles['submenu']}>
              {/* Example sub-page under About; add more as needed */}
              <NavigationLink
                to="/about/history"
                icon={faCircleInfo}
                label="Historie"
                onClick={closeDropdown}
              />
            </div>
          </div>

          <NavigationLink
            testid="header.training"
            to="/training"
            icon={faDumbbell}
            label={t(translationKeys.navbar.training)}
            onClick={closeDropdown}
          />
          <NavigationLink
            testid="header.schedule"
            to="/schedule"
            icon={faCalendarDays}
            label={t(translationKeys.navbar.schedule)}
            onClick={closeDropdown}
          />
        </div>

        {/*
          TODO: Display different options here based on user logged in or not
        */}

        <div className={styles['nav-section-2']}>
          <NavigationLink
            to="/user"
            icon={faUser}
            label="Min Side"
            onClick={closeDropdown}
          />
          <NavigationLink
            to="/login"
            icon={faRightToBracket}
            label="Logg inn"
            onClick={closeDropdown}
          />
          <NavigationLink
            to="/logout"
            icon={faRightFromBracket}
            label="Logg ut"
            onClick={closeDropdown}
          />
        </div>
      </div>
    </>
  );
};

export { Header };
