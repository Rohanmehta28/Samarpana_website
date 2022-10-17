import EventSpecificPage from '../../components/common/EventSpecificPage'
import { events } from '../../utils/events'

function Ev(props) {
  return (
    <EventSpecificPage
      imgUrl={props.event.imgUrl}
      date={props.event.date}
      img1={props.event.img1}
      img2={props.event.img2}
      eventtitle={props.event.eventtitle}
      eventDescp1={props.event.eventDescp1}
      eventDescp2={props.event.eventDescp2}
    />
  )
}

export async function getStaticPaths() {
  // console.log(events)
  const keys = Object.keys(events)
  // console.log(keys)
  const paths = keys.map((key) => ({ params: { eventId: key } }))
  return {
    paths: [...paths],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  let id = context.params.eventId

  let props = {
    event: events[id] || null,
  }
  return {
    props,
  }
}

export default Ev
