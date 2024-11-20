import './styles/App.css';
import React, { useState } from "react";
//import {requestAPI} from './utlis/request.js'
import { Routes, Route, useLocation } from "react-router-dom";
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Courses from './pages/Courses';
import './styles/base/color.css';
import './styles/base/base.css';
import './styles/base/flex.css';
import './styles/pages/dashboard.css';
import Users from './pages/Users';

function App() {
  const location = useLocation();

  return ( 
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Courses" element={<Courses />} />

        <Route path="/Users" element={<Users />} />

        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
