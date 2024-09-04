import React from 'react'
import Signin from './components/Signin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Signup from './components/Signup'
import About from './components/About'
import Home from './components/Home'
import Logout from './components/Logout'
const App = () => {

  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App