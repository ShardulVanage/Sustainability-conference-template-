import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const speakerCategories = [
  { id: "guest", title: "Guest Speaker" },
  { id: "keynote", title: "Keynote Speaker" },
  { id: "chair", title: "Conference Chair" },
  { id: "co-chair", title: "Conference Co-Chair" },
  { id: "session", title: "Session Chair" },
];

const speakers = {
  guest: [
    {
      name: "Dr. Jane Smith",
      role: "AI Ethics Researcher",
      image:
        "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Prof. John Doe",
      role: "Quantum Computing Expert",
      image:
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Prof. John Doe2",
      role: "Quantum Computing Expert",
      image:
        "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  keynote: [
    {
      name: "Dr. Emily Johnson",
      role: "Climate Scientist",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dr. Michael Chen",
      role: "Renewable Energy Innovator",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  chair: [
    {
      name: "Prof. Sarah Williams",
      role: "Sustainability Policy Expert",
      image:
        "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  "co-chair": [
    {
      name: "Dr. Robert Lee",
      role: "Green Technology Researcher",
      image:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  session: [
    {
      name: "Dr. Lisa Garcia",
      role: "Circular Economy Specialist",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Prof. David Kim",
      role: "Sustainable Agriculture Expert",
      image:
        "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

const SpeakerCard = ({ name, role, image }) => (
  <motion.div
    className="bg-green-50 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
    whileHover={{ y: -5 }}
  >
    <img src={image} alt={name} className="w-full h-96  object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-green-800">{name}</h3>
      <p className="text-green-600">{role}</p>
    </div>
  </motion.div>
);

export default function SpeakerSection() {
  const [activeCategory, setActiveCategory] = useState("guest");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-8">
        Our Speakers
      </h2>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {speakerCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-green-600 text-white shadow-md"
                : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {speakers[activeCategory].map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <SpeakerCard {...speaker} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
