import { motion } from "framer-motion";
import { Calendar, Users, Lightbulb, Target } from "lucide-react";

export default function AboutConferenceObjective() {
  return (
    <div className="min-h-full bg-gradient-to-br   from-green-50 to-green-200 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold text-green-800 mb-8 text-center">
          International Conference on Sustainability, Innovation and Future
          Technologies
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Our Objective
          </h2>
          <p className="text-lg text-green-600 leading-relaxed">
            The Conference on Sustainable Development aims to bring together
            leading researchers, policymakers, and industry experts to share
            knowledge, discuss challenges, and forge partnerships that will
            drive forward the global sustainability agenda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Calendar,
              title: "Date",
              content: "March 21st - 23rd, 2025",
            },
            {
              icon: Users,
              title: "Attendees",
              content: "500+ Global Participants",
            },
            {
              icon: Lightbulb,
              title: "Focus Areas",
              content: "Climate Change, Renewable Energy, Circular Economy",
            },
            {
              icon: Target,
              title: "Goal",
              content: "Actionable Strategies for a Sustainable Future",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center"
            >
              <div className="bg-green-100 rounded-full p-3 mr-4">
                <item.icon className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-green-600">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="/pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
          >
            Register Now
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
