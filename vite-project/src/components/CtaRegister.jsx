

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function CtaRegister() {
  const leafRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.to(leafRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear"
    })

    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
  }, [])

  return (
    <div className="py-24 flex items-center justify-center bg-green-700 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full relative overflow-hidden"
      >
        <div ref={leafRef} className="absolute -top-16 -right-16 text-green-300 opacity-30">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-48 h-48">
            <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
          </svg>
        </div>

        <h2   className="text-4xl  font-bold text-green-800 mb-4">
          Join the Green Revolution
        </h2>

        <p className="text-green-700 mb-6">
          Be part of the change at the International Conference on Sustainable Development. 
          Together, we can build a greener future!
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-6"
        >
          <a
            href="#register"
            className="block w-full py-3 px-6 text-center text-white font-semibold bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Register Now
          </a>
        </motion.div>

        <div className="flex justify-between text-sm text-green-600">
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            🌍 100% Carbon Neutral Event
          </motion.p>
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            🌱 Plant a Tree with Every Registration
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}