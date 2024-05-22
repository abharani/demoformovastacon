import React from "react";

const HomeServices = () => {
    return (
      <div className="relative flex  flex-col  m-[4vw]">
        <div className="justify-center mx-auto font-serif text-[7vw] md:text-[4vw]">
          Our Services
        </div>
        <div className="text-[3vw] text-center mx-auto px-[5vw] my-[1vw] pb-[3vw] md:text-[1.5vw]">
          Comprehensive Services: Empowering Businesses, Financial Excellence,
          Unleashing Creativity, and Academic Advancement
        </div>

        {/* Mobile view  */}

        <div className="grid grid-rows-4    gap-[8vw] md:hidden">
          <div className="bg-gradient-to-br from-blue-950 to-blue-600 py-[6vw] justify-center items-center  flex-col md:py-[2vw] shadow-lg shadow-gray-500 overflow-hidden ">
            <img
              src="phoneCarousel1.jpg"
              className="hover:scale-105 transition-transform duration-300 transform shadow-lg w-full shadow-blue-950"
            />
            <div className="text-white text-center my-[2vw] text-[4.5vw] md:text-[1.4vw]  ">
              Business and Management Consulting
            </div>
            {/* <div className="text-white text-justify px-[2.5vw] md:px-[1vw]">
              Lorem ipsum ambled parts of Cicero's De Finibus Bonorum et Malorum
              for use in a type specimen book.typesetter in the 15th century who
              is thought to have scrambled
            </div> */}
            <button className=" hover:text-black bg-white text-blue-700 p-[1vw] rounded-lg  shadow-lg shadow-blue-950 mt-[2.5vw] md:mt-[0.5vw] mx-[2.5vw] md:mx-[1vw] md:text-[1vw] md:p-[0.5vw]  hover:scale-110">
              View More
            </button>
          </div>
          <div className="bg-gradient-to-bl from-blue-950 to-blue-600 py-[6vw] justify-center items-center  flex-col md:py-[2vw] shadow-lg shadow-gray-500 overflow-hidden">
            <img
              src="service2.jpg"
              className="hover:scale-105  w-full transition-transform duration-300 transform shadow-lg shadow-blue-950 "
            />
            <div className="text-white text-center my-[2vw] text-[4.5vw] md:text-[1.4vw]  ">
              Financial Advisory
            </div>
            {/* <div className="text-white text-justify px-[2.5vw] md:px-[1vw]">
              Lorem ipsum ambled parts of Cicero's De Finibus Bonorum et Malorum
              for use in a type specimen book.typesetter in the 15th century who
              is thought to have scrambled
            </div> */}
            <button className="hover:text-black bg-white text-blue-700 rounded-lg md:text-[1vw] shadow-lg shadow-blue-950 p-[1vw] mt-[2.5vw] mx-[2.5vw] md:mx-[1vw] md:p-[0.5vw] hover:scale-110">
              View More
            </button>
          </div>
          <div className="bg-gradient-to-br from-blue-950 to-blue-600 py-[6vw] justify-center items-center  flex-col md:py-[2vw] shadow-lg shadow-gray-500 overflow-hidden">
            <img
              src="service5.jpg"
              className="hover:scale-105  w-full transition-transform duration-300 transform shadow-lg shadow-blue-950"
            />
            <div className="text-white text-center my-[2vw] text-[4.5vw] md:text-[1.4vw]  ">
              Branding and Media
            </div>
            {/* <div className="text-white text-justify px-[2.5vw] md:px-[1vw]">
              Lorem ipsum ambled parts of Cicero's De Finibus Bonorum et Malorum
              for use in a type specimen book.typesetter in the 15th century who
              is thought to have scrambled
            </div> */}
            <button className="hover:text-black bg-white text-blue-700 rounded-lg md:text-[1vw] shadow-lg shadow-blue-950 p-[1vw] mt-[2.5vw] mx-[2.5vw] md:mx-[1vw] md:p-[0.5vw] hover:scale-110">
              View More
            </button>
          </div>
          <div className="bg-gradient-to-bl from-blue-950 to-blue-600 py-[6vw] justify-center items-center  flex-col md:py-[2vw] shadow-lg shadow-gray-500 overflow-hidden">
            <img
              src="phoneCarousel3.jpg"
              className="hover:scale-105  w-full transition-transform duration-300 transform shadow-lg shadow-blue-950"
            />
            <div className="text-white text-center my-[2vw] text-[4.5vw] md:text-[1.4vw]  ">
              Academic Connections
            </div>
            {/* <div className="text-white text-justify px-[2.5vw] md:px-[1vw]">
              Lorem ipsum ambled parts of Cicero's De Finibus Bonorum et Malorum
              for use in a type specimen book.typesetter in the 15th century who
              is thought to have scrambled
            </div> */}
            {/* <button className="bg-gray-200 md:text-[1vw] text-black p-[1vw] rounded-full mt-[2.5vw] mx-[2.5vw] md:p-[0.5vw] md:mx-[1.5vw]   ">
              View More
            </button> */}
            <button className="hover:text-black bg-white text-blue-700 rounded-lg md:text-[1vw] shadow-lg shadow-blue-950 p-[1vw] mt-[2.5vw] mx-[2.5vw] md:mx-[1vw] md:p-[0.5vw] hover:scale-110">
              View More
            </button>
          </div>
        </div>
        {/* Desktop view  */}

        <div className="hidden md:grid   md:grid-cols-4  gap-[8vw] md:gap-[2.5vw]">
          <div className="bg-gradient-to-br from-blue-950 to-blue-600 py-[6vw] justify-center items-center  flex-col md:py-[2vw] shadow-lg shadow-gray-500 overflow-hidden ">
            <img
              src="phoneCarousel1.jpg"
              className="hover:scale-125 transition-transform duration-300 transform shadow-lg shadow-blue-950"
            />
            <div className="text-white text-center my-[2vw] text-[4.5vw] md:text-[1.4vw]  ">
              Business and Management Consulting
            </div>
            {/* <div className="text-white text-justify px-[2.5vw] md:px-[1vw]">
              Lorem ipsum ambled parts of Cicero's De Finibus Bonorum et Malorum
              for use in a type specimen book.typesetter in the 15th century who
              is thought to have scrambled
            </div> */}
            <button className=" hover:text-black bg-white text-blue-700 p-[1vw] rounded-lg  shadow-lg shadow-blue-950 mt-[2.5vw] md:mt-[0.5vw] mx-[2.5vw] md:mx-[1vw] md:text-[1vw] md:p-[0.5vw]  hover:scale-110">
              View More
            </button>
          </div>
          <div className="bg-gradient-to-bl from-blue-950 to-blue-600 py-[6vw] justify-center items-center  flex-col md:py-[2vw] shadow-lg shadow-gray-500 overflow-hidden">
            <img
              src="service2.jpg"
              className="hover:scale-125 transition-transform duration-300 transform shadow-lg shadow-blue-950 "
            />
            <div className="text-white text-center my-[2vw] text-[4.5vw] md:text-[1.4vw]  ">
              Financial Advisory
            </div>
            {/* <div className="text-white text-justify px-[2.5vw] md:px-[1vw]">
              Lorem ipsum ambled parts of Cicero's De Finibus Bonorum et Malorum
              for use in a type specimen book.typesetter in the 15th century who
              is thought to have scrambled
            </div> */}
            <button className="hover:text-black bg-white text-blue-700 rounded-lg md:text-[1vw] shadow-lg shadow-blue-950 p-[1vw] mt-[2.5vw] mx-[2.5vw] md:mx-[1vw] md:p-[0.5vw] hover:scale-110">
              View More
            </button>
          </div>
          <div className="bg-gradient-to-br from-blue-950 to-blue-600 py-[6vw] justify-center items-center  flex-col md:py-[2vw] shadow-lg shadow-gray-500 overflow-hidden">
            <img
              src="service5.jpg"
              className="hover:scale-125 transition-transform duration-300 transform shadow-lg shadow-blue-950"
            />
            <div className="text-white text-center my-[2vw] text-[4.5vw] md:text-[1.4vw]  ">
              Branding and Media
            </div>
            {/* <div className="text-white text-justify px-[2.5vw] md:px-[1vw]">
              Lorem ipsum ambled parts of Cicero's De Finibus Bonorum et Malorum
              for use in a type specimen book.typesetter in the 15th century who
              is thought to have scrambled
            </div> */}
            <button className="hover:text-black bg-white text-blue-700 rounded-lg md:text-[1vw] shadow-lg shadow-blue-950 p-[1vw] mt-[2.5vw] mx-[2.5vw] md:mx-[1vw] md:p-[0.5vw] hover:scale-110">
              View More
            </button>
          </div>
          <div className="bg-gradient-to-bl from-blue-950 to-blue-600 py-[6vw] justify-center items-center  flex-col md:py-[2vw] shadow-lg shadow-gray-500 overflow-hidden">
            <img
              src="phoneCarousel3.jpg"
              className="hover:scale-125 transition-transform duration-300 transform shadow-lg shadow-blue-950"
            />
            <div className="text-white text-center my-[2vw] text-[4.5vw] md:text-[1.4vw]  ">
              Academic Connections
            </div>
            {/* <div className="text-white text-justify px-[2.5vw] md:px-[1vw]">
              Lorem ipsum ambled parts of Cicero's De Finibus Bonorum et Malorum
              for use in a type specimen book.typesetter in the 15th century who
              is thought to have scrambled
            </div> */}
            {/* <button className="bg-gray-200 md:text-[1vw] text-black p-[1vw] rounded-full mt-[2.5vw] mx-[2.5vw] md:p-[0.5vw] md:mx-[1.5vw]   ">
              View More
            </button> */}
            <button className="hover:text-black bg-white text-blue-700 rounded-lg md:text-[1vw] shadow-lg shadow-blue-950 p-[1vw] mt-[2.5vw] mx-[2.5vw] md:mx-[1vw] md:p-[0.5vw] hover:scale-110">
              View More
            </button>
          </div>
        </div>
      </div>
    );
};

export default HomeServices;









