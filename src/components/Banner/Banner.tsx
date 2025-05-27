import styles from './Banner.module.scss';
import { useTranslation } from 'react-i18next';
import translationKeys from '#translations';

type Props = {
  testid?: string;
};

// Passing testid as prop in order to accurately
// test implementation of the component
const Banner = ({ testid }: Props) => {
  const { t } = useTranslation();

  return (
    <div
      data-testid={testid ?? 'banner'}
      className={styles['nav-title-section']}
    >
      <h1 data-testid="banner.titleHeader" className={styles['nav-title']}>
        {t(translationKeys.common.club_name)}
      </h1>
    </div>
  );
};

export { Banner };
