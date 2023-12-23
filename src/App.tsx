import './App.css';

import Listings from './Components/Listings';
import JobListings from './assets/data.json';
import CartegoriesTab from './Components/CartegoriesTab';


function App() {

  return (
    <div>
      <div className='header'>
      </div>
      <CartegoriesTab />
      <Listings jobs={JobListings} />
    </div>
  )
}

export default App
