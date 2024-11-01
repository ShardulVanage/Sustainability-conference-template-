import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    name: "Early bird registration deadline",
    description:
      "Submit your research papers on sustainable development and green technologies.",
    date: "December 23rd",
    dateTime: "2024-12",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    name: "Abstract submission deadline",
    description:
      "Register using our paperless system and receive a virtual conference kit.",
    date: " January 9th",
    dateTime: "2025-01",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
  },
  {
    name: "Full paper submission Deadline",
    description:
      "Selected papers will be featured in our special Green Innovation Showcase.",
    date: " January 25th",
    dateTime: "2025-01",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
  {
    name: "Registration Deadline",
    description:
      "Join us for three days of insights on sustainable development and networking.",
    date: " February 10th",
    dateTime: "2025-02",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pb-8"
    >
      <div className="relative flex items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          className="flex h-8 sm:h-12 w-12 items-center justify-center rounded-full bg-green-600 shadow-md"
        >
          <div className="text-white">{item.icon}</div>
        </motion.div>
        <div className="ml-4 flex flex-col">
          <time
            dateTime={item.dateTime}
            className="text-sm font-semibold text-green-600"
          >
            {item.date}
          </time>
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <p className="mt-1 text-sm text-gray-600">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SustainableConferenceTimeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(timelineRef.current, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        scaleY: 0,
        transformOrigin: "top",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-green-50 py-12 sm:py-24">
      <div className="mx-auto w-full sm:max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-5xl text-center">
            {" "}
            Conference Important Dates
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text text-center">
            Join us in our journey towards a greener future. Stay updated with
            our eco-friendly conference schedule and important milestones.
          </p>

          <div className="flex flex-col-reverse sm:flex-row justify-center items-center ">
            <div className="mt-10 relative inline-flex">
              <div>
                <div
                  ref={timelineRef}
                  className="absolute left-6 top-5 -bottom-5 w-0.5 bg-green-600"
                />
                {timeline.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
            <div className="p-12 ">
              <img
                src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1727704271/omemilntm5r9zs3qzaw1.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-4  pt-12">
          <a
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-sm sm:text-sm text-center"
            href="/Schedule"
          >
            Get all Day Schedule
          </a>
        </div>
      </div>
    </div>
  );
}
