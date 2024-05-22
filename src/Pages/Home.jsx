import React from "react";
import ContactUs from "./ContactUs";
import Landingpage from "../Components/Home/Landingpage";
import HomeAbout from "../Components/Home/HomeAbout";
import HomeServices from "../Components/Home/HomeServices";
import HomeBlogs from "../Components/Home/HomeBlogs";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <div className=" overflow-hidden md:hidden">
        <Landingpage />
        <HomeAbout />
        <HomeServices />
        <HomeBlogs />
        <ContactUs />
        <Footer/>
      </div>
      <div className=" overflow-hidden hidden md:block">
        <Landingpage />
        <HomeServices />
        <HomeAbout />
        <HomeBlogs />
        <ContactUs />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
