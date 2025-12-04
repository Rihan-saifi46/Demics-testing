// import React from 'react';
// import color from '../assets/img/color 2.png'

// export default function Testimonial() {
//   const testimonial = {
//     title: "Demics has been Instrumental in Transforming our Online Presence.",
//     description: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
//     author: "John Smith",
//     position: "CEO of Chic Boutique"
//   };

//   const Card = () => (
//     <div className="min-w-[400px] z-10 my-btn rounded-2xl p-8 mx-4">
//       <h3 className="an1 text-lg font-medium mb-4">
//         {testimonial.title}
//       </h3>
//       <p className="text-white text-sm mb-6 leading-relaxed">
//         {testimonial.description}
//       </p>
//       <div>
//         <p className="an1 font-medium">{testimonial.author}</p>
//         <p className="text-white text-sm">{testimonial.position}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen relative home py-20 px-8 overflow-hidden">
//         <img src={color} className=' absolute right-0 rotate-180 top-[-6vw] h-[140vh] w-[50vw]' alt="" />
//       {/* Header */}
//       <div className="text-center mb-16">
//         <h1 className="text-5xl font-light text-white mb-2">
//           <span className="italic font-serif">Client</span> Testimonials:
//         </h1>
//         <h2 className="text-5xl font-light text-white">
//           Real Results, <span className="italic font-serif">Real Feedback</span>
//         </h2>
//       </div>

//       {/* First Row - Scroll Right */}
//       <div className="mb-8 overflow-hidden">
//         <div className="flex animate-scroll-right">
//           {[...Array(8)].map((_, i) => (
//             <Card key={i} />
//           ))}
//         </div>
//       </div>

//       {/* Second Row - Scroll Left */}
//       <div className="overflow-hidden">
//         <div className="flex animate-scroll-left">
//           {[...Array(8)].map((_, i) => (
//             <Card key={i} />
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll-right {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes scroll-left {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }

//         .animate-scroll-right {
//           animation: scroll-right 40s linear infinite;
//         }

//         .animate-scroll-left {
//           animation: scroll-left 40s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }


// res 
const Testimonial = () => {
  const testimonial = {
    title: "Demics has been Instrumental in Transforming our Online Presence.",
    description: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    author: "John Smith",
    position: "CEO of Chic Boutique"
  };

  const Card = () => (
    <div className="min-w-[280px] md:min-w-[350px] lg:min-w-[400px] z-10  backdrop-blur-sm border my-btn rounded-2xl p-6 md:p-8 mx-2 md:mx-4">
      <h3 className="text-purple-300 text-base md:text-lg font-medium mb-3 md:mb-4">
        {testimonial.title}
      </h3>
      <p className="text-white text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
        {testimonial.description}
      </p>
      <div>
        <p className="text-purple-300 font-medium text-sm md:text-base">{testimonial.author}</p>
        <p className="text-white text-xs md:text-sm">{testimonial.position}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative home py-12 md:py-16 lg:py-20 px-4 md:px-8 overflow-hidden">
      <img 
        src="https://via.placeholder.com/600x800/a855f7/transparent?text=Gradient" 
        className='absolute right-0 rotate-180 top-[-6vw] h-[60vh] md:h-[100vh] lg:h-[140vh] w-[80vw] md:w-[60vw] lg:w-[50vw] opacity-20' 
        alt="background gradient" 
      />
      
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2">
          <span className="italic font-serif">Client</span> Testimonials:
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
          Real Results, <span className="italic font-serif">Real Feedback</span>
        </h2>
      </div>

      {/* First Row - Scroll Right */}
      <div className="mb-4 md:mb-6 lg:mb-8 overflow-hidden">
        <div className="flex animate-scroll-right">
          {[...Array(8)].map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>

      {/* Second Row - Scroll Left */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll-left">
          {[...Array(8)].map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-scroll-right {
            animation: scroll-right 35s linear infinite;
          }

          .animate-scroll-left {
            animation: scroll-left 35s linear infinite;
          }
        }

        @media (min-width: 1024px) {
          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }

          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};
export default Testimonial