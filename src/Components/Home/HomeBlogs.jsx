import React from "react";

const HomeBlogs = () => {
  return (
    <>
      {/* Mobile View  */}
      <div className="md:hidden relative flex  flex-col  m-[4vw] ">
        <div className="justify-center mx-auto font-serif text-[7vw] md:text-[4vw]">
          Blogs
        </div>
        <div className="text-[3vw] text-center mx-auto px-[5vw] my-[1vw] pb-[3vw] md:text-[1.5vw]">
          Explore Our World: Insights on Business Strategies, Financial Trends,
          Creative Inspiration, Educational Advancements, and Global
          Connectivity
        </div>
        <div className="    gap-[5vw]  ">
          <div className="flex hover:bg-gray-300  bg-slate-200  flex-row p-[2vw] my-[4vw]   ">
            <img
              src="Blog1.jpg"
              className="w-[23vw] my-[6vw] shadow-xl rounded-md shadow-gray-500 "
            />
            <div className="text-[3.5vw] ml-[4vw]  text-wrap ">
              Living Fearlessly: Embrace Life and Unlock Your True Potential
              <br />
              Life without fear opens endless possibilities. Embrace challenges,
              take risks, and live boldly. Each moment becomes a vibrant
              opportunity for growth and joy. Step into your power and thrive.
            </div>
          </div>
          <div className="flex hover:bg-gray-300  bg-slate-200 flex-row p-[2vw] my-[4vw]  ">
            <img
              src="Blog2.jpg"
              className="w-[23vw]  my-[6vw] shadow-xl rounded-md items-center shadow-gray-500 "
            />
            <div className="text-[3.5vw] ml-[4vw]  text-wrap ">
              Navigating Technological Innovations and Learning Paths <br />
              Dive into the realm of educational empowerment as we explore the
              latest advancements shaping learning. From digital classrooms to
              personalized learning paths, discover how technology is
              revolutionizing education.
            </div>
          </div>
          <div className="flex hover:bg-gray-300  bg-slate-200 flex-row p-[2vw] my-[4vw]  ">
            <img
              src="Blog3.jpg"
              className="w-[23vw] my-[6vw] shadow-xl rounded-md shadow-gray-500 "
            />
            <div className="text-[3.5vw] ml-[4vw]  text-wrap ">
              Securing the Digital Frontier: Exploring Cybersecurity
              <br />
              In an increasingly digital world, cybersecurity has become
              paramount from personal data protection to safeguarding critical
              infrastructure, the threats are ever-evolving. 
            </div>
          </div>
          <div className="flex hover:bg-gray-300  bg-slate-200 flex-row p-[2vw] my-[4vw]  ">
            <img
              src="Blog4.jpg"
              className="w-[23vw] my-[6vw] shadow-xl rounded-md shadow-gray-500 "
            />
            <div className="text-[3.5vw] ml-[4vw]  text-wrap ">
              Strategies for mastering business successin a Dynamic Market
              <br />
              In today's dynamic business, success hinges on effective
              strategies from market analysis to innovative branding techniques,
              this blog explores key tactics for businesses aiming to carve
              their niche.
            </div>
          </div>
        </div>
      </div>

      {/* desktop view  */}
      <div className="hidden md:flex bg-gray-200">
        <div className="relative flex  flex-col  m-[4vw]">
          <div className="justify-center mx-auto font-serif text-[7vw] md:text-[4vw]">
            Blogs
          </div>
          <div className="text-[3vw] text-center mx-auto px-[5vw] my-[1vw] pb-[3vw] md:text-[1.5vw]">
            Explore Our World: Insights on Business Strategies, Financial
            Trends, Creative Inspiration, Educational Advancements, and Global
            Connectivity
          </div>
          <div className=" flex   gap-[8vw] mx-auto">
            <div className="flex flex-col w-[25vw] ">
              <img
                src="Blog4.jpg"
                className="h-[25vw] shadow-lg shadow-gray-500 hover:scale-110 transition-transform duration-300 transform"
              />
              <div className="text-[1.5vw] my-[1vw] text-center">
                Mastering Business Success: Key Strategies for Thriving in a
                Dynamic Market
              </div>
              <p className="text-[1vw]">
                In today's dynamic business landscape, success hinges on
                effective strategies from market analysis to innovative branding
                techniques, this blog explores key tactics for businesses aiming
                to carve their niche. Discover how to adapt, innovate, and
                thrive amidst challenges, ensuring sustained growth and
                competitiveness.
              </p>
            </div>
            <div className="flex flex-col  w-[25vw] ">
              <img
                src="Blog2.jpg"
                className="h-[25vw] shadow-lg shadow-gray-500 hover:scale-110 transition-transform duration-300 transform"
              />
              <div className="text-[1.5vw]  text-center my-[1vw] ">
                Navigating Technological Innovations and Inclusive Learning
                Paths
              </div>
              <p className="text-[1vw]  text-wrap ">
                Dive into the realm of educational empowerment as we explore the
                latest advancements shaping learning. From digital classrooms to
                personalized learning paths, discover how technology is
                revolutionizing education. Join us on a journey of innovation
                and inclusion, where every learner has the tools to thrive in a
                rapidly evolving world.
              </p>
            </div>
            <div className="flex flex-col w-[25vw] ">
              <img
                src="Blog3.jpg"
                className=" h-[25vw] shadow-lg shadow-gray-500 hover:scale-110 transition-transform duration-300 transform"
              />
              <div className="text-[1.5vw] my-[1vw] text-center">
                Securing the Digital Frontier: Exploring Cybersecurity in
                Today's World
              </div>
              <p className="text-[1vw]">
                In an increasingly digital world, cybersecurity has become
                paramount. From personal data protection to safeguarding
                critical infrastructure, the threats are ever-evolving. Join us
                as we delve into the intricacies of cybersecurity, exploring the
                latest trends, threats, and strategies to mitigate risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlogs;
