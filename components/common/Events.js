import Image from 'next/image'
import Link from 'next/link'

function Event(props) {
  return (
    <div>
      <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img
          className=" object-cover w-full h-64 lg:h-96 "
          src={props.image}
          alt="Flower and sky"
        />

        <div className="absolute top-[20%] lg:top-[40%] left-0 px-6 py-12 w-50% lg:w-full">
          <h4 className="mb-3 text-2xl lg:text-5xl lg:pb-4 font-semibold tracking-tight text-white">
            {props.eventtitle}
          </h4>
          <p className="leading-normal text-[10px] w-[90%] lg:text-xl lg:w-[80%] text-gray-100 ">
            {props.eventdescription}
          </p>

          <Link href={props.next} passHref>
            <div className="absolute top-[80%] left-[85%] md:top-[70%] md:left-[95%]">
              <Image
                unoptimized
                alt="picture didnt load"
                src="/assets/front_arrow.png"
                height={40}
                width={40}
                style={{ margin: 'auto' }}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Event
