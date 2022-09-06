import Image from 'next/image'
import { useState } from 'react'
import OpacityAnimation from '../common/OpacityAnimation'

function Letter(props) {
  const [visible, setVisible] = useState(false)
  const handleMouseEnter = (e) => {
    setVisible((prev) => true)
  }

  const handleMouseOver = (e) => {}
  const handleMouseOut = (e) => {
    setVisible((prev) => false)
  }
  return (
    <div className="relative w-max">
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '100%',
          position: 'relative',
          border: '1px solid black',
          display: 'none',
        }}
      >
        <Image
          layout="fill"
          src={props.url}
          alt={props.url}
          className="overflow-hidden"
        />
      </div>
      <span
        onMouseEnter={handleMouseEnter}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="heroLetter text-step-10"
        style={{ backgroundImage: `url(${props.url})` }}
      >
        {props.children}
      </span>
    </div>
  )
}

function Hero() {
  let letters = [
    {
      letter: 'S',
      url: '/assets/hero_p1.jpeg',
    },
    {
      letter: 'A',
      url: '/assets/hero_p2.jpeg',
    },
    {
      letter: 'M',
      url: '/assets/hero_p3.jpeg',
    },
    {
      letter: 'A',
      url: '/assets/hero_p4.jpeg',
    },
    {
      letter: 'R',
      url: '/assets/hero_p5.jpeg',
    },
    {
      letter: 'P',
      url: '/assets/hero_p6.jpeg',
    },
    {
      letter: 'A',
      url: '/assets/hero_p7.jpeg',
    },
    {
      letter: 'N',
      url: '/assets/hero_p8.jpeg',
    },
    {
      letter: 'A',
      url: '/assets/hero_p9.jpeg',
    },
  ]
  return (
    <div className="relative w-full h-[50vh] md:h-screen bg-[#E0D7C9]">
      <OpacityAnimation delay={0.7}>
        <div className="absolute right-0 w-full md:w-1/2 h-full">
          <div className="relative w-full h-full">
            <Image
              layout="fill"
              src={'/assets/soldier-hero.png'}
              alt="soldier"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
      </OpacityAnimation>

      <OpacityAnimation className="h-full">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-center">
            <div className="flex items-center justify-center ">
              {letters.map((x) => (
                <Letter url={x.url} key={x.url}>
                  {x.letter}
                </Letter>
              ))}
            </div>
            <p className="w-full tracking-[1rem] md:tracking-[2.6rem] text-step-4 text-center font-bold">
              FALLEN BUT NOT FORGOTTEN
            </p>
          </h1>
        </div>
      </OpacityAnimation>
    </div>
  )
}

export default Hero
