import React, { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

import About from './About'
import Footer from './Footer'
import AboutMeals from './AboutMeals'
const Recipee = () => {
    const[search , setSearch]=useState("b")

    
  return (
    <div>

     <BrowserRouter>
     <Navbar setSearch={setSearch} />
     
     <Routes>
        <Route path='/' element={<Home search={search} />} ></Route>
        <Route path='/about' element={<About search={search}/>} ></Route>
        <Route path='/aboutMeals' element={<AboutMeals search={search}/>} ></Route>
     </Routes>
    
     </BrowserRouter>
     
    </div>
  )
}

export default Recipee
