import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";

export default function CancleCTA() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex items-center justify-center pt-12  p-4">
      <motion.div
        ref={ref}
        className="max-w-3xl w-full bg-white rounded-xl shadow-lg overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="p-8 ">
          {/* <motion.div
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6"
            variants={childVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Leaf className="w-8 h-8 text-white" />
          </motion.div> */}
          <motion.h2
            className="text-3xl font-bold text-green-800 mb-4"
            variants={childVariants}
          >
            Cancellation Policy
          </motion.h2>
          <motion.p className="text-gray-700 mb-6" variants={childVariants}>
            We understand plans change. Learn about our eco-friendly
            cancellation options for the Sustainable Development Conference.
          </motion.p>

          <a href="/cancellation-policy">
            <motion.button
              className="group w-1/2 bg-green-600 text-white py-2 px-6 rounded-lg font-semibold text-base transition-all duration-300 ease-in-out flex items-center justify-center"
              variants={childVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              View Full Policy
              <motion.div
                className="ml-2"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </a>
        </div>
        <motion.div
          className="h-2 bg-green-400"
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.2 } },
          }}
        />
      </motion.div>
    </div>
  );
}
