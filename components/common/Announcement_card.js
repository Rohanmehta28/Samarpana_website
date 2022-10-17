import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

function Announcement(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [buttonText, setButtonText] = useState('Know More')

  const toggleOpen = () => setIsOpen(!isOpen)

  function handleClick() {
    if (!isOpen) {
      setButtonText('Back')
    } else {
      setButtonText('Know More')
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-4/5 sm:w-1/2 rounded-xl border-gray-200 border-2 overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 bg-white-300 m-2 ">
        <div className="px-6 sm:px-6 py-4">
          <div className="font-bold text-xl mb-2">SAMARPANA LAUNCH</div>
          <p className="text-gray-700 text-base">
            Samarpana 2022 will be inaugurated at PES University with a series
            of cultural events organized by our students, followed by the
            official launch and announcement of the program.
          </p>
          <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </div>
        <div className="block pb-4 sm:flex justify-center">
          <div className=" flex justify-left w-full px-6">
            <div className="h-[36px] text-center object-cover mt-2 mb-4 bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700">
              17/10/2022
            </div>
            <div className="h-[36px] w-3/4 lg:flex lg:justify-end lg:w-full mx-0  pl-[20%] ">
              <motion.button
                onClick={() => {
                  toggleOpen()
                  handleClick()
                }}
                className="h-[36px] mt-2 w-24 mr-2 text-sm  bg-blue-500 hover:bg-blue-700 text-req-green border-req-green border-2 font-bold  rounded hover:shadow-2xl hover:scale-105"
              >
                {buttonText}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div>
        <p className="pt-4 text-gray-700 text-base">
          The festivities have begun!
        </p>
        <p className="pt-4 text-gray-700 text-base">
          Come, join us to be a part of something much bigger than all of us.
        </p>
      </motion.div>
    </motion.div>
  )
}
export default Announcement
