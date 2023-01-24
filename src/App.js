import React from 'react'
import NavBar from "./NavBar"
import Home from "./pages/Home"
import Rentals from "./pages/Rentals"
import Lessons from "./pages/Lessons"
import About from "./pages/About"
import Shop from "./pages/Shop"
import mainImage from "./img/main.jpg"
import "./styles.css"
import Footer from "./Footer"
import "./App.css"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>

      <div className="main-image">
        <img src={mainImage} />
      </div>

      <div className="page-container">
        <div className="content-wrap">
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
