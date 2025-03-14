import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import Icon from "./Icon";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-500  drop-shadow-md lg:py-6 md:py-4 py-4 lg:px-24  xl:px-24 2xl:px-52  md:px-0 px-1 z-10">
        <div className="flex justify-between items-center w-full max-w-full lg:px-32 md:px-8 px-4 mx-auto">
          <div className="flex items-center  gap-2">
            <Icon w={"w-12"} />
            <p className="lg:text-4xl text-2xl font-extrabold text-red-700 tracking-wide">
              UTDRS
            </p>
          </div>

          <div className="hidden lg:text-xl md:text-base font-bold md:flex  2xl:space-x-8 lg:space-x-5 md:space-x-4">
            <a
              href="#"  
              className="text-gray-600 font-medium hover:text-red-600 transition"
            >
              Beranda
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-red-600 transition"
            >
              Berita
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-red-600 transition"
            >
              Event
            </a>
            <a
              href="#"
              className="text-red-700 font-extrabold border-b-2 border-red-700"
            >
              Donor
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-red-600 transition"
            >
              Kontak
            </a>
          </div>

          <div className="flex items-center lg:text-xl md:text-base gap-4">
            <a
              href="#"
              className="hidden md:block bg-red-600 text-white px-8 py-2 rounded-full hover:bg-red-700 transition"
            >
              Login
            </a>

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden focus:outline-none"
            >
              <HiMenu className="text-2xl text-gray-800" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-800 text-2xl"
            >
              <FaTimes className="hover:animate-spin" />
            </button>

            <div className="flex items-center  gap-4 mt-12 px-3">
              <Icon w={"w-12"} />
              <p className="lg:text-4xl text-2xl font-extrabold text-red-700 tracking-wide">
                UTDRS
              </p>
            </div>

            <div className="flex text-sm lg:text-base md:text-base flex-col items-start  pt-8 space-y-4 4">
              <a
                href="#"
                className="text-gray-600 font-medium border-b w-full border-gray-400 pb-2  hover:text-red-600 transition"
              >
                <p className="px-4">Beranda</p>
              </a>
              <a
                href="#"
                className="text-gray-600 border-b w-full border-gray-400 pb-2 font-medium hover:text-red-600 transition"
              >
                <p className="px-4">Berita</p>
              </a>
              <a
                href="#"
                className="text-gray-600 font-medium border-b w-full border-gray-400 pb-2  hover:text-red-600 transition"
              >
                <p className="px-4">Event</p>
              </a>
              <a
                href="#"
                className="text-red-700 font-semibold border-b-2 w-full pb-2 border-red-700"
              >
                <p className="px-4">Donor</p>
              </a>
              <a
                href="#"
                className="text-gray-600 font-medium border-b w-full border-gray-400 pb-2  hover:text-red-600 transition"
              >
                <p className="px-4">Kontak</p>
              </a>
            </div>
            <div className="text-sm  flex justify-center  mt-8">
              <button className="cursor-pointer w-full  hover ml-4 mr-4  text-center bg-red-800  text-white  py-2 rounded-full hover:bg-red-700 transition">
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
