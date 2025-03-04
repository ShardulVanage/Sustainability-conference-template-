"use client"

import { motion, AnimatePresence } from "framer-motion"


  

export default function ImageModal({ isOpen, onClose, imageUrl }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          className="relative max-w-4xl w-full h-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute -top-10 right-0 text-white hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img
            src={imageUrl || "/placeholder.svg"}
            alt="PASUC Advisory Letter"
            className="w-full h-screen  object-contain rounded-lg shadow-xl"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

