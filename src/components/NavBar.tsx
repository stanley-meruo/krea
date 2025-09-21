"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseFill, RiImageAiFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { PiMoonFill, PiSunFill } from "react-icons/pi";
import { TbMenu } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { HiFolder, HiVideoCamera } from "react-icons/hi";
import { ImMagicWand } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import { LiaDraftingCompassSolid } from "react-icons/lia";
import { AiFillSignature } from "react-icons/ai";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for mobile drawer
  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  // Dark mode toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Pick logo based on scroll + theme
  const logoSrc = (() => {
    if (darkMode && !scrolled) return "/krea-light.webp"; // Dark mode top
    if (darkMode && scrolled) return "/krea-light.webp"; // Dark mode scrolled
    if (!darkMode && scrolled) return "/krea-dark.webp"; // Light mode scrolled
    return "/krea-dark.webp"; // Light mode top
  })();

  return (
    <nav className="fixed w-full z-50">
      <div
        className={`font-semibold transition-colors duration-300 p-4 xs:px-5 sm:px-8 lg:px-12 xl:px-14 xxl:px-16 ${
          scrolled ? "bg-gray-300 dark:bg-gray-800 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className={`md:hidden focus:outline-none ${
                scrolled
                  ? "text-black dark:text-white"
                  : "text-black dark:text-white"
              }`}
            >
              <TbMenu size={24} />
            </button>
            {/* Logo */}
            <Link href="/">
              <Image
                src={logoSrc}
                alt="Krea Logo"
                width={28}
                height={20}
                className="transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-1 bg-gray-100 dark:bg-gray-600 p-1 rounded-lg shadow lg:gap-2">
            <NavLink href="/" icon={<GoHomeFill size={18} />} label="Home" />
            <NavLink
              href="/images"
              icon={<BsImage size={18} />}
              label="Image"
            />
            <NavLink
              href="/videos"
              icon={<HiVideoCamera size={20} />}
              label="Video"
            />
            <NavLink
              href="/enhancer"
              icon={<ImMagicWand size={16} />}
              label="Enhancer"
            />
            <NavLink
              href="/realtime"
              icon={<AiFillSignature size={18} />}
              label="Realtime"
            />
            <NavLink
              href="/edit"
              icon={<LiaDraftingCompassSolid size={20} />}
              label="Edit"
            />
            <NavLink
              href="/assets"
              icon={<HiFolder size={18} />}
              label="Assets"
            />
          </div>

          {/* Gallery, Support, Dark/Light, Active Button */}
          <div className="text-xs flex gap-2 dark:text-white  md:gap-3 lg:gap-5 lg:text-sm">
            <Link
              href="/"
              className="hidden md:flex md:items-center md:gap-1 bg-gray-100 dark:bg-gray-600 py-1 px-1.5 rounded-md"
            >
              <RiImageAiFill /> Gallery
            </Link>
            <Link
              href="/"
              className="hidden md:flex md:items-center md:gap-1 bg-gray-100 dark:bg-gray-600 py-1 px-1.5 rounded-md"
            >
              <BiSupport /> Support
            </Link>
            <span className="bg-gray-100 dark:bg-gray-600 grid p-1 size-6 rounded-md cursor-pointer">
              <FaBell size={14} className="m-auto" />
            </span>
            <button
              className="bg-gray-100 dark:bg-gray-600 p-1 size-6 rounded-md cursor-pointer"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <PiSunFill size={14} className="m-auto" />
              ) : (
                <PiMoonFill size={14} className="m-auto" />
              )}
            </button>
            <span className="bg-gradient-to-br from-red-400 via-blue-300 to-indigo-200 rounded-full border-[0.5px] border-gray-200 size-6 animate-pulse"></span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer + Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 px-6 py-4 flex flex-col font-semibold dark:bg-gray-800 dark:text-white"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                {/* Close Button */}
                <button
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  className="self-start"
                >
                  <RiCloseFill size={32} />
                </button>
                <span className="flex items-center gap-2">
                  <span className="bg-gradient-to-br from-red-400 via-blue-300 to-indigo-200 rounded-full border-[0.5px] border-gray-200 size-6 animate-pulse"></span>
                  Benevolentrim
                </span>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-6 mt-6 pt-6">
                <NavLink
                  href="/"
                  icon={<GoHomeFill size={20} className="m-auto" />}
                  label="Home"
                  mobile
                  onClick={() => setIsOpen(false)}
                  iconWrapperClassName="bg-cyan-600"
                />
                <NavLink
                  href="/images"
                  icon={<BsImage size={17} className="m-auto" />}
                  label="Image"
                  mobile
                  onClick={() => setIsOpen(false)}
                  iconWrapperClassName="bg-gradient-to-b from-gray-800 via-gray-500 to-gray-300"
                />
                <NavLink
                  href="/videos"
                  icon={<HiVideoCamera size={20} className="m-auto" />}
                  label="Video"
                  mobile
                  onClick={() => setIsOpen(false)}
                  iconWrapperClassName="bg-orange-400"
                />
                <NavLink
                  href="/realtime"
                  icon={<AiFillSignature size={18} className="m-auto" />}
                  label="Realtime"
                  mobile
                  onClick={() => setIsOpen(false)}
                  iconWrapperClassName="bg-gradient-to-b from-blue-400 via-cyan-500 to-cyan-100"
                />
                <NavLink
                  href="/enhancer"
                  icon={<ImMagicWand size={16} className="m-auto" />}
                  label="Enhancer"
                  mobile
                  onClick={() => setIsOpen(false)}
                  iconWrapperClassName="bg-gradient-to-b from-gray-950 via-gray-700 to-gray-400"
                />
                <NavLink
                  href="/edit"
                  icon={
                    <LiaDraftingCompassSolid size={20} className="m-auto" />
                  }
                  label="Edit"
                  mobile
                  onClick={() => setIsOpen(false)}
                  iconWrapperClassName="bg-gradient-to-b from-gray-900 via-purple-900 to-purple-300"
                />
                <NavLink
                  href="/assets"
                  icon={<HiFolder size={18} className="m-auto" />}
                  label="Assets"
                  mobile
                  onClick={() => setIsOpen(false)}
                  iconWrapperClassName="bg-gradient-to-b from-teal-950 via-teal-700 to-lime-200"
                />
              </div>
              <div className="flex flex-col gap-6 mt-6 border-t pt-6">
                <NavLink
                  href="/gallery"
                  icon={<RiImageAiFill size={20} className="m-auto" />}
                  label="Gallery"
                  mobile
                  onClick={() => setIsOpen(false)}
                  iconWrapperClassName="bg-gradient-to-b from-purple-800 via-purple-500 to-purple-200"
                />
                <NavLink
                  href="/support"
                  icon={<BiSupport size={20} className="m-auto" />}
                  label="Support"
                  mobile
                  onClick={() => setIsOpen(false)}
                  iconWrapperClassName="bg-gradient-to-b from-purple-800 via-purple-500 to-purple-200"
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
export default NavBar;


