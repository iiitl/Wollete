import Image from 'next/image'
export default function MerDesc({ title, desc, img, btn, btnText }) {
  return (
    <>
      <div className="w-[50%] mdm:w-full">
        <div className="text-subtitle-2 pl-4 border-l-2 border-l-[#0E72E8]">{title}</div>
        <div className="text-body-regular pr-10 pl-4 mdm:mt-10 ">{desc}</div>
        <div className={`${btn ? 'flex' : 'hidden'} mt-12 mdm:mt-10 mdm:ml-0`}>
          <button
            type="button"
            className="group inline-flex pt-[10px] pr-[16px] pb-[9px] pl-[16px] items-center gap-[8px] bg-transparent text-center text-[#0E72E8] text-[18px] font-bold not-italic leading-[150%]
            hover:text-[#0C5CBC] active:text-[#00489E] transition-all"
          >
            {btnText}
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
      </div>
      <div className="mdm:mt-10">
        <Image src={img} alt="Picture of the author" width={525} height={500} />
      </div>
    </>
  )
}
