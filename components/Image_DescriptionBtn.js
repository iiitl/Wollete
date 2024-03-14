import Image from 'next/image'
export default function Image_DescriptionBtn({ type, title, description, image }) {
  return (
    <section className="flex flex-col gap-10 md:flex-row container-style ">
      <div className="basis-6/12 flex flex-col justify-center">
        <div
          className={`${
            type == 'hero' ? 'text-h2 lg:text-[56px] md:text-[40px]' : 'text-subtitle-1 md:text-h2'
          }`}
        >
          {title}
        </div>
        <div className="text-body-regular text-[#404040] mt-10">{description}</div>
        <button
          type="button"
          className="w-[40%] z-[999] flex pt-[19px] pr-[16px] lg:mt-[60px] md:mt-[35px] mdm:mt-10 pb-[20px] pl-[16px] justify-center items-center rounded-[10px] bg-[#0E72E8] text-[#F3F3F3] text-center text-[16px] font-bold not-italic lading-[150%] hover:bg-[#0C5CBC] active:bg-[#00489E]"
        >
          Get started
        </button>
      </div>

      <div className="text-body-regular basis-6/12 shrink-0 flex justify-center">
        <Image
          src={image}
          alt="Picture of the author"
          width={500}
          height={500}
          className="w-max md:w-auto"
        />
      </div>
    </section>
  )
}
