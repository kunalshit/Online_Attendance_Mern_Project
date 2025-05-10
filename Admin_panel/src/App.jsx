import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Component/home/Home';
import Login from './Component/Login/Login';

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>    
  </>
}

export default App