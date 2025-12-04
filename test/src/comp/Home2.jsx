import React from 'react'
import rocket from '../assets/img/rocket.png'
import color from '../assets/img/color 2.png'
import aifi from '../assets/img/aifi.jpg'
import dash from '../assets/img/dash.jpg'
import tele from '../assets/img/tele.png'
import sw from '../assets/img/sw.png'
import Testimonial from '../sections/Testimonial'
import Form from '../sections/Form'
import Footer from '../sections/Footer'
import Animation from '../sections/Animation'
import Video from '../sections/Video'
import Social from '../sections/Social'


const Home2 = () => {
  return (
    <>
   <Animation/>
    {/* <div className='home relative text-white flex h-[100vh] w-full'>
        <div className="left w-[60%] h-full flex flex-col gap-[2.5vw] justify-center pl-[54px]">
          <h1 className='text-[3.5vw] w-[100%] font-semibold leading-[4vw]'>we are a design-led, strategy-driven
digital marketing and <br />
creative design agency</h1>
        <p className='w-[90%]'>With DEMICS, your brand is designed with intention, your stories are digitalized with emotion, and your presence evolves with culture. We market across media, innovate with AI, create using cutting-edge technology, and drive results through strategic thinking.</p>
        <button className='contact w-[25%] rounded-full items-center h-[8%] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] mt-1'>Learn More About us</button>
        </div>
        <div className="right w-[40%] relative flex pb-[4vw] pl-[3vw] items-center overflow-hidden">
            <img className='h-[28vw] w-[23vw] ' src={rocket} alt="" />
            <img src={color} className='h-[51vw]  rotate-180 w-[54vw] absolute bottom-[-4vw]' alt="" />
        </div>
        
    </div>  
    <div className='home relative text-white h-[427vh] '>
        <header className='h-[20vh]  flex items-center pl-[8vw] '>
            <h1 className='text-5xl'>Our  Services</h1>
        </header>
        <div className=' gap-[4vw]   h-[405vh] flex flex-col pl-[8vw]
        pt-[3vw]'>
          <div className="border rounded-[20px] h-[65vh] w-[75vw] flex">
            <div className="w-[50%] flex justify-center items-center h-full ">
              <img src="" className='an  h-[84%] w-[70%] rounded-[10px]' alt="" />
            </div>
            <div className="w-[50%] gap-7 pl-[4vw] h-full  flex flex-col justify-center">
                <h1 className='text-[5vw] w-[70%] font-semibold leading-[4vw]'>Branding</h1>
        <p className='w-[85%] text-xl'>We craft custom websites, branding, and digital strategies to help your business stand out and thrive online.</p>
        <button className='contact w-[25%] rounded-full items-center h-[10%] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] mt-1'>Learn More</button>
            </div>
           </div>
           {/* 2 */}
           {/* <div className="border rounded-[20px] h-[65vh] w-[75vw] flex">          
            <div className="w-[55%] gap-7 items-center h-full  flex flex-col justify-center">
                <h1 className='text-[4.7vw] pl-7 w-[80%] font-semibold leading-[5vw] '>Social Media Management</h1>
        <p className='w-[68%] text-xl'>We craft custom websites, branding, and digital strategies to help your business stand out and thrive online.</p>
        <div className='w-full  pl-[7vw] h-[3.6vw]'>
          <button className='contact w-[28%] rounded-full items-center h-[100%] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] mt-1'>Learn More</button>
        </div>
            </div>
             <div className="w-[45%] flex items-center h-full ">
              <img src="" className='an  h-[84%] w-[78%] rounded-[10px]' alt="" />
            </div>
           </div> */}
           {/* 3           */}
           {/* <div className="border rounded-[20px] h-[65vh] w-[75vw] flex">
            <div className="w-[50%] flex justify-center items-center h-full ">
              <img src="" className='an  h-[84%] w-[70%] rounded-[10px]' alt="" />
            </div>
            <div className="w-[50%] gap-7 pl-[4vw] h-full  flex flex-col justify-center">
                <h1 className='text-[5vw] w-[70%] font-semibold leading-[4vw]'>Branding</h1>
        <p className='w-[85%] text-xl'>We craft custom websites, branding, and digital strategies to help your business stand out and thrive online.</p>
        <button className='contact w-[25%] rounded-full items-center h-[10%] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] mt-1'>Learn More</button>
            </div>
           </div> */}
           {/* 4 */}
            {/* <div className="border rounded-[20px] h-[65vh] w-[75vw] flex">          
            <div className="w-[55%] gap-7 items-center h-full  flex flex-col justify-center">
                <h1 className='text-[4.7vw] pl-7 w-[80%] font-semibold leading-[5vw] '>Website</h1>
        <p className='w-[68%] text-xl'>We craft custom websites, branding, and digital strategies to help your business stand out and thrive online.</p>
        <div className='w-full  pl-[7vw] h-[3.6vw]'>
          <button className='contact w-[28%] rounded-full items-center h-[100%] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] mt-1'>Learn More</button>
        </div>
            </div>
             <div className="w-[45%] flex items-center h-full ">
              <img src="" className='an  h-[84%] w-[78%] rounded-[10px]' alt="" />
            </div>
           </div> */}
           {/* 5 */}
           {/* <div className="border z-10 rounded-[20px] h-[65vh] w-[75vw] flex">
            <div className="w-[50%] flex justify-center items-center h-full ">
              <img src="" className='an  h-[84%] w-[70%] rounded-[10px]' alt="" />
            </div>
            <div className="w-[50%] gap-7 pl-[4vw] h-full  flex flex-col justify-center">
                <h1 className='text-[5vw] w-[85%] font-semibold leading-[4vw]'>AD Creation</h1>
        <p className='w-[85%] text-xl'>We craft custom websites, branding, and digital strategies to help your business stand out and thrive online.</p>
        <button className='contact w-[25%] rounded-full items-center h-[10%] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] mt-1'>Learn More</button>
            </div>
           </div>
        </div>
        <img src={color} className='h-[62vw]  rotate-180 w-[45vw] absolute top-[-29vw] right-0' alt="" />
        <img src={color} className='absolute  bottom-[-70vw] left-0 h-[152vw] w-[45vw]' alt="" />
    </div> */} 
     <div className="home">
      {/* Hero Section */}
      <div className='relative text-white flex flex-col lg:flex-row min-h-screen w-full'>
        {/* Left Content */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6 md:gap-8 lg:gap-[2.5vw] justify-center px-6 md:px-12 lg:pl-[54px] py-12 lg:py-0">
          <h1 className='text-4xl md:text-5xl lg:text-[3.5vw] w-full font-semibold leading-tight md:leading-snug lg:leading-[4vw]'>
            we are a design-led, strategy-driven digital marketing and creative design agency
          </h1>
          <p className='w-full md:w-[90%] text-base md:text-lg'>
            With DEMICS, your brand is designed with intention, your stories are digitalized with emotion, and your presence evolves with culture. We market across media, innovate with AI, create using cutting-edge technology, and drive results through strategic thinking.
          </p>
          <button className='contact w-full sm:w-[60%] md:w-[45%] lg:w-[25%] rounded-full h-12 lg:h-[8%] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] mt-1 hover:bg-white/10 transition-all'>
            Learn More About us
          </button>
        </div>
        
        {/* Right Image Section */}
        <div className="w-full lg:w-[40%] relative flex pb-8 md:pb-12 lg:pb-[4vw] pl-6 md:pl-12 lg:pl-[3vw] items-center justify-center lg:justify-start overflow-hidden min-h-[300px] lg:min-h-0">
          <img className='h-48 w-40 md:h-64 md:w-52 lg:h-[28vw] lg:w-[23vw] object-contain z-10' src={rocket} alt="rocket" />
          <img src={color} className='h-72 w-72 hidden lg:block md:h-96 md:w-96 lg:h-[51vw] lg:w-[54vw] rotate-180 absolute bottom-0 lg:bottom-[-4vw] opacity-50' alt="background" />
        </div>
      </div>

      {/* Services Section */}
      <div className='relative text-white min-h-screen py-12 md:py-16'>
        <header className='h-auto md:h-[20vh] flex items-center px-6 md:px-12 lg:pl-[8vw] mb-8 md:mb-0'>
          <h1 className='text-4xl md:text-5xl font-semibold'>Our Services</h1>
        </header>
        
        <div className='gap-6 md:gap-8 lg:gap-[4vw] flex flex-col px-6 md:px-12 lg:pl-[8vw] lg:pt-[3vw]'>
          {/* Service 1 - Branding */}
          <div className="border border-white/20 rounded-2xl lg:rounded-[20px] min-h-[400px] md:h-[400px] lg:h-[65vh] w-full lg:w-[75vw] flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-[50%] flex justify-center items-center h-64 md:h-full p-4">
              <div className='contact h-full w-full rounded-lg'></div>
            </div>
            <div className="w-full md:w-[50%] gap-4 md:gap-6 lg:gap-7 px-6 md:pl-[4vw] py-8 md:py-0 flex flex-col justify-center">
              <h1 className='text-4xl md:text-5xl lg:text-[5vw] w-full md:w-[70%] font-semibold leading-tight lg:leading-[4vw]'>Branding</h1>
              <p className='w-full md:w-[85%] text-base md:text-lg lg:text-xl'>We craft custom websites, branding, and digital strategies to help your business stand out and thrive online.</p>
              <button className='contact w-full sm:w-[50%] md:w-[35%] lg:w-[25%] rounded-full h-12 lg:h-[10%] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] hover:bg-white/10 transition-all'>Learn More</button>
            </div>
          </div>

          {/* Service 2 - Social Media Management */}
          <div className="border border-white/20 rounded-2xl lg:rounded-[20px] min-h-[400px] md:h-[400px] lg:h-[65vh] w-full lg:w-[75vw] flex flex-col-reverse md:flex-row overflow-hidden">
            <div className="w-full md:w-[55%] gap-4 md:gap-6 lg:gap-7 px-6 py-8 md:py-0  flex flex-col justify-center pl-[3vw]">
              <h1 className='text-3xl md:text-4xl lg:text-[4.7vw] w-full md:w-[80%] font-semibold leading-tight lg:leading-[5vw]'>Social Media Management</h1>
              <p className='w-full md:w-[85%] lg:w-[68%] text-base md:text-lg lg:text-xl'>We craft custom websites, branding, and digital strategies to help your business stand out and thrive online.</p>
              <div className='w-full '>
                <button className='contact w-full sm:w-[55%] md:w-[40%] lg:w-[28%] rounded-full h-12 lg:h-[3.6vw] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] hover:bg-white/10 transition-all'>Learn More</button>
              </div>
            </div>
            <div className="w-full md:w-[45%] flex items-center justify-center h-64 md:h-full p-4">
              <div className='contact h-full w-full rounded-lg'></div>
            </div>
          </div>

          {/* Service 3 - Branding (Duplicate) */}
          <div className="border border-white/20 rounded-2xl lg:rounded-[20px] min-h-[400px] md:h-[400px] lg:h-[65vh] w-full lg:w-[75vw] flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-[50%] flex justify-center items-center h-64 md:h-full p-4">
              <div className='contact h-full w-full rounded-lg'></div>
            </div>
            <div className="w-full md:w-[50%] gap-4 md:gap-6 lg:gap-7 px-6 md:pl-[4vw] py-8 md:py-0 flex flex-col justify-center">
              <h1 className='text-4xl md:text-5xl lg:text-[5vw] w-full md:w-[70%] font-semibold leading-tight lg:leading-[4vw]'>Content Creation</h1>
              <p className='w-full md:w-[85%] text-base md:text-lg lg:text-xl'>We craft custom websites, branding, and digital strategies to help your business stand out and thrive online.</p>
              <button className='contact w-full sm:w-[50%] md:w-[35%] lg:w-[25%] rounded-full h-12 lg:h-[10%] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] hover:bg-white/10 transition-all'>Learn More</button>
            </div>
          </div>

          {/* Service 4 - Website */}
          <div className="border border-white/20 rounded-2xl lg:rounded-[20px] min-h-[400px] md:h-[400px] lg:h-[65vh] w-full lg:w-[75vw] flex flex-col-reverse md:flex-row overflow-hidden">
            <div className="w-full md:w-[55%] gap-4 md:gap-6 lg:gap-7 px-6 py-8 md:py-0 pl-[3vw] flex flex-col justify-center">
              <h1 className='text-4xl md:text-5xl lg:text-[4.7vw] w-full md:w-[80%] font-semibold leading-tight lg:leading-[5vw]'>Website</h1>
              <p className='w-full md:w-[85%] lg:w-[68%] text-base md:text-lg lg:text-xl'>We craft custom websites, branding, and digital strategies to help your business stand out and thrive online.</p>
              <div className='w-full'>
                <button className='contact w-full sm:w-[55%] md:w-[40%] lg:w-[28%] rounded-full h-12 lg:h-[3.6vw] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] hover:bg-white/10 transition-all'>Learn More</button>
              </div>
            </div>
            <div className="w-full md:w-[45%] flex items-center justify-center h-64 md:h-full p-4">
              <div className='contact h-full w-full rounded-lg'></div>
            </div>
          </div>

          {/* Service 5 - AD Creation */}
          {/* <div className="border border-white/20 rounded-2xl lg:rounded-[20px] min-h-[400px] md:h-[400px] lg:h-[65vh] w-full lg:w-[75vw] flex flex-col md:flex-row overflow-hidden mb-12">
            <div className="w-full md:w-[50%] flex justify-center items-center h-64 md:h-full p-4">
              <div className='contact h-full w-full rounded-lg'></div>
            </div>
            <div className="w-full md:w-[50%] gap-4 md:gap-6 lg:gap-7 px-6 md:pl-[4vw] py-8 md:py-0 flex flex-col justify-center">
              <h1 className='text-4xl md:text-5xl lg:text-[5vw] w-full md:w-[85%] font-semibold leading-tight lg:leading-[4vw]'>AD Creation</h1>
              <p className='w-full md:w-[85%] text-base md:text-lg lg:text-xl'>We craft custom websites, branding, and digital strategies to help your business stand out and thrive online.</p>
              <button className='contact w-full sm:w-[50%] md:w-[35%] lg:w-[25%] rounded-full h-12 lg:h-[10%] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] hover:bg-white/10 transition-all'>Learn More</button>
            </div>
          </div> */}
        </div>

        {/* Background decorative images - hidden on mobile for performance */}
        {/* <img src={color} className='hidden lg:block h-[62vw] rotate-180 w-[45vw] absolute top-[-29vw] right-0 opacity-30' alt="" />
        <img src={color} className='hidden lg:block absolute bottom-[-70vw] left-0 h-[152vw] w-[45vw] opacity-30' alt="" /> */}
      </div>
    </div>
    <Social/>
    <Testimonial/>
    <Video/>
    <Form/>
    <Footer/>
    </>
  )
}

export default Home2
