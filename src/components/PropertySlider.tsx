"use client";

import Image from "next/image";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { properties } from "./data";

const PropertySlider = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [totalSlides, setTotalSlides] = useState<number>(properties.length);
  const [slidesToShow, setSlidesToShow] = useState<number>(4);



  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: Math.min(4, slidesToShow),
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(3, slidesToShow),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, slidesToShow),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(1.5, slidesToShow),
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: Math.min(1, slidesToShow),
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= totalSlides - Math.floor(slidesToShow);

  return (
    <section className="relative w-full max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 my-4 sm:my-6 md:my-8">
      {/* Title + Arrows */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div className="max-w-2xl">
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-extrabold mb-1">
            Best Choices
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1f3e72] mb-2">
            Popular Residencies
          </h2>
        </div>

        {/* Custom Arrows Top Right */}
        <div className="flex space-x-2 sm:space-x-3 self-end sm:self-auto">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={isPrevDisabled}
            className={`p-1 sm:p-2 rounded-full shadow ${
              isPrevDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-100 cursor-pointer hover:bg-gray-200"
            }`}
            aria-label="Previous slide"
          >
            <FiChevronLeft
              className={`text-lg sm:text-xl ${
                isPrevDisabled ? "text-gray-400" : "text-gray-900"
              }`}
            />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            disabled={isNextDisabled}
            className={`p-1 sm:p-2 rounded-full shadow ${
              isNextDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-100 cursor-pointer hover:bg-gray-200"
            }`}
            aria-label="Next slide"
          >
            <FiChevronRight
              className={`text-lg sm:text-xl ${
                isNextDisabled ? "text-gray-400" : "text-gray-900"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="my-2 sm:my-4">
        <Slider ref={sliderRef} {...settings}>
          {properties.map((property) => (
            <div 
              key={property.id} 
              className='px-2 md:px-3 lg:px-4'
            >
              <div className="rounded-xl overflow-hidden hover:shadow-md hover:bg-slate-200 transition-all duration-300 bg-white h-full group mx-1 sm:mx-2">
                <div className="relative h-36 sm:h-40 md:h-48 lg:h-52 w-full overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 400px) 90vw, (max-width: 640px) 85vw, (max-width: 768px) 45vw, (max-width: 1024px) 40vw, (max-width: 1280px) 30vw, 25vw"
                    priority={property.id <= 3}
                  />
                </div>
                <div className="p-2 sm:p-3 md:p-4">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <span className="text-yellow-500 font-bold text-sm sm:text-base">$</span>
                    <span className="font-bold text-sm sm:text-base text-[#8c8b8b] ml-1">
                      {property.price.toLocaleString()}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1f3e72] mb-1 line-clamp-1">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                    {property.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PropertySlider;