// import React from 'react'
import scope from '../assets/img/scope.png'
import color from '../assets/img/color 2.png'
import brain from '../assets/img/brain.png'
import arr from '../assets/img/arrow33.png'
import brush from '../assets/img/brush.png'
import find from '../assets/img/find.png'

// const Vision = () => {
//   return (
//    <>
//    <div className='h-screen  relative w-screen  flex '>
//      <div className="w-[35%] flex justify-end pr-[4vw] items-center h-full">
//         <img src={scope} className='h-[21vw] w-[26vw]' alt="" />
//      </div>
//      <div className="w-[60%] items-center flex flex-col justify-center pl-[2vw] text-white h-full ">
//         <h1 className='text-[7vw]'>Our  Vision</h1>
//         <span className='text-[1.3vw] w-[80%]'>Our vision is to revolutionize the way brands connect with the world by blending high-end design with the power of emerging technologies. We aspire to be a global leader in crafting intelligent, immersive, and results-driven brand experiences that are rooted in creativity and powered by data. By combining human-centric design, AI-driven strategies, and advanced digital tools, we aim to help businesses thrive in an ever-evolving digital ecosystem. Our goal is to not just follow trends, but to shape them—delivering future-ready solutions that are bold, adaptive, and impactful. We are committed to building meaningful digital journeys that spark emotion, drive engagement, and create measurable growth, while upholding values of innovation, inclusivity, and ethical digital storytelling. Through collaboration, innovation, and relentless pursuit of excellence, we envision becoming the go-to partner for brands ready to lead in the digital age.</span>
//      </div>
//    </div>
//    <div className='h-[150vh] relative '>
//     <header className=' w-full text-white h-[35vh] flex italic font-serif  items-center pl-[7vw]'>
//          <h1 className='text-[6vw] z-10'>Why  Choose  Us</h1>
//     </header>
//      <div className='flex flex-col text-white gap-[3vw]'>
//         <div className='flex h-[50vh] justify-center gap-[4vw] w-full'>
//             <div className='w-[45%] z-10 rounded-2xl h-full my-btn shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)]'>
//                 <div className='h-[45%] pl-[3vw] items-center flex'>
//                     <img src={brain} className='h-[70px]' alt="" />
//                 </div>
//                 <div className='h-[55%]  flex flex-col pl-[3vw]'>
//                     <h1 className='text-[2vw]'>Future-First Thinking</h1>
//                     <span className='text-[1.2vw] w-[80%]'>We combine creativity with cutting-edge technology to craft innovative brand experiences that stay ahead of trends and disruptions.</span>
//                 </div>
//             </div>
//             <div className='w-[35%] rounded-2xl h-full my-btn shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)]'>
//                  <div className='h-[45%] pl-[3vw] items-center flex'>
//                     <img src={arr} className='h-[70px]' alt="" />
//                 </div>
//                 <div className='h-[55%]  flex flex-col pl-[3vw]'>
//                     <h1 className='text-[2vw]'>Custom-Crafted Strategies</h1>
//                     <span className='text-[1.2vw] w-[80%]'>No templates, no shortcuts. We design tailored campaigns and visuals that align with your unique goals, audience, and industry.</span>
//                 </div>
//             </div>
//         </div>
//         <div className='flex h-[50vh] justify-center gap-[4vw] w-full '>
//             <div className='w-[32%] rounded-2xl h-full my-btn shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)]'>
//                 <div className='h-[45%] pl-[3vw] items-center flex'>
//                     <img src={find} className='h-[70px]' alt="" />
//                 </div>
//                 <div className='h-[55%]  flex flex-col pl-[3vw]'>
//                     <h1 className='text-[2vw]'>Data-Driven Results</h1>
//                     <span className='text-[1.2vw] w-[80%]'>Every strategy is backed by insights, analytics, and measurable KPIs — ensuring smart decisions and optimized performance.</span>
//                 </div>
//             </div>
//             <div className='w-[48%] rounded-2xl h-full my-btn shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)]'>
//                 <div className='h-[45%] pl-[3vw] items-center flex'>
//                     <img src={brush} className='h-[70px]' alt="" />
//                 </div>
//                 <div className='h-[55%]  flex flex-col pl-[3vw]'>
//                     <h1 className='text-[2vw]'>High-End Design Expertise</h1>
//                     <span className='text-[1.2vw] w-[80%]'>Our visual storytellers bring world-class design, motion graphics, and immersive experiences that leave a lasting impact.</span>
//                 </div>
//             </div>
//         </div>
        
//      </div>
//    </div>
//    </>
//   )
// }

// export default Vision

// res 

import React, { useState } from 'react';

// Vision Component
const Vision = () => {
  return (
   <>
   <div className='min-h-screen home lg:h-screen relative w-screen flex flex-col lg:flex-row px-4 lg:px-0 py-8 lg:py-0'>
    <img src={color} className='md:hidden hidden  sm:hidden rotate-180 z-0 absolute right-0 top-0 h-[90vw] w-[30vw]' alt="" />
   
     <div className="w-full lg:w-[35%] flex justify-center lg:justify-end lg:pr-[4vw] items-center mb-8 lg:mb-0">
        <img src={scope} className='h-[40vw] w-[50vw] sm:h-[30vw] sm:w-[40vw] lg:h-[21vw] lg:w-[26vw]  rounded-lg'></img>
     </div>
     <div className="w-full lg:w-[60%] items-center flex flex-col justify-center lg:pl-[2vw] text-white">
        <h1 className='text-[12vw] sm:text-[10vw] lg:text-[7vw] mb-4 lg:mb-0'>Our Vision</h1>
        <span className='text-[3.5vw] sm:text-[2.5vw] lg:text-[1.3vw] w-[95%] lg:w-[80%] text-center lg:text-left leading-relaxed'>
          Our vision is to revolutionize the way brands connect with the world by blending high-end design with the power of emerging technologies. We aspire to be a global leader in crafting intelligent, immersive, and results-driven brand experiences that are rooted in creativity and powered by data. By combining human-centric design, AI-driven strategies, and advanced digital tools, we aim to help businesses thrive in an ever-evolving digital ecosystem.
        </span>
     </div>
   </div>

   <div className='min-h-screen lg:h-[150vh] relative px-4 lg:px-0 py-8 lg:py-0'>
     <img src={color} className='md:hidden hidden  absolute left-0 w-[30vw] top-[-32vw] h-[100vw]' alt="" />

    <header className='w-full text-white h-auto lg:h-[35vh] flex italic font-serif items-center justify-center lg:justify-start lg:pl-[7vw] mb-8 lg:mb-0'>
         <h1 className='text-[10vw] sm:text-[8vw] lg:text-[6vw] z-10'>Why Choose Us</h1>
    </header>
     <div className='flex flex-col text-white gap-[6vw] lg:gap-[3vw]'>
        <div className='flex flex-col lg:flex-row h-auto lg:h-[50vh] justify-center gap-[6vw] lg:gap-[4vw] w-full'>
            <div className='w-full lg:w-[45%] z-10 rounded-2xl h-[60vh] sm:h-[50vh] lg:h-full b backdrop-blur-sm my-btn'>
                <div className='h-[35%] lg:h-[45%] pl-[6vw] lg:pl-[3vw] items-center flex justify-center lg:justify-start'>
                    <img src={brain} className='h-[70px] w-[70px] '></img>
                </div>
                <div className='h-[65%] lg:h-[55%] flex flex-col pl-[6vw] lg:pl-[3vw] pr-[6vw] lg:pr-0'>
                    <h1 className='text-[5vw] sm:text-[4vw] lg:text-[2vw] mb-2 lg:mb-0'>Future-First Thinking</h1>
                    <span className='text-[3.5vw] sm:text-[2.8vw] lg:text-[1.2vw] w-full lg:w-[80%]'>We combine creativity with cutting-edge technology to craft innovative brand experiences that stay ahead of trends and disruptions.</span>
                </div>
            </div>
            <div className='w-full lg:w-[35%] rounded-2xl h-[60vh] sm:h-[50vh] lg:h-full backdrop-blur-sm my-btn'>
                 <div className='h-[35%] lg:h-[45%] pl-[6vw] lg:pl-[3vw] items-center flex justify-center lg:justify-start'>
                    <img src={arr} className='h-[70px] w-[70px]  '></img>
                </div>
                <div className='h-[65%] lg:h-[55%] flex flex-col pl-[6vw] lg:pl-[3vw] pr-[6vw] lg:pr-0'>
                    <h1 className='text-[5vw] sm:text-[4vw] lg:text-[2vw] mb-2 lg:mb-0'>Custom-Crafted Strategies</h1>
                    <span className='text-[3.5vw] sm:text-[2.8vw] lg:text-[1.2vw] w-full lg:w-[80%]'>No templates, no shortcuts. We design tailored campaigns and visuals that align with your unique goals, audience, and industry.</span>
                </div>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row h-auto lg:h-[50vh] justify-center gap-[6vw] lg:gap-[4vw] w-full'>
            <div className='w-full lg:w-[32%] rounded-2xl h-[60vh] sm:h-[50vh] lg:h-full  backdrop-blur-sm my-btn'>
                <div className='h-[35%] lg:h-[45%] pl-[6vw] lg:pl-[3vw] items-center flex justify-center lg:justify-start'>
                    <img src={brush} className='h-[70px] w-[70px]  '></img>
                </div>
                <div className='h-[65%] lg:h-[55%] flex flex-col pl-[6vw] lg:pl-[3vw] pr-[6vw] lg:pr-0'>
                    <h1 className='text-[5vw] sm:text-[4vw] lg:text-[2vw] mb-2 lg:mb-0'>Data-Driven Results</h1>
                    <span className='text-[3.5vw] sm:text-[2.8vw] lg:text-[1.2vw] w-full lg:w-[80%]'>Every strategy is backed by insights, analytics, and measurable KPIs — ensuring smart decisions and optimized performance.</span>
                </div>
            </div>
            <div className='w-full lg:w-[48%] rounded-2xl h-[60vh] sm:h-[50vh] lg:h-full  backdrop-blur-sm my-btn'>
                <div className='h-[35%] lg:h-[45%] pl-[6vw] lg:pl-[3vw] items-center flex justify-center lg:justify-start'>
                    <img src={find} className='h-[70px] w-[70px]  '></img>
                </div>
                <div className='h-[65%] lg:h-[55%] flex flex-col pl-[6vw] lg:pl-[3vw] pr-[6vw] lg:pr-0'>
                    <h1 className='text-[5vw] sm:text-[4vw] lg:text-[2vw] mb-2 lg:mb-0'>High-End Design Expertise</h1>
                    <span className='text-[3.5vw] sm:text-[2.8vw] lg:text-[1.2vw] w-full lg:w-[80%]'>Our visual storytellers bring world-class design, motion graphics, and immersive experiences that leave a lasting impact.</span>
                </div>
            </div>
        </div>
     </div>
   </div>
   </>
  )
}
 export default Vision