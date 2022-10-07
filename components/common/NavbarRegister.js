import React from 'react'
import Image from 'next/image'
import logo from './logo.svg'
import Link from 'next/link'

const NavbarRegister = () => {
  return (
    <div className='flex justify-between bg-white px-10 py-2'>
      <Image
        src={logo}
        width={130} />
      <div className='flex justify-center items-center px-2'>
        <Link href='/registrations'>
          <button className='text-req-green border-req-green border-2 py-2 px-8 outline-none rounded-lg text-lg' style={{
            backdropFilter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
          }}>
            Register
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NavbarRegister