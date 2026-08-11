import React from 'react'
import KaamSetuLogo from '../assets/kamsetu.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div class="flex justify-between items-center px-4 py-4 md:px-8 md:py-4 bg-[#0D332D] h-24 min-w-screen">
        <div>
            <img src={KaamSetuLogo} alt="KaamSetu" class="h-40 w-auto object-contain"/>
        </div>
        <div class="gap-4 text-white text-sm font-semibold md:gap-8 md:text-lg flex flex-row items-center">
            <h4><Link to="/">Home</Link></h4>
            <h4><Link to="/services">Services</Link></h4>
            <h4><Link to="/login">Login</Link></h4>
            <h4><Link to="/register">Register</Link></h4>
            <h4><Link to="/contact">Contact Us</Link></h4>
        </div>
     

    </div>
  )
}

export default Navbar