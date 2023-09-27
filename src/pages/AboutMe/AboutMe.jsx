import './AboutMe.css'
import astro from '../../img/astro.png'
import Card from '../../components/Card/Card'

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
            <Card texth2="Experience" textp="+1 years"/>
            <Card texth2="Experience" textp="+1 years"/>
            <Card texth2="Experience" textp="+1 years"/>
          </div>
          <p className='area-de-texto'>
            Se você é criativo, tem um olho afiado para o design e é 
            apaixonado por criar experiências de usuário excepcionais,
            este é o cargo para você. O desenvolvedor front-end desempenhará 
          </p>
          <button className='btn-link'>Download CV</button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe