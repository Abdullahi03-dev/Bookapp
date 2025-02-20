// import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider.tsx'
import './App.css'
import Home from './pages/home.tsx'
import Signup from './pages/signup.tsx'

function App() {
  return(
    <>
    <AuthProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='pages/signup' element={<Signup/>}/>
      </Routes>
    </Router>
    </AuthProvider>
    </>
  )
     
   
}

export default App
