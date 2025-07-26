import React from "react";

const GetStartedSection: React.FC = () => {
  return (
    <div id="start" className="w-full flex justify-center py-8">
      <div
        className="w-full max-w-6xl h-60 bg-[#4161df] rounded-xl flex flex-col items-center justify-center text-center px-6"
        style={{ border: "6px solid #5d77d6" }}
      >
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
          Get started with Homyz 
        </h2>
        <p className="text-[#ffffff96] text-opacity-60 text-sm sm:text-base mb-1">
          Subscribe and find super attractive price quotes from us.
        </p>
        <p className="text-[#ffffff96] text-sm sm:text-base mb-6">
          Find your residence soon
        </p>
        <button
          className="bg-[#5a73d7] text-white font-sm px-6 py-2 
             border-2 border-white rounded-[10px] shadow-md
             hover:bg-[#153e63] hover:text-white transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStartedSection;
