import Head from 'next/head'
import Page from '../../components/common/Page'
import OnlineRegisterForm from '../../components/register/OnlineRegisterForm'

export default function Registrations() {
  return (
    <div>
      <Head>
        <title>Samarpana 2022 | Registrations</title>
        <meta name="description" content="" />
        <link rel="icon" href="/samarpana.ico" />
      </Head>
      <Page nopadding>
        <h1 className="text-grey text-center md:text-5xl text-4xl py-11 font-medium">
          Registration
        </h1>
        <div className="flex flex-col">
          <div className="">
            <OnlineRegisterForm />
          </div>
        </div>
      </Page>
    </div>
  )
}
