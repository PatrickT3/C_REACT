import './AboutMe.css';
import astro from '../../img/astro.png';
import Card from '../../components/Card/Card';
import Buttonn from '../../components/Bt/Bt';

const AboutMe = () => {
  return (
    <div className="aprinc">
      <h1>About Me</h1>
      <p>My introduction</p>
      <div className='bbody'>
        <div className='lee'>
          <img src={astro} alt="Astronautilos" />
        </div>
        <div className='ldd'>
          <div className='lddCard'>
            <Card texth2="Experience" textp="Under 1 year" num={2}/>
            <Card texth2="Completed" textp="+10 Projects github" num={3}/>
            <Card texth2="Skills" textp="+6 Skill" num={1}/>
          </div>
          <p className='area-de-texto'>
          Sou o Patrick Teixeira, tenho 23 anos e meu objetivo é trabalhar com 
          desenvolvimento de software. Atualmente, estou cursando Sistemas de Informação 
          na UFOPA e estou focado em me tornar um bom programador.
          </p>
          <Buttonn></Buttonn>
        </div>
      </div>
    </div>
  )
}

export default AboutMe