export default function ImageNoPicDescription({ type, title, description }) {
  return (
    <div className="basis-6/12">
      <div className={`${type == 'hero' ? 'text-h2' : 'text-subtitle-1'} ml-[30px]`}>{title}</div>
      <div className="text-[30px] text-[#404040] mt-10 font-normal mr-[200px] ml-[30px]">
        {description}
      </div>
      <button
        type="button"
        className="w-[198px] flex ml-[30px] pt-[19px] pr-[16px] pb-[20px] pl-[16px] mt-[55px] justify-center items-center rounded-[10px] bg-[#0E72E8] text-[#F3F3F3] text-center text-[16px] font-bold not-italic lading-[150%] hover:bg-[#0C5CBC] active:bg-[#00489E]"
      >
        Get started
      </button>
    </div>
  )
}
