import React from 'react'
import {BrowserRouter , Routes ,Route} from "react-router-dom";
import Admin_dashbord from './Component_Pages/Admin/Admin_dashbord';
import Registration_Page from './Component_Pages/Authentications/Registration_Page';
const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Admin_dashbord/>}></Route>
        <Route path='/Reg' element={<Registration_Page/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App