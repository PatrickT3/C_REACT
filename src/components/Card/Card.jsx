import './Card.css'
import PropTypes from 'prop-types';
import {AiFillStar} from 'react-icons/ai';
import {FcClock} from 'react-icons/fc';
import {AiOutlineCheckCircle} from 'react-icons/ai';

const Card = ({texth2,textp,num}) => {
  return (
    <div className='Card'>
      {num === 1 && <AiFillStar id='tro'></AiFillStar> }
      {num === 2 && <FcClock></FcClock> }
      {num === 3 && <AiOutlineCheckCircle id='ok'></AiOutlineCheckCircle> }
      <h2>{texth2}</h2>
      <p>{textp}</p>
    </div>
  )
}
Card.propTypes = {
  texth2: PropTypes.string.isRequired, // Validação da propriedade 'text'
  textp: PropTypes.string.isRequired, // Validação da propriedade 'text'
  num: PropTypes.number.isRequired, // Validação da propriedade 'text'
};
export default Card