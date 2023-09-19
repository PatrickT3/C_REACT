import './App.css'
import { Link } from "react-router-dom";
import logo from './assets/react.svg';

function App() {

  return (   
    <nav className='naveprinc'>
      <img src={logo} alt="Logo" className='img' />
      <ul className='nave'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutMe">About Me</Link>
        </li>
        <li>
          <Link to="/PExperience">PExperience</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default App
