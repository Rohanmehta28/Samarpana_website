import Head from 'next/head'
import Page from '../components/common/Page'
import AboutUs from '../components/index/AboutUs'
import AboutUsNew from '../components/index/AboutUsNew'
import Hero from '../components/index/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Samarpana 2022</title>
        <meta name="description" content="" />
        <link rel="icon" href="/samarpana.ico" />
      </Head>
      <Page nopadding>
        <Hero />
        <AboutUs />
        <AboutUsNew />
      </Page>
    </div>
  )
}
