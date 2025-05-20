import React from 'react';
import styles from './Banner.module.scss';

type Props = {
  testid: string;
};

const Banner = ({ testid }: Props) => {
  return (
    <div data-testid={testid} className={styles['nav-title-section']}>
      <h1 data-testid="banner.titleHeader" className={styles['nav-title']}>
        Oslo Fullkontakt Karate
      </h1>
    </div>
  );
};

export { Banner };
