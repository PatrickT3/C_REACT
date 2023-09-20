import './App.css'
import { Link } from "react-router-dom";
import logo from './assets/react.svg';
import { useState } from 'react';

function App() {
  
    const [ativo, setAtivo] = useState('');
  
    const atualizarAtivo = (novoValor) => {
      setAtivo(novoValor);
    }
  
    return (
      <nav className='naveprinc'>
        <img src={logo} alt="Logo" className='img' />
        <ul className='nave'>
          <li>
            <Link 
              to="/" 
              onClick={() => atualizarAtivo('Home')} 
              className={ativo === 'Home' ? 'linksAtivo' : 'links'} 
            >Home</Link>
          </li>
          <li>
            <Link 
              to="/AboutMe" 
              onClick={() => atualizarAtivo('About Me')} 
              className={ativo === 'About Me' ? 'linksAtivo' : 'links'} 
            >About Me</Link>
          </li>
          <li>
            <Link 
              to="/PExperience" 
              onClick={() => atualizarAtivo('PExperience')} 
              className={ativo === 'PExperience' ? 'linksAtivo' : 'links'} 
            >Experience</Link>
          </li>
          <li>
            <Link 
              to="/Skills" 
              onClick={() => atualizarAtivo('Skills')} 
              className={ativo === 'Skills' ? 'linksAtivo' : 'links'} 
            >Skills</Link>
          </li>
          <li>
            <Link to="/contact" 
            onClick={() => atualizarAtivo('Contact')} 
            className={ativo === 'Contact' ? 'linksAtivo' : 'links'} 
          >Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }

export default App
