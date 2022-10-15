import Image from 'next/image'
import Cards from '../common/Cards'
import Cards1 from '../common/Cards1'
import manrunning from './manrunning.png'
function AboutUs() {
  return (
    <div className="relative">
      {/* <div className="text-step-7 md:px-24  text-center">EVENTS</div> */}

      <div className="flex justify-center">
        <hr className="border-t-2 border-req-green1 my-10 md:my-12 w-[200px]"></hr>
      </div>

      <div class="grid lg:justify-items-center lg:grid-cols-3 pt-9 md:grid-cols-2 ">
        <Cards
          route="events/ev/1.js"
          description="This run aims at bridging the gap between civil society and the Armed Forces,hence creating awareness among all citizens about the sacrifices of our martyrs and their families
            The run is scheduled on 13th November."
          image="/assets/run.png"
          alt="Product"
        />

        <Cards1
          route="events/ev/2.js"
          description="Entrepreneurship Workshops and Women Empowerment workshops are conducted every year for the benefit of the martyrs' families.
            Families undergo check-ups and medicines are prescribed and distributed.
            "
          image="/assets/workshop.png"
          alt="Product"
        />

        <Cards
          route="events/ev/3.js"
          description="Bake Sales have been organized every year since 2013. Students sell homemade products and the profits are directed toward the welfare of the martyrs' families.
          
           In the year 2017, this event saw a footfall of 2000 people. 
"
          image="/assets/e1.jpg"
          alt="Product"
        />

        <Cards
          route="events/ev/7.js"
          description="A session where eminent guest speakers from the army share their experiences with the students and
             the army community. Here they discuss the various facets of life."
          image="/assets/talks.png"
          alt="Product"
        />

        <Cards1
          route="events/ev/5.js"
          description="In the spirit of sportsmanship, Samarpana brings to you, ARMY v/s PESU sports, where students of PES will be playing at odds with our Army jawans."
          image="/assets/sports.png"
          alt="Product"
        />

        <Cards
          route="events/ev/6.js"
          description="The renowned musical duo, Archana Udupa, and Srinivas Udupa graced us with their musical expertise, moving the audience with their stunning performance. "
          image="/assets/cultural.png"
          alt="Product"
        />
      </div>
    </div>
  )
}

export default AboutUs
