import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Award,
  GraduationCap,
  BookOpen,
  Briefcase,
  Globe,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Users, value: "200+", label: "Participants" },
  { icon: Award, value: "15+", label: "Awards" },
  { icon: GraduationCap, value: "55+", label: "Certified Academicians" },
  { icon: BookOpen, value: "125+", label: "Research Scholars" },
  { icon: Briefcase, value: "10+", label: "Industrial Professionals" },
  { icon: Globe, value: "10+", label: "Participating Countries" },
];

export default function StatsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll(".stat-item"),
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
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex justify-start items-start bg-[#F5F7F2] p-6 pb-12 "
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-green-800 mb-12"
        ></motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center mb-2 ">
                <stat.icon className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-center text-green-700 mb-2">
                {stat.value}
              </h3>
              <p className="text-lg text-center text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
