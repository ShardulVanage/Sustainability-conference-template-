import React from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

export default function HeadingSection() {
  return (
    <div className="relative sm:h-[26vh]  h-24 overflow-hidden bg-gray-50">
      {/* Background Image with Green Gradient Overlay */}
      <div
        className="absolute sm:h-full  inset-0 z-10 "
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(28,122,63, 0.3), rgba(0, 128, 0, 0.6)),
            url('https://images.unsplash.com/photo-1478828799736-c41c2e82eaef?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full lg:pt-0 pt-10  md:pt-20 relative z-10 "
        >
          <path
            fill="#F0FDF4"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Wave-like curve */}
      {/* <div className="absolute z-10 bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full "
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}

      {/* Content Container */}
      <div className="relative z-10 h-full ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          {/* Navbar-like content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center py-4"
          >
            {/* Logo */}
            <a href="/" className="flex  items-center   gap-1">
              {/* Zep LOGO  src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726731577/il2wr5yxd2w1sarnj3it.svg" */}
              <img
                src="./singleLogo.svg"
                className="h-16 w-16 drop-shadow-2xl"
                alt=""
              />
              <br />
              <h1 className="font-bold font-sans text-3xl bg-gradient-to-r from-emerald-100 to-lime-100 text-transparent bg-clip-text drop-shadow-2xl">
                ICSIFT
              </h1>
            </a>
            {/* Social Icons */}
            <div className="flex space-x-4 text-white">
              <a href="https://www.instagram.com/zepresearch/">
                <FaInstagram className="h-6 w-6 hover:scale-105" />
              </a>
              <a href="https://x.com/Zepresearch">
                <FaTwitter className="h-6 w-6 hover:scale-105" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61561809783777">
                <FaFacebook className="h-6 w-6 hover:scale-105" />
              </a>
              <a href="https://www.linkedin.com/company/zep-research/">
                <FaLinkedin className="h-6 w-6 hover:scale-105" />
              </a>
              <a href="https://www.youtube.com/@Zepresearch">
                <FaYoutube className="h-6 w-6 hover:scale-105  " />
              </a>
            </div>
          </motion.div>

          {/* Main Content */}
        </div>
      </div>
    </div>
  );
}
