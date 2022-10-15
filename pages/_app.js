import { AnimatePresence } from 'framer-motion'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from '../components/common/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full" style={{ width: '100%' }}>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default MyApp
