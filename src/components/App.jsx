import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";



import UserLogin from './signup/Login';
import Register from './signup/Register';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<UserLogin/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App