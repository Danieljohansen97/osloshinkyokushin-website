import styles from './Home.module.scss';
import { useTranslation } from 'react-i18next';
import translationKeys from '#translations';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div data-testid="homePage">
      <p data-testid="homePage.welcome">
        {t(translationKeys.home_page.welcome)}
      </p>
      <p data-testid="homePage.ingress">
        {t(translationKeys.home_page.ingress)}
      </p>
    </div>
  );
};

export default Home;
