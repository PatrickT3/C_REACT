import './Card.css'
import PropTypes from 'prop-types';

const Card = ({texth2,textp}) => {
  return (
    <div className='Card'>
      <h2>{texth2}</h2>
      <p>{textp}</p>
    </div>
  )
}
Card.propTypes = {
  texth2: PropTypes.string.isRequired, // Validação da propriedade 'text'
  textp: PropTypes.string.isRequired, // Validação da propriedade 'text'
};
export default Card