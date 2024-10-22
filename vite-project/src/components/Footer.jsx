import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../public/singleLogo.png";

export default function Footer() {
  const [activeSection, setActiveSection] = useState(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-content", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=100",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const navItems = [
    { name: "About Me", href: "/about" },
    { name: "Committee", href: "/committee" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pricing", href: "/pricing" },
    { name: "Submission", href: "/submission" },
  ];

  const legalSections = [
    {
      name: "Terms & Conditions",
      content:
        "Our terms and conditions outline the rules and regulations for the use of ZEP Research's conference website and services.",
      link: "/Terms-&-Conditions",
    },
    {
      name: "Cancellation Policy",
      content:
        "Cancellations made 30 days prior to the event are eligible for a full refund. Cancellations made within 30 days of the event are non-refundable but transferable to another attendee.",
      link: "/cancellation-policy",
    },
    {
      name: "Privacy Policy",
      content:
        "We respect your privacy and are committed to protecting your personal data. Our privacy policy details how we collect, use, and store your information.",
      link: "/Privacy-Policy",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-700 text-white pt-16 sm:pb-24 pb-20  ">
      <div className="container mx-auto px-4">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="/" className="flex  items-end gap-1">
              {/* Zep LOGO  src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726731577/il2wr5yxd2w1sarnj3it.svg" */}
              <img src={logo} className="h-16 w-16 drop-shadow-2xl" alt="" />
              <br />
              <h1 className="font-bold font-sans text-3xl bg-gradient-to-r from-emerald-500 to-lime-500 text-transparent bg-clip-text drop-shadow-2xl">
                ICSIFT
              </h1>
            </a>
            <p className="text-green-50">
              Advancing knowledge through innovative conferences
            </p>
            <div className="flex space-x-4 ">
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
                <FaYoutube className="h-6 w-6 hover:scale-105   " />
              </a>
            </div>
          </div>
          <nav>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalSections.map((section) => (
                <motion.li
                  key={section.name}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={section.link}>
                    <button
                      onClick={() =>
                        setActiveSection(
                          activeSection === section.name ? null : section.name
                        )
                      }
                      className="text-green-200 hover:text-white transition-colors text-left"
                    >
                      {section.name}
                    </button>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-green-200 mb-4">
              Stay updated with our latest news and events
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-green-800 text-white placeholder-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-400 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        <AnimatePresence>
          {activeSection && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 bg-green-800 p-4 rounded"
            >
              <h4 className="text-lg font-semibold mb-2">{activeSection}</h4>
              <p className="text-green-200">
                {
                  legalSections.find(
                    (section) => section.name === activeSection
                  )?.content
                }
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-12 pt-8 border-t border-green-600 text-center text-green-300">
          <p>&copy; {new Date().getFullYear()} icsift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
