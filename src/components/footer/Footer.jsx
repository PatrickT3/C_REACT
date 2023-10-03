import './Footer.css'
import { TfiLinkedin } from 'react-icons/tfi'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='Footer'>
      <Link to="https://www.instagram.com/steixeirapatrick/"><FaInstagramSquare className='inst'/></Link>
      <Link to="https://www.linkedin.com/in/patrick-teixeira-baa8b824a"><TfiLinkedin className='linkd'/></Link>
      <Link to="https://github.com/PatrickT3"><BsGithub className='git'/></Link>
        
    </div>
  )
}

export default Footer