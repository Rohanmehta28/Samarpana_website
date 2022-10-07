import { confirmable, createConfirmation } from 'react-confirm'

function ConfirmDialog({ show, proceed, confirmation, options }) {
  return (
    <div
      className={`${
        show
          ? 'visible bg-slate-600 bg-opacity-10'
          : 'hidden bg-white bg-opacity-0'
      } absolute top-0 left-0 right-0 bottom-0 transition-all duration-150 ease-in-out grid place-items-center`}
    >
      <div
        className={`p-5 bg-white rounded-lg flex flex-col gap-4 justify-center align-center`}
      >
        <p className="font-bold text-step-2">{confirmation}</p>
        <div className="flex gap-4">
          <button
            onClick={() => proceed(true)}
            className="btn btn-black flex-1"
          >
            Yes
          </button>
          <button
            onClick={() => proceed(false)}
            className="btn btn-white flex-1"
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export const confirm = (confirmation) =>
  createConfirmation(confirmable(ConfirmDialog))({ confirmation })
// export default ConfirmDialog
