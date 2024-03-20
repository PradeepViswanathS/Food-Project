import React from 'react'
import Header from './Components/Header'
import Banners from './Components/Banners'
import About from './Components/About'
import Product from './Components/Product'
import Carosel from './Components/Carosel'
import Foodcarosel from './Components/Foodcarosel'
import Contactus from './Components/Contactus'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
      <Header />
      <Banners />
      <Foodcarosel />
      <Carosel />
      <Product />
      <About />
      <Contactus />
      <Footer />
      
    </div>
  )
}

export default App
