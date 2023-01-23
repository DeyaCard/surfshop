import mainImage from './img/main.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mainImage} className="App-logo" alt="logo" />
        <h2>Surf's Up</h2>  
        <p>Maui's Premium Surf Community</p>
        <a
          className="App-link"
          href="https://808boards.com/rentals/?gclid=Cj0KCQiA_bieBhDSARIsADU4zLdTR3F89wqn-X68fGhjKY4lo17IYsLBiGJ_msDlbGKFwZ8cxQP1IJ8aAjePEALw_wcB"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rentals
        </a>
        <a
          className="App-link"
          href="https://mauisurflessons.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lessons
        </a>
        <a
          className="App-link"
          href="https://www.boardcave.com/shop/surfboards"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
      </header>
    </div>
  );
}

export default App;
