// import React from "react";
// import Hamburger from "hamburger-react";
// import { useState ,useRef} from "react";
// import { NavLink } from "react-router-dom";
// const Navbar = () => {
//   const items = [
//     { id:1, name: "Home", link: "/" },
//     { id:2, name: "About Us", link: "/AboutUs" },
//     { id:3, name: "Offices", link: "/Offices" },
//     { id:4, name: "Services", link: "/Services" },
//     { id:5, name: "Blogs", link: "/Blogs" },
//     { id:6, name: "Contact Us", link: "/ContactUs" },
//   ];

//   const [toggleNavbar, setToggleNavbar] = useState();
//   const collapseRef = useRef(null);
//   const hidebars = () => {
//     collapseRef.current.setAttribute("class", "hidden");
//     setToggleNavbar(false);
//   }
//   return (
//     <nav className="w-full top-0 h-[100vh]  fixed">
//       {/* Container removed from below div*/}
//       <div className=" flex shadow-blue-800 shadow-md mx-auto justify-between items-center px-4 py-2 md:px-[4vw]  bg-blue-950">
//         <div className="text-blue-300 text-2xl">LOGO</div>

//         {/* For Desktop view */}

//         <ul className="hidden md:flex gap-x-[4vw] text-blue-300 py-2 ">
//           {items.map((item) => (
//             <NavLink
//               to={item.link}
//               key={item.id}
//               className={({ isActive, isPending }) =>
//                 isPending ? "pending" : isActive ? "active" : "hover:text-white"
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </ul>

//         {/* For Mobile Device */}

//         <div className="md:hidden">
//           <Hamburger
//             color="white"
//             size={24}
//             toggled={toggleNavbar}
//             toggle={setToggleNavbar}
//           />
//         </div>
//       </div>
//       <div
//         className={
//           toggleNavbar
//             ? " absolute left-0 h-screen bg-gray-300  mx-auto z-10  transition-all duration-500 ease-in-out  border-solid py-4 backdrop-blur-sm md:hidden "
//             : "absolute left-[100vw] h-screen  mx-auto  z-10 transition-all duration-500 ease-in-out delay-300  border-solid py-4 backdrop-blur-sm  md:hidden "
//         }
//         // Container removed from above both part
//         ref={collapseRef}
//       >
//         <ul className="flex flex-col w-screen m-auto h-[50%] justify-center  items-start ">
//           {items.map((item) => (
//             <NavLink
//               to={item.link}
//               key={item.id}
//               className="text-blue-950  hover:text-blue-700 gap-y-6 my-auto gap-x-8 mx-6 "
//               onClick={hidebars}
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Semi-perfect Navbar

import React, { useState, useRef } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Movastaconlogo from "../assets/Movastaconlogo.jpg";

const Navbar = () => {
  const items = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "/AboutUs" },
    { id: 3, name: "Offices", link: "/Offices" },
    {
      id: 4,
      name: "Services",
      link: "#",
      subItems: [
        {
          id: 7,
          name: "Business & Management Consulting",
          link: "/Service1",
        },
        { id: 8, name: "Financial advisory", link: "/Service2" },
        { id: 9, name: "Branding & Media", link: "/Service3" },
        { id: 10, name: "Academic Conections", link: "/Service3" },
      ],
    },
    { id: 5, name: "Blogs", link: "/Blogs" },
    { id: 6, name: "Contact Us", link: "/ContactUs" },
  ];

  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const collapseRef = useRef(null);

  const hidebars = () => {
    collapseRef.current.setAttribute("class", "hidden");
    setToggleNavbar(false);
    setActiveDropdown(null); // Close dropdown when menu is hidden
  };

  const handleDropdownClick = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleSubItemClick = () => {
    setActiveDropdown(null);
    setToggleNavbar(false);
  };

  return (
    <nav className="w-full navbar top-0 fixed ">
      <div className="flex mx-auto justify-between items-center px-4 py-2 md:px-[4vw] bg-blue-950">
        <div className="w-[35vw] md:w-[15vw]">
          <img src={Movastaconlogo} />
        </div>

        {/* For Desktop view */}
        <ul className="hidden md:flex gap-x-[3.2vw] text-blue-300 py-2 text-[1.2vw]">
          {items.map((item) =>
            item.subItems ? (
              <div key={item.id} className="relative">
                <div
                  className="hover:text-white cursor-pointer flex items-center"
                  onClick={() => handleDropdownClick(item.id)}
                >
                  {item.name}
                  <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
                </div>
                <div
                  className={`absolute bg-blue-950 left-0 mt-2 py-2 w-48 ${
                    activeDropdown === item.id ? "block" : "hidden"
                  }`}
                >
                  {item.subItems.map((subItem) => (
                    <NavLink
                      to={subItem.link}
                      key={subItem.id}
                      className="block px-4 py-2 text-blue-300 hover:text-white"
                      onClick={handleSubItemClick}
                    >
                      {subItem.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                to={item.link}
                key={item.id}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : "hover:text-white"
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </ul>

        {/* For Mobile Device */}
        <div className="md:hidden">
          <Hamburger
            color="white"
            size={24}
            toggled={toggleNavbar}
            toggle={setToggleNavbar}
          />
        </div>
      </div>
      <div
        className={
          toggleNavbar
            ? "absolute left-0 h-screen bg-gray-300 mx-auto z-10 transition-all duration-500 ease-in-out border-solid py-4 backdrop-blur-sm md:hidden"
            : "absolute left-[100vw] h-screen mx-auto z-10 transition-all duration-500 ease-in-out delay-300 border-solid py-4 backdrop-blur-sm md:hidden"
        }
        ref={collapseRef}
      >
        <ul className="flex flex-col w-screen m-auto h-[50%] justify-center items-start">
          {items.map((item) =>
            item.subItems ? (
              <div key={item.id} className="relative  my-auto">
                <div
                  className="text-blue-950 hover:text-blue-700  my-auto gap-x-2 mx-6 cursor-pointer flex items-center"
                  onClick={() => handleDropdownClick(item.id)}
                >
                  {item.name}
                  <FontAwesomeIcon icon={faCaretDown} className="ml-0" />
                </div>
                <div
                  className={`absolute bg-gray-300 left-0 mx-auto z-10  h-screen  py-2  justify-center items-center  w-[50vw] ${
                    activeDropdown === item.id ? "block" : "hidden"
                  }`}
                >
                  {item.subItems.map((subItem) => (
                    <NavLink
                      to={subItem.link}
                      key={subItem.id}
                      className="block  text-blue-950 hover:text-blue-700 mx-6 gap-4 my-6"
                      onClick={handleSubItemClick}
                    >
                      {subItem.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                to={item.link}
                key={item.id}
                className="text-blue-950 hover:text-blue-700 gap-y-6 my-auto gap-x-8 mx-6"
                onClick={hidebars}
              >
                {item.name}
              </NavLink>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
