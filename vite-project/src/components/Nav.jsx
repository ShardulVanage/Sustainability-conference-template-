"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
    dropdown: [
      { name: "Overview", href: "#overview" },
      { name: "Team", href: "#team" },
      { name: "History", href: "#history" },
    ],
  },
  {
    name: "Call for Papers",
    href: "#",
    dropdown: [
      { name: "Guidelines", href: "#guidelines" },
      { name: "Topics", href: "#topics" },
      { name: "Deadlines", href: "#deadlines" },
    ],
  },
  {
    name: "Submission",
    href: "#",
    dropdown: [
      { name: "Submit Paper", href: "#submit-paper" },
      { name: "Review Process", href: "#review-process" },
      { name: "Publication", href: "#publication" },
    ],
  },
  { name: "Registration", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Venue", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="shadow-lg bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 drop-shadow-lg">
              <img
                className="h-10 w-auto"
                src="/singleLogo.png"
                alt="ICSAP Logo"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10 transition duration-150 ease-in-out flex items-center text-white"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>
                  {item.dropdown && (
                    <motion.div
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white     ring-1 ring-black ring-opacity-5 z-10"
                      initial="closed"
                      animate={activeDropdown === item.name ? "open" : "closed"}
                      variants={{
                        open: { opacity: 1, y: 0, display: "block" },
                        closed: { opacity: 0, y: -10, display: "none" },
                      }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition duration-150 ease-in-out"
                            role="menuitem"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground hover:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <div key={item.name}>
              <a
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground/10 transition duration-150 ease-in-out"
              >
                {item.name}
              </a>
              {item.dropdown && (
                <div className="pl-4">
                  {item.dropdown.map((dropdownItem) => (
                    <a
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10 transition duration-150 ease-in-out"
                    >
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
