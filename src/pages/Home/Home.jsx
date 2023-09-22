import './Home.css'
import reactt from '../../img/vite.svg'
import LinkButton from '../../components/Buttn/LinkButton'

const Home = () => {
  return (
    <div className='princ'>
      <div className='le'>
        <h1>Hi, I am <span className='Pat'>Patrick Teixeira</span> <br/> a Freelancer</h1>
        <p className='prg'>
          Eu um entusiasta de Front-End com paixão por transformar designs criativos
          em experiências interativas e envolventes na web. 
        </p>
        <LinkButton to='/AboutMe' text='About Me'></LinkButton>
      </div>
      <div className='ld'>
        <img src={reactt} alt="react" className='imgT' />
      </div>
    </div>
  )
}

export default Home