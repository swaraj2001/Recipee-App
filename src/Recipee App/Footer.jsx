import React from 'react'
import './Footer.css'
function Footer () {
  return (
    <div >
      <footer className="footer">

            <div className="links">
                <a href="tel:+917620057662"><i className="fa-solid fa-phone"> CALL</i></a>
                <a href="email:chimurkarswaraj@gmail.com"><i className="fa-solid fa-envelope"> EMAIL</i></a>
                <a href="https://wa.me/+917620057662"> <i className="fa-brands fa-whatsapp"> WHATSAPP</i> </a>
            </div>

            <div className="para">
                <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At odio delectus natus voluptatibus debitis
                    fuga saepe harum perferendis tenetur distinctio, reprehenderit consequatur, provident facere est
                    excepturi temporibus. Quia distinctio eum temporibus optio repudiandae omnis quidem consequatur ad
                    quaerat ut beatae velit id illum cum vel iure, praesentium tempora corrupti voluptate.
                </p>
            </div>
            <div className="icons">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </footer>
    </div>
  )
}

export default Footer
