"use client";

import React, { useState } from "react";
import ImageCom from "./ImageCom";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { accordionItems } from "./data";

const OurValue: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section
      id="our-value"
      className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20"
    >
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <ImageCom src="https://real-estate-web.pages.dev/value.png" />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
          <div className="space-y-2 sm:space-y-3">
            <span className="text-orange-500 font-bold text-sm sm:text-base md:text-lg">
              OUR VALUE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Value We Give to You
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base">
              We provide exceptional service and value to ensure your real
              estate experience is smooth and rewarding.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-2 sm:space-y-3">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className="rounded-lg overflow-hidden border border-gray-200"
              >
                <motion.div
                  className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 cursor-pointer"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    {React.cloneElement(item.icon, {})}
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-800 flex-grow text-center px-2">
                    {item.title}
                  </h3>

                  <motion.div
                    animate={{ rotate: activeIndex === item.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-2"
                  >
                    <FaChevronDown className="text-blue-700 text-xs sm:text-sm" />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {activeIndex === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white overflow-hidden"
                    >
                      <p className="p-3 sm:p-4 text-xs sm:text-sm text-gray-600">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
