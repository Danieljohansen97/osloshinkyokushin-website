import { Route, Routes } from "react-router-dom"

import './App.css'
import CustomNavbar from './components/navbar/CustomNavbar'
import HomePage from './pages/homepage/HomePage'
import AboutPage from './pages/AboutPage'
import InstructorsPage from './pages/InstructorsPage'
import TrainingPage from './pages/TrainingPage'
import NewsPage from './pages/NewsPage'

function App() {
  return (
    <>
      <CustomNavbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/instructors' element={<InstructorsPage />} />
          <Route path='/training' element={<TrainingPage />} />
          <Route path='/news' element={<NewsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
