import React from "react";
import { motion } from "framer-motion";

const people = [
  {
    name: "Dr. Emily Green",
    role: "Keynote Speaker",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747023/pather%20logo/g6o2riwdeghed8rw8jr1.jpg",
  },
  {
    name: "Prof. Michael Rivers",
    role: "Panel Moderator",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747074/pather%20logo/lfwclyhudaxhntxmnt59.jpg",
  },
  {
    name: "Dr. Sarah Woods",
    role: "Workshop Leader",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747111/pather%20logo/wpp20uugpj4gegwaxqit.jpg",
  },
  {
    name: "Dr. Alex Turner",
    role: "Research Presenter",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747142/pather%20logo/e4zln7v0g3nrh0vs92qd.jpg",
  },
  {
    name: "Prof. Lisa Chen",
    role: "Sustainability Expert",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747171/pather%20logo/pagmkfmpwxmpa8szlvcy.jpg",
  },
  {
    name: "Dr. James Carter",
    role: "Policy Advisor",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851535/pather%20logo/afcvjzohrxc4gnuii3yc.png",
  },
  {
    name: "Dr. Emily Green",
    role: "Keynote Speaker",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851537/pather%20logo/an4uoqfpuhitlpzc1myq.png",
  },
  {
    name: "Prof. Michael Rivers",
    role: "Panel Moderator",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/itr0sezg2mkyt0noyfvl.png",
  },
];

export default function IACommittee() {
  return (
    <div className="bg-green-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto   lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl text-center">
            Co-organizers
          </h2>
          <p className="mt-6 text-lg  sm:px-12 text-center leading-8 text-gray-700">
            Meet our distinguished organizers and experts who are at the
            forefront of sustainable development. They bring a wealth of
            knowledge and innovative ideas to address global environmental
            challenges.
          </p>
        </motion.div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-4"
        >
          {people.map((person, index) => (
            <motion.li
              key={person.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                className="mx-auto h-24 w-24 rounded-full"
                src={person.imageUrl}
                alt={person.name}
              />
              {/* <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-green-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p> */}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
