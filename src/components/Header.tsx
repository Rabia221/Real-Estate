"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import ImageCom from "./ImageCom";
import { navLinks } from "./data";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [premium, setPremium] = useState<number>(8950);
  const [happy, setHappy] = useState<number>(1890);
  const [awards, setAwards] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPremium((prev) => (prev < 9000 ? prev + 1 : prev));
      setHappy((prev) => (prev < 2000 ? prev + 1 : prev));
      setAwards((prev) => (prev < 28 ? prev + 1 : prev));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsVisible(currentScrollY < window.innerHeight - 80);
      setHasScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 text-[#FFFFFFC7] ${
          hasScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="https://real-estate-web.pages.dev/logo.png"
                alt="Logo"
                width={100}
                height={40}
                className="object-contain w-20 sm:w-24 md:w-28"
                priority
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-white font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer hover:text-blue-400 transition-colors text-sm lg:text-base"
                >
                  {link.label}
                </Link>
              ))}
              <button
                className="text-white px-4 py-1 lg:px-6 lg:py-1.5 cursor-pointer rounded-md text-sm transition hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
                }}
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-2xl text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-12 right-0 w-40 bg-white text-center text-black border rounded-lg shadow-lg flex flex-col p-2 z-50"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                className="w-full text-white px-4 py-2 rounded-md text-sm transition hover:opacity-90 mt-2"
                style={{
                  background:
                    "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </button>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Blur Effect */}
      <motion.div
        className="absolute left-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] bg-white/50 z-20 rounded-full"
        style={{
          filter: "blur(70px) brightness(1.2)",
          transform: `translateY(${Math.min(
            scrollY * 0.5,
            window.innerHeight
          )}px)`,
          left: "-4%",
          top: "-7%",
        }}
      />

      {/* Main Hero Section */}
      <main className="bg-black pt-16 sm:pt-20">
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-white relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10">
            {/* Left Section */}
            <div className="w-full md:w-1/2 text-center md:text-left z-20">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Discove
                <span className="relative inline-block">
                  <span className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-orange-500 rounded-full -top-1 sm:-top-2 -left-1 z-[-1]" />
                  <span className="relative z-10">r</span>
                </span>
                <br /> Most Suitable
                <br /> Property
              </motion.h1>

              {/* Sub Text */}
              <p className="text-xs sm:text-sm text-[#8c8b8b] mb-4 sm:mb-6">
                Find a variety of properties that suit you very easily
                <br className="hidden sm:block" />
                Forget all difficulties in finding a residence for you
              </p>

              {/* Search Box */}
              <div className="flex items-center bg-white rounded px-2 py-1.5 sm:px-3 sm:py-2 shadow-md w-full max-w-xs sm:max-w-sm mx-auto md:mx-0">
                <span className="text-lg sm:text-xl text-blue-500 mr-1 sm:mr-2">
                  <IoLocationSharp />
                </span>
                <input
                  type="text"
                  placeholder="Search location..."
                  className="flex-grow min-w-[80px] sm:min-w-[100px] px-1 sm:px-2 text-gray-700 text-xs sm:text-sm bg-transparent outline-none"
                />
                <button className="rounded text-white px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm ml-1 sm:ml-2 transition bg-blue-500 hover:bg-blue-600">
                  Search
                </button>
              </div>

              {/* Stats */}
              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                <div className="text-white text-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {premium} <span className="text-orange-400">+</span>
                  </h2>
                  <p className="text-xs mt-1 text-[#8c8b8b]">
                    Premium Product
                  </p>
                </div>
                <div className="text-white text-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {happy} <span className="text-orange-400">+</span>
                  </h2>
                  <p className="text-xs mt-1 text-[#8c8b8b]">
                    Happy Customer
                  </p>
                </div>
                <div className="text-white text-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {awards} <span className="text-orange-400">+</span>
                  </h2>
                  <p className="text-xs mt-1 text-[#8c8b8b]">
                    Awards Winning
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Image*/}
            <motion.div
              className="w-full md:w-1/2 flex justify-center z-20 mt-4 sm:mt-0"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 60,
                mass: 0.5,
                delay: 0.2,
              }}
            >
              <ImageCom 
                src="https://real-estate-web.pages.dev/hero-image.png" 
              />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Header;