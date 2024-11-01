import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DarkHeadingSection from "../DarkHeader";
import RegistrationProcess from "./components/Process";
import CancleCTA from "./components/canclepolicy";
import PricingCard from "./components/NormalPass";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);
const pricingTiers = [
  {
    title: "Virtual Registration",
    description:
      "Perfect for individuals looking to experience the basics of our sustainable conference.",
    price: "219",
    features: [
      "Access to keynote speeches",
      "Basic networking opportunities",
      "Digital conference materials",
      "Carbon-neutral certificate",
    ],
    priceSubtext: "Begin your sustainable journey",
    theme: {
      primary: "blue",
      secondary: "gray",
      accent: "white",
    },
  },
  {
    title: "Physical presentation",
    description:
      "Perfect for individuals looking to experience the basics of our sustainable conference.",
    price: "319",
    features: [
      "Access to keynote speeches",
      "Basic networking opportunities",
      "Digital conference materials",
      "Carbon-neutral certificate",
    ],
    priceSubtext: "Begin your sustainable journey",
    theme: {
      primary: "blue",
      secondary: "gray",
      accent: "white",
    },
  },

  // {
  //   title: "Professional Pass",
  //   description:
  //     "Ideal for professionals seeking comprehensive conference experience with added benefits.",
  //   price: "599",
  //   features: [
  //     "All Starter Pass features",
  //     "VIP networking sessions",
  //     "Workshop participation",
  //     "Exclusive Q&A sessions",
  //     "Premium catering",
  //   ],
  //   priceSubtext: "Elevate your experience",
  //   theme: {
  //     primary: "green",
  //     secondary: "gray",
  //     accent: "white",
  //   },
  // },
  // {
  //   title: "Enterprise Pass",
  //   description:
  //     "The ultimate conference experience with exclusive benefits and premium features.",
  //   price: "999",
  //   features: [
  //     "All Professional Pass features",
  //     "Private meeting room access",
  //     "1-on-1 sessions with speakers",
  //     "Priority seating",
  //     "Executive networking dinner",
  //     "Full conference recordings",
  //   ],
  //   priceSubtext: "Maximum impact",
  //   theme: {
  //     primary: "purple",
  //     secondary: "gray",
  //     accent: "white",
  //   },
  // },
];
export default function Pricing() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const pricingCardRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const pricingCard = pricingCardRef.current;

    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      description,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      pricingCard,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);
  const pageTitle =
    "Pricing | International Conference on Sustainability, Innovation and Future Technologies";
  const pageDescription =
    "Explore the pricing options for attending our conference, including ticket categories, early-bird discounts, and group rates.";

  return (
    <>
      <Helmet>
        {/* Essential Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />

        {/* Basic Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ICSIFT",
            description: pageDescription,
          })}
        </script>
      </Helmet>
      <DarkHeadingSection />
      <div ref={sectionRef} className="bg-green-950 py-12  sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl sm:text-center"
          >
            <h2
              ref={titleRef}
              className="text-3xl font-bold tracking-tight text-green-300 sm:text-5xl"
            >
              Join the Sustainable Future Conference
            </h2>
            <p
              ref={descriptionRef}
              className="mt-6 text-lg leading-8 text-gray-100"
            >
              Be part of the change. Our conference brings together leaders,
              innovators, and changemakers to create a more sustainable future.
              Your participation makes a difference
            </p>
          </motion.div>
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.title} {...tier} delay={index * 0.2} />
          ))}
          <CancleCTA />
          <RegistrationProcess />
        </div>
      </div>
    </>
  );
}
