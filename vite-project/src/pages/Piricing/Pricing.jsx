import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NormalPass from "./components/NormalPass";
import DarkHeadingSection from "../DarkHeader";
import StudentPass from "./components/StudentPass";
import RegistrationProcess from "./components/Process";
import CancleCTA from "./components/canclepolicy";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const pricingCardRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const pricingCard = pricingCardRef.current;

    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      description,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      pricingCard,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <DarkHeadingSection />
      <div ref={sectionRef} className="bg-green-950 py-12  sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl sm:text-center"
          >
            <h2
              ref={titleRef}
              className="text-3xl font-bold tracking-tight text-green-300 sm:text-5xl"
            >
              Join the Sustainable Future Conference
            </h2>
            <p
              ref={descriptionRef}
              className="mt-6 text-lg leading-8 text-gray-100"
            >
              Be part of the change. Our conference brings together thought
              leaders, innovators, and changemakers to shape a more sustainable
              future. Your attendance makes a difference.
            </p>
          </motion.div>
          <NormalPass />
          <StudentPass />
          <CancleCTA />
          <RegistrationProcess />
        </div>
      </div>
    </>
  );
}
