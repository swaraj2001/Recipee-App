import React from 'react'
import ReactPlayer from 'react-player'
import { useState, useEffect } from 'react'
import {useLocation , useNavigate} from 'react-router-dom'
const Aboutmeals = ({search}) => {

    const location = useLocation()
    const specificMeals = location.state.item
    console.log(specificMeals);
    const[data2 , setData2] = useState([])
    useEffect(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
        .then(res=>res.json())
        .then(d=>setData2(d.meals))
    },[data2])
     const navigate = useNavigate()
  return (
    <div>
         <div className="about_content" style={{ marginTop:'50px', marginBottom:'50px'}}>
            <div className="img" style={{height:'auto', width:'100%', alignItems:"center", justifyContent:'space-around', display:'flex', flexWrap:'wrap' }}>
                  <div className="img-div1" style={{width:'49%' }}>
                        <img src={specificMeals.strMealThumb} style={{height:'300px', width:'300px', marginLeft:'2%', borderRadius:'10px', objectFit:'cover'}}/><img/>         
                        <p style={{ marginTop:'20px', color:'gray', fontWeight:'300'}}>
                      <span style={{color:'red',fontWeight:'900'}}>Name</span>:{specificMeals.strMeal}
                      <br /><br />
                      <span style={{color:'red',fontWeight:'900'}}>Category</span>:{specificMeals.strCategory}
                      <br /><br />
                      <span style={{color:'red',fontWeight:'900'}}>Area</span>:{specificMeals.strArea}
                      </p>
                  </div>
                <div className="para1" style={{width:'49%' }}>
                  <p>
                      <span style={{color:'grey'}}>{specificMeals.strInstructions}</span>
                  </p>
                </div>
                 
            </div>
      </div>
      <ReactPlayer url={specificMeals.strYoutube} width={'100%'} height={'80vh'} />
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

export default Aboutmeals