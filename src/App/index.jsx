import { BrowserRouter, Routes,Route } from "react-router-dom";
import  Login from "./components/Login"
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Balance from "./components/Dashboard/Balance";

function App() {
    return (
  
     
      <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="dashboard" element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
  