import React from 'react'
import Navbar from '../sections/Navbar'
import btn from '../assets/img/stroke.png'
import aifi from '../assets/img/aifi.jpg'
import Form from '../sections/Form'
import Footer from '../sections/Footer'

// // const WorkOpen = () => {
// //   return (
// //     <>
// //     <div className='home h-screen w-screen relative '>
// //         <Navbar/>
// //         <div className='w-screen h-[85vh]  flex '>
// //           <div className='w-[50%] text-white flex gap-[1vw] flex-col justify-center items-center'> 
// //             <h1 className='text-[4.5vw] font-serif italic'>AIFI  Mobile  App</h1>
// //             <p className='w-[75%] text-[1.3vw]'>We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
// //             <div className=' pr-[2vw] w-[75%] flex items-center gap-[3vw]'>
// //                 <span className='px-[2vw] py-[1vw] my-btn rounded-[10px] '>htttps:/www.aifi.com</span>
// //                 <span className=' px-[1vw] py-[1vw] rounded-[10px] my-btn'>
// //                     <img src={btn} className='h-[17px]' alt="" />
// //                 </span>
// //             </div>
// //           </div>
// //           <div className='w-[50%] pl-[4vw] flex items-center'>
// //             <img src={aifi} className='h-[23vw] w-[33vw] rounded-[20px]' alt="" />
// //           </div>
// //         </div>
// //     </div>
// //     {/* 2 */}
// //     <div className='h-screen rounded-2xl  w-screen'>
// //         <video src="" className='h-full w-full video'></video>
// //     </div>
// //     {/* 3 */}
// //     <div className='h-screen home text-white w-screen '>
// //      <div className='h-[45%] w-full flex items-center pl-[8vw] '>
// //      <span className='text-[1.8vw] w-[70%]' >
// //         We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.
// //      </span>
// //      </div>
// //      <div className='h-[55%] flex w-full '>
// //       <div className='w-[50%]  h-full flex justify-end pr-[2vw]  '>
// //         <img src="" className='h-full  w-[90%] video rounded-2xl' alt="" />
// //       </div>
// //       <div className='w-[50%] h-full  flex pl-[2vw]'>
// //         <img src="" className='h-full w-[90%] video rounded-2xl' alt="" />
// //       </div>
// //      </div>
// //     </div>
// //     {/* 4 */}
// //     <div className='h-[140vh] gap-[10vh] justify-center flex flex-col w-screen home'>
// //      <div className='h-[55vh] w-full flex justify-center gap-[3vw]'>
// //       <div className='h-full  shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] px-[1vw] my-btn text-white rounded-2xl w-[43%] flex flex-col'>
// //         <div className='py-[1vw] pl-[1vw] border-b-2'>
// //             <h1 className='text-[3vw] '>Campaign Objectives</h1>
// //         </div>
// //         <div>
// //             <ol className='[list-style-type:disc] flex pl-[2vw] flex-col gap-[1.3vw] pt-[2vw]'>
// //                 <li>Increase follower base on key social media platforms.</li>
// //                 <li>Drive traffic to the FreshEats website and increase online orders.</li>
// //                 <li>Enhance customer engagement and loyalty through interactive content.</li>
// //             </ol>
// //         </div>
// //       </div>
// //       <div className='h-full  shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] px-[1vw] my-btn text-white rounded-2xl w-[43%] flex flex-col'>
// //         <div className='py-[1vw] pl-[1vw] border-b-2'>
// //             <h1 className='text-[3vw] '>Strategy Implemented</h1>
// //         </div>
// //         <div>
// //             <ol className='[list-style-type:disc] w-[90%] flex pl-[2vw] flex-col gap-[1.3vw] pt-[2vw]'>
// //                 <li>Target Audience Analysis: We conducted in-depth research to identify and understand FreshEats' target demographic.</li>
// //                 <li>Content Strategy: Created engaging and informative content focused on health tips, recipes, and customer testimonials.</li>
// //                 <li>Paid Advertising: Implemented targeted ads on Facebook and Instagram to reach potential customers effectively.</li>
// //             </ol>
// //         </div>
// //       </div>
// //      </div>
// //      <div className='h-[55vh] w-full flex justify-center gap-[3vw]'>
// //       <div className='h-full  shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] px-[1vw] my-btn text-white rounded-2xl w-[43%] flex flex-col'>
// //         <div className='py-[1vw] pl-[1vw] border-b-2'>
// //             <h1 className='text-[3vw] '>Results Achieved</h1>
// //         </div>
// //         <div>
// //             <ol className='[list-style-type:disc] flex pl-[2vw] flex-col gap-[1.3vw] pt-[2vw]'>
// //                 <li>30% Increase in Followers: Expanded FreshEats' social media reach significantly within the first three months.</li>
// //                 <li>40% Boost in Website Traffic: Drove traffic to the FreshEats website, resulting in increased online orders.</li>
// //                 <li>Enhanced Brand Loyalty: Increased customer engagement and loyalty through personalized interactions and valuable content.</li>
// //             </ol>
// //         </div>
// //       </div>
// //       <div className='h-full  video text-white rounded-2xl w-[43%] '>
       
       
// //       </div>
// //      </div>
     
// //     </div>
// //     {/* 5 */}
// //     <div className='h-[140vh] w-screen home text-white'>
// // <div className='h-[50vh] w-full flex items-center pl-[8vw] '>
// //      <span className='text-[1.8vw] w-[60%]' >
// //         We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.
// //      </span>
// //      </div>
// //      <div className='h-[90vh] flex justify-center w-full '>
// //        <video src="" className='h-full w-[90%] video rounded-3xl'></video>
// //      </div>
// //     </div>
// //     {/* 6 */}
// //     <div className='h-[165vh] text-white w-full home'>
// //     <header className='h-[30vh] flex items-center pl-[5vw] w-full'>
// //     <h1 className='text-[4vw] font-serif italic'>
// //         Style  Guide  &  Component
// //     </h1>
// //     </header>
// //     <div className='h-[135vh] flex flex-col gap-[3vw] '>
// //       <div className='h-[42%]  flex'>
// //         <div className='w-[50%]  h-full flex justify-end pr-[2vw]  '>
// //         <img src="" className='h-full  w-[90%] video rounded-2xl' alt="" />
// //       </div>
// //       <div className='w-[50%] h-full  flex pl-[2vw]'>
// //         <img src="" className='h-full w-[90%] video rounded-2xl' alt="" />
// //       </div>
// //       </div>
// //       <div className='h-[57%] flex justify-center'>
// //      <video src="" className='video h-full w-[90%] rounded-2xl'></video>
// //       </div>
// //     </div>
// //     </div>
// //     {/* 7 */}
// //     <div className='h-[165vh] text-white w-full home'>
// //     <header className='h-[30vh] flex items-center pl-[5vw] w-full'>
// //     <h1 className='text-[4vw] font-serif italic'>
// //        Wireframe  &   UI  Design
// //     </h1>
// //     </header>
// //      <div className='h-[135vh] flex flex-col gap-[3vw] '>
// //      <div className='h-[57%] flex justify-center'>
// //      <video src="" className='video h-full w-[90%] rounded-2xl'></video>
// //       </div>
// //       <div className='h-[42%]  flex'>
// //         <div className='w-[50%]  h-full flex justify-end pr-[2vw]  '>
// //         <img src="" className='h-full  w-[90%] video rounded-2xl' alt="" />
// //       </div>
// //       <div className='w-[50%] h-full  flex pl-[2vw]'>
// //         <img src="" className='h-full w-[90%] video rounded-2xl' alt="" />
// //       </div>
// //       </div>
// //      </div>
// //     </div>
// //     {/* 8 */}
// //      <div className='h-[40vh] home text-white w-screen '>
// //      <div className='h-[100%] w-full flex items-center pl-[8vw] '>
// //      <span className='text-[1.8vw] w-[70%]' >
// //         We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.
// //      </span>
// //      </div>   
// //     </div>
// //     {/* 9  */}
// //     <div className='h-[85vh] home flex justify-center   w-screen'>
// //         <video src="" className='h-full rounded-2xl w-[90%] video'></video>
// //     </div>
// //     {/* 10 */}
// //     <Form/>
// //     <Footer/>
// //     </>
// //   )
// // }

// // export default WorkOpen

// import React from 'react'
// import Navbar from '../sections/Navbar'
// import btn from '../assets/img/stroke.png'
// import aifi from '../assets/img/aifi.jpg'
// import Form from '../sections/Form'
// import Footer from '../sections/Footer'

// const WorkOpen = () => {
//   return (
//     <>
//     {/* Hero Section */}
//     <div className='home min-h-screen w-screen relative'>
//         <Navbar/>
//         <div className='w-screen min-h-[85vh] flex flex-col lg:flex-row px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
//           <div className='w-full lg:w-[50%] text-white flex gap-4 sm:gap-6 lg:gap-[1vw] flex-col justify-center items-center'> 
//             <h1 className='text-4xl sm:text-5xl lg:text-[4.5vw] font-serif italic text-center'>AIFI Mobile App</h1>
//             <p className='w-[90%] sm:w-[85%] lg:w-[75%] text-base sm:text-lg lg:text-[1.3vw] text-center lg:text-left'>We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
//             <div className='w-[90%] sm:w-[85%] lg:w-[75%] flex flex-col sm:flex-row items-center gap-4 lg:gap-[3vw]'>
//                 <span className='px-6 py-3 lg:px-[2vw] lg:py-[1vw] my-btn rounded-[10px] text-sm sm:text-base'>htttps:/www.aifi.com</span>
//                 <span className='px-4 py-3 lg:px-[1vw] lg:py-[1vw] rounded-[10px] my-btn'>
//                     <img src={btn} className='h-[17px]' alt="" />
//                 </span>
//             </div>
//           </div>
//           <div className='w-full lg:w-[50%] mt-8 lg:mt-0 lg:pl-[4vw] flex items-center justify-center'>
//             <img src={aifi} className='h-auto w-[90%] sm:w-[80%] lg:h-[23vw] lg:w-[33vw] rounded-[20px]' alt="" />
//           </div>
//         </div>
//     </div>

//     {/* Video Section 2 */}
//     <div className='h-screen rounded-2xl w-screen'>
//         <video src="" className='h-full w-full video'></video>
//     </div>

//     {/* Section 3 */}
//     <div className='h-screen home text-white w-screen'>
//      <div className='h-[45%] w-full flex items-center pl-4 sm:pl-6 lg:pl-[8vw]'>
//      <span className='text-lg sm:text-xl lg:text-[1.8vw] w-[95%] sm:w-[85%] lg:w-[70%]'>
//         We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.
//      </span>
//      </div>
//      <div className='h-[55%] flex flex-col sm:flex-row w-full gap-4 sm:gap-0'>
//       <div className='w-full sm:w-[50%] h-[50%] sm:h-full flex justify-center sm:justify-end sm:pr-[2vw]'>
//         <img src="" className='h-full w-[90%] video rounded-2xl' alt="" />
//       </div>
//       <div className='w-full sm:w-[50%] h-[50%] sm:h-full flex justify-center sm:pl-[2vw]'>
//         <img src="" className='h-full w-[90%] video rounded-2xl' alt="" />
//       </div>
//      </div>
//     </div>

//     {/* Section 4 - Cards */}
//     <div className='h-auto lg:h-[140vh] gap-6 lg:gap-[10vh] justify-center flex flex-col w-screen home px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
//      <div className='h-auto lg:h-[55vh] w-full flex flex-col lg:flex-row justify-center gap-4 lg:gap-[3vw]'>
//       <div className='h-[50vh] lg:h-full shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] px-4 sm:px-6 lg:px-[1vw] py-4 my-btn text-white rounded-2xl w-full sm:w-[85%] lg:w-[40%] flex flex-col mx-auto'>
//         <div className='py-3 lg:py-[1vw] pl-2 lg:pl-[1vw] border-b-2'>
//             <h1 className='text-2xl sm:text-3xl lg:text-[2.5vw]'>Campaign Objectives</h1>
//         </div>
//         <div>
//             <ol className='[list-style-type:disc] flex pl-5 lg:pl-[2vw] flex-col gap-3 lg:gap-[1vw] pt-3 lg:pt-[1.5vw] text-sm sm:text-base lg:text-[1vw]'>
//                 <li>Increase follower base on key social media platforms.</li>
//                 <li>Drive traffic to the FreshEats website and increase online orders.</li>
//                 <li>Enhance customer engagement and loyalty through interactive content.</li>
//             </ol>
//         </div>
//       </div>
//       <div className='h-[50vh] lg:h-full shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] px-4 sm:px-6 lg:px-[1vw] py-4 my-btn text-white rounded-2xl w-full sm:w-[85%] lg:w-[40%] flex flex-col mx-auto'>
//         <div className='py-3 lg:py-[1vw] pl-2 lg:pl-[1vw] border-b-2'>
//             <h1 className='text-2xl sm:text-3xl lg:text-[2.5vw]'>Strategy Implemented</h1>
//         </div>
//         <div>
//             <ol className='[list-style-type:disc] flex pl-5 lg:pl-[2vw] flex-col gap-3 lg:gap-[1vw] pt-3 lg:pt-[1.5vw] text-sm sm:text-base lg:text-[1vw]'>
//                 <li>Target Audience Analysis: We conducted in-depth research to identify and understand FreshEats' target demographic.</li>
//                 <li>Content Strategy: Created engaging and informative content focused on health tips, recipes, and customer testimonials.</li>
//                 <li>Paid Advertising: Implemented targeted ads on Facebook and Instagram to reach potential customers effectively.</li>
//             </ol>
//         </div>
//       </div>
//      </div>
//      <div className='h-auto lg:h-[55vh] w-full flex flex-col lg:flex-row justify-center gap-4 lg:gap-[3vw]'>
//       <div className='h-[50vh] lg:h-full shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] px-4 sm:px-6 lg:px-[1vw] py-4 my-btn text-white rounded-2xl w-full sm:w-[85%] lg:w-[40%] flex flex-col mx-auto'>
//         <div className='py-3 lg:py-[1vw] pl-2 lg:pl-[1vw] border-b-2'>
//             <h1 className='text-2xl sm:text-3xl lg:text-[2.5vw]'>Results Achieved</h1>
//         </div>
//         <div>
//             <ol className='[list-style-type:disc] flex pl-5 lg:pl-[2vw] flex-col gap-3 lg:gap-[1vw] pt-3 lg:pt-[1.5vw] text-sm sm:text-base lg:text-[1vw]'>
//                 <li>30% Increase in Followers: Expanded FreshEats' social media reach significantly within the first three months.</li>
//                 <li>40% Boost in Website Traffic: Drove traffic to the FreshEats website, resulting in increased online orders.</li>
//                 <li>Enhanced Brand Loyalty: Increased customer engagement and loyalty through personalized interactions and valuable content.</li>
//             </ol>
//         </div>
//       </div>
//       <div className='h-[50vh] lg:h-full video text-white rounded-2xl w-full sm:w-[85%] lg:w-[40%] mx-auto'>
//       </div>
//      </div>
//     </div>

//     {/* Section 5 */}
//     <div className='min-h-screen lg:h-[140vh] w-screen home text-white px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
//       <div className='min-h-[30vh] lg:h-[50vh] w-full flex items-center lg:pl-[8vw] justify-center lg:justify-start'>
//         <span className='text-lg sm:text-xl lg:text-[1.8vw] w-[95%] sm:w-[80%] lg:w-[60%] text-center lg:text-left'>
//           We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.
//         </span>
//       </div>
//       <div className='h-[50vh] sm:h-[60vh] lg:h-[90vh] flex justify-center w-full'>
//         <video src="" className='h-full w-[95%] lg:w-[90%] video rounded-3xl'></video>
//       </div>
//     </div>

//     {/* Section 6 - Style Guide */}
//     <div className='h-auto lg:h-[165vh] text-white w-full home px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
//       <header className='h-[15vh] lg:h-[30vh] flex items-center justify-center lg:justify-start lg:pl-[5vw] w-full'>
//         <h1 className='text-3xl sm:text-4xl lg:text-[4vw] font-serif italic'>
//           Style Guide & Component
//         </h1>
//       </header>
//       <div className='h-auto lg:h-[135vh] flex flex-col gap-4 lg:gap-[3vw]'>
//         <div className='h-[50vh] sm:h-[42vh] lg:h-[42%] flex flex-col sm:flex-row gap-4 sm:gap-0'>
//           <div className='w-full sm:w-[50%] h-[45%] sm:h-full flex justify-center sm:justify-end sm:pr-[2vw]'>
//             <img src="" className='h-full w-[90%] video rounded-2xl' alt="" />
//           </div>
//           <div className='w-full sm:w-[50%] h-[45%] sm:h-full flex justify-center sm:pl-[2vw]'>
//             <img src="" className='h-full w-[90%] video rounded-2xl' alt="" />
//           </div>
//         </div>
//         <div className='h-[50vh] sm:h-[60vh] lg:h-[57%] flex justify-center'>
//           <video src="" className='video h-full w-[90%] rounded-2xl'></video>
//         </div>
//       </div>
//     </div>

//     {/* Section 7 - Wireframe */}
//     <div className='min-h-screen lg:h-[165vh] text-white w-full home px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
//       <header className='min-h-[15vh] lg:h-[30vh] flex items-center lg:pl-[5vw] justify-center lg:justify-start w-full'>
//         <h1 className='text-3xl sm:text-4xl lg:text-[4vw] font-serif italic text-center lg:text-left'>
//           Wireframe & UI Design
//         </h1>
//       </header>
//       <div className='min-h-[120vh] lg:h-[135vh] flex flex-col gap-6 lg:gap-[3vw]'>
//         <div className='h-[50vh] sm:h-[60vh] lg:h-[57%] flex justify-center'>
//           <video src="" className='video h-full w-[95%] lg:w-[90%] rounded-2xl'></video>
//         </div>
//         <div className='min-h-[50vh] lg:h-[42%] flex flex-col lg:flex-row gap-4 lg:gap-0'>
//           <div className='w-full lg:w-[50%] h-[40vh] sm:h-[50vh] lg:h-full flex justify-center lg:justify-end lg:pr-[2vw]'>
//             <img src="" className='h-full w-[95%] lg:w-[90%] video rounded-2xl' alt="" />
//           </div>
//           <div className='w-full lg:w-[50%] h-[40vh] sm:h-[50vh] lg:h-full flex justify-center lg:pl-[2vw]'>
//             <img src="" className='h-full w-[95%] lg:w-[90%] video rounded-2xl' alt="" />
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Section 8 */}
//     <div className='min-h-[30vh] lg:h-[40vh] home text-white w-screen px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
//       <div className='h-full w-full flex items-center lg:pl-[8vw] justify-center lg:justify-start'>
//         <span className='text-lg sm:text-xl lg:text-[1.8vw] w-[95%] sm:w-[85%] lg:w-[70%] text-center lg:text-left'>
//           We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.
//         </span>
//       </div>   
//     </div>

//     {/* Section 9 */}
//     <div className='h-[50vh] sm:h-[60vh] lg:h-[85vh] home flex justify-center w-screen px-4 sm:px-6 lg:px-0'>
//         <video src="" className='h-full rounded-2xl w-[95%] lg:w-[90%] video'></video>
//     </div>

//     {/* Form & Footer */}
//     <Form/>
//     <Footer/>
//     </>
//   )
// }

// export default WorkOpen

// res 
// import React from 'react'

// Placeholder components - replace with your actual components


const WorkOpen = () => {
  return (
    <>
    {/* Hero Section */}
    <div className='home min-h-screen w-screen relative'>
        <Navbar/>
        <div className='w-screen min-h-[85vh] flex flex-col lg:flex-row px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
          <div className='w-full lg:w-[50%] text-white flex gap-4 sm:gap-6 lg:gap-[1vw] flex-col justify-center items-center'> 
            <h1 className='text-4xl sm:text-5xl lg:text-[4.5vw] font-serif italic text-center'>AIFI Mobile App</h1>
            <p className='w-[90%] sm:w-[85%] lg:w-[75%] text-base sm:text-lg lg:text-[1.3vw] text-center lg:text-left'>We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
            <div className='w-[90%] sm:w-[85%] lg:w-[75%] flex flex-col sm:flex-row items-center gap-4 lg:gap-[3vw]'>
                <span className='px-6 py-3 lg:px-[2vw] lg:py-[1vw] my-btn rounded-[10px] text-sm sm:text-base'>https://www.aifi.com</span>
                <span className='px-4 py-3 lg:px-[1vw] lg:py-[1vw] rounded-[10px] my-btn'>
                    <img className='h-[17px] w-[17px] ' src={btn}></img>
                </span>
            </div>
          </div>
          <div className='w-full lg:w-[50%] mt-8 lg:mt-0 lg:pl-[4vw] flex items-center justify-center'>
            <div className='h-[55vw] w-[90%]  sm:w-[80%] lg:h-[23vw] lg:w-[33vw] video rounded-[20px]'></div>
          </div>
        </div>
    </div>

    {/* Video Section 2 */}
    <div className='h-[50vh] sm:h-[70vh] home lg:h-screen  w-screen px-4 sm:px-6 lg:px-0'>
        <video src="" className='h-full w-full rounded-2xl video'></video>
    </div>

    {/* Section 3 */}
    <div className='min-h-[120vh] lg:h-screen home text-white w-screen px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
     <div className='min-h-[25vh]  lg:h-[33%] w-full flex items-center justify-center lg:justify-start lg:pl-[8vw] mb-[5vw]'>
     <span className='text-lg sm:text-xl lg:text-[1.8vw] w-[95%] sm:w-[85%] lg:w-[56%] text-center lg:text-left'>
        We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.
     </span>
     </div>
     <div className='h-[75vh] lg:h-[50%] flex flex-col lg:flex-row w-full gap-4 lg:gap-0'>
      <div className='w-full lg:w-[50%] h-[35vh] sm:h-[45vh] lg:h-full flex justify-center lg:justify-end lg:pr-[2vw]'>
        <img src="" className='h-full w-[90%] video rounded-2xl' alt="" />
      </div>
      <div className='w-full lg:w-[50%] h-[35vh] sm:h-[45vh] lg:h-full flex justify-center lg:pl-[2vw]'>
        <img src="" className='h-full w-[90%] video rounded-2xl' alt="" />
      </div>
     </div>
    </div>

    {/* Section 4 - Cards */}
    <div className='min-h-screen lg:h-[140vh] gap-6 lg:gap-[10vh] justify-center flex flex-col w-screen home px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
     <div className='min-h-[50vh] lg:h-[55vh]  w-full flex flex-col lg:flex-row justify-center gap-4 lg:pl-[2vw] lg:gap-[1vw]'>
      <div className='min-h-[50vh] lg:h-full shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] px-4 sm:px-6 lg:px-[1vw] py-4 my-btn text-white rounded-2xl w-full sm:w-[85%] lg:w-[45%] flex flex-col mx-auto'>
        <div className='py-3 lg:py-[1vw] pl-2 lg:pl-[1vw] border-b-2'>
            <h1 className='text-2xl sm:text-3xl lg:text-[3vw]'>Campaign Objectives</h1>
        </div>
        <div>
            <ol className='[list-style-type:disc] flex pl-5 lg:pl-[2vw] flex-col gap-3 lg:gap-[1.3vw] pt-3 lg:pt-[2vw] text-sm sm:text-base'>
                <li>Increase follower base on key social media platforms.</li>
                <li>Drive traffic to the FreshEats website and increase online orders.</li>
                <li>Enhance customer engagement and loyalty through interactive content.</li>
            </ol>
        </div>
      </div>
      <div className='min-h-[50vh] lg:h-full shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] px-4 sm:px-6 lg:px-[1vw] py-4 my-btn text-white rounded-2xl w-full sm:w-[85%] lg:w-[45%] flex flex-col mx-auto'>
        <div className='py-3 lg:py-[1vw] pl-2 lg:pl-[1vw] border-b-2'>
            <h1 className='text-2xl sm:text-3xl lg:text-[3vw]'>Strategy Implemented</h1>
        </div>
        <div>
            <ol className='[list-style-type:disc] w-full lg:w-[90%] flex pl-5 lg:pl-[2vw] flex-col gap-3 lg:gap-[1.3vw] pt-3 lg:pt-[2vw] text-sm sm:text-base'>
                <li>Target Audience Analysis: We conducted in-depth research to identify and understand FreshEats' target demographic.</li>
                <li>Content Strategy: Created engaging and informative content focused on health tips, recipes, and customer testimonials.</li>
                <li>Paid Advertising: Implemented targeted ads on Facebook and Instagram to reach potential customers effectively.</li>
            </ol>
        </div>
      </div>
     </div>
     <div className='min-h-[50vh] lg:h-[55vh] w-full flex flex-col lg:flex-row justify-center gap-4 lg:gap-[1vw] lg:pl-[2vw]'>
      <div className='min-h-[50vh] lg:h-full shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] px-4 sm:px-6 lg:px-[1vw] py-4 my-btn text-white rounded-2xl w-full sm:w-[85%] lg:w-[45%] flex flex-col mx-auto'>
        <div className='py-3 lg:py-[1vw] pl-2 lg:pl-[1vw] border-b-2'>
            <h1 className='text-2xl sm:text-3xl lg:text-[3vw]'>Results Achieved</h1>
        </div>
        <div>
            <ol className='[list-style-type:disc] flex pl-5 lg:pl-[2vw] flex-col gap-3 lg:gap-[1.3vw] pt-3 lg:pt-[2vw] text-sm sm:text-base'>
                <li>30% Increase in Followers: Expanded FreshEats' social media reach significantly within the first three months.</li>
                <li>40% Boost in Website Traffic: Drove traffic to the FreshEats website, resulting in increased online orders.</li>
                <li>Enhanced Brand Loyalty: Increased customer engagement and loyalty through personalized interactions and valuable content.</li>
            </ol>
        </div>
      </div>
      <div className='min-h-[40vh] sm:h-[50vh] lg:h-full video text-white rounded-2xl w-full sm:w-[85%] lg:w-[45%] mx-auto'>
      </div>
     </div>
    </div>

    {/* Section 5 */}
    <div className='min-h-screen lg:h-[140vh] w-screen home text-white px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
      <div className='min-h-[30vh] mb-[5vw] lg:h-[45vh] w-full flex items-center lg:pl-[8vw] justify-center lg:justify-start'>
        <span className='text-lg sm:text-xl lg:text-[1.9vw] w-[95%] sm:w-[80%] lg:w-[60%] text-center lg:text-left'>
          We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.
        </span>
      </div>
      <div className='h-[50vh] sm:h-[60vh] lg:h-[90vh] flex justify-center w-full'>
        <video src="" className='h-full w-[95%] lg:w-[90%] video rounded-3xl'></video>
      </div>
    </div>

    {/* Section 6 - Style Guide */}
    <div className='min-h-screen lg:h-[165vh] text-white w-full home px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
      <header className='min-h-[15vh] lg:h-[30vh] flex items-center justify-center lg:justify-start lg:pl-[5vw] w-full'>
        <h1 className='text-3xl sm:text-4xl lg:text-[4vw] font-serif italic text-center lg:text-left'>
          Style Guide & Component
        </h1>
      </header>
      <div className='min-h-[100vh] lg:h-[135vh] flex flex-col gap-6 lg:gap-[3vw]'>
        <div className='min-h-[50vh] lg:h-[42%] flex flex-col lg:flex-row gap-4 lg:gap-0'>
          <div className='w-full lg:w-[50%] h-[35vh] sm:h-[45vh] lg:h-full flex justify-center lg:justify-end lg:pr-[2vw]'>
            <img src="" className='h-full w-[90%] video rounded-2xl' alt="" />
          </div>
          <div className='w-full lg:w-[50%] h-[35vh] sm:h-[45vh] lg:h-full flex justify-center lg:pl-[2vw]'>
            <img src="" className='h-full w-[90%] video rounded-2xl' alt="" />
          </div>
        </div>
        <div className='h-[50vh] sm:h-[60vh] lg:h-[57%] flex justify-center'>
          <video src="" className='video h-full w-[90%] rounded-2xl'></video>
        </div>
      </div>
    </div>

    {/* Section 7 - Wireframe */}
    <div className='min-h-screen lg:h-[165vh] text-white w-full home px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
      <header className='min-h-[15vh] lg:h-[30vh] flex items-center lg:pl-[5vw] justify-center lg:justify-start w-full'>
        <h1 className='text-3xl sm:text-4xl lg:text-[4vw] font-serif italic text-center lg:text-left'>
          Wireframe & UI Design
        </h1>
      </header>
      <div className='min-h-[120vh] lg:h-[135vh] flex flex-col gap-6 lg:gap-[3vw]'>
        <div className='h-[50vh] sm:h-[60vh] lg:h-[57%] flex justify-center'>
          <video src="" className='video h-full w-[95%] lg:w-[90%] rounded-2xl'></video>
        </div>
        <div className='min-h-[50vh] lg:h-[42%] flex flex-col lg:flex-row gap-4 lg:gap-0'>
          <div className='w-full lg:w-[50%] h-[40vh] sm:h-[50vh] lg:h-full flex justify-center lg:justify-end lg:pr-[2vw]'>
            <img src="" className='h-full w-[95%] lg:w-[90%] video rounded-2xl' alt="" />
          </div>
          <div className='w-full lg:w-[50%] h-[40vh] sm:h-[50vh] lg:h-full flex justify-center lg:pl-[2vw]'>
            <img src="" className='h-full w-[95%] lg:w-[90%] video rounded-2xl' alt="" />
          </div>
        </div>
      </div>
    </div>

    {/* Section 8 */}
    <div className='min-h-[30vh] lg:h-[40vh] home text-white w-screen px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
      <div className='h-full w-full flex items-center lg:pl-[8vw] justify-center lg:justify-start'>
        <span className='text-lg sm:text-xl lg:text-[1.8vw] w-[95%] sm:w-[85%] lg:w-[70%] text-center lg:text-left'>
          We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.
        </span>
      </div>   
    </div>

    {/* Section 9 */}
    <div className='h-[50vh] sm:h-[60vh] lg:h-[85vh] home flex justify-center w-screen px-4 sm:px-6 lg:px-0'>
        <video src="" className='h-full rounded-2xl w-[95%] lg:w-[90%] video'></video>
    </div>

    {/* Form & Footer */}
    <Form/>
    <Footer/>
    </>
  )
}

export default WorkOpen