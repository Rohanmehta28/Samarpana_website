import Head from 'next/head'
import Page from '../components/common/Page'
import AboutUs from '../components/index/AboutUs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Samarpana 2022</title>
        <meta
          name="description"
          content="Aatmatrisha 2022 PES University | The annual techno-cultural fest of PES University."
        />
        <link rel="icon" href="/at22_icon.ico" />
      </Head>
      <Page nopadding>
        <h1>Samarpana</h1>
        <AboutUs/>
      </Page>
    </div>
  )
}
