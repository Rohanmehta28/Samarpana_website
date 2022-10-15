import Image from 'next/image'
import {FaInstagram, FaMailBulk} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
function Footer() {
  return (
    <div className="relative">
      <footer className="relative bg-req-blue">
        <div className="flex text-white md:p-4 px-1 justify-between">
          {/* <div className="text-base non-italic font-[400] text-[0.85em] max-w-[35%] leading-[126%] tracking-[0.015em] text-[#FFFFFF] -my-[0.2%]"> */}
          <div className=''>
            <p>100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085</p>
          </div>
          {/* <div className="flex text-base non-italic font-[400] text-[1em] leading-[126%] tracking-[0.015em] text-center text-[#FFFFFF] my-[1.5%] mx-[10%]"> */}
          <div className='inline-flex'>
            <p className='px-2'>1234567890</p>
            <p className='px-2'>1234567890</p>
          </div>
          <div className='flex text-white'>
            <a className='px-2' target = "_blank" href = "https://www.google.com"><FaInstagram/></a>
            <a className='px-2' target = "_blank" href = "https://www.google.com"><SiGmail/></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
