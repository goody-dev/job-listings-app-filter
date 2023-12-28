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
    HTML:false, 
    CSS:false, 
    JavaScript:true,
    Frontend: false,
    Senior:false,
    Fullstack:false,
    Midweight:false,
    Python:false,
    React:false,
    Junior:false,
    Sass:false,
    Ruby:false,
    Backend:false,
    RoR:false,
    Vue:false,
    Django:false
  })

  //type selectedCategories = string[];
  const selectedCategories = () => {
    const selectedCategories: string[] = [];
    Object.entries(categories).map(([cart, value])=> value===true && selectedCategories.push(`${cart}`));
    //alert(selectedCategories);
    return selectedCategories;
  }

  const handleSelectCategory = (category:string) => {
    Object.entries(categories).map(([cart])=> {
      (`${cart}` === category && category === "HTML")? setCategories({...categories, HTML:true}):
      (`${cart}` === category && category === "CSS")? setCategories({...categories, CSS:true}):
      (`${cart}` === category && category === "JavaScript")? setCategories({...categories, JavaScript:true}):
      (`${cart}` === category && category === "Senior")? setCategories({...categories, Senior:true}):
      (`${cart}` === category && category === "Frontend")? setCategories({...categories, Frontend:true}):
      (`${cart}` === category && category === "Fullstack")? setCategories({...categories, Fullstack:true}):
      (`${cart}` === category && category === "Midweight")? setCategories({...categories, Midweight:true}):
      (`${cart}` === category && category === "Python")? setCategories({...categories, Python:true}):
      (`${cart}` === category && category === "React")? setCategories({...categories, React:true}):
      (`${cart}` === category && category === "Junior")? setCategories({...categories, Junior:true}):
      (`${cart}` === category && category === "Sass")? setCategories({...categories, Sass:true}):
      (`${cart}` === category && category === "Ruby")? setCategories({...categories, Ruby:true}):
      (`${cart}` === category && category === "Backend")? setCategories({...categories, Backend:true}):
      (`${cart}` === category && category === "RoR")? setCategories({...categories, RoR:true}):
      (`${cart}` === category && category === "Vue")? setCategories({...categories, Vue:true}):
      (`${cart}` === category && category === "Django")? setCategories({...categories, Django:true}):
      null
    })
  }
  const handleUnselectCategory = (category:string) => {
    Object.entries(categories).map(([cart])=> {
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

  const handleClearCategory = () => {
    Object.entries(categories).map(()=>{
      setCategories({...categories, HTML:false, CSS:false, JavaScript:false,Senior:false, Frontend:false, Fullstack:false, RoR:false, Vue:false, Django:false, Backend:false, Midweight:false, Python:false, React:false, Junior:false, Sass:false, Ruby:false})
    })
  } 

  useEffect (()=> {
    selectedCategories()
  }, [categories])

  return (
    <div>
      <div className='header'>
      </div>
      {selectedCategories()[0] && <CategoriesTab categories={selectedCategories()} unselectCategories={(category:any)=>handleUnselectCategory(category)} clearCategories={handleClearCategory}/>}
      <Listings jobs={jobListings} handleSelectCategory={handleSelectCategory} selectedCategories={selectedCategories()} />
    </div>
  );
};

export default App;
