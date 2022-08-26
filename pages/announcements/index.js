import Head from 'next/head'
import Page from '../../components/common/Page'
import Announcement from '../../components/common/Announcement_card'

export default function Announcements() {
  return (
    <div>
      <Head>
        <title>Samarpana 2022 | Announcements</title>
        <meta name="description" content="" />
        <link rel="icon" href="/at22_icon.ico" />
      </Head>
      <Page nopadding>
        <h1 className="text-grey text-center text-5xl py-11 font-medium">
          Announcements
        </h1>
        <Announcement />
        <Announcement />
      </Page>
    </div>
  )
}
