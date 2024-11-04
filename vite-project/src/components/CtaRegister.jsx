import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import { IconHeartHandshake, IconMapPin } from "@tabler/icons-react";

export default function CtaRegister() {
  const controls = useAnimation();
  const trophyRef = useRef(null);
  const handshakeRef = useRef(null);
  const mapPinRef = useRef(null);
  const leafRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }));

    const ctx = gsap.context(() => {
      if (trophyRef.current) {
        gsap.to(trophyRef.current, {
          y: -10,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      if (handshakeRef.current) {
        gsap.to(handshakeRef.current, {
          rotation: 5,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      if (mapPinRef.current) {
        gsap.to(mapPinRef.current, {
          y: -5,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      if (leafRef.current) {
        gsap.to(leafRef.current, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "linear",
        });
      }

      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert(); // Cleanup function
  }, [controls]);

  return (
    <div className="py-12 flex flex-col-reverse items-center justify-center gap-4 bg-green-700 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full relative overflow-hidden"
      >
        <div
          ref={leafRef}
          className="absolute -top-16 -right-16 text-green-300 opacity-30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-48 h-48"
          >
            <path
              fillRule="evenodd"
              d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h2 ref={titleRef} className="text-4xl font-bold text-green-800 mb-4">
          Join the Green Revolution
        </h2>

        <p className="text-green-700 mb-6">
          Be part of the change at the International Conference on Sustainable
          Development. Together, we can build a greener future!
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-6"
        >
          <a
            href="#register"
            className="block w-full py-3 px-6 text-center text-white font-semibold bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Register Now
          </a>
        </motion.div>

        <div className="flex justify-between text-sm text-green-600">
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            🌍 100% Carbon Neutral Event
          </motion.p>
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            🌱 Plant a Tree with Every Registration
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full relative overflow-hidden"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          custom={0}
          className="text-4xl font-bold text-green-800 mb-6 text-center"
        >
          Celebrate & Support Sustainability
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={1}
            className="bg-green-50 p-6 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-green-700">Awards</h3>
              <div ref={trophyRef}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p className="text-green-600 mb-4">
              Recognize excellence in sustainable innovation and practices.
            </p>
            <motion.a
              href="/awards"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full py-2 px-4 text-center text-white font-semibold bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Nominate Now
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={2}
            className="bg-green-50 p-6 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-green-700">
                Sponsorship
              </h3>
              <div ref={handshakeRef}>
                <IconHeartHandshake className="w-12 h-12 text-green-500" />
              </div>
            </div>
            <p className="text-green-600 mb-4">
              Partner with us to drive sustainable development forward.
            </p>
            <motion.a
              href="/sponsorship"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full py-2 px-4 text-center text-white font-semibold bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Become a Sponsor
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={3}
            className="bg-green-50 p-6 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-green-700">Venue</h3>
              <div ref={mapPinRef}>
                <IconMapPin className="w-12 h-12 text-green-500" />
              </div>
            </div>
            <p className="text-green-600 mb-4">
              Explore our eco-friendly conference venue and accommodation
              options.
            </p>
            <motion.a
              href="/venue"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full py-2 px-4 text-center text-white font-semibold bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              View Venue
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          custom={4}
          className="mt-8 text-center"
        >
          <p className="text-green-700 font-semibold mb-2">
            Join us in shaping a sustainable future
          </p>
          <div className="flex justify-center space-x-4">
            <motion.span whileHover={{ scale: 1.1 }} className="text-2xl">
              🌱
            </motion.span>
            <motion.span whileHover={{ scale: 1.1 }} className="text-2xl">
              🏆
            </motion.span>
            <motion.span whileHover={{ scale: 1.1 }} className="text-2xl">
              🤝
            </motion.span>
            <motion.span whileHover={{ scale: 1.1 }} className="text-2xl">
              🌍
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
