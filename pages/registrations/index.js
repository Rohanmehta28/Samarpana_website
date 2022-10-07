import Head from 'next/head'
import Page from '../../components/common/Page'
import OnlineRegisterForm from '../../components/register/OnlineRegisterForm'

export default function Registrations() {
  return (
    <div>
      <Head>
        <title>Samarpana 2022 | Registrations</title>
        <meta name="description" content="" />
        <link rel="icon" href="/at22_icon.ico" />
      </Head>
      <Page nopadding>
        <h1 className="text-grey text-center text-5xl py-11 font-medium">
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
