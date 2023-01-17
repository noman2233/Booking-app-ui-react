import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="logo">
        <Link to="/"><li className='logo'>Booking App Clone</li></Link>
        </div>
        <div className="navbar_buttons">
            <button className='navbar_buttons'>Register</button>
            <button className='navbar_buttons'>Login</button>
        </div>
    
    </div>
  )
}

export default Navbar