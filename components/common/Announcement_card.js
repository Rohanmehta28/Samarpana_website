function Announcement(props) {
  return (
    <div className="flex justify-center">
      <div className="w-4/5 sm:w-1/2 rounded-xl overflow-hidden shadow-lg bg-slate-300 m-8">
        <div className="px-6 sm:px-6 py-4">
          <div className="font-bold text-xl mb-2">Marathon</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="block sm:flex justify-center">
          <div className=" sm:flex justify-start w-1/2 px-6">
            <div className="sm:mt-2 mb-4 bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700">
              26/8/2022
            </div>
          </div>
          <div className="sm:flex justify-end w-1/2 mx-0 px-6">
            <button className="sm:mb-4 mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Announcement
