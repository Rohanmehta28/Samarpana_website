import Image from 'next/image'
import Link from 'next/link'
import soldiers from './soldiers.png'

function AboutUsNew() {
  return (
    <>
      <div className="uppercase font-manrope non-italic font-[600] md:text-[40px] text-[30px] leading-[55px] text-center tracking-[0.14em] 2xl:text-[3em] text-[#2B4053] md:pb-10 pb-2">
        About Us
      </div>
      <div className="relative w-screen md:h-screen h-80">
        <div className="absolute w-screen md:h-full h-full">
          <Image
            unoptimized
            src={soldiers}
            alt="soldiers marching"
            layout="fill"
          />
        </div>

        <div className="absolute lg:w[50%] md:py-56 md:px-24 py-16 px-12">
          <div className="text-white flex justify-start md:text-6xl text-2xl">
            Make a difference
          </div>
          <div className="text-white flex justify-start md:text-3xl md:py-4 py-2 w-[70%] pb-8 md:pb-12">
            Samarpana{"'"}s motive is to make the lives of martyrs{"'"} families
            a little more joyful.
          </div>
          {/* <button className='text-center text-white border-[0.1em] my-[5%] px-[5%] py-[1%] border-[#5CF3BE] font-manrope font-[600] text-[1.5em] tracking-[0.14em] 2xl:text-[2em] 2xl:tracking-[0.2em] 2xl:mb-[10%] rounded-[10px]'> */}
          <Link href="/registrations" passHref>
            <button className="text-center text-white border-req-green1 border-4 px-12 py-1 rounded-lg md:text-4xl md:py-3">
              Register
            </button>
          </Link>
          <div>
            {/* <div className='absolute top-1/2 left-1/2 2xl:-translate-y-[260%] py-11'>
                        <div className="uppercase font-manrope non-italic font-[600] text-[40px] leading-[55px] text-center tracking-[0.14em] 2xl:text-[3em] text-[#2B4053] pb-10">
                            About Us
                        </div>
                    </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsNew
