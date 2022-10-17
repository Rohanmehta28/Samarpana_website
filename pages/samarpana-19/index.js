import Head from 'next/head'
import Image from 'next/image'
import Page from '../../components/common/Page'
import { images } from '../../utils/trialImages'

export default function Samarpana20() {
  return (
    <div>
      <Head>
        <title>Samarpana 2022 | Samarpana 19</title>
        <meta name="description" content="" />
        <link rel="icon" href="/samarpana.ico" />
      </Head>
      <Page nopadding>
        <div className="text-grey text-center md:text-5xl text-4xl py-11 font-medium">
          Samarpana &apos;19
        </div>
        <div className="lg:columns-3 md:columns-2 columns-2 gap-2 lg:px-16 md:px-16 px-8 pb-24">
          {images.map((item) => {
            return (
              <div className="mb-4" key={item}>
                <Image
                  className="rounded-xl"
                  unoptimized
                  src={item}
                  layout={'responsive'}
                  alt={item}
                />
              </div>
            )
          })}
        </div>
      </Page>
    </div>
  )
}
