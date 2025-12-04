import React, { useState } from 'react';
import { Play } from 'lucide-react';
import color from '../assets/img/color 2.png'

export default function VideoPlayerCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen  relative home flex items-center justify-center p-8">
      <img src={color} className='absolute top-[-70vw] h-[120vw] w-[30vw] right-0 rotate-180
      '   alt="" />
      <div 
        className="relative v border-2 w-full max-w-4xl aspect-video rounded-[30px] overflow-hidden
        p-[2vw]"
      >
        
        {/* Purple gradient border */}
        {/* <div className="absolute inset-0 rounded-3xl  opacity-80"></div> */}
        
        {/* Inner dark card */}
        <div className="relative w-full h-full my-btn rounded-[15px] m-[2px] flex items-center justify-center overflow-hidden">
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          ></div>

          {/* Play button */}
          <button
            className="relative z-10 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glow effect */}
            {/* <div 
              className={`absolute inset-0  rounded-full blur-2xl transition-all duration-300 ${
                isHovered ? 'opacity-60 scale-150' : 'opacity-40 scale-100'
              }`}
            ></div> */}
            
            {/* Play button circle */}
            <div 
              className={`relative w-20 h-20 rounded-full contact flex items-center justify-center shadow-2xl transition-all duration-300 `}
            >
              <Play 
                className="text-white fill-white ml-1" 
                size={32}
              />
            </div>
          </button>

          {/* Ambient light effects */}
         
        </div>
      </div>
    </div>
  );
}