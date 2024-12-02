import { motion } from "framer-motion";
import { optimizeCloudinaryUrl } from "../../../utils/imageUtils";

const LazyImage = ({ src, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        },
      }}
      className="mb-4"
    >
      <img
        src={optimizeCloudinaryUrl(src)}
        alt={`Conference image ${index + 1}`}
        className="w-full rounded-lg object-contain shadow-md shadow-green-200"
        loading="lazy"
        decoding="async"
        srcSet={`
          ${src.replace('/upload/', '/upload/w_400/')} 400w,
          ${src.replace('/upload/', '/upload/w_800/')} 800w
        `}
        sizes="(max-width: 640px) 100vw, 33vw"
      />
    </motion.div>
  );
};

export default LazyImage;