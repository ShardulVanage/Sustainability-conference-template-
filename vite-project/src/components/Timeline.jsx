import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PocketBase from 'pocketbase';

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const timelineRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const pb = new PocketBase('https://icsift.pockethost.io');
        const records = await pb.collection('dates').getFullList({
          sort: 'created', // Assuming you have a 'date' field
        });
        
        // Transform the records into the format your component expects
        const formattedDates = records.map(record => ({
          date: record.date,
          title: record.title,
          description: record.description
        }));
        
        setDates(formattedDates);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching dates:', err);
        setError('Failed to load timeline dates');
        setLoading(false);
      }
    };

    fetchDates();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(timelineRef.current, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        scaleY: 0,
        transformOrigin: "top",
      });
    });

    return () => ctx.revert();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-green-600">Loading timeline...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-green-50 py-12 sm:py-24">
      <div className="mx-auto w-full sm:max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-5xl text-center">
            Conference Important Dates
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text text-center">
            Join us in our journey towards a greener future. Stay updated with
            our eco-friendly conference schedule and important milestones.
          </p>

          <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
            <div className="mt-10 relative inline-flex">
              <div>
                <div
                  ref={timelineRef}
                  className="absolute left-0 top-5 -bottom-5 w-0.5 bg-green-600"
                />
                {dates.map((item, index) => (
                  <motion.div
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pb-8"
                  >
                    <div className="relative flex items-center">
                      <div className="ml-4 flex flex-col">
                        <time
                          dateTime={item.date}
                          className="text-sm font-semibold text-green-600"
                        >
                          {item.date}
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="p-12">
              <img
                src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1727704271/omemilntm5r9zs3qzaw1.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-4 pt-12">
          <a
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-sm sm:text-sm text-center"
            href="/Schedule"
          >
            Get all Day Schedule
          </a>
        </div>
      </div>
    </div>
  );
}