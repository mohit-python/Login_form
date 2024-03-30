import React from "react";
import { useNavigate} from "react-router-dom";
import Navbar from './navbar';
function Login()
{
  const navigate = useNavigate();
  function createaccounthandler()
  {
      navigate('/Signup');
  }
    return(
        <div>
           <Navbar/>
  <div class="main">
    <div class="form">
      <form>
        <h1>Login</h1>
        <div class="username">
          <input type="email" placeholder="Username or Email"  /><img src="images/email.png"/>
        </div>
        <div class="password">
          <input type="password" placeholder="Password" id="password" /><img src="images/hidden.png" id="hidden-eye" />
        </div>
        <div class="sign-in">
          <p>Forgot Password?</p>
          <div class="sign-in-button">
            <button s>sign-in</button>
          </div>
        </div>
         <div class="signUp" onClick={createaccounthandler}>
           <a href="#">Don't have an account ?</a>
        </div> 
        {/* <Navigate to='/Signup' >Signup</Navigate> */}
        {/* <Link to={'/SIgnup'}>Dont have?</Link> */}
      </form>
    </div>
  </div>
 </div>
    );
}
export default Login;