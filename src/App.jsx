import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import LoginAdmin from './Components/LoginAdmin'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import LoginSiswa from './Components/LoginSiswa'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'


function App () {
  return (
   <>
    <LoginAdmin/>
   </>
  )
}

export default App