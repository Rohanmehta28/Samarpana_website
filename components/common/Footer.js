import Image from 'next/image'
import { FaInstagram, FaMailBulk } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
function Footer() {
  return (
    <div className="relative">
      <footer className="relative bg-req-blue bottom-0">
        <div className="flex text-white md:p-4 md:text-xl justify-between py-8 px-8">
          {/* <div className="text-base non-italic font-[400] text-[0.85em] max-w-[35%] leading-[126%] tracking-[0.015em] text-[#FFFFFF] -my-[0.2%]"> */}
          <div>
            <p>PES University, Samarpana Tech Team</p>
          </div>
          {/* <div className="flex text-base non-italic font-[400] text-[1em] leading-[126%] tracking-[0.015em] text-center text-[#FFFFFF] my-[1.5%] mx-[10%]"> */}
          <div>
            <p>1234567890</p>
            {/* <p className='px-2'>1234567890</p> */}
          </div>
          <div className="flex text-white sm:px-8 md:px-12 text-[25px]">
            <a
              className="px-1"
              target="_blank"
              href="https://www.instagram.com/samarpana.india/"
            >
              <FaInstagram />
            </a>
            <a
              className="px-1"
              target="_blank"
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
