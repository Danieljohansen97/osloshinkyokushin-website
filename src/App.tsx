import { Route, Routes } from "react-router-dom"

import './App.css'
import CustomNavbar from './components/navbar/CustomNavbar'
import HomePage from './pages/homepage/HomePage'

function App() {
  return (
    <>
      <CustomNavbar />
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
