import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";

const speakers = [
  {
    name: "Dr. Emily Green",
    role: "Environmental Scientist",
    imageUrl:
      "https://drive.google.com/file/d/1hTRGiHhYNwBvW2JT1Md_r63GV77f8ErM/view",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Prof. Michael Rivers",
    role: "Sustainable Energy Expert",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Dr. Sarah Woods",
    role: "Climate Policy Advisor",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  
];

export default function OrganizingCommittee({committee}) {
  return (
    <>
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
            {/* <p className="mt-4 text-lg leading-8 text-green-600">
            Renowned experts driving innovation in sustainable development and
            environmental conservation.
            </p> */}
          </motion.div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {committee.map((speaker, index) => (
              <motion.li
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  className="mx-auto h-56 w-56 rounded-full drop-shadow-sm bg-white"
                  src={speaker.img}
                  alt={speaker.name}
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-green-900">
                  {speaker.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  {speaker.designation}
                </p>
                <p className="text-base leading-6 text-gray-800 underline underline-offset-2">{speaker.country}</p>
                <p className="px-4 ">
                  {speaker.details}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
