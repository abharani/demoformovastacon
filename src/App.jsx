import "./App.css";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Offices from "./Pages/Offices";
import Services from "./Pages/Services";
import Blogs from "./Pages/Blogs";
import Footer from "./Components/Footer";
function App() {
  return (
    // <>
    //   <Navbar />
    //
    //     <h1 className="text-black text-3xl">Homepage</h1>
    //     <AboutUs/>
    //   </main>
    // </>
    <BrowserRouter basename="/">
      <Navbar />
      <main className="min-h-dvh  justify-center mt-[15%] sm:mt-[10%] md:mt-[7%] lg:mt-[4.5vw] xl:mt-[3vw]  flex  overflow-hidden  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Offices" element={<Offices />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
