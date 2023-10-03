import './twit.css';
import ney from '../../img/ney.jpg';
import chico from '../../img/chico-moedas.webp';
import elon from '../../img/eln.jpg';
import PropTypes from 'prop-types';

const Twitt = ({num,name,aroba,corp}) => {
  return (
    <div className='twit'>
        
        <div className='pes'>
            {num === 1 && <img src={ney} alt="" />}
            {num === 2 && <img src={chico} alt="" />}
            {num === 3 && <img src={elon} alt="" />}
            <p><span>{name}</span><br/>@{aroba}</p>
        </div>
        <div className='m'>        
           {corp}
        </div>
        <div className='fim'>
          <p>1:04 . 11 nov. 15</p>
          <p>17 Republicaar 202 Curtidas</p>
        </div>
    </div>
  )
}
Twitt.propTypes = {
  name: PropTypes.string.isRequired, // Validação da propriedade 'text'
  aroba: PropTypes.string.isRequired, // Validação da propriedade 'text'
  corp: PropTypes.string.isRequired, // Validação da propriedade 'text'
  num: PropTypes.number.isRequired,
};

export default Twitt