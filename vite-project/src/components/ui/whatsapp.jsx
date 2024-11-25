import { PhoneIcon as WhatsappLogo } from 'lucide-react'


export default function WhatsAppButton({ phoneNumber, message = 'How can we assist you?' }) {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed z-20 bottom-4 left-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsappLogo size={20} />
    </button>
  )
}

