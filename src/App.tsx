import './App.css';
import { useEffect, useState } from 'react';
import Listings from './Components/Listings';
import jobListings from './assets/data.json';
import CartegoriesTab from './Components/CartegoriesTab';

interface Cartegories {
  HTML:boolean;
  CSS:boolean;
  JavaScript:boolean;
  Frontend: boolean;
  Senior: boolean;
  Fullstack: boolean;
  Midweight:boolean;
  Python:boolean;
  React:boolean;
  Junior:boolean;
  Sass:boolean;
  Ruby:boolean;
  Backend:boolean;
  RoR:boolean;
  Vue:boolean;
  Django:boolean;
}

function App() {
  const [cartegories, setCartegories] = useState<Cartegories>({
    HTML:true, 
    CSS:true, 
    JavaScript:true,
    Frontend: true,
    Senior: false,
    Fullstack: false,
    Midweight:true,
    Python:true,
    React:true,
    Junior:false,
    Sass:true,
    Ruby:false,
    Backend:true,
    RoR:true,
    Vue:false,
    Django:true
  })

  const selectedCartegories = () => {
    const selectedCartegories: string[] = [];
    Object.entries(cartegories).map(([cart, value])=> value===true && selectedCartegories.push(cart));
    //alert(selectedCartegories);
    return selectedCartegories;
  }

  useEffect (()=> {
    selectedCartegories()
  }, [cartegories])

  return (
    <div>
      <div className='header'>
      </div>
      <CartegoriesTab cartegories={selectedCartegories()} />
      <Listings jobs={jobListings} />
    </div>
  );
};

export default App;
