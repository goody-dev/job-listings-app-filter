import './App.css';
import Listings from './Components/Listings';
import JobListings from './assets/data.json';

function App() {

  return (
    <div>
      <div className='header'>
        <svg className='mobile-bg-header' xmlns="http://www.w3.org/2000/svg" width="375" height="156"><g fill="#5CA5A5"><path fill="#63BABA" fillRule="evenodd" d="M-86.732 487.429c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013L309.926-95.424c51.441-51.434 134.836-51.434 186.277 0C547.634-44 547.64 39.38 496.216 90.813c-.005.004-.01.008-.013.013L99.543 487.429c-51.44 51.433-134.834 51.433-186.275 0zm-444.692 71.824c-51.432-51.424-51.438-134.806-.013-186.237l.013-.013L-134.766-23.6C-83.325-75.034.07-75.034 51.511-23.6c51.431 51.424 51.437 134.805.013 186.237l-.013.013-396.66 396.603c-51.44 51.433-134.834 51.433-186.275 0z"/></g></svg>
      </div>
      <Listings jobs={JobListings}/>
    </div>
  )
}

export default App
