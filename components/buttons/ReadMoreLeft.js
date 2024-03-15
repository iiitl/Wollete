import React from 'react'

export default function ReadMoreLeft() {
  return (
    <div>
      <button
        type="button"
        className="group inline-flex pt-[10px] pr-[2px] pb-[9px] pl-[1px] gap-[8px] bg-transparent text-center text-[#FFFFFF] text-[16px] font-bold not-italic leading-[150%]
            hover:text-[#7E7E7E] active:text-[#131313] transition-all"
      >
        Read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="block group-hover:hidden group-active:hidden mt-[4px]"
        >
          <path d="M6 13L11 8.49333L6 4" stroke="white" stroke-width="1.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="hidden group-hover:block group-active:hidden mt-[4px]"
        >
          <path d="M6 13L11 8.49333L6 4" stroke="#7E7E7E" stroke-width="1.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="hidden group-hover:hidden group-active:block mt-[4px]"
        >
          <path d="M6 13L11 8.49333L6 4" stroke="#131313" stroke-width="1.5" />
        </svg>
      </button>
    </div>
  )
}
