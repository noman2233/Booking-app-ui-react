import React from 'react'
import "./featured.css"
const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredList">
            <div className="featured_image">
            <img src="https://cdn.pixabay.com/photo/2022/10/15/23/20/hallstatt-7524006__480.jpg" alt="" className='featured_image' />
            </div>
            <div className="featured_title">
                <h1>Switzerland</h1>
                <h3>123 Properties</h3>
        </div>
        </div>
        <div className="featuredList">
            <div className="featured_image">
            <img src="https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009__480.jpg" alt="" className='featured_image' />
            </div>
            <div className="featured_title">
                <h1>Dublin</h1>
                <h3>123 Properties</h3>
        </div>
        </div> 
        <div className="featuredList">
            <div className="featured_image">
            <img src="https://cdn.pixabay.com/photo/2017/12/16/22/23/regensburg-3023439__480.jpg" alt="" className='featured_image' />
            </div>
            <div className="featured_title">
                <h1>Singapore</h1>
                <h3>123 Properties</h3>
        </div>
        </div>  
     
        
    </div>
  )
}

export default Featured