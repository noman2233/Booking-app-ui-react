import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './pages/home/Home'
import Hotel from './pages/hotel/Hotel'
import List from './pages/List/List'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/hotels" element={<Hotel/>} />
      <Route  path="/hotel/:id" element={<List/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App