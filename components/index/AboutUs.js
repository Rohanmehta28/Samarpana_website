import { events } from '../../utils/events'
import Cards from '../common/Cards'

function AboutUs() {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <hr className="border-t-2 border-req-green1 my-10 md:my-12 w-[200px]"></hr>
      </div>

      <div className="grid lg:justify-items-center lg:grid-cols-3 pt-9 md:grid-cols-2 ">
        {Object.keys(events).map((e) => {
          const ev = events[e]
          if (e !== 'testimonials') {
            return (
              <Cards
                key={ev.next}
                route={ev.next}
                description={ev.eventdescription}
                image={ev.image1}
                alt={ev.eventtitle}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default AboutUs
