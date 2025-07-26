"use client";
import React from "react";
import { motion } from "framer-motion";
import ImageCom from "./ImageCom";
import { contactData } from "./data";

const ContactUs: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full  mx-auto px-2 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12 xl:gap-16">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-orange-500 text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase tracking-wider">
              Our Contact Us
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f3e72] leading-tight">
              Easy to contact us
            </h2>
            <p className="text-[#8c8b8b] text-xs sm:text-sm md:text-base">
              We are always ready to help by providing the best services for
              you. We believe a good place to live can make your life better.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-4">
            {contactData.map((item) => (
              <motion.div
                key={item.id}
                className="w-full p-3 sm:p-4 rounded-md shadow-md flex flex-col items-start gap-3 sm:gap-4 md:gap-5 bg-white"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
              >
                <div className="flex gap-x-3 sm:gap-x-4 md:gap-x-5 items-start">
                  <div className="bg-[#e0f0ff] text-[#175484] p-2 rounded flex-shrink-0">
                    {React.cloneElement(item.icon, {})}
                  </div>
                  <div>
                    <h4 className="text-[#175484] font-bold text-xs sm:text-sm md:text-base">
                      {item.title}
                    </h4>
                    <p className="text-[#175484] text-xs sm:text-sm">
                      {item.number}
                    </p>
                  </div>
                </div>
                <motion.button
                  className="mt-1 sm:mt-2 inline-block w-full cursor-pointer px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm rounded-md 
                    bg-blue-100 text-[#175484] hover:bg-[#175484] hover:text-white 
                    transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-0">
          <ImageCom src="https://real-estate-web.pages.dev/value.png" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
