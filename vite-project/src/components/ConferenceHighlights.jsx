import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Sustainable Technologies and Practices",
    image:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1729524343/gijdqmbcnajuopkz7sex.jpg",
    slug: "sustainable-technologies",
  },
  {
    title: "Innovation for a Sustainable Future",
    image:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1729524429/hoorqjk2k8pj8rcrogjb.jpg",
    slug: "innovation-sustainable-future",
  },
  {
    title: "Smart and Future Technologies",
    image:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1729524556/wvo8pdmcjpgjentmo036.webp",
    slug: "smart-future-technologies",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

function AnimatedSection({ children }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
}

export default function ConferenceHighlights() {
  return (
    <div className="min-h-full bg-gradient-to-br from-green-100 to-green-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <AnimatedSection>
          <h2 className="text-4xl font-extrabold text-green-800 text-center mb-12">
            Conference Highlights
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((section, index) => (
            <AnimatedSection key={index}>
              <Link to={`/highlights/${section.slug}`} className="block">
                <div className="relative h-64 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-green-500 bg-opacity-30"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                    <h3 className="text-xl font-semibold text-white text-center">
                      {section.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
