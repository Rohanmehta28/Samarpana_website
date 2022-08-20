function Footer() {
  return (
    <div className="block relative pt-20 md:pt-0 bg-black">
      <footer className="md:-bottom-0 w-full inset-x-0 bg-opacity-100 md:bg-opacity-20 bg-black py-20 md:py-8">
        <div className="flex flex-col gap-8 md:flex-row justify-center items-center font-red-hat">
          <div className="flex flex-col gap-2 text-base text-white">
            <p>PES UNIVERSITY</p>
            <p>100 Feet Ring Road, BSK III Stage,</p>
            <p>Bangalore-560085</p>
            <p className="text-gray-400">{`AT'22 Tech and Design Team`}</p>
          </div>
          <div className="flex flex-col gap-2 text-base text-white">
            <p>Contact Us :</p>
            <p>----------------------------------</p>
            <p>----------------------------------</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
