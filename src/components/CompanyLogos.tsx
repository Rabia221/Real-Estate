import Image from "next/image";
import React from "react";
import { logos } from "./data";

const CompanyLogos: React.FC = () => {
  return (
    <section
      id="residencies"
      className="bg-white py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-16"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 max-w-6xl mx-auto">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex justify-center border rounded-md items-center p-2 sm:p-3 md:p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto max-h-10 sm:max-h-12 md:max-h-16 lg:max-h-20 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyLogos;
