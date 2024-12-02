import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const InView = ({ children, viewOptions, variants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default InView;