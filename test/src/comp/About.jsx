import React from 'react'
import Navbar from '../sections/Navbar'
import Us from '../sections/Us'
import VisionPage from '../sections/Vision'
import Team from '../sections/Team'
import Form from '../sections/Form'
import Footer from '../sections/Footer'
// import Faqs from '../sections/Faqs'

const About = () => {
  return (
   <>
   <div className='home'>
      <Navbar/> 
      <Us/>
      <VisionPage/>
      <Team/>
      <Form/>
      <Footer/>    
   </div>
       
   </>
  )
}

export default About
