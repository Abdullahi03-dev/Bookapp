// import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home.tsx'
import Signup from './pages/signup.tsx'

function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='pages/signup' element={<Signup/>}/>
      </Routes>
    </Router>
    </>
  )
     
   
}

export default App
