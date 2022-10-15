import Image from 'next/image'
import manrunning from './manrunning.png'
import eventCardImgOne from './eventcardimg01.png'
import eventCardImgTwo from './eventcardimg02.png'
import eventCardImgThree from './eventcardimg03.png'

function EventsHome() {
  return (
    <div name="events-homepage" className="pt-96">
      <div className="relative">
        <div className="flex justify-center content-center">
          <Image src={manrunning} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="uppercase font-manrope non-italic font-[500] text-[40px] leading-[55px] text-center tracking-[0.14rem] text-[#000]">
            Events
          </div>
        </div>
      </div>

      <div name="cards-1" className="inline-flex">
        <div
          name="event-card-1"
          className="mx-auto my-[5%] max-w-[20%] rounded overflow-hidden shadow-lg"
        >
          <Image src={eventCardImgOne} className="" />
          <div className="px-6 py-4">
            <p className="text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              nunc, platea varius tellus morbi massa vitae. Sagittis placerat
              egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus
              quis lobortis auctor tempus velit consequat.
            </p>
          </div>
          <div className="flex justify-center content-center my-5">
            <button className="uppercase text-base font-[400] text-[20px] border-[2px] border-[#2b4053] px-[25%] py-[5%] hover:border-[#7DBEC2] hover:bg-[#2b4053] hover:text-white">
              Read More
            </button>
          </div>
        </div>

        <div
          name="event-card-2"
          className="mx-auto my-[5%] max-w-[20%] rounded overflow-hidden shadow-lg"
        >
          <Image src={eventCardImgTwo} className="" />
          <div className="px-6 py-4">
            <p className="text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              nunc, platea varius tellus morbi massa vitae. Sagittis placerat
              egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus
              quis lobortis auctor tempus velit consequat.
            </p>
          </div>
          <div className="flex justify-center content-center my-5">
            <button className="uppercase text-base font-[400] text-[20px] border-[2px] border-[#2b4053] px-[25%] py-[5%] hover:border-[#7DBEC2] hover:bg-[#2b4053] hover:text-white">
              Read More
            </button>
          </div>
        </div>

        <div
          name="event-card-3"
          className="mx-auto my-[5%] max-w-[20%] rounded overflow-hidden shadow-lg"
        >
          <Image src={eventCardImgThree} className="" />
          <div className="px-6 py-4">
            <p className="text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              nunc, platea varius tellus morbi massa vitae. Sagittis placerat
              egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus
              quis lobortis auctor tempus velit consequat.
            </p>
          </div>
          <div className="flex justify-center content-center my-5">
            <button className="uppercase text-base font-[400] text-[20px] border-[2px] border-[#2b4053] px-[25%] py-[5%] hover:border-[#7DBEC2] hover:bg-[#2b4053] hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div name="cards-2" className="inline-flex">
        <div
          name="event-card-1"
          className="mx-auto my-[5%] max-w-[20%] rounded overflow-hidden shadow-lg"
        >
          <Image src={eventCardImgOne} className="" />
          <div className="px-6 py-4">
            <p className="text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              nunc, platea varius tellus morbi massa vitae. Sagittis placerat
              egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus
              quis lobortis auctor tempus velit consequat.
            </p>
          </div>
          <div className="flex justify-center content-center my-5">
            <button className="uppercase text-base font-[400] text-[20px] border-[2px] border-[#2b4053] px-[25%] py-[5%] hover:border-[#7DBEC2] hover:bg-[#2b4053] hover:text-white">
              Read More
            </button>
          </div>
        </div>

        <div
          name="event-card-2"
          className="mx-auto my-[5%] max-w-[20%] rounded overflow-hidden shadow-lg"
        >
          <Image src={eventCardImgTwo} className="" />
          <div className="px-6 py-4">
            <p className="text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              nunc, platea varius tellus morbi massa vitae. Sagittis placerat
              egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus
              quis lobortis auctor tempus velit consequat.
            </p>
          </div>
          <div className="flex justify-center content-center my-5">
            <button className="uppercase text-base font-[400] text-[20px] border-[2px] border-[#2b4053] px-[25%] py-[5%] hover:border-[#7DBEC2] hover:bg-[#2b4053] hover:text-white">
              Read More
            </button>
          </div>
        </div>

        <div
          name="event-card-3"
          className="mx-auto my-[5%] max-w-[20%] rounded overflow-hidden shadow-lg"
        >
          <Image src={eventCardImgThree} className="" />
          <div className="px-6 py-4">
            <p className="text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              nunc, platea varius tellus morbi massa vitae. Sagittis placerat
              egestas adipiscing mus eleifend nisl. Eget ultrices fusce cursus
              quis lobortis auctor tempus velit consequat.
            </p>
          </div>
          <div className="flex justify-center content-center my-5">
            <button className="uppercase text-base font-[400] text-[20px] border-[2px] border-[#2b4053] px-[25%] py-[5%] hover:border-[#7DBEC2] hover:bg-[#2b4053] hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsHome
