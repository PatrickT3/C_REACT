import './AboutMe.css'
import astro from '../../img/astro.png'
import Card from '../../components/Card/Card'
import {RiDownloadCloudFill} from 'react-icons/ri';

const AboutMe = () => {
  return (
    <div className="aprinc">
      <h1>About Me</h1>
      <p>My introduction</p>
      <div className='body'>
        <div className='lee'>
          <img src={astro} alt="Astronautilos" />
        </div>
        <div className='ldd'>
          <div className='lddCard'>
            <Card texth2="Experience" textp="+1 years" num={2}/>
            <Card texth2="Completed" textp="+10 Projects" num={3}/>
            <Card texth2="Skills" textp="+0 Skill" num={1}/>
          </div>
          <p className='area-de-texto'>
            Se você é criativo, tem um olho afiado para o design e é 
            apaixonado por criar experiências de usuário excepcionais,
            este é o cargo para você. O desenvolvedor front-end desempenhará 
          </p>
          <button className='btn-link'>
            <span> Download CV </span>
            <RiDownloadCloudFill></RiDownloadCloudFill>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe