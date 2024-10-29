import { useNavigate } from 'react-router';
import successIcon from '../../images/icon-success.svg';

// eslint-disable-next-line react/prop-types
const Success = ({ emailInput, setEmailInput }) => {
  const navigate = useNavigate();
  
  function handleClick(){
    setEmailInput('');

    navigate('/');
  }



  return (
    <div className="success-wrapper">
      <article className="success-wrapper__card">
        <img src={successIcon} alt="sucessful login" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <span className='success-wrapper__card__email'>{emailInput}</span>. Please open
          it and click the button inside to confirm your subscription.
        </p>
        <button onClick={handleClick}>Dismiss message</button>
      </article>
    </div>
  );
}

export default Success
