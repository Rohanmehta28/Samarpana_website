import Image from 'next/image'

function Footer() {
  return (
    <div className="relative">
      <Image
        src="/assets/footerimg.png"
        alt="footerimg"
        layout="responsive"
        width={1441}
        height={75}
      />
      <footer className="relative translate-y-[160%] mx-[25%] -my-[9%]">
        <div className="flex">
          <div className="text-base non-italic font-[400] text-[0.85em] max-w-[35%] leading-[126%] tracking-[0.015em] text-[#FFFFFF] -my-[0.2%]">
            <p>100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085</p>
          </div>
          <div className="flex text-base non-italic font-[400] text-[1em] leading-[126%] tracking-[0.015em] text-center text-[#FFFFFF] my-[1.5%] mx-[10%]">
            <p className='mx-[20%]'>1234567890</p>
            <p className='mx-[10%]'>1234567890</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
