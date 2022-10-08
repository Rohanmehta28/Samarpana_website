import Image from 'next/image'
import Announcement from '../common/Announcement_card'
import running from './running.svg'
import manrunning from './manrunning.png'
import Cards1 from '../common/Cards1'
import Cards from '../common/Cards'
import Event from '../../components/common/Events'
function AboutUs() {
  return (
    <div className='relative'>
      {/* <div className="text-step-7 md:px-24  text-center">EVENTS</div> */}
      <div className='relative'>
                <div className='flex justify-center content-center'>
                    <Image src = {manrunning} />
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                    <div className="uppercase font-manrope non-italic font-[500] text-[40px] leading-[55px] text-center tracking-[0.14rem] text-[#000]">
                        Events
                    </div>
                </div>
            </div>
      <div >
      <div class="grid lg:justify-items-center lg:grid-cols-3 pt-9 md:grid-cols-2 ">
      <Cards route="events/ev/1.js" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nunc, platea varius tellus morbi massa vitae. Sagittis placerat egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus quis lobortis auctor tempus velit consequat." image="/assets/image_164.png" alt="Product"/> 
      <Cards1 route="events/ev/1.js" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nunc, platea varius tellus morbi massa vitae. Sagittis placerat egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus quis lobortis auctor tempus velit consequat." image="/assets/image_161.png" alt="Product"/>
      <Cards route="events/ev/1.js" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nunc, platea varius tellus morbi massa vitae. Sagittis placerat egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus quis lobortis auctor tempus velit consequat." image="/assets/image_163.png" alt="Product"/>
      <Cards route="events/ev/1.js" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nunc, platea varius tellus morbi massa vitae. Sagittis placerat egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus quis lobortis auctor tempus velit consequat." image="/assets/image_164.png" alt="Product"/>
      <Cards1 route="events/ev/1.js" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nunc, platea varius tellus morbi massa vitae. Sagittis placerat egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus quis lobortis auctor tempus velit consequat." image="/assets/image_161.png" alt="Product"/>
      <Cards route="events/ev/1.js" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nunc, platea varius tellus morbi massa vitae. Sagittis placerat egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus quis lobortis auctor tempus velit consequat." image="/assets/image_161.png" alt="Product"/>
      </div>
       <div className="hidden md:block w-2/5 z-50 relative bottom-[550px]">
          <div className="hidden lg:flex lg:justify-end">
          </div>
          <div className="flex justify-end px-20 z-20">
            </div>
        </div>
      </div>

      {/* <div className="flex justify-start items-center px-12 py-6">
        <Image src={running} className="w-2/5" alt="human running" />
        <div className="w-3/5 block">
          <div
            style={{ color: '#184D7D' }}
            className="flex justify-end text-7xl relative left-32"
          >
            Bakesale
          </div>
          <div
            style={{ color: '#61812E' }}
            className="text-5xl relative left-28 px-12"
          >
            Basketball
          </div>
          <div
            className="md:text-9xl relative left-32 md:px-24"
            style={{
              color: '#FFA800',
            }}
          >
            Marathon
          </div>
          <div
            style={{ color: '#61812E' }}
            className="float-right relative left-20 px-20 text-4xl"
          >
            Talks
          </div>
          <div style={{ color: '#184D7D' }} className="text-7xl">
            Kabbadi
          </div>
        </div>
      </div> */}
      {/* <div
        className="py-16"
        style={{
          backgroundColor: '#E0D7C9',
        }}
      >
        <div className="flex justify-center text-7xl pb-20">Sponsors</div>
        <div className="flex justify-center items-center md:flex-row flex-col gap-2">
          <div
            className="w-52 h-52 bg-sky-400 mx-3"
            style={{
              backgroundColor: '#979188',
              clipPath:
                'polygon(30% 0%, 70% 0%, 100% 30%, 100% 74%, 70% 100%, 30% 100%, 0 73%, 0 30%)',
            }}
          ></div>
          <div
            className="w-72 h-72 bg-sky-400 mx-3"
            style={{
              backgroundColor: '#979188',
              clipPath:
                'polygon(30% 0%, 70% 0%, 100% 30%, 100% 74%, 70% 100%, 30% 100%, 0 73%, 0 30%)',
            }}
          ></div>
          <div
            className="w-52 h-52 bg-sky-400 mx-3"
            style={{
              backgroundColor: '#979188',
              clipPath:
                'polygon(30% 0%, 70% 0%, 100% 30%, 100% 74%, 70% 100%, 30% 100%, 0 73%, 0 30%)',
            }}
          ></div>
        </div>
      </div> */}
    </div>
  )
}

export default AboutUs

