import { useNavigate } from "react-router";





// eslint-disable-next-line react/prop-types
const Form = ({ emailInput, setEmailInput }) => {

  const navigate= useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    navigate('/success'); // Navigate to success page when form is submitted.
  
  }




  return (
    <>
  <form onSubmit={handleSubmit}>
  <label htmlFor="email-input">Email address: <p> Valid email required</p></label>
  <input  id="email-input" name="email-input" type="email" placeholder="email@company.com" value={emailInput} onChange={((e) => setEmailInput(e.target.value))} required />

  <button>Subscribe to monthly newsletter</button>
    </form>

    </>
  )
}

export default Form
