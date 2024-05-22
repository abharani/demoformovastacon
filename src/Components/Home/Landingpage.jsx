import React from "react";
import Carousel from "./Carousel";

const carouselSlides = [
  "desktopCarousel4.jpg",
  "desktopCarousel2.jpg",
  "desktopCarousel3.jpg",
  "desktopCarousel1.jpg",
];

const Landingpage = () => {
    return (
      <>
        {/* for phoneview  */}
        <div className="flex flex-col justify-center md:hidden  ">
          <div className="text-center text-blue-950 font-serif font-extrabold   py-[2vw]">
            <span className="mx-[2vw] text-[7vw] text-center  font-serif">
              Welcome to Movastacon
            </span>
            <div className="text-[3vw] text-center my-[2vw] text-black font-serif ">
              WE ARE HERE FOR YOU LETS BUILD YOUR FUTURE
            </div>
          </div>
          <div className="w-full sm:w-auto">
            <Carousel autoSlide={true}>
              {carouselSlides.map((s, i) => (
                <img key={i} src={s} alt={`Slide ${i}`} className="w-full" />
              ))}
            </Carousel>
          </div>
        </div>

        {/* For desktop view */}

        <div className="   hidden  md:flex justify-center items-center bg-blue-950 w-full ">
          <div className=" bg-blue-950 top-0 left-0  w-full h-full z-0">
            <Carousel autoSlide={true}>
              {carouselSlides.map((s, i) => (
                <img
                  key={i}
                  src={s}
                  alt={`Slide ${i}`}
                  className="w-full h-full bg-blue-950 object-cover"
                />
              ))}
            </Carousel>
          </div>

          {/* there is a problem in below code as the box does not remain fixed */}

          <div className=" absolute items-center justify-center   z-10 w-full sm:w-auto text-center">
            <div className="  px-[3vw] py-[2vw] bg-white flex-col  gap-[1vw] inline-flex bg-opacity-75 mx-auto ">
              <div className=" text-black text-center  font-serif  text-[4vw] capitalize">
                Welcome To Movastacon
              </div>
              <div className=" text-center text-slate-900  font-serif capitalize text-[2vw]">
                We are here for you
                <br /> lets build your future
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Landingpage;
