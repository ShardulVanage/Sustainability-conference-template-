import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold text-green-900 tracking-tight">
            404
          </h1>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-green-800">
            Oops! Page Not Found
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1727845976/cf1rcccuocvohmnvahqj.png"
            alt="404 Illustration"
            className=" p-2 pl-8 mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="mt-2 text-xl text-white">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-green-100/90 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out"
            >
              Go back home
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
