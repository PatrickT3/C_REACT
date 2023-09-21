import { Link } from 'react-router-dom';
import './LinkButton.css';
import PropTypes from 'prop-types';

const LinkButton = ({ to, text }) => {
  return (
    <div>
      <Link to={to} className='btn-link'>{text}</Link>
    </div>
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired, // Validação da propriedade 'to'
  text: PropTypes.string.isRequired, // Validação da propriedade 'text'
};

export default LinkButton;
