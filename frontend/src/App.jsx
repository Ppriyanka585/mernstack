import React from 'react'
import Nav1 from './units/Nav1'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Additem from './pages/Additem.jsx';


export default function App() {
  return (
    <div>
      <Nav1></Nav1>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/additem" element={<Additem/>} />
          <Route path="/login" element={<Login />} />
       </Routes>
       
    </div>
  )
}

