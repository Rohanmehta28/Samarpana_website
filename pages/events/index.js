import Head from 'next/head'
import Page from '../../components/common/Page'
import Event from '../../components/common/Events'

function Events() {
  return (
    <>
      <Head>
        <title>Samarpana 2022 | Events</title>
        <meta name="description" content="" />
        <link rel="icon" href="/at22_icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
          class="grid xlg:justify-items-center md:grid gap-10 pl-8 pr-8 pb-8"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Event
            image="/assets/run2.png"
            eventtitle="Samarpana Run"
            next="/events/ev/1.js"
            eventdescription="This run aims at bridging the gap between civil society and the Armed Forces, hence creating awareness among all citizens about the sacrifices of our martyrs and their families"
          />
          <Event
            image="/assets/workshop.png"
            eventtitle="Workshops and legal aids"
            next="/events/ev/2.js"
            eventdescription="Entrepreneurship Workshops and Women Empowerment workshops are conducted every year for the benefit of the martyrs' families. Families undergo check-ups and medicines are prescribed and distributed, free of cost."
          />
          <Event
            image="/assets/e1.jpg"
            eventtitle="Bake Sale"
            next="/events/ev/3.js"
            eventdescription="Bake Sales have been organized every year since 2013. Students sell homemade products and the profits are directed toward the welfare of the martyrs' families"
          />
          <Event
            image="/assets/testimonials.png"
            eventtitle="Testimonials"
            next="/events/ev/4.js"
            eventdescription="Samarpana was co-founded with the intent of recognizing the unsung heroes of our country (Post-Mumbai blasts) and serving the soldier community. "
          />
          <Event
            image="/assets/sports.png"
            eventtitle="Army VS PESU Sports"
            next="/events/ev/5.js"
            eventdescription="In the spirit of sportsmanship, Samarpana brings to you, ARMY v/s PESU sports, where students of PES will be playing at odds with our Army jawans"
          />
          <Event
            image="/assets/cultural.png"
            eventtitle="Cultural Evenings"
            next="/events/ev/6.js"
            eventdescription="Every year a cultural evening is organized which is attended by families, officers, and over 500 jawans. Various college cultural & dance groups perform for the families"
          />
          <Event
            image="/assets/talks.png"
            eventtitle="Samarpana talks"
            next="/events/ev/7.js"
            eventdescription="A session where eminent guest speakers from the army share their experiences with the students and the army community. Here the guest speakers discuss the various facets of life in various fields."
          />
        </div>
      </Page>
    </>
  )
}

export default Events
