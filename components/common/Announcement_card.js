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
      <div className="w-4/5 sm:w-1/2 rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 bg-white-300 m-8">
        <div className="px-6 sm:px-6 py-4">
          <div className="font-bold text-xl mb-2">Marathon</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </div>
        <div className="block pb-4 sm:flex justify-center">
          <div className=" sm:flex justify-start w-1/2 px-6">
            <div className="text-center object-cover sm:mt-2 mb-4 bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700">
              26/8/2022
            </div>
          </div>
          <div className="sm:flex justify-end w-1/2 mx-0 px-6">
            <motion.button
              onClick={() => {
                toggleOpen()
                handleClick()
              }}
              className="sm:mb-4 mr-6 bg-blue-500 hover:bg-blue-700 text-req-green border-req-green border-2 font-bold py-2 px-4 rounded hover:shadow-2xl hover:scale-105"
            >
              {buttonText}
            </motion.button>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsam
          sed! Harum dicta, ducimus culpa minima voluptas consequuntur
          praesentium recusandae?
        </p>
        <p className="pt-4 text-gray-700 text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, beatae!
        </p>
      </motion.div>
    </motion.div>
  )
}
export default Announcement