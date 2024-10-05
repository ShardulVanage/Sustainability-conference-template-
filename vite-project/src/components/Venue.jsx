"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VenueSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const title = titleRef.current;

    if (!section || !image || !title) return;

    const ctx = gsap.context(() => {
      gsap.from(title, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(image, {
        scale: 1.1,
        duration: 10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[800px] overflow-hidden bg-green-900 text-white"
    >
      <motion.div
        ref={imageRef}
        className="absolute inset-0 z-0"
        style={{ opacity, scale }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1690959653734-08f745b7c8b7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Manila Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-500/30 to-green-700/90" />
      </motion.div>
      <div className="absolute inset-0 bg-green-900 bg-opacity-30 z-10" />
      <div className="relative z-20 container mx-auto px-4 py-24 flex flex-col justify-center items-center min-h-screen">
        <motion.h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-8 text-center text-green-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience Manila
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-center mb-12 max-w-2xl text-green-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join us in the heart of the Philippines for an unforgettable
          conference experience
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-green-100 bg-opacity-50 p-6 rounded-lg backdrop-blur-md border border-green-400/30">
            <h3 className="text-2xl font-semibold mb-2 text-green-900">
              World-Class Venue
            </h3>
            <p className="text-green-100">
              State-of-the-art facilities in the heart of Manila
            </p>
          </div>
          <div className="bg-green-100 bg-opacity-50 p-6 rounded-lg backdrop-blur-md border border-green-400/30">
            <h3 className="text-2xl font-semibold mb-2 text-green-900">
              Cultural Hub
            </h3>
            <p className="text-green-100">
              Immerse yourself in Filipino hospitality and culture
            </p>
          </div>
          <div className="bg-green-100 bg-opacity-50 p-6 rounded-lg backdrop-blur-md border border-green-400/30">
            <h3 className="text-2xl font-semibold mb-2 text-green-900">
              Networking Paradise
            </h3>
            <p className="text-green-100">
              Connect with industry leaders in a tropical setting
            </p>
          </div>
        </motion.div>
        <a href="/venue">
          <motion.button
            className="mt-12 px-8 py-3 bg-green-500 text-white font-semibold rounded-full text-lg hover:bg-green-400 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Venue
          </motion.button>
        </a>
      </div>
    </section>
  );
}
