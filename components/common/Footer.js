import Image from 'next/image'

function Footer() {
  return (
    <div className="block relative pt-20 md:pt-0">
      {/* <Image
        src="/assets/soldiers_footer.png"
        alt="footerimg"
        layout="responsive"
        width={1440}
        height={673}
        className="-bottom-2 lg:-bottom-6"
      /> */}
      <footer className="absolute md:-bottom-0 w-full inset-x-0 bg-opacity-100 bg-blue md:py-2">
        <div className="flex flex-col gap-4 md:flex-row font-'Poppins' justify-center items-center md:items-start text-center md:text-left md:justify-between px-8">
          <div className="flex flex-col text-xs font-semibold text-white">
            <p>100 Feet Ring Road, Banashankari Stage III,</p>
            <p>Dwaraka Nagar, Banashankari, Bengaluru,</p>
            <p>Karnataka 560085</p>
            <p className="text-gray-500">Samarpana Tech Team</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white">
            <p>Contact Us :</p>
            <p>+91 98479828374</p>
            <p>+91 78923972671</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
