import './App.scss';
import React, { useEffect } from 'react';
import {Routes , Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Admin from "./pages/Admin";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import useStore from "./utils/Store";
import { cookies } from "./utils/Cookie";

const App = () => {
  
  const { hasCookie, setHasCookie } = useStore()

  useEffect(() => {
      if (cookies.get("token") !== undefined) {
        setHasCookie(true);
      } 
  }, []);
  
  return (
    <div className="app container">
      <Routes>
        { 
          !hasCookie
          ? <>
              <Route path="/" element={<Login />} />
            </>
          : <>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/join" element={<Join />} />
              <Route path="/admin/edit/:id" element={<Edit />} />
            </>
        }
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App