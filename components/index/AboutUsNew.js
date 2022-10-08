import Image from 'next/image'
import soldiers from './soldiers.png'

function AboutUsNew()
{
    return (
        <div className="relative pt-20">
                <div>
                    <Image src = {soldiers} alt = "soldiers marching" layout='responsive'/>

                    <div className="absolute top-[50%] left-[25%] -translate-y-[50%] -translate-x-[25%]">
                        <div className='max-w-[50%] font-serif non-italic font-[400] text-[48px] leading-[55px] tracking-[0.01em] 2xl:max-w-[60%] 2xl:text-[4em] 2xl:leading-[80px] 2xl:tracking-[0.05em] text-white'>
                            Make a difference all year long
                        </div>
                        <div className='max-w-[50%] text-base non-italic font-[400] text-[22px] leading-[33px] tracking-[0.01em] 2xl:max-w-[60%] 2xl:text-[2em] 2xl:leading-[44px] 2xl:tracking-[0.05em] text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non elit adipiscing arcu blandit sed.
                        </div>
                        <button className='text-center text-white border-[0.1em] my-[5%] px-[5%] py-[1%] border-[#5CF3BE] font-manrope font-[600] text-[1.5em] tracking-[0.14em] 2xl:text-[2em] 2xl:tracking-[0.2em] 2xl:mb-[10%] rounded-[10px]'>
                            Register
                        </button>
                    <div>

                    <div className='absolute top-1/2 left-1/2 2xl:-translate-y-[260%] py-11'>
                        <div className="uppercase font-manrope non-italic font-[600] text-[40px] leading-[55px] text-center tracking-[0.14em] 2xl:text-[3em] text-[#2B4053] pb-10">
                            About Us
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutUsNew