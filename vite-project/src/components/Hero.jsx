"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { IconCalendarMonth, IconMapPin } from "@tabler/icons-react"
import gsap from "gsap"
import Banner from "./Banner"
// Import a static globe image instead of 3D model
import globeImage from "../assets/globe.png" // Use the existing image or replace with a suitable one

// Countdown timer component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const conferenceDate = new Date("March 21, 2025 00:00:00").getTime()
      const now = new Date().getTime()
      const difference = conferenceDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center pt-4 w-full bg-[#F5F7F2]">
      <h2 className="text-3xl font-bold text-green-700 mb-2">Conference Starts In:</h2>
      <div className="flex space-x-4 text-center sm:scale-100 scale-90">
        <div className="flex flex-col items-center ">
          <div className="bg-green-600 text-white rounded-lg w-20 h-20 flex items-center justify-center text-4xl font-bold">
            {timeLeft.days}
          </div>
          <span className="text-sm mt-1 text-green-700 font-medium">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-green-600 text-white rounded-lg w-20 h-20 flex items-center justify-center text-4xl font-bold">
            {timeLeft.hours}
          </div>
          <span className="text-sm mt-1 text-green-700 font-medium">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-green-600 text-white rounded-lg w-20 h-20 flex items-center justify-center text-4xl font-bold">
            {timeLeft.minutes}
          </div>
          <span className="text-sm mt-1 text-green-700 font-medium">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-green-600 text-white rounded-lg w-20 h-20 flex items-center justify-center text-4xl font-bold">
            {timeLeft.seconds}
          </div>
          <span className="text-sm mt-1 text-green-700 font-medium">Seconds</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set isLoaded to true immediately since we're using a static image
    setIsLoaded(true)
    
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(heroRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
        })
      }, heroRef)

      return () => ctx.revert()
    }
  }, [])

  return (
    <>
      <Banner />
      <CountdownTimer />
      <div
        ref={heroRef}
        className="sm:h-full w-full flex flex-col-reverse lg:flex-row items-center justify-center mx-auto bg-[#F5F7F2] p-6 pt-18 sm:px-24"
        style={{ position: "relative" }}
      >
        <div className="space-y-6 mb-12 lg:mb-0">
          <div className="flex items-center gap-1">
            <img src="./singleLogo.svg" className="h-20 w-20 drop-shadow-lg" alt="" />
            <br />
            <h1 className="font-bold font-sans text-3xl bg-gradient-to-r from-emerald-500 to-lime-500 text-transparent bg-clip-text drop-shadow-lg">
              ICSIFT
            </h1>
          </div>
          <motion.h1
            className="text-3xl lg:text-5xl font-bold text-[#2E8B57] max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            International Conference on Sustainability, Innovation and Future Technologies
          </motion.h1>
          <motion.p
            className="sm:text-xl text-base text-[#333333] max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join us to shape a greener future. Explore sustainable technologies and future-focused research at our
            conference, connecting academics, professionals, and innovators.
          </motion.p>
          <div>
            <h1 className="text-2xl font-bold text-green-700">Hybrid conference</h1>
            <p className="font-medium text-xl">
              Take your time at the Conference. Attend in person in Philippines <br /> or Participate virtually from any
              location.
            </p>
          </div>
          <div className="flex flex-row gap-5 items-center ">
            <motion.p
              className="text-xl text-green-600 max-w-2xl font-mono inline-flex drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <IconMapPin className="text-green-900 mr-2" />
              Manila, Philippines
            </motion.p>

            <motion.p
              className="text-xl text-green-600 max-w-2xl font-mono inline-flex drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <IconCalendarMonth className="text-green-800 mr-2" />
              March 21st - 23rd, 2025
            </motion.p>
          </div>
          <div className="flex sm:flex-row flex-col-reverse items-start sm:items-center justify-start gap-3 px-4">
            <img
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1728043047/yqhbu4xrrwcab48qtpfw.png"
              alt=""
              className="h-12 drop-shadow-lg"
            />
            <img
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1728043732/dpwtq9cenauyctsvd9vg.png"
              alt=""
              className="h-12 drop-shadow-lg"
            />
            <img
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1729260387/erph7fml9unxiowlmrmg.png"
              alt=""
              className="h-12 drop-shadow-lg"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 ml-4">
            <a href="/pricing">
              <motion.button
                className="bg-[#2E8B57] hover:bg-[#236B43] text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.button>
            </a>
            <a href="/submission">
              <motion.button
                className="border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white border-2 font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit your Paper
              </motion.button>
            </a>
            <a href="#">
              <motion.button
                className="border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white border-2 font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </a>
          </div>
          <div>
            <div className="flex flex-row gap-3 items-start border-t-2 border-b-2 border-[#2E8B57] py-2 max-w-xl rounded-2xl">
              <img
                className="h-24"
                src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1741338963/zhyvctczmzjcmrzbml4u.png"
              />
              <div className="flex justify-start items-start flex-col gap-2">
                <h1 className="text-lg font-bold">Endorsed by PASUC</h1>
                <p>Philippine Association of State Universities and Colleges (PASUC)</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Replaced 3D globe with static image */}
        <div className="lg:w- h-[400px] lg:h-[750px] flex flex-col items-center justify-center py-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <img 
              src='/glob.png' 
              alt="Sustainable Globe" 
              className="w-full h-full  max-w-lg mx-auto drop-shadow-2xl rounded-full"
            />
            {/* Optional animation overlay to simulate rotation */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 rounded-full"
              animate={{ 
                x: [0, 100, 0], 
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}