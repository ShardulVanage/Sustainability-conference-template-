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
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import logo from "../../public/singleLogo.svg";

export default function Footer() {
  const [activeSection, setActiveSection] = useState(null);
  const [email, setEmail] = useState("");
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
    { name: "About Us", href: "/AboutUs" },
    { name: "Committee", href: "/committee" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pricing", href: "/pricing" },
    { name: "Submission", href: "/submission" },

    { name: "Conference Schedule", href: "/schedule" },
    { name: "Registration", href: "/pricing" },
  ];

  const resourceLinks = [
    { name: "Research Papers", href: "/" },
    { name: "Conference Guidelines", href: "/" },
    { name: "Past Proceedings", href: "/" },
    { name: "FAQs", href: "/" },
    { name: "Contact Support", href: "/" },
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
    {
      name: "Cookie Policy",
      content:
        "Our cookie policy explains how we use cookies and similar technologies to improve your browsing experience.",
      link: "/cookie-policy",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-green-900 to-green-700 text-white pt-16 sm:pb-24 pb-20"
    >
      <div className="container mx-auto px-4">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <a
              href="/"
              className="flex items-center gap-1 hover:opacity-90 transition-opacity"
            >
              <img
                src={logo}
                className="h-16 w-16 drop-shadow-2xl"
                alt="ICSIFT Logo"
              />
              <h1 className="font-bold font-sans text-3xl bg-gradient-to-r from-emerald-500 to-lime-500 text-transparent bg-clip-text drop-shadow-2xl">
                ICSIFT
              </h1>
            </a>
            <p className="text-green-50">
              Advancing knowledge through innovative conferences
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <FaEnvelope className="h-4 w-4 text-green-300" />
                <a
                  href="mailto:info@icsift.com"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  info@icsift.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="h-4 w-4 text-green-300" />
                <a
                  href="tel:+918260080050"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  +91 82600 80050
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="h-4 w-4 text-green-300" />
                <a
                  href="/venue"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Conference Venue
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="h-4 w-4 text-green-300" />
                <a
                  href="/schedule"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Event Calendar
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links Section */}
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
                    className="text-green-200 hover:text-white transition-colors inline-block"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Resources Section */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    className="text-green-200 hover:text-white transition-colors inline-block"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div> */}

          {/* Newsletter Section */}

          <div>
            <h3 className="text-xl font-semibold mb-4 ">Legal</h3>
            <ul className="space-y-2">
              {legalSections.map((section) => (
                <motion.li
                  key={section.name}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={section.link}
                    className="text-green-200 hover:text-white transition-colors inline-block"
                  >
                    {section.name}
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
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-green-800 text-white placeholder-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-400 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
            <div className="flex space-x-4 py-4 justify-center items-end">
            <a
                href="https://www.facebook.com/profile.php?id=61561809783777"
                aria-label="Facebook"
                className="hover:text-green-300 transition-colors"
              >
                <FaFacebook className="h-6 w-6 hover:scale-105 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/zepresearch/"
                aria-label="Instagram"
                className="hover:text-green-300 transition-colors"
              >
                <FaInstagram className="h-6 w-6 hover:scale-105 transition-transform" />
              </a>
              <a
                href="https://x.com/Zepresearch"
                aria-label="Twitter"
                className="hover:text-green-300 transition-colors"
              >
                <FaTwitter className="h-6 w-6 hover:scale-105 transition-transform" />
              </a>
              
              <a
                href="https://www.linkedin.com/company/zep-research/"
                aria-label="LinkedIn"
                className="hover:text-green-300 transition-colors"
              >
                <FaLinkedin className="h-6 w-6 hover:scale-105 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/@Zepresearch"
                aria-label="YouTube"
                className="hover:text-green-300 transition-colors"
              >
                <FaYoutube className="h-6 w-6 hover:scale-105 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Content Expansion */}
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

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-green-600 text-center"></div>
        <p className="text-green-300">
          &copy; {new Date().getFullYear()} ICSIFT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
