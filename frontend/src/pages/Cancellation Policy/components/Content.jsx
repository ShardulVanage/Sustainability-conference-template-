import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const PolicySection = ({ title, children }) => (
  <motion.div
    className="bg-green-100 p-6 rounded-lg shadow-md mb-6"
    variants={fadeIn}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-bold text-green-800 mb-3">{title}</h2>
    {children}
  </motion.div>
);

const LeafIcon = () => (
  <svg
    className="w-6 h-6 inline-block mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

export default function CancellationContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-green-900 text-center mb-12"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <LeafIcon /> Cancellation Policy
        </motion.h1>

        <PolicySection title="Refund Deadline">
          <p className="text-green-700">
            Participants can request a full refund up to{" "}
            <span className="font-semibold">30 days before the event</span>.
            This allows us to accommodate any changes in your plans while
            ensuring we can manage our resources effectively.
          </p>
        </PolicySection>

        <PolicySection title="Partial Refunds">
          <p className="text-green-700">
            For cancellations made between{" "}
            <span className="font-semibold">29 and 15 days</span> before the
            event, a 50% refund will be issued. This partial refund policy helps
            us balance flexibility for our attendees with the commitments we've
            made to vendors and speakers.
          </p>
        </PolicySection>

        <PolicySection title="No Refunds">
          <p className="text-green-700">
            We regret that{" "}
            <span className="font-semibold">
              Clarify that no refunds will be issued after the final deadline
            </span>{" "}
          </p>
        </PolicySection>

        <PolicySection title="Transfer of Registration">
          <p className="text-green-700">
            If you're unable to attend, you may transfer your registration to
            another person up to
            <span className="font-semibold"> 7 days before the event</span>.
            Please contact our support team to arrange this transfer. This
            option ensures your registration doesn't go to waste if your plans
            change.
          </p>
        </PolicySection>

        <motion.div
          className="text-center mt-12"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-green-800 font-normal">
            For any questions or to request a cancellation, please contact:
          </p>
          <a
            href="mailto:support@sustainabledev.conf"
            className="text-green-700 hover:text-green-800 transition-colors duration-300 font-medium"
          >
            support@zepresearch.com
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
