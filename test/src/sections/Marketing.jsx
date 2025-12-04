// import React from 'react'
// import color from '../assets/img/color 2.png'
// import aifi from '../assets/img/aifi.jpg'
// import dash from '../assets/img/dash.jpg'
// import tele from '../assets/img/tele.png'
// import sw from '../assets/img/sw.png'

// const Featured = () => {
//   return (
//    <>
//    <div className='home  text-white h-[230vh]'>
//        <header className='h-[30vh] flex items-center pl-[12vw]'>
//         <h1 className='text-5xl '>Marketing Campaigns</h1>
//        </header>
//        <div className='h-[180vh] flex flex-col gap-[5vw]'>
//         <div className="h-[85vh]  w-full flex justify-evenly">
//           <div className="h-full flex flex-col gap-3 w-[40%] ">
//             <div className='flex w-full justify-center'>
//               <img className='h-[45vh] rounded-[14px]' src={aifi}  alt="" />
//             </div>
//             <div className='flex flex-col justify-center gap-3 pl-[5.3vw] h-[40vh]'>
//               <h1 className='text-xl font-semibold'>AIFI MOBILE APP</h1>
//               <div className='w-[80%] flex justify-between'>
//                 <span className='my-btn px-[1vw] py-1 rounded'>htttps:/www.aifi.com</span>
//                 <span>btn</span>
//               </div>
//               <p className='w-[88%]'>We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
//             </div>
//           </div>
//           <div className="h-full w-[40%] flex flex-col gap-3 ">
//            <div className='flex  w-full justify-center'>
//               <img className='h-[45vh] rounded-[14px]' src={dash}  alt="" />
//             </div>
//             <div className='flex flex-col justify-center gap-3 pl-[5.3vw] h-[40vh]'>
//               <h1 className='text-xl font-semibold'>HIVE HEALTH DASHBOARD</h1>
//               <div className='w-[80%] flex justify-between'>
//                 <span className='my-btn px-[1vw] py-1 rounded'>htttps:/www.hive.com</span>
//                 <span>btn</span>
//               </div>
//               <p className='w-[88%]'>HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.</p>
//             </div>
//           </div>
//         </div>
//         <div className="h-[85vh] w-full flex justify-evenly">
//           <div className="h-full flex flex-col gap-3  w-[40%] ">
//             <div className='flex w-full justify-center'>
//               <img className='h-[45vh] rounded-[14px]' src={sw}  alt="" />
//             </div>
//             <div className='flex flex-col justify-center gap-3 pl-[5.3vw] h-[40vh]'>
//               <h1 className='text-xl font-semibold'>SWAPPED E-COMMERCE WEBSITE</h1>
//               <div className='w-[80%] flex justify-between'>
//                 <span className='my-btn px-[1vw] py-1 rounded'>htttps:/www.swapped.com</span>
//                 <span>btn</span>
//               </div>
//               <p className='w-[88%]'>We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
//             </div>
//           </div>
//           <div className="h-full flex flex-col gap-3   w-[40%] ">
//            <div className='flex w-full justify-center'>
//               <img className='h-[45vh] rounded-[14px]' src={tele}  alt="" />
//             </div>
//             <div className='flex flex-col justify-center gap-3 pl-[5.3vw] h-[40vh]'>
//               <h1 className='text-xl font-semibold'>TELEBLAST MOBILE APP</h1>
//               <div className='w-[80%] flex justify-between'>
//                 <span className='my-btn px-[1vw] py-1 rounded'>htttps:/www.teleblast.com</span>
//                 <span>btn</span>
//               </div>
//               <p className='w-[88%]'>HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.</p>
//             </div>
//           </div>
//         </div>

//        </div>
//     </div>
//    </>
//   )
// }

// export default Featured

// res 

import React from 'react'
import color from '../assets/img/color 2.png'
import aifi from '../assets/img/aifi.jpg'
import dash from '../assets/img/dash.jpg'
import tele from '../assets/img/tele.png'
import sw from '../assets/img/sw.png'

const Marketing = () => {
  return (
   <>
   <div className='home text-white min-h-screen py-8 md:min-h-[220vh]
   '>
       {/* Header - Responsive */}
       <header className='h-auto md:h-[30vh] flex items-center px-6 md:pl-[12vw] py-6 md:py-0'>
        <h1 className='text-3xl md:text-5xl font-bold'>Marketing Campaigns</h1>
       </header>

       {/* Main Content - Responsive Grid */}
       <div className='min-h-screen md:h-[240vh] lg:h-[180vh] flex flex-col gap-12 lg:gap-[3vw]  md:gap-[23vw] px-4 md:px-0'>
        
        {/* First Row - 2 Cards */}
        <div className="min-h-auto md:h-[85vh] w-full flex flex-col md:flex-row justify-center md:justify-evenly gap-12 md:gap-0">
          
          {/* Card 1 */}
          <div className="flex flex-col gap-4 md:gap-3 w-full md:w-[40%]">
            <div className='flex w-full justify-center'>
              <img className='w-full md:w-auto h-[300px] md:h-[45vh] rounded-[14px] object-cover' src={aifi} alt="" />
            </div>
            <div className='flex flex-col justify-center gap-3 md:pl-[5.3vw]'>
              <h1 className='text-xl font-semibold'>AIFI MOBILE APP</h1>
              <div className='w-full md:w-[80%] flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between items-start md:items-center'>
                <span className='my-btn px-4 md:px-[1vw] py-2 md:py-1 rounded text-sm'>htttps:/www.aifi.com</span>
                <span className='cursor-pointer'>btn</span>
              </div>
              <p className='w-full md:w-[88%] text-sm md:text-base'>We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 md:gap-3 w-full md:w-[40%]">
            <div className='flex w-full justify-center'>
              <img className='w-full md:w-auto h-[300px] md:h-[45vh] rounded-[14px] object-cover' src={dash} alt="" />
            </div>
            <div className='flex flex-col justify-center gap-3 md:pl-[5.3vw]'>
              <h1 className='text-xl font-semibold'>HIVE HEALTH DASHBOARD</h1>
              <div className='w-full md:w-[80%] flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between items-start md:items-center'>
                <span className='my-btn px-4 md:px-[1vw] py-2 md:py-1 rounded text-sm'>htttps:/www.hive.com</span>
                <span className='cursor-pointer'>btn</span>
              </div>
              <p className='w-full md:w-[88%] text-sm md:text-base'>HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.</p>
            </div>
          </div>

        </div>

        {/* Second Row - 2 Cards */}
        <div className="min-h-auto md:h-[85vh] w-full flex flex-col md:flex-row justify-center md:justify-evenly gap-12 md:gap-0">
          
          {/* Card 3 */}
          <div className="flex flex-col gap-4 md:gap-3 w-full md:w-[40%]">
            <div className='flex w-full justify-center'>
              <img className='w-full md:w-auto h-[300px] md:h-[45vh] rounded-[14px] object-cover' src={sw} alt="" />
            </div>
            <div className='flex flex-col justify-center gap-3 md:pl-[5.3vw]'>
              <h1 className='text-xl font-semibold'>SWAPPED E-COMMERCE WEBSITE</h1>
              <div className='w-full md:w-[80%] flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between items-start md:items-center'>
                <span className='my-btn px-4 md:px-[1vw] py-2 md:py-1 rounded text-sm'>htttps:/www.swapped.com</span>
                <span className='cursor-pointer'>btn</span>
              </div>
              <p className='w-full md:w-[88%] text-sm md:text-base'>We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col gap-4 md:gap-3 w-full md:w-[40%]">
            <div className='flex w-full justify-center'>
              <img className='w-full md:w-auto h-[300px] md:h-[45vh] rounded-[14px] object-cover' src={tele} alt="" />
            </div>
            <div className='flex flex-col justify-center gap-3 md:pl-[5.3vw]'>
              <h1 className='text-xl font-semibold'>TELEBLAST MOBILE APP</h1>
              <div className='w-full md:w-[80%] flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between items-start md:items-center'>
                <span className='my-btn px-4 md:px-[1vw] py-2 md:py-1 rounded text-sm'>htttps:/www.teleblast.com</span>
                <span className='cursor-pointer'>btn</span>
              </div>
              <p className='w-full md:w-[88%] text-sm md:text-base'>HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.</p>
            </div>
          </div>

        </div>

       </div>
    </div>
   </>
  )
}

export default Marketing