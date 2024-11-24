import Hero from '../../components/hero/Hero';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles["page-container"]}>
        <Hero />
    </div>
  )
}

export default Home;