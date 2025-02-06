import { motion } from "framer-motion"
import { useCommittee } from "../../../hooks/useCommitte"

const CommitteeSection = ({ title, members }) => (
  <div className="mt-20">
    <h3 className="text-2xl font-bold tracking-tight text-green-900 mb-10 text-center">{title}</h3>
    <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 bg">
      {members.map((member, index) => (
        <motion.li
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
        >
          <img
            className="mx-auto h-56 w-56 rounded-full drop-shadow-sm bg-white object-cover"
            src={member.img || "/placeholder.svg"}
            alt={member.name}
          />
          <h4 className="mt-6 text-lg leading-7 tracking-tight text-green-900 font-bold">{member.name}</h4>
          <p className="text-base leading-6 text-gray-600">{member.designation}</p>
          <p className="px-4 text-center">{member.details}</p>
          <p className="text-base leading-6 text-gray-800 underline underline-offset-2">{member.country}</p>
        </motion.li>
      ))}
    </ul>
  </div>
)

export default function OrganizingCommittee() {
  const { committee, loading, error } = useCommittee()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const committeeOrder = [
    "Core Committee",
    "Advisory Board - Education",
    "Advisory Board - Management",
    "Advisory Board - Engineering",
  ]

  return (
    <div className="bg-green-50 py-12 pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl text-center">
            Organizing Committee
          </h2>
        </motion.div>
        {committeeOrder.map(
          (sectionTitle) =>
            committee[sectionTitle] &&
            committee[sectionTitle].length > 0 && (
              <CommitteeSection key={sectionTitle} title={sectionTitle} members={committee[sectionTitle]} />
            ),
        )}
      </div>
    </div>
  )
}

