import React, { useState, useEffect } from 'react';
import {Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Admin from "./pages/Admin";
import Edit from "./pages/Edit";
import useStore from "./utils/Store";
import token from "./utils/Token";
import './App.scss';

const App = () => {
  
  const { hasCookie, setHasCookie } = useStore()

  useEffect(() => {
      if (token !== undefined) {
        setHasCookie(true);
      }
  }, [hasCookie]);
  
  return (
    <div className="App container">
      
      <Routes>
        { 
          !hasCookie 
          ? <Route path="/" element={<Login />} />
          : <Route path="/" element={<Home removeCookie={() => { setHasCookie(false) }} />} />
        }
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/join" element={<Join />} />
        <Route path="/admin/edit/:_id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App