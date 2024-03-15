import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";
import Login from './Login.js'; 
import Register from './Register.js'; 
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import './App.css';


function App() {
  return (

    
    <>
      <Login/>
<Routes>
<Route path='Register' element={<Register/>} />
<Route path='Login' element={<Login/>} />

</Routes>


    </>
    

  );
}



export default App;
