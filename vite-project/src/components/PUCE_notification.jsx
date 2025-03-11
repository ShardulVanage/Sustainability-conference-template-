"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ImageModal from "./ui/ImageModal"

export default function PUCENotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  const letterImageUrl =
    "/letter.jpg"

  useEffect(() => {
    // Show notification after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    // Store in localStorage to prevent showing again in this session
    localStorage.setItem("conferenceNotificationDismissed", "true")
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <ImageModal isOpen={isImageModalOpen} onClose={() => setIsImageModalOpen(false)} imageUrl={letterImageUrl} />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-4 left-4 z-40 sm:max-w-md max-w-xs"
            initial={{ opacity: 0, y: 50, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg border-2 border-green-600 shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-400 to-teal-600 text-white p-4 pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-white text-green-700 rounded-full mb-2">
                      PASUC Endorsed!!
                    </span>
                    <h3 className="font-bold text-lg leading-tight">
                      International Conference on Sustainability, Innovation, and Future Technologies
                    </h3>
                  </div>
                  <button
                    className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-green-500 text-white"
                    onClick={handleDismiss}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                </div>
              </div>

              {/* Content - Now with fixed height and scrollable */}
              <div className="p-4 pt-3 max-h-[400px] overflow-y-auto">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span className="text-sm font-medium">March 21-23, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="text-sm">PCU, Taft Avenue, Manila (Hybrid Setup)</span>
                  </div>

                  <div className="mt-2 py-2 px-3 bg-green-100 rounded-md border border-green-200 text-green-800 font-medium text-sm">
                    Hurry up and book your slot!
                  </div>

                  {/* Letter Image */}
                  <div className="mt-4 mb-4">
                    <button
                      onClick={() => setIsImageModalOpen(true)}
                      className="w-full overflow-hidden rounded-lg border-2 border-gray-200 hover:border-green-500 transition-colors"
                    >
                      <img
                        src={letterImageUrl || "/placeholder.svg"}
                        alt="PASUC Advisory Letter"
                        className="w-full h-auto hover:opacity-90 transition-opacity"
                      />
                    </button>
                    <p className="text-xs text-center mt-2 text-gray-500">Click to view full letter</p>
                  </div>

                  <AnimatePresence>
                 
                      <motion.div
                        className="space-y-2 pt-2 border-t mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-sm text-gray-600">
                          ICSIFT 2025 aims to engage in discussions and identify how sustainability, technological
                          innovation, and industrial futures intersect. Gathering experts to speak on innovative
                          research and eco-friendly solutions.
                        </p>

                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-600"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span className="text-sm">
                            Paper submissions due: <span className="font-medium">March 15th, 2025</span>
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-600"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                          <a
                            href="https://www.icsift.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-green-600 hover:underline"
                          >
                            www.icsift.com
                          </a>
                        </div>

                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-600"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                          <a href="mailto:info@icsift.com" className="text-sm text-green-600 hover:underline">
                            info@icsift.com
                          </a>
                        </div>

                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-600"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                          <span className="text-sm">+91 8260080050</span>
                        </div>
                      </motion.div>
                   
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer */}
              <div className="p-3 pt-0 flex justify-between bg-white">
                {/* <button
                  className="px-3 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={toggleExpand}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button> */}
                <button
                  className="px-3 py-2 text-xs bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors mt-1"
                  onClick={() => window.open("https://www.icsift.com/pricing", "_blank")}
                >
                  Register Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

