import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Grid from './layouts/Grid'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import UserProfile from './components/UserProfile'
import ContactUs from './components/ContactUs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




const App = () => {
  return (
    <Router>
      <div className="bg-[#A96F45] h-auto w-screen">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Grid />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
  
}

export default App