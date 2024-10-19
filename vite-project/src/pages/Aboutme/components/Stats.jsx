import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <div className="mx-auto my-32 max-w-7xl px-6 sm:my-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Driving Global Impact Through Sustainable Development
        </motion.h2>
        <motion.p
          className="mt-6 text-base leading-7 text-gery-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our conference brings together world leaders, researchers, and
          innovators to address pressing environmental challenges. Through
          collaboration and knowledge sharing, we're making significant strides
          towards a sustainable future.
        </motion.p>
      </div>
      <motion.div
        className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-green-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
          <p className="flex-none text-3xl font-bold tracking-tight text-green-900">
            5,000+
          </p>
          <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p className="text-lg font-semibold tracking-tight text-green-900">
              Conference Attendees
            </p>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Professionals and researchers from over 100 countries.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-green-800 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
          <p className="flex-none text-3xl font-bold tracking-tight text-white">
            250+
          </p>
          <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p className="text-lg font-semibold tracking-tight text-white">
              Presentations and Workshops
            </p>
            <p className="mt-2 text-base leading-7 text-green-200">
              Covering a wide range of sustainability topics and innovations.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-green-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
          <p className="flex-none text-3xl font-bold tracking-tight text-white">
            50+
          </p>
          <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p className="text-lg font-semibold tracking-tight text-white">
              Partnering Organizations
            </p>
            <p className="mt-2 text-base leading-7 text-green-100">
              Leading institutions and companies committed to sustainable
              development goals.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Stats;
