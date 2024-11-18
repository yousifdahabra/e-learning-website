import './styles/App.css';
import React, { useState } from "react";
//import {requestAPI} from './utlis/request.js'
import { Routes, Route, useLocation } from "react-router-dom";
import Login from './pages/Login';
import './styles/base/color.css';
import './styles/base/base.css';
import './styles/base/flex.css';
import './styles/pages/dashboard.css';

function App() {
  const location = useLocation();

  return ( 
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
