import Link from 'next/link'
function Event(props) {
  return (
    <div>
      <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img
          class=" object-cover w-full h-64 lg:h-96 "
          src={props.image}
          alt="Flower and sky"
        />

        <div class="absolute top-[20%] lg:top-[40%] left-0 px-6 py-12 w-50% lg:w-full">
          <h4 class="mb-3 text-2xl lg:text-5xl lg:pb-4 font-semibold tracking-tight text-white">
            {props.eventtitle}
          </h4>
          <p class="leading-normal text-[10px] w-[90%] lg:text-xl lg:w-[80%] text-gray-100 ">
            {props.eventdescription}
          </p>
          <div className="flex justify-end">
            <Link href={props.next}>
              <img
                src="/assets/front_arrow.png"
                className="float-right ml-[27%] p-[20%] lg:p-[10%] mt-[-23%] mb-[-23%] lg:mb-1 text-xl font-semibold  text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
