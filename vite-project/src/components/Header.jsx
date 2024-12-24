"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/profile.php?id=61561809783777",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/zepresearch/",
      label: "Instagram",
    },
    { icon: FaTwitter, href: "https://x.com/Zepresearch", label: "Twitter" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/zep-research/",
      label: "LinkedIn",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@Zepresearch",
      label: "youtube",
    },
  ];

  return (
    <header className="bg-green-700 text-white py-4 z-50 fixed left-0 right-0 top-0 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.img
              src="./singleLogo.svg"
              alt="ICSIFT Logo"
              className="h-16 w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.span
              className="ml-2 sm:text-2xl text-sm font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ICSIFT
            </motion.span>
            <div className="inline-flex justify-center items-center">
            <motion.img
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726731577/il2wr5yxd2w1sarnj3it.svg"
              
              alt="ZEP RESEARCH Logo"
              className="h-16 w-auto "
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              />
            <motion.span
              className=" sm:text-xl text-sm font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              >
              ZEP RESEARCH
            </motion.span>
              </div>
          </div>

        
          <div className="hidden md:flex flex-row justify-center items-center">
          <div>
          <a href="/sponsorship" className=" py-2 border-2 border-green-100 p-2 rounded-lg">Exhibit & Sponsor</a>
        </div>
            <div className="ml-4 flex items-baseline space-x-1">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-green-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-green-800 inline-flex items-center justify-center p-2 rounded-md text-green-200 hover:text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div 
        className="md:hidden"
        id="mobile-menu"
        initial={false}
        animate={isOpen ? { height: "auto" } : { height: 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        
        <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3">
        
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-green-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <link.icon className="h-5 w-5 inline-block mr-2" />
              {link.label}
            </a>
          ))}
          <div className="flex flex-row justify-end items-end">
           <a href="/sponsorship" className=" py-2 border-2 border-green-100 p-2 rounded-lg  ">Exhibit & Sponsor</a>
        </div>
        </div>
      </motion.div>
    </header>
  );
}
