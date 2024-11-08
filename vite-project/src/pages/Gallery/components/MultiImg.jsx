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

const InViewImagesGrid = () => {
  return (
    <div className="h-full w-full overflow-auto">
      <div className="mb-20 py-2 text-center text-sm text-green-700"></div>
      <div className="flex h-full items-end justify-center pb-12">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className="columns-1 gap-4 px-8 sm:columns-3 h-full">
            {[
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876302/Gallery/v3oashc1hzwihilxf3gm.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876297/Gallery/jdf8gyetdgiedxlhnpnl.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876296/Gallery/lkcyqy7rk2p0e6oesswk.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876296/Gallery/mxivsfp3g0y0n3eaiq44.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876296/Gallery/yhlhxotliva9utsfysn3.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876296/Gallery/p2tvfkmhq5qgoxcuyjdr.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876295/Gallery/jxouvaqolvravdgpj5rl.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876295/Gallery/pa3i8esjgvq48mknllcx.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876295/Gallery/rrsb08xchyicddz6qshx.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/fmrpgxt6zw7kidnw9ccj.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/bdizrg7nkr31qzrm6j2b.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/hg4u0klfxydvar2mpgjo.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/alqwdo3c2hqw2fa0sywn.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727876294/Gallery/sgvnrkqmsykcv4xjr9np.jpg",

              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986108/Gallery/vvt2im2kpsbbqjq6hhfg.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986107/Gallery/xdbkjcupuywr3efl1ik6.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986107/Gallery/nahmntwq44xrwqaycvny.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986106/Gallery/gbs9b1ryscomlmzepwpc.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986106/Gallery/wdkibqxo9bh6xm0rsyzy.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986106/Gallery/obloffhbagwrc8y5zbbl.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986106/Gallery/uhqkedvdfepausvn5vft.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986105/Gallery/z6gxyegvxfaz6s0ujg7x.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/zasxw5lqhn8shefhczsp.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/ofjqi0zff5yqhevjmr9o.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/zb3jr69jkxkjf52js7n9.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/cltkqv3tfbuconzlcjxe.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986104/Gallery/juxso5bb6rqpk1pijdzv.jpg",
              "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730986103/Gallery/kyp2onqcxpwbgwoano8y.jpg",
            ].map((imgSrc, index) => (
              <motion.div
                key={index}
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
                  src={imgSrc}
                  alt={`Conference image ${index + 1}`}
                  className="w-full rounded-lg object-contain shadow-md shadow-green-200"
                />
              </motion.div>
            ))}
          </div>
        </InView>
      </div>
    </div>
  );
};

const MultiImg = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-5xl font-semibold text-green-800 mb-2 text-center">
              Conference Highlights
            </h2>
            <p className="text-gray-700 text-center">
              Explore the memorable moments from our recent conference and
              publications.
            </p>
          </div>
          <InViewImagesGrid />
        </div>
      </main>
    </div>
  );
};

export default MultiImg;
