import React from "react";
import HomeAboutbg from "../../../public/HomeAboutbg.jpg";

const HomeAbout = () => {
  return (
    <div className="relative flex  flex-col  m-[4vw]">
      <div className="justify-center mx-auto font-serif text-[7vw] md:text-[4vw]">
        Who Are We
      </div>
      <div className="text-[3vw] text-center mx-auto px-[5vw] my-[1vw] pb-[3vw] md:text-[1.5vw]">
        Movastacon: Bridging Borders, Cultivating Talent, and Unlocking
        Limitless Possibilities in Business and Education.
      </div>
      {/* for desktop view */}
      <div
        className="hidden shadow-lg shadow-gray-500 md:flex gap-[5vw] bg-cover bg-center  "
        style={{ backgroundImage: `url(${HomeAboutbg})` }}
      >
        <h1 className=" text-xs font-center  flex-1  ">.</h1>
        <div className="flex-1 flex-col text-white m-[4.5vw]   py-[4vw] hover:px-[1.5vw] text-justify hover:bg-zinc-200 hover:bg-opacity- hover:text-slate-950 hover:rounded-2xl ">
          <div className="text-[2vw]  mb-[1vw] ">
            At Movastacon, we don’t just stop at conventional consulting. We
            believe in fostering global collaborations and nurturing future
            talents.
          </div>
          <p className="text-[1.5vw]">
            Our expertise extends to foreign collaborations, business management
            and more providing a holistic approach to education and professional
            development. With a dedicated team of experts and a commitment to
            excellence, Movastacon is poised to be your trusted partner in
            navigating the complexities of today’s dynamic business landscape.
            Unlock your potential with Movastacon, where possibilities are
            limitless.
          </p>
        </div>
      </div>

      {/* For Mobile ddevices */}

      <div className="md:hidden">
        <img src={HomeAboutbg} alt="About us" className="" />
        <div className="flex justify-center items-center bg-gray-200    font-sans text-justify my-[6vw] text-[4vw]">
          <div className="text-[3.5vw]  ">
            At Movastacon, we don’t just stop at conventional consulting. We
            believe in fostering global collaborations and nurturing future
            talents.
            <p className="text-[3.5vw]   mt-[2vw]">
              Our expertise extends to foreign collaborations, business
              management and more providing a holistic approach to education and
              professional development. With a dedicated team of experts and a
              commitment to excellence, Movastacon is poised to be your trusted
              partner in navigating the complexities of today’s dynamic business
              landscape. Unlock your potential with Movastacon, where
              possibilities are limitless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
