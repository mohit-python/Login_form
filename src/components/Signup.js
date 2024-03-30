import React from "react";
import NavBar from './navbar';
function Signup()
{
    return (
        <div>
        <Navbar/>
    <div class="main2">
        <div class="createAcc">
            <form>
                <h1>Create <span>Your Account</span></h1>
                <div class="firstname">
                    <input type="text" placeholder="First Name" />
                </div>
                <div class="Lastname">
                    <input type="text" placeholder="Last Name" />
                </div>
                <div class="Email-id">
                    <input type="email" placeholder="Email" />
                </div>
                <div class="User-name">
                    <input type="text" placeholder="Username" />
                </div>
                <div class="pass-word">
                    <input type="password" placeholder="Password" id="password" /><img src="images/hidden.png" id="hidden-eye" />
                </div>
                <div className="remember" style={{border:"none",width:"90%",marginTop:"6px",padding:"0px"}} >
                    <input type="checkbox" class="check" /><p>Remember me</p>
                     {/* <label for="check">Remember me</label>  */}
                </div>
                <div className="sign-up" style = {{border:"none",width:"90%",padding:"0px",outline:"none",marginLeft:"56px"}}>
                    <button >sign-up</button>
                </div>
            </form>
            
        </div>
    </div>
        </div>
    );
}
export default Signup;