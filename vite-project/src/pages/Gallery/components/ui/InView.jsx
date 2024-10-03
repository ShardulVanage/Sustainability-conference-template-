import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

InView.propTypes = {
  children: PropTypes.node.isRequired,
  variants: PropTypes.shape({
    hidden: PropTypes.object,
    visible: PropTypes.object,
  }),
  transition: PropTypes.object,
  viewOptions: PropTypes.object,
};

export default InView;
