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
        <Route path='/Signup'element={<Signup />} />
        <Route path='/'element={<Login />} />
      </Routes>
      </BrowserRouter>
    );
}
export default App;