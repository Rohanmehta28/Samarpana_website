import Image from 'next/image'
import { useState } from 'react'
import OpacityAnimation from '../common/OpacityAnimation'
import running from './running2.png'
import samarpana from './samarpana.png'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AboutUs from './AboutUs'

function Hero() {
  const router = useRouter()
  // const handleRegister = () => {
  //   router.push('/registrations')
  // }

  return (
    <div className='relative'>
      <div className='absolute w-screen h-full'>
        <Image
          src={running}
          layout='fill'
        />
      </div>
      <div className='relative py-32'>
        <div className='flex justify-center items-center pb-6 px-12'>
          <Image
            src={samarpana}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }} />
        </div>
        <div className='md:text-[25px] md:text-lg text-sm font-manrope text-white text-center tracking-widest stroke-black stroke-2 lg:px-96 px-16'>
          Samarpana, a student-run initiative of PES University, works for the benefit of martyrs' families by raising awareness and collecting funds through Marathons and other fun events.
        </div>
        <div className='flex justify-center md:pt-48 pt-8'>
          <Link href='/registrations'>
            <button className='font-manrope text-[20px] text-white py-3 px-24 rounded-l-full rounded-r-full' style={{
              border: '3px solid #5CF3BE',
            }}>Register</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero