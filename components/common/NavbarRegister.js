import React from 'react'
import Image from 'next/image'
import logo from './logo.svg'
import Link from 'next/link'

const NavbarRegister = () => {
  return (
    <div className='flex justify-between bg-white px-10 py-2'>
      <Link passHref href="https://pes.edu/">
         <a className="w-[90px] md:w-[500px]">
           <Image
            src={logo}/>
          </a>
      </Link>
     
      <div className='flex justify-center items-center px-2'>
        <Link href='/registrations'>
          <button className='text-req-green border-req-green border-2 py-1 md:py-2 px-6 md:px-8 outline-none rounded-lg text-lg' style={{
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