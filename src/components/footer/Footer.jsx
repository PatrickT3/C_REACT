import './Footer.css'
import { TfiLinkedin } from 'react-icons/tfi'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='Footer'>
        <FaInstagramSquare className='inst'/>
        <TfiLinkedin className='linkd'/>
        <BsGithub className='git'/>
    </div>
  )
}

export default Footer