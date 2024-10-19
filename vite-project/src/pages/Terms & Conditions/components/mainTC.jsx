import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Leaf, Lightbulb, Cpu } from "lucide-react";

export default function MainTC() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By registering for the International Conference on Sustainability, Innovation and Future Technologies, you agree to comply with and be bound by these Terms and Conditions.",
    },
    {
      title: "2. Registration and Attendance",
      content:
        "Registration is required for attendance. The conference organizers reserve the right to refuse entry or remove any person from the event at any time. Participants are expected to conduct themselves professionally and ethically throughout the conference.",
    },
    {
      title: "3. Intellectual Property",
      content:
        "All content presented at the conference is protected by copyright. Attendees may not record, photograph, or reproduce any materials without express permission from the presenters and organizers. Any innovations or technologies discussed remain the property of their respective owners or presenters.",
    },
    {
      title: "4. Liability",
      content:
        "The conference organizers are not responsible for any loss, injury, or damage to person or property, regardless of cause. Participants are advised to take necessary precautions to ensure their own safety and the security of their belongings.",
    },
    {
      title: "5. Changes to Event",
      content:
        "The organizers reserve the right to make changes to the program, speakers, date, or venue at any time without liability. In the event of unforeseen circumstances, the conference may be held virtually or postponed, with registered participants being notified of any changes.",
    },
    {
      title: "6. Privacy Policy",
      content:
        "Attendee information will be handled in accordance with our Privacy Policy, which can be found on our website. We are committed to protecting your personal data and using it only for purposes related to the conference and future event notifications.",
    },
    {
      title: "7. Sustainable Practices",
      content:
        "As a conference focused on sustainability, we encourage all participants to adhere to environmentally friendly practices during the event. This includes minimizing waste, using digital resources where possible, and respecting any eco-friendly initiatives implemented by the organizers.",
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
                <p className="p-6 text-green-800">{section.content}</p>
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
