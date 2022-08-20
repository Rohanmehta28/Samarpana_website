import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

function OpacityAnimation({
  children,
  duration = 0.75,
  delay = 0,
  threshold = 0.6,
  className = '',
}) {
  const controls = useAnimation()
  const [noAnimation, setNoAnimation] = useState(false)
  const { ref, inView } = useInView({ threshold: threshold })

  useEffect(() => {
    setNoAnimation(
      !window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    )
    if (inView && !noAnimation) {
      controls.start({ opacity: 1 })
    }
  }, [inView, controls, noAnimation])

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{
        opacity: noAnimation ? 1 : 0,
      }}
      animate={controls}
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

export default OpacityAnimation
