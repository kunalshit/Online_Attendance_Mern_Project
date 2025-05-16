import React from 'react'
import {BrowserRouter , Routes ,Route} from "react-router-dom";
import Admin_dashbord from './Component_Pages/Admin/Admin_dashbord';
import Registration_Page from './Component_Pages/Authentications/Registration_Page';
import Login_Page from './Component_Pages/Authentications/Login_Page';
import Demo from './Component_Pages/Demo';
import HeaderSelection from './Component_Pages/Frontselection/HeaderSelection';
const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/sel' element={<HeaderSelection/>}></Route>
        <Route path='/' element={<Admin_dashbord/>}></Route>
        <Route path='/Reg' element={<Registration_Page/>}></Route>
        <Route path='/Log' element={<Login_Page/>}></Route>
        <Route path='/demo' element={<Demo/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App