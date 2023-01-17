import React from 'react'
import "./SearchComponent.css"

const SearchComponent = () => {
  return (
    <div className='search_component'>
      <div className="title_search">
        <h3>Search</h3>
      </div>
      <div className="destination">
        <p>Destination</p>
      </div>
      <div className="input">
        <input type="text" className='input_search' />
      </div>
      <div className="options_search">
       <h5>Options</h5>
      </div>
      <div className="max_price">
        <h5>Max price(per night)</h5>
        <input type="number" className='max_input'/>
      </div> 
      <div className="max_price">
        <h5>Min price(per night)</h5>
        <input type="number" className='max_input'/>
      </div> 
      <div className="max_price">
        <h5>Adult</h5>
        <input type="number" className='max_input'/>
      </div>
       <div className="max_price">
        <h5>Children</h5>
        <input type="number"  className='max_input'/>
      </div> 
       <div className="max_price">
        <h5>Room</h5>
        <input type="number" min={1} className='max_input'/>
      </div>
      <button className='search_button'>Search</button>
    </div>
  )
}

export default SearchComponent