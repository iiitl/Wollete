import React from 'react'

export default function ReadMoreBlack() {
  return (
    <div>
      <button
        type="button"
        className="group inline-flex pt-[10px] pr-[16px] pb-[9px] pl-[16px] items-center gap-[8px] bg-transparent text-center text-[#c8c0c0] text-[16px] font-bold not-italic leading-[150%]
            hover:text-[#7E7E7E] active:text-[#131313] transition-all"
      >
        Read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="block group-hover:hidden group-active:hidden"
        >
          <path d="M6 13L11 8.49333L6 4" stroke="white" strokeWidth="1.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="hidden group-hover:block group-active:hidden"
        >
          <path d="M6 13L11 8.49333L6 4" stroke="#7E7E7E" strokeWidth="1.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="hidden group-hover:hidden group-active:block"
        >
          <path d="M6 13L11 8.49333L6 4" stroke="#131313" strokeWidth="1.5" />
        </svg>
      </button>
    </div>
  )
}
