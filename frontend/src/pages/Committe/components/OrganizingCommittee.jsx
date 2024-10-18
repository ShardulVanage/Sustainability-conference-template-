import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";

const speakers = [
  {
    name: "Dr. Emily Green",
    role: "Environmental Scientist",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
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

export default function OrganizingCommittee() {
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
            {speakers.map((speaker, index) => (
              <motion.li
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  className="mx-auto h-56 w-56 rounded-full"
                  src={speaker.imageUrl}
                  alt={speaker.name}
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-green-900">
                  {speaker.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  {speaker.role}
                </p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a
                      href={speaker.twitterUrl}
                      className="text-green-400 hover:text-green-500"
                    >
                      <span className="sr-only">Twitter</span>
                      <Twitter className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={speaker.linkedinUrl}
                      className="text-green-400 hover:text-green-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
