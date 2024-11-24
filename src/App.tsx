import { Route, Routes } from "react-router-dom";

import "./App.module.scss";
import CustomNavbar from "./components/navbar/CustomNavbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Training from "./pages/training/Training";

function App() {
  return (
    <>
      <CustomNavbar />
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/training" element={<Training />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
