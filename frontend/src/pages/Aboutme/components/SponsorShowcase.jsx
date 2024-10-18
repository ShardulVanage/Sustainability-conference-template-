import React from "react";
import { motion } from "framer-motion";

const SponsorShowcase = () => {
  const sponsors = [
    {
      name: "GreenTech",
      logo: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851537/pather%20logo/mh9motuym8f1arxtpuo9.png",
    },
    {
      name: "EcoInnovate",
      logo: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/q5dipjuspnolhmo89ice.png",
    },
    {
      name: "SustainableFuture",
      logo: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/itr0sezg2mkyt0noyfvl.png",
    },
    {
      name: "CleanEnergy",
      logo: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/mrr8gerkfpxbtyh5zf6j.png",
    },
    {
      name: "EarthAlliance",
      logo: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/hrw6gvrtobrrqo0wjccf.png",
    },
  ];

  return (
    <div className="mx-auto  max-w-7xl  sm:px-6 lg:px-8 py-12">
      <motion.div
        className="relative isolate overflow-hidden bg-green-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Our Esteemed Partners in Sustainability
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-100">
          We're proud to collaborate with leading organizations committed to
          driving sustainable development and environmental stewardship.
          Together, we're shaping a greener future.
        </p>
        <motion.div
          className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.img
              key={sponsor.name}
              className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0"
              src={sponsor.logo}
              alt={sponsor.name}
              width={158}
              height={48}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </motion.div>
        <div
          className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-green-500 to-green-700 opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SponsorShowcase;
