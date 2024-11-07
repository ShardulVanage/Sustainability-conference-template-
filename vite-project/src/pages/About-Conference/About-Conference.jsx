"use client";

import { motion } from "framer-motion";
import HeadingSection from "../Header";

export default function AboutConference() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <HeadingSection />
      <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.h1
            className="text-4xl font-bold text-green-800 mb-8 text-center"
            variants={fadeIn}
          >
            About the Conference - ICSIFT 2025
          </motion.h1>

          <motion.section
            className="bg-white rounded-lg shadow-md p-6 mb-8"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The International Conference on Sustainability, Innovation, and
              Future Technologies 2025, taking place in the vibrant city of
              Manila, Philippines, aims to engage in discussions and identify
              how and where sustainability, technological innovation, and
              industrial futures intersect. From 21 to 23 March 2025, ICSIFT
              will gather experts from every sphere to speak on innovative
              research, eco-friendly solutions, and technological advancement.
              The conference involves keynote addresses, panels, and practical
              workshops to advance knowledge and start partnerships to promote
              sustainable development. With an emphasis on practical, scalable
              solutions and forward-thinking research, ICSIFT 2025 promises to
              be an inspiring showcase of how new technologies are going to
              drive a more sustainable future for our planet.
            </p>
          </motion.section>

          <motion.section
            className="bg-white rounded-lg shadow-md p-6 mb-8"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Why Attend This Conference
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ICSIFT 2025 gives you a great chance to be part of an
              international discussion on sustainability and innovation. By
              attending this conference, you will receive access to the insights
              that outline the very latest advancements in green technologies,
              sustainable practices, and forward-thinking research. You will get
              the chance to hear from some of the greatest minds in new
              environmental and technological thinking, innovation, and research
              at the forefront of positive change. You'll not only have the
              breadth of knowledge but also see doors open to collaboration,
              networking, and partnerships that could help execute sustainable
              solutions in your work or organization. This is one of the most
              critical events for someone interested in developing a greener and
              more sustainable future.
            </p>
          </motion.section>

          <motion.section
            className="bg-white rounded-lg shadow-md p-6"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Who can attend this Conference?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ICSIFT 2025 is suitable for a wide range of professionals and
              scholars conducting research towards sustainability and
              innovation. Researchers, scientists, and students working in
              environmental studies, renewable energy, technology, engineering,
              and sustainability will benefit from this conference stream.
              Professionals and experts from clean energy, technology, and
              engineering sectors, in addition to government and policymaking
              representatives, concerned with the sustainability agenda, are
              also invited. Whether an academic searching for sources of
              inspiration for new research or a businessman seeking a sound base
              to introduce sustainable practices, an international collaborative
              space for sharing ideas and exchanging knowledge and for building
              together towards a sustainable future is what ICSIFT 2025 offers.
            </p>
          </motion.section>

          <motion.div className="mt-8 text-center" variants={fadeIn}>
            <a
              href="/pricing"
              className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Register Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
