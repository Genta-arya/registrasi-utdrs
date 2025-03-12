import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer className="bg-bata text-white py-8 ">
      <div className="max-w-full mx-auto px-6 md:px-8 lg:px-80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kolom 1: Logo & Deskripsi */}
          <div>
            <div className="flex items-center gap-4">
              <Icon w={"w-12"} />
              <h2 className="text-3xl font-bold">UTDRS</h2>
            </div>
            <p className="mt-2 text-gray-200">
              Platform registrasi donor darah untuk membantu sesama dengan cara
              yang mudah dan cepat.
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div></div>

          {/* Kolom 3: Sosial Media & Kontak */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Hubungi Kami</h3>
            <p>
              Email:{" "}
              <a href="mailto:info@utdrs.com" className="underline">
                info@utdrs.com
              </a>
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <FaInstagram />
              </a>
              <a
                href="mailto:info@utdrs.com"
                className="text-white hover:text-gray-300 text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} UTDRS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
