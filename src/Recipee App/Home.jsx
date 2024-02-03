import React, { useEffect, useState } from 'react'
import './Home.css'

import { useNavigate } from 'react-router-dom'
import Header from './Header'
const Home = ({search}) => {
    const [data,setData] = useState([])

    const[data2 , setData2] = useState([])
    useEffect(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
        .then(res=>res.json())
        .then(d=>setData2(d.meals))
    },[data2])

    
    useEffect(() =>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res=>res.json())
        .then(d=>setData(d.categories))
    },[data])
    const navigate = useNavigate()
  return (
    <div className='Home'>
      
      <Header/>
      <center><h1> Food Categories</h1></center>
      <section className="HomeSec" style={{height:'auto' , width:"100%"}}>
      {data.map((item)=>{
        return(
            
            <div key={item.idCategory}>
            <img src={item.strCategoryThumb} onClick={()=>navigate('/about' , {state:{item}})} alt="" ></img>
            <p>{item.strCategory} </p>
            </div>
           
        )
     })}
      </section>
      <center><h1> Meals </h1></center>
      <section className="HomeSec" style={{height:'auto' , width:"100%"}}>
      {data2.map((item)=>{
        return(
            <div key={item.idMeal}>
            <img src={item.strMealThumb} height={'300px'}  onClick={()=>navigate('/aboutMeals', {state:{item}})} alt="" ></img>
            <p>{item.strMeal} </p>
            </div>
           
        )
      })}
      </section>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
