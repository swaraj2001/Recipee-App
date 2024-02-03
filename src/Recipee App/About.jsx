import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import './About.css'
import { useLocation, useNavigate } from 'react-router-dom'

const About = ({search}) => {
  const location=useLocation()
  
  const specificFood = location.state.item 
  const navigate = useNavigate()  
  const[meals , setMeals]=useState([])
  const[data2 , setData2] = useState([])
    useEffect(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
        .then(res=>res.json())
        .then(d=>setData2(d.meals))
    },[data2])


  useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${specificFood.strCategory}`)
      .then(res=>res.json())
      .then(d=>setMeals(d.meals))
  }, []);

    console.log(meals);
    
  
  return (
    <div className='About'  >
      {/* <h1>About</h1> */}
      <section className='aboutSec' >
         
          <div className="img" >
            <img className='category' src={specificFood.strCategoryThumb}   alt="" ></img>
              <p>{specificFood.strCategory} </p>
          </div>
          <div className="description" >
               <p>{specificFood.strCategoryDescription} </p>
          </div>
          
      </section>
      
      <h1>Categories</h1>
      <section className="HomeSec" >
        
            {meals.map((item)=>{
              return(
                  
                  <div key={item.idMeal}>
                  <img className='homeImg' src={item.strMealThumb} width={'250px'} height={'300px'}alt=""   onClick={()=>navigate('/aboutMeals' , {state:{item}})}></img>
                  <p>{item.strMeal} </p>
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
     
    </div>
  )
}

export default About
