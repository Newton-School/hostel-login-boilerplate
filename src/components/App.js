

import React, { useState } from 'react';
import { Route,Routes } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import './App.css';
import Login from './Login';
import Signup from './Signup';
import Cards from './Cards'

const App = () => {

   
  return (
   
    <BrowserRouter>
  

      <Routes>
        <Route path="/" element={<Login />} />

         <Route path="/register" element={ <Signup />} />
          <Route path="/card" element={<Cards />} /> 
            

      </Routes>
    
    </BrowserRouter>

  )
}


export default App;
