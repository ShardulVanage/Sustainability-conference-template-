import { motion } from "framer-motion";
import { ArrowRight, Leaf, Globe, Zap } from "lucide-react";

export default function AboutZepResearch() {
  return (
    <div className="min-h-full bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-green-800 mb-8 text-center">
          About ICSIFT 2025
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-xl p-8 mb-8"
        >
          <p className="text-lg text-green-700 leading-relaxed mb-6">
            The International Conference on Sustainability, Innovation, and Future Technologies 2025, taking place in the vibrant city of Manila, Philippines, aims to engage in discussions and identify how and where sustainability, technological innovation, and industrial futures intersect. From 21 to 23 March 2025, ICSIFT will gather experts from every sphere to speak on innovative research, eco-friendly solutions, and technological advancement.
          </p>
          <p className="text-lg text-green-700 leading-relaxed mb-6">
            The conference involves keynote addresses, panels, and practical workshops to advance knowledge and start partnerships to promote sustainable development. With an emphasis on practical, scalable solutions and forward-thinking research, ICSIFT 2025 promises to be an inspiring showcase of how new technologies are going to drive a more sustainable future for our planet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg shadow-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6">Why Attend ICSIFT 2025</h2>
          <p className="text-lg text-green-700 leading-relaxed mb-6">
            The International Conference on Sustainability, Innovation, and Future Technologies (ICSIFT) is the ideal platform for exploring transformative solutions and advancing sustainable technologies.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Explore Cutting-Edge Innovations",
                description: "Gain insights into groundbreaking research and future-focused technologies that are driving sustainable development and shaping tomorrows world."
              },
              {
                title: "Engage with Global Experts",
                description: "Network with 55+ certified academicians, 125+ research scholars, and 10+ industrial professionals from over 10 countries, all dedicated to sustainability and innovation."
              },
              {
                title: "Foster Collaboration and Partnerships",
                description: "Connect with like-minded professionals and thought leaders to spark new ideas, collaborations, and opportunities for joint projects."
              },
              {
                title: "Industry Recognition and Awards",
                description: "Stand a chance to receive one of 15+ prestigious awards recognizing outstanding contributions to sustainability, innovation, and future technologies."
              },
              {
                title: "Practical and Actionable Insights",
                description: "Participate in dynamic sessions, discussions, and workshops focused on real-world applications and strategies for sustainable growth."
              },
              {
                title: "Global Exposure",
                description: "Showcase your work, share ideas, and contribute to shaping global solutions for a greener, more innovative future."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <ArrowRight className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-1">{item.title}</h3>
                  <p className="text-green-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6">Who Can Attend</h2>
          <p className="text-lg text-green-700 leading-relaxed mb-6">
            ICSIFT 2025 welcomes a diverse range of participants who are passionate about sustainability, innovation, and future technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Academicians & Researchers",
                description: "Present your research, exchange knowledge, and collaborate with peers to advance sustainable technologies."
              },
              {
                title: "Industry Professionals",
                description: "Explore innovative solutions and technologies that can drive sustainable growth in your industry."
              },
              {
                title: "Policymakers & Government Officials",
                description: "Gain insights to develop and implement policies supporting sustainability and technological innovation."
              },
              {
                title: "Entrepreneurs & Startups",
                description: "Discover new trends, technologies, and collaboration opportunities to fuel sustainable business growth."
              },
              {
                title: "Students & Emerging Scholars",
                description: "Learn from experts, showcase your research, and build networks to kickstart your career in sustainability and innovation."
              },
              {
                title: "Environmental Advocates & NGOs",
                description: "Connect with innovators and explore strategies for driving sustainable change in communities and organizations."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-green-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                <p className="text-green-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Leaf,
              title: "Sustainable Innovation",
              description: "Explore cutting-edge green technologies",
            },
            {
              icon: Globe,
              title: "Global Collaboration",
              description: "Connect with experts worldwide",
            },
            {
              icon: Zap,
              title: "Future Technologies",
              description: "Shape tomorrow solutions",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <item.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-green-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-lg font-semibold text-green-800 mb-6">
            Join us in Manila from March 21st-23rd, 2025, to be part of a global movement dedicated to sustainability, innovation, and the technologies of tomorrow!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold flex items-center mx-auto"
          >
            Register Now <ArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}