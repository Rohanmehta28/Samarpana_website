import { FaInstagram } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
function Footer() {
  return (
    <div className="relative">
      <footer className="relative bg-req-blue bottom-0">
        <div className="flex md:flex-row flex-col md:gap-1 gap-4 items-center md:items-start text-white md:p-4 md:text-xl justify-between py-8 px-8">
          <div>
            <p>Samarpana Tech Team, PES University</p>
          </div>

          <div>
            <p>Contact No : +91 7892483024</p>
          </div>

          <div className="flex text-white sm:px-8 md:px-12 text-[25px]">
            <a
              className="px-1"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/samarpana.india/"
            >
              <FaInstagram />
            </a>
            <a
              className="px-1"
              target="_blank"
              rel="noreferrer"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=samarpana@pes.edu"
            >
              <SiGmail />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
