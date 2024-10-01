
import React from 'react'
import { motion } from 'framer-motion'
import { IconDownload, IconFileDownload } from '@tabler/icons-react'

const buttons = [
  { text: "Conference Poster", href: "/poster.pdf" },
  { text: "Registration Form", href: "/registration.pdf" },
  { text: "Manuscript Template", href: "/manuscript.docx" },
  { text: "Abstract Template", href: "/abstract.docx" },
  { text: "Copyright Form", href: "/copyright.pdf" },
  { text: "Conference Brochure", href: "/brochure.pdf" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}
export default function ContactUs() {
  return (
    <section id='form' className="space-y-10 divide-y divide-gray-900/10 flex  justify-center items-center py-12 bg-green-100">
  
<div className='flex flex-col justify-center '>
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3  max-w-7xl">
        <div className="px-4 sm:px-0">
          <h2 className="text-5xl font-bold leading-7 text-green-900 py-3">Contact us</h2>
          <p className="mt-1 text-base leading-6 text-gray-700 font-PTSerif">Get in touch with our team for personalized assistance and expert guidance.</p>
          <img
          
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1727759980/pcqsaojvmwvbur5l38b3.png"
              alt="Product screenshot"
              className="relative  ring-white/10 lg:row-span-4  lg:max-w-none p-8"
              width={400}
              height={400}
            />
            
        </div>

        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" >
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                 Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                 Phone / Whatsapp.no
                </label>
                <div className="mt-2">
                  <input
                    type="Text"
                    name="Number"
                    id="Number"
                    autoComplete="Number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:sm:col-span-4">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
                </label>
                <div className="mt-2">
                  <input
                      id="country"
                    name="country"
                    type="text"
                   autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                  />
                </div>                
              </div>
                {/* <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div> */}
 <div className="sm:col-span-7">
                <label htmlFor="Message" className="block text-sm font-medium leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                  
                      id="Message"
                    name="Message"
                    type="text"
                   autoComplete="Message"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                  />
                </div>                
              </div> 
            </div>
          </div>
            <div className="flex items-center justify-start gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-sm sm:text-sm text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
     <div className='flex flex-col  w-full py-12'>
      <h1 className='text-center text-xl pb-3 inline-flex justify-center items-center gap-3 font-medium text-green-800'>Download Conference Materials <IconFileDownload/></h1>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl justify-center items-center "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {buttons.map((button, index) => (
          <motion.a
            key={index}
            // href={button.href}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-sm sm:text-sm text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {button.text}
          </motion.a>
        ))}
      </motion.div>
      </div>
</div>

          
    
     
    </section>
  )
}