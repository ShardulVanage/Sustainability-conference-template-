import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { IconDownload, IconFileDownload } from "@tabler/icons-react";

const buttons = [
  { text: "Conference Poster", href: "/poster.pdf" },
  { text: "Registration Form", href: "/registration.pdf" },
  { text: "Manuscript Template", href: "/manuscript.docx" },
  { text: "Abstract Template", href: "/abstract.docx" },
  { text: "Copyright Form", href: "/copyright.pdf" },
  { text: "Conference Brochure", href: "/brochure.pdf" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelector(".content"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      section.querySelector(".image"),
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section ref={sectionRef} className="py-16 bg-green-50 sm:py-36">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          className="text-5xl font-bold text-center text-green-900 mb-12"
        >
          About Conference
        </motion.h2>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly mx-auto gap-8">
          <div className=" lg:w-1/3 space-y-4">
            <motion.p
              className="text-green-800 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Zep Research is a leading academic conference organizer, known for
              delivering top-tier events that promote academic growth and
              professional excellence. We specialize in connecting scholars,
              researchers, and practitioners through impactful conferences and
              publication opportunities.
            </motion.p>
            <motion.p
              className="text-green-800 leading-relaxed text-balance sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            ></motion.p>

            {/* <motion.p
              className="text-green-800 leading-relaxed text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
               Our services extend beyond conference organization, offering
              expert peer review, research grant assistance, and publication
              management. At Zep Research, we aim to facilitate meaningful
              academic interactions and empower researchers to contribute to
              cutting-edge developments in their fields.
            </motion.p>
            */}
            <a href="/home">
              <motion.p
                className="text-green-800 leading-relaxed text-base font-bold underline underline-offset-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Read more...
              </motion.p>
            </a>
          </div>

          <div className="image lg:w-1/3 p-8 ">
            <motion.img
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1727429207/imov05ja3gtwvvwduqek.png"
              alt="Zep Research Conference"
              className="rounded-lg   object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full py-12">
          <h1 className="text-center text-xl pb-3 inline-flex justify-center items-center gap-3 font-medium text-green-800">
            Download Conference Materials <IconFileDownload />
          </h1>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl   justify-center items-center "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {buttons.map((button, index) => (
              <motion.a
                key={index}
                // href={button.href}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-sm sm:text-sm text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {button.text}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
