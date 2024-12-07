import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin } from 'lucide-react';

export default function OrganizingCommittee({ committee }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-green-50 py-12 pt-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
            Organizing Committee
          </h2>
        </motion.div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <li key={index} className="animate-pulse">
                  <div className="mx-auto h-56 w-56 rounded-full bg-gray-300"></div>
                  <div className="mt-6 h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                  <div className="mt-2 h-3 bg-gray-300 rounded w-1/2 mx-auto"></div>
                  <div className="mt-2 h-3 bg-gray-300 rounded w-1/3 mx-auto"></div>
                  <div className="mt-4 h-20 bg-gray-300 rounded w-5/6 mx-auto"></div>
                </li>
              ))
            : committee.map((speaker, index) => (
                <motion.li
                  key={speaker.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <img
                    className="mx-auto h-56 w-56 rounded-full drop-shadow-sm bg-white object-cover "
                    src={speaker.img}
                    alt={speaker.name}
                  />
                  <h3 className="mt-6 text-lg leading-7 tracking-tight text-green-900 font-bold ">
                    {speaker.name}
                  </h3>
                  <p className="text-base leading-6 text-gray-600">
                    {speaker.designation}
                  </p>
                  <p className="px-4">{speaker.details}</p>
                  <p className="text-base leading-6 text-gray-800 underline underline-offset-2">
                    {speaker.country}
                  </p>
                </motion.li>
              ))}
        </ul>
      </div>
    </div>
  );
}

