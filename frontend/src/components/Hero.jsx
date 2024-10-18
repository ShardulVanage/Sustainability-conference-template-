import Gmodel from "../assets/sustainable_globe.glb";
import React, { useRef, useEffect, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  useAnimations,
  Html,
  useProgress,
} from "@react-three/drei";
import gsap from "gsap";
import { IconCalendarMonth, IconMapPin } from "@tabler/icons-react";
import modelimg from "../assets/globe.png";

const modelUrl = Gmodel;

const Model = React.memo(function Model() {
  const group = useRef();
  const { scene, animations } = useGLTF(modelUrl);
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  useEffect(() => {
    if (actions?.whater) {
      actions.whater.play();
    } else if (actions?.whaterAction) {
      actions.whaterAction.play();
    }
  }, [actions]);

  return <primitive ref={group} object={scene} />;
});

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center h-1/2 w-screen">
        <img src={modelimg} alt="Loading" className="sm:w-3/5 select-none" />
        <p className="text-white mt-4">Loading: {progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (heroRef.current && isLoaded) {
      const ctx = gsap.context(() => {
        gsap.from(heroRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
        });
      }, heroRef);

      return () => ctx.revert();
    }
  }, [isLoaded]);

  return (
    <div
      ref={heroRef}
      className="sm:h-full w-full flex flex-col-reverse lg:flex-row items-center justify-center mx-auto bg-gradient-to-r from-emerald-500 to-lime-300 p-6 py-36 sm:px-24"
      style={{ position: "relative" }}
    >
      <div className="space-y-6 mb-12 lg:mb-0">
        <div className="flex flex-row items-center gap-1">
          {/* <img
            src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726731577/il2wr5yxd2w1sarnj3it.svg"
            className="sm:h-20 h-12"
            alt=""
          /> */}
          <h1 className="text-xl lg:text-3xl font-bold text-white max-w-3xl">
            icsift -{" "}
            <span className="text-base">by Coreresearch Private limited</span>
          </h1>
        </div>
        <motion.h1
          className="text-3xl lg:text-5xl font-bold text-green-50 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          International Conference on Sustainability, Innovation and Future
          Technologies
        </motion.h1>
        <motion.p
          className="sm:text-xl text-base text-green-100 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join us to shape a greener future. Explore sustainable technologies
          and future-focused research at our conference, connecting academics,
          professionals, and innovators.
        </motion.p>

        <div className="flex flex-row gap-5 items-center">
          <motion.p
            className="text-xl text-green-100 max-w-2xl font-mono inline-flex drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <IconMapPin className="text-green-900 mr-2" />
            Manila, Philippines
          </motion.p>

          <motion.p
            className="text-xl text-green-100 max-w-2xl font-mono inline-flex drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <IconCalendarMonth className="text-green-800 mr-2" />
            February 27th-28th, 2025
          </motion.p>
        </div>
        <div className="flex flex-row items-center justify-start gap-3 px-4">
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
            src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1728886962/hvzsycdbkdnjry9bnsiw.png"
            alt=""
            className="h-28 drop-shadow-lg"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-start gap-3">
          <a href="/pricing">
            <motion.button
              className="bg-green-900 mt-4 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
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
              className="bg-green-900 mt-4 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
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
              className="bg-green-900 mt-4 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
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
      </div>
      <div className="lg:w-1/2 h-[400px] lg:h-[550px]">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          onCreated={() => setIsLoaded(true)}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Suspense fallback={<Loader />}>
            <Model />
          </Suspense>
          <OrbitControls
            enableRotate={true} // Changed to true to allow rotation
            minPolarAngle={Math.PI / 4} // Limit vertical rotation (optional)
            maxPolarAngle={Math.PI / 1.5} // Limit vertical rotation (optional)
            rotateSpeed={0.5}
            enableZoom={false}
            p
          />
          <Environment preset="forest" />
        </Canvas>
      </div>
    </div>
  );
}

useGLTF.preload(modelUrl);
