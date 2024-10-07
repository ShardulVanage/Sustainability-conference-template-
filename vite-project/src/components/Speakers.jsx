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
      bio: "Dr. Jane Smith is a renowned AI Ethics Researcher with over 15 years of experience in the field. She has published numerous papers on the ethical implications of artificial intelligence and machine learning.",
    },
    {
      name: "Prof. John Doe",
      role: "Quantum Computing Expert",
      image:
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Prof. John Doe is a leading expert in Quantum Computing, known for his groundbreaking work in quantum algorithms and their applications in cryptography.",
    },
    {
      name: "Prof. John Doe2",
      role: "Quantum Computing Expert",
      image:
        "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Prof. John Doe2 is another prominent figure in Quantum Computing, focusing on the development of quantum error correction techniques and fault-tolerant quantum computation.",
    },
  ],
  keynote: [
    {
      name: "Dr. Emily Johnson",
      role: "Climate Scientist",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Dr. Emily Johnson is a leading climate scientist who has made significant contributions to our understanding of global climate patterns and their impact on ecosystems.",
    },
    {
      name: "Dr. Michael Chen",
      role: "Renewable Energy Innovator",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Dr. Michael Chen is a pioneering researcher in renewable energy technologies, with a focus on improving the efficiency of solar cells and developing new energy storage solutions.",
    },
  ],
  chair: [
    {
      name: "Prof. Sarah Williams",
      role: "Sustainability Policy Expert",
      image:
        "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Prof. Sarah Williams is a respected authority on sustainability policy, advising governments and organizations on implementing effective environmental protection measures.",
    },
  ],
  "co-chair": [
    {
      name: "Dr. Robert Lee",
      role: "Green Technology Researcher",
      image:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Dr. Robert Lee is at the forefront of green technology research, developing innovative solutions for reducing carbon emissions in industrial processes.",
    },
  ],
  session: [
    {
      name: "Dr. Lisa Garcia",
      role: "Circular Economy Specialist",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Dr. Lisa Garcia is a leading expert in circular economy principles, working to transform industrial processes and consumer behavior to minimize waste and maximize resource efficiency.",
    },
    {
      name: "Prof. David Kim",
      role: "Sustainable Agriculture Expert",
      image:
        "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Prof. David Kim is renowned for his work in sustainable agriculture, developing methods to increase crop yields while reducing environmental impact and preserving biodiversity.",
    },
  ],
};

const SpeakerCard = ({ name, role, image, bio, onMoreInfo }) => (
  <motion.div
    className="bg-green-50 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
    whileHover={{ y: -5 }}
  >
    <img src={image} alt={name} className="w-full h-72 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-green-800">{name}</h3>
      <p className="text-green-600">{role}</p>
      <button
        onClick={() => onMoreInfo({ name, role, image, bio })}
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-300"
      >
        More info
      </button>
    </div>
  </motion.div>
);

const Drawer = ({ isOpen, onClose, speaker }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-40"
          onClick={onClose}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-lg z-50 overflow-y-auto"
        >
          <div className="p-6 flex flex-col h-full">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close drawer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              {speaker.name}
            </h2>
            <h3 className="text-xl text-green-600 mb-4">{speaker.role}</h3>
            <p className="text-gray-700 flex-grow">{speaker.bio}</p>
            <button
              onClick={onClose}
              className="mt-6 w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export default function SpeakerSection() {
  const [activeCategory, setActiveCategory] = useState("guest");
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMoreInfo = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

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
              <SpeakerCard {...speaker} onMoreInfo={handleMoreInfo} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        speaker={selectedSpeaker}
      />
    </div>
  );
}
