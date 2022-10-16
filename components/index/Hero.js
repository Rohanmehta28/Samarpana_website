import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import running from './running2.png'
import samarpana from './samarpana.png'

function Hero() {
  const router = useRouter()
  // const handleRegister = () => {
  //   router.push('/registrations')
  // }

  return (
    <div className="relative">
      <div className="absolute w-screen md:h-full h-96">
        <Image unoptimized src={running} layout="fill" alt="Running picture" />
      </div>
      <div className="relative md:py-32 py-8">
        <div className="flex md:justify-center md:items-center md:pb-6 px-12 pt-1">
          <Image
            unoptimized
            src={samarpana}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            alt="samarpana image"
          />
        </div>
        <div className="md:text-[25px] md:text-lg text-[12px] font-manrope text-white text-center tracking-widest stroke-black stroke-2 lg:px-96 px-16">
          Samarpana, a student-run initiative of PES University, works for the
          benefit of martyrs{"'"}families by raising awareness and collecting
          funds through Marathons and other fun events.
        </div>
        <div className="flex justify-center md:pt-48 pt-8">
          <Link href="/registrations" passHref>
            <button
              className="font-manrope text-[20px] text-white md:py-3 md:px-24 px-12 py-2 rounded-l-full rounded-r-full"
              style={{
                border: '3px solid #5CF3BE',
              }}
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
