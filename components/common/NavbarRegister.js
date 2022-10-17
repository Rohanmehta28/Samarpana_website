import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from './logo.svg'

const NavbarRegister = () => {
  return (
    <div className="flex justify-between bg-white md:px-10 px-1 py-2">
      <Link passHref href="https://pes.edu/">
        <a className="w-[90px] md:w-[500px]">
          <Image unoptimized src={logo} alt="picture didnt load" />
        </a>
      </Link>

      <div className="flex justify-center items-center px-2">
        <Link href="/registrations" passHref>
          <button
            className="text-req-green border-req-green border-2 py-1 md:py-2 px-6 md:px-8 outline-none rounded-lg text-lg"
            style={{
              backdropFilter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            }}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NavbarRegister
