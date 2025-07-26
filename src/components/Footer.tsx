import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between p-10 bg-white shadow-md">
      {/* Left Side */}
      <div className="flex flex-col items-start  space-y-3 w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <Image
          src="https://real-estate-web.pages.dev/logo2.png"
          alt="Logo"
          width={100}
          height={100}
          className="w-32 h-auto object-contain md:mx-0"
        />
        <p className="text-xs text-gray-500 leading-snug">
          Our vision is to make all people <br />
          the best place to live for them.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col space-y-3   ">
        {/* Heading and Address - Aligned to start from same point */}
        <div className="flex flex-col   ">
          <h1 className="text-[#4161df] font-bold text-lg">Information</h1>
          <p className="text-xs text-gray-500">145 New York, FL 5467, USA</p>
        </div>

        {/* Navigation Links - Aligned to start from same point */}
        <div className="flex flex-wrap justify-start md:justify-end gap-x-4 my-2 text-xs text-gray-700 font-medium w-full">
          <Link href="#" className="hover:text-[#4161df] text-sm font-bold">Property</Link>
          <Link href="#" className="hover:text-[#4161df] text-sm font-bold">Services</Link>
          <Link href="#" className="hover:text-[#4161df] text-sm font-bold">Product</Link>
          <Link href="#" className="hover:text-[#4161df] text-sm font-bold">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;