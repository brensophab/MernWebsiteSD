import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import React from 'react'
import './index.css'
import CreateAccount from "./pages/CreateAccount";
import Reports from "./pages/Reports";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/create-account" element={<CreateAccount/>}/>
      <Route path="/reports" element={<Reports/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/error" element={<Error/>}/>
    </Routes>
  )
}

export default App