export default function ReadMoreBlue() {
  return (
    <div>
      <button
        type="button"
        className="group inline-flex pt-[10px] pr-[16px] pb-[9px] pl-[16px] items-center gap-[8px] bg-transparent text-center text-[#0E72E8] text-[16px] font-bold not-italic leading-[150%]
            hover:text-[#0C5CBC] active:text-[#00489E] transition-all"
      >
        Read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="block group-hover:hidden"
        >
          <path d="M6 13L11 8.49333L6 4" stroke="#0E72E8" strokeWidth="1.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="hidden group-hover:block group-active:block"
        >
          <path d="M6 13L11 8.49333L6 4" stroke="#00489E" strokeWidth="1.5" />
        </svg>
      </button>
    </div>
  )
}
