// import React,{useState,useEffect} from "react";
// import {ChevronLeft, ChevronRight} from "react-feather";
// const Carousel = ({ children: carouselSlides, autoSlide = false, autoSlideInterval = 3000 }) => {
//     const [curr, setCurr] = useState(0)

//     const prev = () => setCurr((curr) => (curr === 0 ? carouselSlides.length - 1 : curr - 1))

//   const next = () => setCurr((curr) => (curr === carouselSlides.length - 1 ? 0 : curr + 1))
  
//  useEffect(() => {
//         if (!autoSlide) return
//         const slideInterval = setInterval(next, autoSlideInterval)
//         return () => clearInterval(slideInterval)
//     }, [])

    
//   return (
//     <div className="overflow-hidden carousel relative md:hidden">
//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {carouselSlides}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <ChevronLeft />
//         </button>
//         <button
//           onClick={next}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <ChevronRight />
//         </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//           {carouselSlides.map((s, i) => (
//             <div
//               key={i}
//               className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${
//                 curr === i ? "p-0.5" : "bg-opacity-50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;



import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({
  children: carouselSlides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? carouselSlides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === carouselSlides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden carousel bg-blue-950 relative w-full ">
      <div
        className="flex transition-transform ease-out bg-blue-950 duration-500"
        style={{
          transform: `translateX(-${curr * 100}%)`,
          width: `${carouselSlides.length * 25}%`,
        }}
      >
        {carouselSlides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-[4vw] right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {carouselSlides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-1.5 h-1.5 bg-white rounded-full ${
                curr === i ? "p-0.5" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
