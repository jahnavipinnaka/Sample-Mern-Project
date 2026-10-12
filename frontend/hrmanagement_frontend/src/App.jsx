import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home></Home>}></Route>
        <Route path="/about" element = {<About></About>}></Route>
        <Route path="/contact" element = {<Contact></Contact>}></Route>
        <Route path="/services" element = {<Services></Services>}></Route>
      </Routes>
      

      <Footer/>
    </div>
  )
}

export default App
