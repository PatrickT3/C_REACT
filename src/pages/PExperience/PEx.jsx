import './PEx.css'
import {FaGraduationCap} from 'react-icons/fa';
import {FcCalendar} from 'react-icons/fc';
import {PiSuitcaseSimpleBold} from 'react-icons/pi';
import ufo from '../../img/Ufopa.webp';

const PEx = () => {
  return (
    <div className='exp'>
      <h1>Qualification</h1>
      <p>My personal journey</p>
      <div className='containerflex'>
        <div className='left'>
          <h3><FaGraduationCap></FaGraduationCap> Education</h3>
          <div className='bor'>
            <h4 id='ufopa'><img src={ufo} alt="Ufopa" />UFOPA</h4>
            <p>Sistema de Informação <br/>
            <FcCalendar></FcCalendar> 
            2018 - Present</p>
          </div>
        </div>
        <div className='meio'>
        </div>
        <div className='right'>
          <h3><PiSuitcaseSimpleBold></PiSuitcaseSimpleBold> Experience</h3>    
          <div className='bor3'>
            <h3 id='PO2'>Prefeitura de Oriximiná, Estágio</h3>
            <p>
              <span>CPD: Centro de Processamento de Dados </span><br/>
              <FcCalendar></FcCalendar> 
              April 2021 - September 2021
            </p>
          </div>
          <div className='bor3'>
            <h3 id='PO2'>Compasso UOL, Estágio</h3>
            <p>
              <span>developer Front-end & Cloud with AWS </span><br/>
              <FcCalendar></FcCalendar> 
              December 2022 - May 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PEx