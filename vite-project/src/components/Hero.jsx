import React, { useRef, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, useAnimations, Html, useProgress } from '@react-three/drei'
import gsap from 'gsap'
import { IconCalendar, IconCalendarMonth, IconMapPin } from '@tabler/icons-react'

const modelUrl = "https://x2snc74empmudc1y.public.blob.vercel-storage.com/sustainable_globe-8BARwuw5tB7FGEeO9nQVxYWGbhIP1M.glb"

function Model() {
  const group = useRef()
  const { scene, animations } = useGLTF(modelUrl)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions.whater) {
      actions.whater.play()
    } else if (actions.whaterAction) {
      actions.whaterAction.play()
    }
  }, [actions])

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1
    }
  })

  return <primitive ref={group} object={scene} />
}

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center  sm:h-[500px] sm:w-[500px]  h-[200px] w-[200px]">
        <img 
          src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1727417876/mv9rbankxtlmfzefnhp8.png" 
          alt="Loading" 
          className=" mb-4"
        />
        
      </div>
    </Html>
  )
}

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (  
    <div ref={heroRef} className="sm:h-full w-full flex flex-col-reverse lg:flex-row items-center justify-center mx-auto bg-gradient-to-tr from-green-50 to-blue-50 p-6  px-24">
      <div className="space-y-6 mb-12 lg:mb-0">
        <motion.h1 
          className="text-4xl lg:text-6xl font-bold text-green-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Innovate Today, <br />Sustain Tomorrow
        </motion.h1>
        <motion.p 
          className="text-xl text-green-700 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join us in shaping a greener future for our planet, and explore the latest advancements in sustainable technologies and future-focused research.
          This conference serves as a dynamic platform where academics, industry professionals, and innovators converge to explore the latest advancements in sustainable technologies and future-focused research. 
        </motion.p>

        <div className='flex flex-row gap-5 items-center'>
        <motion.p
          className="text-xl text-green-800 max-w-2xl font-mono inline-flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
         <IconMapPin className='text-green-800 mr-2' />Manila, Philippines 
        </motion.p>

        <motion.p
          className="text-xl text-green-800 max-w-2xl font-mono inline-flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
            <IconCalendarMonth className='text-green-800 mr-2 '/>
          February 27th-28th, 2024
        </motion.p>
         </div>
        <motion.button 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.button>
      </div>
      <div className="lg:w-1/2 h-[400px] lg:h-[600px]  ">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Suspense fallback={<Loader />}>
            <Model />
          </Suspense>
          <OrbitControls enableZoom={false} />
          <Environment preset="forest" />
        </Canvas>
      </div>
    </div>
  )
}

useGLTF.preload(modelUrl)