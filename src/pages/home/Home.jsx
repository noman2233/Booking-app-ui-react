import React from 'react'
import Featured from '../../components/Featured/Featured'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import PropertyList from '../../components/PropertyList/PropertyList'
import Mail from '../../components/mail/Mail'
import Footer from '../../components/Footer/Footer'
import "./home.css"
const Home = () => {
  return (
    <div>
   
        <Navbar/>
        <Header/>
      <Featured/>
      <PropertyList/>
      <FeaturedProperties/>
      <Mail/>
      
    </div>
  )
}

export default Home