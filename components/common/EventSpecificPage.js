import Image from 'next/image'
import Link from 'next/link'
import manrunning from './manrunning.png'
import Page from './Page'
import Head from 'next/head'

function EventSpecificPage(props) {
  return (
    <>
      <Head>
        <title>{`Samarpana 2022 | ${props.eventtitle}`}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/samarpana.ico" />
      </Head>
      <Page>
        {/* <div className="relative">
          <div className="flex justify-center content-center">
            <Image unoptimized alt="picture didnt load" src={manrunning} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="uppercase font-manrope non-italic font-[500] text-[40px] leading-[55px] text-center tracking-[0.14rem] text-[#000]">
              Events
            </div>
          </div>
        </div> */}

        <div className="p-4 md:p-10 relative">
          <img
            className="w-full h-48 md:h-96 rounded-t-1xl"
            src={props.imgUrl}
            alt={props.alt}
          />

          <div className="absolute md:bottom-20 bottom-6 left-0 right-0 px-4 py-1">
            <h4
              className="text-center lg:text-step-8 text-step-5 lg:pb-16 pb-14 font-'Poppins' tracking-wider"
              style={{ color: '#FFFFFF' }}
            >
              {props.eventtitle}
            </h4>
            <div style={{ width: '140%' }}></div>
          </div>

          <Link href="/events" passHref>
            <div className="absolute top-6 left-6 md:top-16 md:left-16 cursor-pointer">
              <Image
                unoptimized
                alt="picture didnt load"
                src="/assets/back.png"
                height={40}
                width={40}
                style={{ margin: 'auto' }}
              />
            </div>
          </Link>
        </div>

        <div className="px-4 sm:px-0 sm:mx-auto w-full sm:w-1/2 lg:w-1/3 h-12 md:h-24 my-4">
          <div className="h-full rounded-lg border-2 border-black flex gap-4 items-center justify-center">
            <div className="mt-2">
              <Image
                unoptimized
                alt="picture didnt load"
                src={'/assets/calendar.png'}
                height={30}
                width={30}
                style={{
                  margin: 'auto',
                }}
              />
            </div>
            <div>
              <p className="font-'red-hat' text-step-1 md:text-step-2 lg:text-step-3">
                {props.date}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col md:gap-14 gap-2 items-center justify-center">
          <div className="flex flex-col-reverse md:flex-row gap-2 items-center p-6">
            <div className="md:w-1/2 text-justify text-xl md:pr-2">
              {props.eventDescp1}
            </div>

            <div className="md:w-1/2 md:ml-36">
              <img
                className="h-48 md:h-72 lg:h-80 xl:h-96 rounded-md mx-auto"
                src={props.img1}
                alt="product"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 items-center p-6">
            <div className="md:w-1/2 md:mr-24">
              <img
                className="h-48 md:h-72 lg:h-80 xl:h-96 rounded-md mx-auto"
                src={props.img2}
                alt="product"
              />
            </div>
            <div className="md:w-1/3 text-justify text-xl md:pl-1">
              {props.eventDescp2}
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}
export default EventSpecificPage
