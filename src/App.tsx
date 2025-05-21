import { Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import './i18n/localization';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Training from './pages/training/Training';
import { Header, Footer } from '#components';
import News from './pages/news/News';

function App() {
  return (
    <>
      <Header />
      <div className={styles['page-container']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
