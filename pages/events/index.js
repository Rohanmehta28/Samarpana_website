import Head from 'next/head'
import Page from '../../components/common/Page'
import Event from '../../components/common/Events'




function Events(){
    return (
    <>
      <Head>
        <title>Samarpana 2022 | Events</title>
        <meta name="description" content="" />
        <link rel="icon" href="/at22_icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Poppins:wght@200;300&display=swap" rel="stylesheet"/>

      </Head>
      <Page>
        <h1 className="text-grey text-center text-5xl py-11 font-'Manrope', sans-serif;">EVENTS</h1>

        <Event bg = "/assets/e1.jpg"  eventtitle="Bakesale" next="/events/ev/1.js"/>
       <Event bg = "/assets/bb.png"   eventtitle="Basketball" next="/events/ev/2.js" />
       <Event bg = "/assets/mic.png"  eventtitle="Talks" next="/events/ev/3.js" />
       <Event bg = "/assets/e1.jpg"  eventtitle="Bakesale" next="/events/ev/4.js" />
       <Event bg = "/assets/bb.png"  eventtitle="Basketball" next="/events/ev/5.js"  />        
       <Event bg = "/assets/mic.png"  eventtitle="Talks" next="/events/ev/6.js" />


    </Page>
    </>
  )
}

export default Events;




















