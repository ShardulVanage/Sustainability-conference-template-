import { CheckIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const includedFeatures = [
  "Access to all keynote speeches",
  "Sustainable catering throughout the event",
  "Networking sessions with industry leaders",
  "Carbon-neutral attendance certificate",
];
function StudentPass() {
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
    <motion.div
      ref={pricingCardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 bg-white ring-green-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
    >
      <div className="p-8 sm:p-10 lg:flex-auto  ">
        <h3 className="text-2xl font-bold tracking-tight text-green-900">
          for Student
        </h3>
        <p className="mt-6 text-base leading-7 text-gray-900">
          Immerse yourself in three days of inspiring talks, workshops, and
          networking events. All focused on creating a more sustainable world
          through innovation and collaboration.
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-green-800">
            What's included
          </h4>
          <div className="h-px flex-auto bg-green-700" />
        </div>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-900 sm:grid-cols-2 sm:gap-6"
        >
          {includedFeatures.map((feature, index) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-x-3"
            >
              <CheckIcon
                aria-hidden="true"
                className="h-6 w-5 flex-none text-green-950"
              />
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
        <div className="rounded-2xl bg-green-50 py-10 text-center ring-1 ring-inset ring-green-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-green-900">
              Invest in our planet's future
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                $459
              </span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-green-800">
                USD
              </span>
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Register Now
            </motion.a>
            <p className="mt-6 text-xs leading-5 text-gray-900">
              5% of your fee goes directly to reforestation projects
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default StudentPass;
