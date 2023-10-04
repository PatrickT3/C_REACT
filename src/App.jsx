import './App.css'
import { Link } from "react-router-dom";
import logo from './img/react.svg';
import { useState, useEffect } from 'react';


function App() {
  
  const [palavra, setPalavra] = useState("");

    useEffect(() => {
      const palavraArmazenada = localStorage.getItem("palavraChave");
  
      if (palavraArmazenada) {
        setPalavra(palavraArmazenada);
      }
    }, [])

    const atualizarPalavra = (novaPalavra) => {
    localStorage.setItem("palavraChave", novaPalavra);
    setPalavra(novaPalavra);
  };
  
    return (
      <nav className='naveprinc'>
        <img src={logo} alt="Logo" className='img' />
        <ul className='nave'>
          <li>
            <Link 
              to="/" 
              onClick={() => atualizarPalavra('Home')} 
              className={palavra === 'Home' ? 'linksAtivo' : 'links'} 
            >Home</Link>
          </li>
          <li>
            <Link 
              to="/AboutMe" 
              onClick={() => atualizarPalavra('About Me')} 
              className={palavra === 'About Me' ? 'linksAtivo' : 'links'} 
            >About Me</Link>
          </li>
          <li>
            <Link 
              to="/PExperience" 
              onClick={() => atualizarPalavra('PExperience')} 
              className={palavra === 'PExperience' ? 'linksAtivo' : 'links'} 
            >Experience</Link>
          </li>
          <li>
            <Link 
              to="/Skills" 
              onClick={() => atualizarPalavra('Skills')} 
              className={palavra === 'Skills' ? 'linksAtivo' : 'links'} 
            >Skills</Link>
          </li>
          <li>
            <Link to="/contact" 
            onClick={() => atualizarPalavra('Contact')} 
            className={palavra === 'Contact' ? 'linksAtivo' : 'links'} 
          >Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }

export default App
