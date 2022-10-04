import Image from 'next/image'
import { useState } from 'react'
import OpacityAnimation from '../common/OpacityAnimation'
import running from './running2.png'
import samarpana from './samarpana.png'
function Hero() {
  return (
    <div className='my-96'>
      <Image
        src={running}
        layout='fill'
      />
      <div className='absolute top-[12%]'>
        <div className='flex justify-center py-16'>
          <Image
            src={samarpana}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }} />
        </div>
        <div className='text-[25px] font-manrope text-white text-center px-96'>
          Samarpana, a student-run initiative of PES University, works for the benefit of martyrs' families by raising awareness and collecting funds through Marathons and other fun events.
        </div>
        <div className='flex justify-center py-16'>
          <button className='font-manrope text-[20px] text-white py-3 px-24 rounded-l-full rounded-r-full' style={{
          border: '3px solid #5CF3BE',
        }}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
