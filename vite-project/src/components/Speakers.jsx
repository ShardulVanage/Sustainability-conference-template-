import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pb } from "../libs/pocketbase";

const speakerCategories = [
  { id: "guest", title: "Guest Speaker" },
  { id: "keynote", title: "Keynote Speaker" },
  { id: "chair", title: "Conference Chair" },
  { id: "co-chair", title: "Conference Co-Chair" },
  { id: "session", title: "Session Chair" },
];

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
  const [speakers, setSpeakers] = useState({});

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const records = await pb.collection('speakers').getFullList({
          sort: '-created',
            $autoCancel: false,
        });
        const groupedSpeakers = records.reduce((acc, speaker) => {
          if (!acc[speaker.category]) {
            acc[speaker.category] = [];
          }
          acc[speaker.category].push(speaker);
          return acc;
        }, {});
        setSpeakers(groupedSpeakers);
      } catch (error) {
        console.error('Error fetching speakers:', error);
      }
    };

    fetchSpeakers();
  }, []);

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
          {speakers[activeCategory]?.map((speaker, index) => (
            <motion.div
              key={speaker.id}
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

