import React from 'react';
import A from '../assets/img/Acolor.png'
import graph from '../assets/img/graph.png'
import A1 from '../assets/img/Arr1.png'
import A2 from '../assets/img/Arr2.png'

export default function AboutUsHero() {
  return (
    <div className="h-[88vh] rounded-4xl overflow-hidden relative us flex items-center justify-center p-4">

          <img className="absolute inset-0 z-10" src={A} alt="" />
          <img src={graph} className='absolute bottom-0 ' alt="" />
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-8 text-center">
          {/* Hashtag Icon */}
          <div className="absolute top-[1vw] left-[5.4vw]">
            <div className="text-lime-400 font-semibold text-[12vw] transform -rotate-25">
              #
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-[8vw] pl-[5vw] font-serif italic mb-8">
            <span className="text-white font-semibold">About us</span>
          </h1>
             <img src={A1} className="absolute h-[7vw] top-[11vw] right-[4vw]"></img>

          {/* Subheading */}
          <h2 className="text-2xl md:text-4xl font-bold mb-4 max-w-3xl leading-tight">
            we are a design-led, strategy-driven digital<br />
            marketing and creative design agency
          </h2>

          {/* Arrow Icon */}
          <img src={A2} className="absolute left-16 top-1/2 transform -translate-y-1/2">
          </img>

          {/* Description Text */}
          <p className="text-xs md:text-sm max-w-xl leading-relaxed mt-4 opacity-90">
            With DEMCS, your brand is designed with intention, your stories are digitalized with emotion, and your presence evolves with 
            certainty. We market stories that resonate with AI, create user-centric content, technology, and drive results through strategic thinking.
          </p>

          {/* Laptop Icon */}
          <div className="absolute bottom-12 right-16">
            <svg className="w-20 h-20 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="2" y1="17" x2="22" y2="17" strokeLinecap="round"/>
              <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round"/>
              <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      
    </div>
  );
}