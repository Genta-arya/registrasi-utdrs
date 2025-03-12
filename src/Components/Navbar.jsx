import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import Icon from "./Icon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Utama */}
      <nav className="fixed top-0 left-0 w-full bg-white  drop-shadow-md lg:py-6 md:py-4 py-4 lg:px-52 md:px-0 px-1 z-10">
        <div className="flex justify-between items-center w-full max-w-full lg:px-32 md:px-8 px-4 mx-auto">
          {/* Kiri: UTDRS */}
          <div className="flex items-center  gap-4">
            <Icon w={"w-12"} />
            <p className="lg:text-4xl text-2xl font-extrabold text-red-700 tracking-wide">
              UTDRS
            </p>
          </div>

          {/* Tengah: Menu (Desktop) */}
          <div className="hidden font-bold md:flex lg:space-x-8 md:space-x-4">
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

          {/* Kanan: Login & Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden md:block bg-red-600 text-white px-8 py-2 rounded-full hover:bg-red-700 transition"
            >
              Login
            </a>
            {/* Tombol Hamburger (Mobile) */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden focus:outline-none"
            >
              <HiMenu className="text-2xl text-gray-800" />
            </button>
          </div>
        </div>
      </nav>

      {/* Background Gelap Saat Sidebar Terbuka */}
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

      {/* Sidebar Menu (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Tombol Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-800 text-2xl"
            >
              &times;
            </button>

            <div className="flex items-center  gap-4 mt-12 px-3">
            <Icon w={"w-12"} />
            <p className="lg:text-4xl text-2xl font-extrabold text-red-700 tracking-wide">
              UTDRS
            </p>
          </div>
            {/* Menu Sidebar */}
            <div className="flex flex-col items-start p-6 space-y-4 4">
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
                className="text-red-700 font-semibold border-b-2 border-red-700"
              >
                Donor
              </a>
              <a
                href="#"
                className="text-gray-600 font-medium hover:text-red-600 transition"
              >
                Kontak
              </a>
              <a
                href="#"
                className="w-full text-center bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700 transition"
              >
                Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
