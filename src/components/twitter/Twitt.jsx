import './twit.css'
import ney from '../../img/ney.jpg'
import PropTypes from 'prop-types';

const Twitt = ({name,aroba,corp}) => {
  return (
    <div className='twit'>
        
        <div className='pes'>
            <img src={ney} alt="" /><p><span>{name}</span><br/>@{aroba}</p>
        </div>
        <div className='m'>        
           {corp}
        </div>
        <div className='fim'>
          <p>1:04 . 11 nov. 15</p>
          <p>1 Republicaar 2 Curtidas</p>
        </div>
    </div>
  )
}
Twitt.propTypes = {
  name: PropTypes.string.isRequired, // Validação da propriedade 'text'
  aroba: PropTypes.string.isRequired, // Validação da propriedade 'text'
  corp: PropTypes.string.isRequired, // Validação da propriedade 'text'
};

export default Twitt