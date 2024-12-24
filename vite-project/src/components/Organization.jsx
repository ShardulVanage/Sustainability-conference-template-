import React from "react";
import { motion } from "framer-motion";
const people = [
  {
    name: "Dr. Emily Green",
    role: "Keynote Speaker",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747023/pather%20logo/g6o2riwdeghed8rw8jr1.jpg",
  },
  {
    name: "Prof. Michael Rivers",
    role: "Panel Moderator",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747074/pather%20logo/lfwclyhudaxhntxmnt59.jpg",
  },
  {
    name: "Dr. Sarah Woods",
    role: "Workshop Leader",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747111/pather%20logo/wpp20uugpj4gegwaxqit.jpg",
  },
  {
    name: "Dr. Alex Turner",
    role: "Research Presenter",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747142/pather%20logo/e4zln7v0g3nrh0vs92qd.jpg",
  },
  {
    name: "Prof. Lisa Chen",
    role: "Sustainability Expert",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747171/pather%20logo/pagmkfmpwxmpa8szlvcy.jpg",
  },
  {
    name: "Dr. James Carter",
    role: "Policy Advisor",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851535/pather%20logo/afcvjzohrxc4gnuii3yc.png",
  },
  {
    name: "Dr. Emily Green",
    role: "Keynote Speaker",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851537/pather%20logo/an4uoqfpuhitlpzc1myq.png",
  },
  {
    name: "Prof. Michael Rivers",
    role: "Panel Moderator",
    imageUrl:
      "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/itr0sezg2mkyt0noyfvl.png",
  },
];

function Organization({ coOrganizers }) {
  return (
    <> 
    <div className="bg-green-600 flex justify-center items-center text-4xl font-medium text-green-50 py-8 pt-4   ">
    <h1> Our Co-organizers</h1>
  </div>
      <ul
        role="list"
        className="mx-auto pb-8  bg-green-600 grid max-w-2xl grid-cols-2 gap-x-2 gap-y-2 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-9 xl:grid-cols-9 place-items-center"
      >
        {coOrganizers.map((organizer, index) => (
          <motion.li
            key={organizer.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              className="mx-auto h-24 w-24 rounded-full select-none "
              src={organizer.img_url}
              alt={organizer.img_title}
            />
            {/* <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-green-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p> */}
          </motion.li>
        ))}
      </ul>
      <hr className="sm:hidden flex " />
     
    </>
  );
}

export default Organization;
