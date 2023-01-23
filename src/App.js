import NavBar from "./NavBar"
import Home from "./pages/Home"
import Rentals from "./pages/Rentals"
import Lessons from "./pages/Lessons"
import About from "./pages/About"
import Shop from "./pages/Shop"
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
    </>
  )
}

export default App;





// <div className="App">
//       <header className="App-header">
//         <img src={mainImage} className="App-logo" alt="Surfer catching a wave" />
//         <h2>Surf's Up</h2>  
//         <p>Maui's Premium Surf Community</p>
//         <a
//           className="App-link"
//           href="https://808boards.com/rentals/?gclid=Cj0KCQiA_bieBhDSARIsADU4zLdTR3F89wqn-X68fGhjKY4lo17IYsLBiGJ_msDlbGKFwZ8cxQP1IJ8aAjePEALw_wcB"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Rentals
//         </a>
//         <a
//           className="App-link"
//           href="https://mauisurflessons.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Lessons
//         </a>
//         <a
//           className="App-link"
//           href="https://www.boardcave.com/shop/surfboards"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Shop
//         </a>
//       </header>
//     </div>