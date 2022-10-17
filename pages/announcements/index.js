import Head from 'next/head'
import Page from '../../components/common/Page'
import Announcement from '../../components/common/Announcement_card'

export default function Announcements() {
  return (
    <>
      <Head>
        <title>Samarpana 2022 | Announcements</title>
        <meta name="description" content="" />
        <link rel="icon" href="/samarpana.ico" />
      </Head>
      <Page nopadding>
        <div className="min-h-screen">
          <h1 className="text-grey text-center md:text-5xl text-4xl py-11 font-medium">
            Announcements
          </h1>
          <Announcement />
        </div>
        {/* <Announcement /> */}
      </Page>
    </>
  )
}
