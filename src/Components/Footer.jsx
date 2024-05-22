// import React from "react";
// import { FaFacebook } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaLinkedin } from "react-icons/fa6";
// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className=" mx-auto text-center md:text-left md:flex md:justify-center md:gap-[6vw] md:items-center">
//         <div className="flex justify-center mb-4 md:mb-0 ">
//           <div className="lg:p-[10px] p-[4px] lg:bg-[#2C2F3F] rounded-full ">
//             <a href="https://mail.google.com/mail?hl=en" target="_blank">
//               <MdEmail className="md:text-lg lg:text-2xl" href="" />
//             </a>
//           </div>
//           <a
//             href="https://www.facebook.com"
//             className="mx-[1vw] hover:text-blue-500"
//             aria-label="Facebook"
//           >
//             <FaFacebook icon="fa-brands fa-facebook" />
//           </a>
//           <a
//             href="https://www.twitter.com"
//             className="mx-[1vw] hover:text-blue-400"
//             aria-label="Twitter"
//           >
//             <FaTwitter icon="fa-brands fa-twitter" />
//           </a>
         
//           <a
//             href="https://www.linkedin.com"
//             className="mx-[1vw] hover:text-blue-700"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedin icon="fa-brands fa-linkedin" />
//           </a>
//         </div>
//         <p className="text-sm md:text-right md:text-[1.2vw]">
//           © 2024 Movastacon. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-[2vw]">
      <div className=" mx-auto text-center md:text-left md:flex md:justify-center md:gap-[6vw] md:items-center">
        <div className="flex text-center  justify-center  items-center mb-4 text-[4vw] md:text-2xl gap-[4vw] md:gap-[1.5vw] md:mb-0">
          <a
            href="mailto:Office@movastacon.com"
            className=" hover:text-blue-500 text-3xl"
            target="_blank"
          >
            <MdEmail />
          </a>
          <a
            href="https://www.facebook.com/mohit.srivastava.71619?mibextid=ZbWKwL"
            className=" hover:text-blue-500"
            aria-label="Facebook"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com/movastacon"
            className=" hover:text-blue-400"
            aria-label="Twitter"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-srivastava-9a04b1a3"
            className="hover:text-blue-700"
            aria-label="LinkedIn"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="text-sm md:text-lg">
          © 2024 Movastacon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
