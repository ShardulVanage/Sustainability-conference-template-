import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Leaf, Lightbulb, Cpu } from "lucide-react";

export default function MainTC() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      title: "1. Agreement to Terms",
      content:
        "By participating in this conference, all attendees, speakers, sponsors, and exhibitors agree to the terms outlined here. These terms must be followed throughout the event and in all associated activities.",
    },
    {
      title: "2. Registration and Participation",
      content: `Registration should be completed on the official website.
        Full payment is required at the time of registration to confirm participation.
        Cancellation requests must be submitted in writing. Refund policies are as follows:
        - 75% refund for cancellations made 60 days prior to the conference.
        - 50% refund for cancellations made 30 days prior to the event.
        - No refunds for cancellations within 30 days.
        Participants must wear their identification badges throughout the event to gain access to sessions and activities.`,
    },
    {
      title: "3. Ownership of Intellectual Property",
      content: `All research and presentation content presented at the conference remain the exclusive property of the authors.
        Reproducing or distributing this content without permission is not allowed.
        By submitting material for presentation, you grant the conference organizers permission to use it in related publications or promotional materials, with appropriate credit given to the author.`,
    },
    {
      title: "4. Responsibility and Liability",
      content: `Zep Research is not responsible for personal injury, loss, or damage to property during the event.
        Participants are responsible for safeguarding their belongings and may consider securing personal or travel insurance as needed.`,
    },
    {
      title: "5. Event Modifications",
      content: `The organizers reserve the right to make changes to the event schedule, venue, or dates if necessary due to unforeseen events or circumstances.
        In the case of force majeure events (such as natural disasters or government restrictions), we will notify participants, and any fees may be refunded or transferred to future events.`,
    },
    {
      title: "6. Data Protection",
      content: `Any personal information collected during the registration process will only be used for event-related communication and management.
        Your data will not be shared with third parties without your consent, unless required by law.`,
    },
    {
      title: "7. Commitment to Sustainability",
      content: `We are dedicated to ensuring this event is sustainable.
        Participants are encouraged to adopt eco-friendly behaviors during the conference, such as reducing waste, conserving energy, and using reusable materials wherever possible.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#052E16] to-green-950 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <header className="text-center mb-12">
          <div className="flex justify-center space-x-4 mb-6">
            <Leaf className="w-12 h-12 text-green-600" />
            <Lightbulb className="w-12 h-12 text-yellow-500" />
            <Cpu className="w-12 h-12 text-blue-500" />
          </div>
          <h1 className="text-4xl font-extrabold text-green-100 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            International Conference on Sustainability, Innovation and Future
            Technologies
          </p>
        </header>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedSection(expandedSection === index ? null : index)
                }
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-colors duration-200"
              >
                <span className="text-lg font-semibold">{section.title}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    expandedSection === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: expandedSection === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="p-6 text-green-800 whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-green-100"
        >
          <p className="mb-2">
            By attending our conference, you agree to abide by these terms and
            conditions and contribute to a sustainable, innovative, and
            technologically advanced future.
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
}
