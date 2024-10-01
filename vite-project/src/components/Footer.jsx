import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      name: "Terms and Conditions",
      content:
        "Our terms and conditions outline the rules and regulations for the use of ZEP Research's conference website and services.",
    },
    {
      name: "Cancellation Policy",
      content:
        "Cancellations made 30 days prior to the event are eligible for a full refund. Cancellations made within 30 days of the event are non-refundable but transferable to another attendee.",
    },
    {
      name: "Privacy Policy",
      content:
        "We respect your privacy and are committed to protecting your personal data. Our privacy policy details how we collect, use, and store your information.",
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-green-900 to-green-700 text-white pt-16 sm:pb-24 pb-20  "
    >
      <div className="container mx-auto px-4">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ZEP Research
            </motion.h2>
            <p className="text-green-200">
              Advancing knowledge through innovative conferences
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-green-200 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-green-200 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-green-200 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
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
          <p>
            &copy; {new Date().getFullYear()} ZEP Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
