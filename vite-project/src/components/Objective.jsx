import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const objectives = [
  {
    id: 1,
    title: "Promote Knowledge Exchange",
    description: " Facilitate discussions and share insights on the latest research and advancements in sustainability and technology"
  },
  {
    id: 2,
    title: "Foster Collaboration",
    description: "Build partnerships between academics, industry professionals, and researchers to drive innovative solutions"
  },
]

const objectives2 = [
  {
    id: 1,
    title: "Support Sustainable Practices",
    description: "Encourage the adoption of sustainable practices and technologies across various sectors."
  },
  {
    id: 2,
    title: "Enhance Research Visibility",
    description: "Provide a platform for researchers to present their work and gain recognition in their fields."
  },
]




const images = [
  "/placeholder.svg?height=400&width=600",
  
]

export default function ObjectivesSection() {
  const controls = useAnimation()
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    gsap.fromTo(
      section.querySelectorAll('.objective-item'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    )

    gsap.fromTo(
      section.querySelectorAll('.image-item'),
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    )

    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <section ref={sectionRef} className="py-16 bg-green-700 ">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          className="text-5xl font-bold text-center text-green-50 mb-12"
        >
          Objectives of the Conference
        </motion.h2>
        <div className="flex flex-col lg:flex-row  justify-center items-center">
          <div className="lg:w-1/3 space-y-6">
           
            <motion.img
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1727426946/gfiqhcmd3uhuypyttpmd.png"
              alt="Zep Research Conference"
              className="rounded-lg   object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
              
           
          </div>
          <div className="lg:w-1/3 space-y-6">
            {objectives.map((objective) => (
              <motion.div
                key={objective.id}
                className="objective-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-2xl font-bold text-green-800 mb-3">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </div>


        <div className="flex flex-col lg:flex-row-reverse  justify-evenly items-center pt-8">
          <div className="lg:w-1/3 space-y-6">
           
              
               <motion.img
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1727426821/fm0vtskqjs2ospykg4hl.png"
              alt="Zep Research Conference"
              className="rounded-lg   object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
           
          </div>
          <div className="lg:w-1/3 space-y-6">
            {objectives2.map((objective) => (
              <motion.div
                key={objective.id}
                className="objective-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-2xl font-bold text-green-800 mb-3">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
        className="objective-item bg-white px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 sm:w-3/6 justify-end items-end mx-auto mt-8 sm:text-center"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        >
            <h3 className="text-2xl font-bold text-green-800 mb-3">Encourage Multidisciplinary Approaches</h3>
            <p className="text-gray-600">Explore the intersection of sustainability and innovation through diverse perspectives and expertise</p>
        </motion.div>
      </div>
    </section>
  )
}