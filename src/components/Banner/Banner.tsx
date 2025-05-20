import React from 'react';
import styles from '../navbar/CustomNavbar.module.scss';

const Banner = () => {
  return (
    <div
      data-testid="banner.titleSection"
      className={styles['nav-title-section']}
    >
      <h1 data-testid="banner.titleHeader" className={styles['nav-title']}>
        Oslo Fullkontakt Karate
      </h1>
    </div>
  );
};

export { Banner };
