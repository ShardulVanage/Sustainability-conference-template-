import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const objectives = [
  {
    id: 1,
    title: "Promote Knowledge Exchange",
    description:
      "Facilitate discussions and share insights on the latest research and advancements in sustainability and technology",
  },
  {
    id: 2,
    title: "Foster Collaboration",
    description:
      "Build partnerships between academics, industry professionals, and researchers to drive innovative solutions",
  },
];

const objectives2 = [
  {
    id: 1,
    title: "Support Sustainable Practices",
    description:
      "Encourage the adoption of sustainable practices and technologies across various sectors.",
  },
  {
    id: 2,
    title: "Enhance Research Visibility",
    description:
      "Provide a platform for researchers to present their work and gain recognition in their fields.",
  },
];

export default function ObjectivesSection() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      gsap.set(".objective-item, .image-item", { autoAlpha: 0, y: 50 });

      ScrollTrigger.batch(".objective-item, .image-item", {
        onEnter: (elements) => {
          gsap.to(elements, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          });
        },
        start: "top 80%",
      });
    }, section);

    controls.start({ opacity: 1, y: 0 });

    return () => ctx.revert(); // Clean up GSAP animations
  }, [controls]);

  return (
    <section ref={sectionRef} className="py-16 bg-green-700 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          className="text-4xl md:text-5xl font-bold text-center text-green-50 mb-12"
        >
          Objectives of the Conference
        </motion.h2>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/3">
            <motion.img
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1727426946/gfiqhcmd3uhuypyttpmd.png"
              alt="Zep Research Conference"
              className="rounded-lg object-cover w-full h-auto image-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
          </div>
          <div className="w-full lg:w-1/3 space-y-6">
            {objectives.map((objective) => (
              <motion.div
                key={objective.id}
                className="objective-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">
                  {objective.title}
                </h3>
                <p className="text-gray-600">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse justify-evenly items-center pt-12 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/3">
            <motion.img
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1727426821/fm0vtskqjs2ospykg4hl.png"
              alt="Zep Research Conference"
              className="rounded-lg object-cover w-full h-auto image-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
          </div>
          <div className="w-full lg:w-1/3 space-y-6">
            {objectives2.map((objective) => (
              <motion.div
                key={objective.id}
                className="objective-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">
                  {objective.title}
                </h3>
                <p className="text-gray-600">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
