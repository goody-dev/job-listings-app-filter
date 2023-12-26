import './App.css';
import { useEffect, useState } from 'react';
import Listings from './Components/Listings';
import jobListings from './assets/data.json';
import CategoriesTab from './Components/CategoriesTab';

interface Categories {
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
  const [categories, setCategories] = useState<Categories>({
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

  const selectedCategories = () => {
    const selectedCategories: string[] = [];
    Object.entries(categories).map(([cart, value])=> value===true && selectedCategories.push(cart));
    //alert(selectedCategories);
    return selectedCategories;
  }

  const handleUnselectCategory = (category:string) => {
    Object.entries(categories).map(([cart, value])=> {
      (`${cart}` === category && category === "HTML")? setCategories({...categories, HTML:false}):
      (`${cart}` === category && category === "CSS")? setCategories({...categories, CSS:false}):
      (`${cart}` === category && category === "JavaScript")? setCategories({...categories, JavaScript:false}):
      (`${cart}` === category && category === "Senior")? setCategories({...categories, Senior:false}):
      (`${cart}` === category && category === "Frontend")? setCategories({...categories, Frontend:false}):
      (`${cart}` === category && category === "Fullstack")? setCategories({...categories, Fullstack:false}):
      (`${cart}` === category && category === "Midweight")? setCategories({...categories, Midweight:false}):
      (`${cart}` === category && category === "Python")? setCategories({...categories, Python:false}):
      (`${cart}` === category && category === "React")? setCategories({...categories, React:false}):
      (`${cart}` === category && category === "Junior")? setCategories({...categories, Junior:false}):
      (`${cart}` === category && category === "Sass")? setCategories({...categories, Sass:false}):
      (`${cart}` === category && category === "Ruby")? setCategories({...categories, Ruby:false}):
      (`${cart}` === category && category === "Backend")? setCategories({...categories, Backend:false}):
      (`${cart}` === category && category === "RoR")? setCategories({...categories, RoR:false}):
      (`${cart}` === category && category === "Vue")? setCategories({...categories, Vue:false}):
      (`${cart}` === category && category === "Django")? setCategories({...categories, Django:false}):
      null
    })
  }

  useEffect (()=> {
    selectedCategories()
  }, [categories])

  return (
    <div>
      <div className='header'>
      </div>
      <CategoriesTab categories={selectedCategories()} unselectCategories={(category:any)=>handleUnselectCategory(category)}/>
      <Listings jobs={jobListings} />
    </div>
  );
};

export default App;
