import React from "react";
import Signup from "./Signup";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Login";
//import { useHistory } from "react-router-dom";
function App()
{
    return(
      
      <BrowserRouter>
      <Routes>
        <Route path='/mohit-python/Login_form/Signup'element={<Signup />} />
        <Route path='/mohit-python/Login_forn'element={<Login />} />
      </Routes>
      </BrowserRouter>
    );
}
export default App;