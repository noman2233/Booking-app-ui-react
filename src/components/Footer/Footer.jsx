import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
<>
    <div className='footerHome'>
<div className="row">
          
<div className="about">
    <h3 className=''style={{padding:"10px"}}>About us</h3>

 <p>
  You can also download TV shows and movies to your iOS, Android, or Windows 10 ... The Movie  - app may come pre-loaded on certain devices
 </p>
</div>
  
        <div className="row1">
            <div className="col">
                <h3 style={{padding:"10px",color:"white"}} >Useful pages</h3>
                <ul>
                   <Link to="/"> <li>Home</li></Link>
                   <Link to="/hotels"> <li>Hotels</li></Link>
                   <Link to="/apartments"> <li>Apartments</li></Link>
                   <Link to="/villas"> <li>Villas</li></Link>
                 
                </ul>
            </div>
        </div> 

        </div> 
       
        


    </div>
<div className="copyright">
    <p style={{color:"black"}}>Copyright &copy; Movie-App || All Right Reserved 2022 </p>
</div>
</>
  )
}

export default Footer