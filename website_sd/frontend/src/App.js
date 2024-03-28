import Home from "./pages/Home.jsx";
import  Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { Route, Routes } from "react-router-dom";
import React from 'react'
import './index.css'
import CreateAccount from "./pages/CreateAccount.jsx";
import Reports from "./pages/Reports.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Error from "./pages/Error.jsx";
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/create-account" element={<CreateAccount/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/reports" element={<Reports/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/error" element={<Error/>}/>
    </Routes>
  )
}

export default App