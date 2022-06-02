import './Login.css';
import { useState } from "react";
import ReactDOM from 'react-dom/client';
function Login() {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const password = event.target.value;
    setInputs(values => ({...values, [name]: password}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  return (
    <form onSubmit={handleSubmit} id = "login">
      <label>Username: &nbsp;
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <br></br>
      <br></br>
      <label>Password:&nbsp;
        <input 
          type="text" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <br></br>
        <input type="submit" id="button"/>
    </form>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);
export default Login;