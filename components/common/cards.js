import Link from 'next/link'
function Cards(props) {
  return (
    <div className="max-w-xs mx-8 mb-16 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105">
      <img
        className="w-full h-48 rounded-t-1xl"
        src={props.image}
        alt={props.alt}
      />
      <div className="px-6 py-4">
        <p className="leading-normal text-gray-700">{props.description}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="  p-8">
          <Link href={props.route} passHref>
            <button className=" bg-white hover:  justify-center text-blue-900 font-semibold py-2 px-16 border-[2px] border-[#2b4053] hover:border-[#7DBEC2] hover:bg-[#2b4053] hover:text-white">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Cards
