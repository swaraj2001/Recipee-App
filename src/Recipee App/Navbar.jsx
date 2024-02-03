import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = ({setSearch}) => {

  return (
    <div className='navbar'>
      
      <nav className="nav">

        <div className="nav-logo">
        <img src="https://foodrecipes.inspirythemes.com/classic/wp-content/uploads/sites/2/2015/12/logo1.png" alt="" className="logo" />
            <a className='a' href="">Home</a>
            <a className='a' href="">About</a>
          </div>
          <div className="second">
            <input className='search' type="search" name="" id="" onChange={(e)=>setSearch(e.target.value)} ></input>
          </div>
        
      </nav>
    </div>
  )
}

export default Navbar
