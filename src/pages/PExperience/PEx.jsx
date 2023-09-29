import './PEx.css'
import {FaGraduationCap} from 'react-icons/fa';
import {FcCalendar} from 'react-icons/fc';
import {LuBaggageClaim} from 'react-icons/lu';

const PEx = () => {
  return (
    <div className='exp'>
      <FcCalendar></FcCalendar>
      <h1>Qualification</h1>
      <p>My personal journey</p>
      <div className='containerflex'>
        <div className='left'>
          <h3><FaGraduationCap></FaGraduationCap> Education</h3>
        </div>
        <div className='right'>
          <h3><LuBaggageClaim></LuBaggageClaim> Experience</h3>    
        </div>
      </div>
    </div>
  )
}

export default PEx