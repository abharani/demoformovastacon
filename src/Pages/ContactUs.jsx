import React from "react";

const ContactUs = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden relative flex  flex-col  m-[4vw]">
        <div className="justify-center mx-auto font-serif text-[7vw] md:text-[4vw]">
          Contact Us
        </div>
        <img src="ContactUs.jpg" className="w-full   mx-auto justify-center" />
        <div className="flex mt-[6vw] mx-auto gap-[4vw] md:w-screen justify-center">
          {/* Change karna h action */}
          <div className=" border-blue-900 border-2 rounded-lg p-[2vw]   px-[4vw] ">
            <form
              action="https://formspree.io/f/mwkgzrwp"
              method="POST"
              className=" flex flex-col gap-[3vw]   "
            >
              <label className=" text-[4vw] md:text-[1.8vw] font-serif">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="off"
                required
                className=" border-2 border-blue-900  px-[1vw] placeholder:italic rounded-md placeholder:text-[2.5vw] placeholder:text-slate-400"
              />

              <label className="text-[4vw] md:text-[1.8vw] font-serif">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="off"
                required
                className=" border-2 border-blue-900  px-[1vw] placeholder:text-[2.5vw] placeholder:italic rounded-md placeholder:text-slate-400"
              />

              <label className="text-[4vw] md:text-[1.8vw] font-serif">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                rows="6"
                cols="45"
                placeholder="Your Message"
                required
                autoComplete="off"
                className=" border-2 border-blue-900  p-[1vw] placeholder:text-[2.7vw] placeholder:italic rounded-md placeholder:text-slate-400"
              />
              <input
                type="submit"
                value="Send"
                className=" my-[1vw] mx-auto border-2 border-blue-950  px-[5vw] text-[4vw] md:text-[1.8vw]  text-white
                bg-blue-800  font-serif hover:scale-105 hover:text-white  mb-[2vw]"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden relative md:flex  flex-col  m-[4vw]">
        <div className="justify-center mx-auto font-serif text-[7vw] md:text-[4vw]">
          Contact Us
        </div>
        <div className="flex  mx-auto mt-[6vw] gap-[4vw] md:w-screen justify-center">
          {/* Change karna h action */}
          <div className=" border-blue-900 border-2 rounded-lg px-[2vw]    ">
            <form
              action="https://formspree.io/f/mwkgzrwp"
              method="POST"
              className=" flex  flex-col gap-[1vw] py-[1vw]  "
            >
              <label className="   text-[4vw] md:text-[1.8vw] font-serif">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="off"
                required
                className=" border-2 border-blue-900  px-[1vw] placeholder:italic rounded-md placeholder:text-[1.2vw] placeholder:text-slate-400"
              />

              <label className="text-[4vw] md:text-[1.8vw] font-serif  ">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="off"
                required
                className=" border-2 border-blue-900  px-[1vw] placeholder:text-[1.2vw] placeholder:italic rounded-md placeholder:text-slate-400"
              />

              <label className="text-[4vw] md:text-[1.8vw]    font-serif">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                rows="6"
                cols="50"
                placeholder="Your Message"
                required
                autoComplete="off"
                className=" border-2 border-blue-900  px-[1vw] placeholder:text-[1.2vw] placeholder:italic rounded-md placeholder:text-slate-400"
              />
              <input
                type="submit"
                value="Send"
                className=" mx-auto shadow-lg shadow-blue-800/50  px-auto border-2 border-blue-950  px-[2vw] text-[4vw] md:text-[1.8vw] max-w-[12vw] text-white
                bg-blue-800  font-serif hover:scale-105 hover:text-white  "
              />
            </form>
          </div>
          <div className=" hidden md:flex md:w-1/3 lg:w-1/3 shadow-md shadow-gray-500  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.3283551613!2d77.2089851!3d28.527352200000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1716326569324!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"
              // referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
