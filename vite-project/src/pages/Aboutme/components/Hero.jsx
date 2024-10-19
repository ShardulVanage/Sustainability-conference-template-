import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-green-100/20 to-green-50 pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <motion.h1
            className="max-w-2xl text-4xl font-bold tracking-tight text-green-800 sm:text-6xl lg:col-span-2 xl:col-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Shaping a Sustainable Future Through Global Collaboration and
            Innovation
          </motion.h1>
          <motion.div
            className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg leading-8 text-gray-700">
              Join us at the forefront of sustainable development. Our
              conference brings together world-renowned experts, innovative
              researchers, and passionate advocates to address the most pressing
              environmental challenges of our time. Together, we'll explore
              cutting-edge solutions and forge partnerships that will shape a
              greener, more sustainable world.
            </p>
          </motion.div>
          <motion.img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sustainable city concept"
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-green-50 sm:h-32" />
    </div>
  );
};

export default HeroSection;
