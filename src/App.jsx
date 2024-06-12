import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Video from './Components/VideoPlay/Video'


const App = () => {
  const[playState ,setPlayState]=useState(false)
  return (
    <div>
       <Navbar/>
       <Hero/>
       <div className="container">
            <Title  subtitle='OUR PROGRAM' title ='What we Offer'/>
          <Program/>
          <About setPlayState={setPlayState}/>
          <Title  subtitle='Gallery' title ='Campus Photos'/>
          <Campus/>
          <Title  subtitle='TESTIMONIALS' title ='What Student Says'/>
          <Testimonials/>
          <Title  subtitle='Contact Us' title ='Get in Touch'/>
          <Contact/>
          <Footer/>
        
       </div>
       <Video playState={playState} setPlayState={setPlayState}/>
      
    </div>
  )
}

export default App
