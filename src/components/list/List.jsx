import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./list.css"

const List = () => {
  const location=useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setoptuons] = useState(location.state.options)
  return (
    <div>
      
    </div>
  )
}

export default List