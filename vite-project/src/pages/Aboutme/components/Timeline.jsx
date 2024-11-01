import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    name: "Early brird registration deadline",
    description:
      "Submit your research on sustainable development innovations and practices.",
    date: "Dec 23rd",
    dateTime: "2024-01",
  },
  {
    name: "Abstract submission deadline",
    description:
      "Register early to secure your spot and enjoy discounted rates.",
    date: "Jan 9th",
    dateTime: "2024-03",
  },
  {
    name: "Full paper submission deadline",
    description: "Participate in hands-on workshops led by industry experts.",
    date: " Jan 25th",
    dateTime: "2025-05",
  },
  {
    name: "Registration deadline",
    description:
      "Join us for keynote speeches, panel discussions, and networking events.",
    date: " Feb 10th",
    dateTime: "2025-06",
  },
];

const ConferenceTimeline = () => {
  return (
    <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8 py-24">
      <motion.div
        className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {timeline.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <time
              dateTime={item.dateTime}
              className="flex items-center text-sm font-semibold leading-6 text-gray-600"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg>
              {item.date}
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-green-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-green-800">
              {item.name}
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ConferenceTimeline;
