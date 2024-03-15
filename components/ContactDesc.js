import { useState } from 'react'

export default function ContactDesc({ desc, extra }) {
  const [toggle1, setToggle1] = useState(false)
  const [isHovered1, setIsHovered1] = useState(false)
  const handleMouseEnter1 = () => {
    setIsHovered1(true)
  }
  const handleMouseLeave1 = () => {
    setIsHovered1(false)
  }

  return (
    <div>
      <div
        className={`${
          !toggle1 ? 'flex justify-between' : 'hidden'
        } mt-12 pb-4 border-b-[1px] border-b-[black]`}
      >
        <div className="text-body-bold">{desc}</div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          onClick={() => {
            setToggle1(!toggle1)
          }}
        >
          <rect
            width="40"
            height="40"
            rx="20"
            fill={isHovered1 ? '#D9D9D9' : 'white'}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          />
          <path
            d="M20 10V19.7561M20 19.7561V30M20 19.7561H10M20 19.7561H30"
            stroke="#131313"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div
        className={`${
          toggle1 ? 'flex flex-col justify-between ' : 'hidden'
        } mt-12 pb-4 border-b-[1px] border-b-[black]`}
      >
        <div className="flex justify-between">
          <div className="text-body-bold text-[#0E72E8]">{desc}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            onClick={() => {
              setToggle1(!toggle1)
            }}
          >
            <rect
              width="40"
              height="40"
              rx="20"
              fill={isHovered1 ? '#D9D9D9' : 'white'}
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            />
            <path d="M10 19.7561H30" stroke="#0E72E8" stroke-linecap="round" />
          </svg>
        </div>

        <div className="mt-6 text-body-regular">{extra}</div>
      </div>
    </div>
  )
}
