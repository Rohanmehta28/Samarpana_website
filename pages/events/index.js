import Head from 'next/head'
import Event from '../../components/common/Events'
import Page from '../../components/common/Page'
import { events } from '../../utils/events'

function Events() {
  return (
    <>
      <Head>
        <title>Samarpana 2022 | Events</title>
        <meta name="description" content="" />
        <link rel="icon" href="/at22_icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Poppins:wght@200;300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Page>
        <h1
          className="text-grey text-center text-5xl font-'Manrope', sans-serif;"
          style={{ paddingBottom: '5%' }}
        >
          EVENTS
        </h1>
        <div
          className="grid xlg:justify-items-center md:grid gap-10 pl-8 pr-8 pb-8"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {Object.keys(events).map((e) => {
            const ev = events[e]
            return (
              <Event
                key={ev.next}
                image={ev.image}
                eventtitle={ev.eventtitle}
                next={ev.next}
                eventdescription={ev.eventdescription}
              />
            )
          })}
        </div>
      </Page>
    </>
  )
}

export default Events
