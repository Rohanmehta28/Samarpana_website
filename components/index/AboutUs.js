import thirteen from "./thirteen.png"
import running from "./running.png"
import Image from 'next/image'
function AboutUs() {
  return <div className="mb-1 py-12" style={{
    backgroundColor: "#000000"
  }}>
    <div className="flex justify-center text-white text-4xl">About Us</div>
    <div className="flex py-4 px-48">
      <div className="w-3/5 text-white pt-24 lg:px-24 text-lg">
        Samarpana is student initiative which seeks to make our community aware of the price that we pay for our freedom and express our gratitude to those who toil and put their lives on the line so that we wouldn't have to. This club has been supporting and helping martyrs' families by conducting medical camp, legal camp , cultural events , empowerment talks and felicitation events from past 11 years. Till date Samarpana has reached 120+ martyrs' families.
        <br/>In order to raise funds team Samarpana conducts following events :


      </div>
      <div className="w-2/5 flex justify-center items-center">
        <Image src={thirteen} /><div className="text-white mb-24">th edition</div>
      </div>
    </div>
    <div className="flex justify-start items-center">
      <Image src={running} />
      <div className="w-3/5 block" >
        <div style={{ color: "#88BBEA" }} className='text-6xl'>Kabbadi</div>
        <div style={{ color: "#88BBEA" }} className='float-right px-52 text-4xl'>Talks</div>
        <div className="lg:text-9xl relative px-24" style={{
          color: '#FFA800'
        }}>Marathon
        </div>
        <div style={{ color: "#88BBEA" }} className='float-right px-20 text-5xl font-[64]'>Bakesale</div>
        <div style={{ color: "#88BBEA" }} className='pt-10 px-16 text-4xl font-[64]'>BasketBall</div>
      </div>
    </div>
    <div className="flex justify-center items-center py-24">
    <div className="w-52 h-52 bg-sky-400 rounded-full mx-3" style={{
      backgroundColor:"#214FA8"
    }}></div>  
    <div className="w-72 h-72 bg-sky-400 rounded-full mx-3" style={{
      backgroundColor:"#214FA8"
    }}></div>  
    <div className="w-52 h-52 bg-sky-400 rounded-full mx-3" style={{
      backgroundColor:"#214FA8"
    }}></div>  
    </div>
  </div>
}

export default AboutUs
