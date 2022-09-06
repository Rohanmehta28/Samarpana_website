import Head from 'next/head'
import Page from '../../components/common/Page'
import Image from 'next/image'
import { images } from './trialImages'

export default function Samarpana20() {
  return (
    <div>
      <Head>
        <title>Samarpana 2022 | Samarpana 20</title>
        <meta name="description" content="" />
        <link rel="icon" href="/at22_icon.ico" />
      </Head>
      <Page nopadding>  
        <div className='flex justify-center font-manrope font-bold text-[50px] py-20'>
            Samarpana '20
        </div>
        <div className='lg:columns-3 md:columns-2 columns-1 gap-2 px-16 pb-24'>
          {
            images.map((item)=>{
              return <div className='mb-4'>
                <Image src={item} layout={"responsive"}/>
              </div>
            })
          }
        </div>
      </Page>
    </div>
  )
}
