import { motion } from 'framer-motion'

function ClipAnimation({ children, duration = 0.5, delay = 0 }) {
  return (
    <motion.div
      initial={{
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      }}
      animate={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'anticipate',
      }}
    >
      {children}
    </motion.div>
  )
}

export default ClipAnimation
