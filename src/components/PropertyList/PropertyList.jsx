import React from 'react'
import "./PropertyList.css"
const PropertyList = () => {
  return (
    <>

        <h3 className='property_list_title'>Browse by categories</h3>
    <div className='property_list'>

       <div className="property_list_items">
            <div className="property_list_items_images">
                <img src="https://cdn.pixabay.com/photo/2017/06/12/15/08/canal-2395818__480.jpg" alt="" className='property_list_items_images' />
            </div>
            <div className="property_list_items_title">

            <h3>Hotels</h3>
            <h4>12 Hotels</h4>
            </div>
        </div>

        <div className="property_list_items">
            <div className="property_list_items_images">
                <img src="https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156__480.jpg" alt="" className='property_list_items_images' />
            </div>
            <div className="property_list_items_title">

            <h3>Apartments</h3>
            <h4>12 Hotels</h4>
            </div>
        </div>

         <div className="property_list_items">
            <div className="property_list_items_images">
                <img src="https://cdn.pixabay.com/photo/2014/03/27/23/57/brick-house-299766__480.jpg" alt="" className='property_list_items_images' />
            </div>
            <div className="property_list_items_title">

            <h3>Restores</h3>
            <h4>12 Hotels</h4>
            </div>
        </div> 

         <div className="property_list_items">
        <div className="property_list_items_images">
                <img src="https://cdn.pixabay.com/photo/2021/04/05/18/02/villa-balbiano-6154200__480.jpg" alt="" className='property_list_items_images' />
            </div>
        <div className="property_list_items_title">

            <h3>Villas</h3>
            <h4>12 Hotels</h4>
            </div>
        </div> 

         <div className="property_list_items">
            <div className="property_list_items_images">
                <img src="https://cdn.pixabay.com/photo/2016/09/19/22/46/lake-1681485__480.jpg" alt="" className='property_list_items_images' />
            </div>
            <div className="property_list_items_title">

            <h3>Cabins</h3>
            <h4>12 Hotels</h4>
            </div>
        </div>
    </div>
    </>
  )
}

export default PropertyList