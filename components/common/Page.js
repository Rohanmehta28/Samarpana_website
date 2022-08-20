import { motion } from 'framer-motion'
import Footer from './Footer'

function Page({ children, nopadding, background = 'white' }) {
  return (
    <motion.div
      className={nopadding ? '' : 'pt-10'}
      style={{
        backgroundColor: background,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.7,
        ease: 'easeInOut',
      }}
    >
      {children}
      <Footer />
    </motion.div>
  )
}

export default Page
