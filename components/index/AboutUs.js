import running from "./running.png"
import soldier from "./soldier.png"
import Image from 'next/image'
function AboutUs() {
  return <div className="mb-1">
    <div className="text-7xl px-24">About Us</div>
    <div className="flex lg:h-96">
      <div className="w-3/5 pt-6 text-2xl px-24">
        Samarpana is student initiative which seeks to make our community aware of the price that we pay for our freedom and express our gratitude to those who toil and put their lives on the line so that we wouldn't have to. This club has been supporting and helping martyrs' families by conducting medical camp, legal camp , cultural events , empowerment talks and felicitation events from past 11 years. Till date Samarpana has reached 120+ martyrs' families.
        <br />In order to raise funds team Samarpana conducts following events :
      </div>
      <div className="w-2/5 z-50 relative bottom-[500px]">
        <div className="flex justify-end"><Image src={soldier} className='z-50' /></div>

        <div className="flex justify-end px-20 z-20">
          <div className="bg-yellow-100 relative bottom-24" style={{
            width: '250px',
            height: "100px",
            borderRadius: "100%",
            backgroundColor: "#e6dfcf"
          }}></div>
        </div>
      </div>

    </div>

    <div className="flex justify-start items-center px-12 py-6">
      <Image src={running} className="w-2/5" />
      <div className="w-3/5 block" >
        <div style={{ color: "#184D7D" }} className='flex justify-end text-7xl relative left-32'>Bakesale</div>
        <div style={{ color: "#61812E" }} className='text-5xl relative left-28 px-12'>Basketball</div>
        <div className="md:text-9xl relative left-32 md:px-24" style={{
          color: '#FFA800'
        }}>Marathon
        </div>
        <div style={{ color: "#61812E" }} className='float-right relative left-20 px-20 text-4xl'>Talks</div>
        <div style={{ color: "#184D7D" }} className='text-7xl'>Kabbadi</div>
      </div>
    </div>
    <div className="py-16" style={{
      backgroundColor: "#E0D7C9"
    }}><div className="flex justify-center text-7xl pb-20">Sponsers</div>
      <div className="flex justify-center items-center ">
        <div className="w-52 h-52 bg-sky-400 mx-3" style={{
          backgroundColor: "#979188",
          clipPath:'polygon(30% 0%, 70% 0%, 100% 30%, 100% 74%, 70% 100%, 30% 100%, 0 73%, 0 30%)'
        }}></div>
        <div className="w-72 h-72 bg-sky-400 mx-3" style={{
          backgroundColor: "#979188",
          clipPath:'polygon(30% 0%, 70% 0%, 100% 30%, 100% 74%, 70% 100%, 30% 100%, 0 73%, 0 30%)'
        }}></div>
        <div className="w-52 h-52 bg-sky-400 mx-3" style={{
          backgroundColor: "#979188",
          clipPath:'polygon(30% 0%, 70% 0%, 100% 30%, 100% 74%, 70% 100%, 30% 100%, 0 73%, 0 30%)'
        }}></div>
      </div>
    </div>
  </div>
}

export default AboutUs
