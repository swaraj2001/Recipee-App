import React, { useEffect, useState } from 'react'
import './Header.css'
const Header = () => {
    const[randomFood , setRandomFood]=useState([])
    useEffect(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res=>res.json())
        .then(d=>setRandomFood(d.meals))
    },[])
  return (
    <div className='Header'>
        {
            randomFood.map((item)=>{
                return(
                    <section className='headerSec' key={item.idMeal}>
                            {/* <div classNameName="right">
                                <h1 classNameName="h11">Today's Special</h1>
                                <h1 classNameName="h11">{item.strMeal}</h1>
                                <h1 classNameName="h11">{item.strCategory}</h1>
                            </div> */}

                                <main>
                                <div className="right">
                                     <img className='h-img'  src={item.strMealThumb}   alt="" ></img>
                                 </div>
                                <div className="left">
                                <div id="animation-1" className="animation">
                                    <div className="red">/</div>
                                    <div className="white light mask">
                                    <div>Today's </div>
                                    </div>
                                    <div className="white light mask">
                                    <div>Special</div>
                                    </div>
                                </div>
                                
                                {/* <div id="animation-2" className="animation">
                                    <div className="red bold arimo  ">
                                        <div></div>
                                    </div>
                                    <div classNameName='mask white light'>
                                        <div></div>
                                    </div>

                                    
                                </div> */}
                                
                                {/* <div id="animation-3" className="animation">
                                    <div class="white light bold arimo mask">
                                    <div></div>
                                    </div><div className="red bold arimo mask">
                                    <div></div>
                                    </div>
                                </div>
                                  */}
                                <div id="animation-4" className="animation">
                                    <div className="red bold arimo mask">
                                        <div>{item.strMeal}</div>
                                    </div>
                                    <div className="mask"><div></div></div>

                                </div>
                                
                                <div id="animation-5" className="animation">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                                    <defs>
                                        <clipPath id="mask-bottom-right">
                                        <rect className="clip-path" x="70%" y="0" width="30%" height="100%"/>
                                        </clipPath>
                                        <clipPath id="mask-top">
                                        <rect className="clip-path" x="0" y="0" width="100%" height="100%"/>
                                        </clipPath>
                                        <clipPath id="mask-bottom-left">
                                        <rect className="clip-path" x="0" y="0" width="30%" height="100%"/>
                                        </clipPath>
                                    </defs>
                                    
                                    <line className="bottom-right" x1="70%" y1="100%" x2="100%" y2="100%"/>
                                    <line className="right" x1="100%" y1="0" x2="100%" y2="100%"/>
                                    <line className="top" x1="0" y1="0" x2="100%" y2="0"/>
                                    <line className="left" x1="0" y1="0" x2="0" y2="100%"/>
                                    <line className="bottom-left" x1="0" y1="100%" x2="30%" y2="100%"/>
                                    </svg>
                                    <div className="white bold arimo mask">
                                    <div></div>
                                    </div>
                                    <div className="white mask">
                                    <div>{item.strCategory}</div>
                                    </div>
                                </div>
                                </div>
                                    
                           
                            </main>
                            
                    </section>
        
                )
                })
        }
      

    </div>
  )
}

export default Header
