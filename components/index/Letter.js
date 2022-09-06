import Image from 'next/image'
import { useState } from 'react'

export default function Letter(props) {
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
