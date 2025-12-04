import React from 'react'
import Featured from '../sections/Featured'
import Navbar from '../sections/Navbar'
import Project from '../sections/Project'
import Social from '../sections/Social'
import Marketing from '../sections/Marketing'
import Websites from '../sections/Websites'
import Ad from '../sections/Ad'
import Form from '../sections/Form'
import Footer from '../sections/Footer'

const Work = () => {
  return (
   <>
   <div className='home min-h-screen'> 
    <Navbar/>
    <Project/>
    {/* <Featured/>
    <Social/>
    <Marketing/>
    <Websites/>
    <Ad/> */}
    <Form/>
    <Footer/>
     
   </div>
   
   </>
  )
}

export default Work
