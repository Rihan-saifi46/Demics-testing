// import React, { useState } from 'react';
import logo from '../assets/img/logo.png'
import fc from '../assets/img/fc.png'
import color from '../assets/img/color 2.png'
import graph from '../assets/img/graph.png'

// export default function DemicsFooter() {
//   const [isPaused, setIsPaused] = useState(false);

//   // Partner brands from the image
//   const partners = [
//     { name: 'OLUTION', type: 'Professional Partner' },
//     { name: 'Ingesoft Play', type: 'Professional Partner' },
//     { name: 'L.A. COLORS®', type: 'Professional Partner' },
//     { name: 'L.A. Girl', type: 'Professional Partner' },
//     { name: 'LORD & BERRY', type: 'Professional Partner' },
//     { name: 'MILANI', type: 'Professional Partner' },
//     { name: 'Gartner', type: 'Professional Partner' }
//   ];

//   return (
//     <div className="min-h-screen home flex flex-col">
//       {/* Top Scrolling Partners Section */}
//       <div 
//         className="w-full contact py-6 overflow-hidden "
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         <div
//           className={`flex ${isPaused ? 'paused' : ''}`}
//           style={{
//             animation: 'scroll 30s linear infinite',
//           }}
//         >
//           {[...Array(3)].map((_, setIndex) => (
//             <div key={setIndex} className="flex shrink-0">
//               {partners.map((partner, index) => (
//                 <div
//                   key={`${setIndex}-${index}`}
//                   className="flex flex-col items-center justify-center px-12 min-w-[200px]"
//                 >
//                   <div className="text-white font-bold text-2xl whitespace-nowrap mb-1">
//                     {partner.name}
//                   </div>
//                   <div className="text-purple-200 text-xs whitespace-nowrap">
//                     {partner.type}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-1 pt-[4vw]  relative overflow-hidden">
        
//         <div className="relative  z-10 h-full flex flex-col">
//           {/* Top Links */}
//           <div className="flex justify-between items-start px-12 py-8 text-white text-sm">
//             <div className="cursor-pointer hover:text-purple-300 transition-colors">
//               Terms & Conditions
//             </div>
//             <div className="text-white">
//               © 2025 Demics. All rights reserved.
//             </div>
//             <div className="cursor-pointer hover:text-purple-300 transition-colors">
//               Privacy Policy
//             </div>
//           </div>

//           {/* Large Demics Logo */}
//           <div className="h-[40vh] relative flex items-end justify-center px-8">
//                 <img src={logo} className="z-10 h-[14vw]"/>
            
//           </div>
//         </div>

//         {/* Bottom border */}
        
//       </div>

//       <style>{`
//         @keyframes scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(calc(-100% / 3));
//           }
//         }
        
//         .paused {
//           animation-play-state: paused !important;
//         }
//       `}</style>
//     </div>
//   );
// }
//  res 
import { useState } from "react";
const DemicsFooter = () => {
  const [isPaused, setIsPaused] = useState(false);

  const partners = [
    // { name: 'OLUTION', type: 'Professional Partner' },
    { name: 'Ingesoft Play', type: 'Professional Partner' },
    { name: 'L.A. COLORS®', type: 'Professional Partner' },
    { name: 'L.A. Girl', type: 'Professional Partner' },
    { name: 'LORD & BERRY', type: 'Professional Partner' },
    { name: 'MILANI', type: 'Professional Partner' },
    { name: 'Gartner', type: 'Professional Partner' }
  ];

  return (
    <div className="min-h-screen home flex flex-col">
      <div 
        className="w-full py-6 overflow-hidden an"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex ${isPaused ? 'paused' : ''}`}
          style={{
            animation: 'scroll 30s linear infinite',
          }}
        >
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0">
              {partners.map((partner, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="flex flex-col items-center justify-center px-8 lg:px-12 min-w-[150px] lg:min-w-[200px]"
                >
                  <div className="text-white font-bold text-lg lg:text-2xl whitespace-nowrap mb-1">
                    {partner.name}
                  </div>
                  <div className="text-purple-200 text-[10px] lg:text-xs whitespace-nowrap">
                    {partner.type}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 pt-[8vw] lg:pt-[4vw] relative overflow-hidden  lg:px-0">
        <div className="relative   z-10 h-full flex flex-col">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 lg:px-12 py-6 lg:py-8 text-white text-xs lg:text-sm gap-4 lg:gap-0">
            <div className="cursor-pointer hover:text-purple-300 transition-colors">
              Terms & Conditions
            </div>
            <div className="text-white text-center">
              © 2025 Demics. All rights reserved.
            </div>
            <div className="cursor-pointer hover:text-purple-300 transition-colors">
              Privacy Policy
            </div>
          </div>

          <div className="h-[40vh]   lg:h-[40vh] relative flex items-center justify-center px-4 lg:px-8">  
           <img src={color} className='z-20 absolute right-0 rotate-180 top-[-30vw] w-[40vw] h-[100vw]' alt="" />
            <img src={graph} className='absolute left-0 w-full h-[80vh] bottom-[-30vh]' alt="" />
            <img src={fc} className='absolute left-0  z-20 bottom-[-30vh] h-[50vh] w-full' alt=""/>         
            <img src={logo} className="z-10 h-[25vw] lg:h-[12vw] w-[60vw] lg:w-[35vw]  rounded-lg flex items-center justify-center text-white text-[8vw] lg:text-[4vw] font-bold">            
            </img>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(5%);
          }
          to {
            transform: translateX(calc(-103.4% ));
          }
        }
        
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
}
export default DemicsFooter