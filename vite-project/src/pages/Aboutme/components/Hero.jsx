import { motion } from "framer-motion";
import { ArrowRight, Leaf, Globe, Zap } from "lucide-react";

export default function AboutZepResearch() {
  return (
    <div className="min-h-ful bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-green-800 mb-8 text-center">
          About Zep Research
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-xl p-8 mb-8"
        >
          <p className="text-lg text-green-700 leading-relaxed mb-6">
            Zep Research is at the forefront of sustainable development
            research, pioneering innovative solutions for a greener future. Our
            team of dedicated scientists and researchers work tirelessly to
            address the most pressing environmental challenges of our time.
          </p>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold flex items-center"
            >
              Learn More <ArrowRight className="ml-2" />
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Leaf,
              title: "Eco-Innovation",
              description: "Developing cutting-edge green technologies",
            },
            {
              icon: Globe,
              title: "Global Impact",
              description: "Implementing solutions on a worldwide scale",
            },
            {
              icon: Zap,
              title: "Energy Solutions",
              description: "Advancing renewable energy research",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <item.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-green-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
