const Start = (props) => {
  return (
    <div>
      <button
        type="button"
        className={`{flex w-[198px] pt-[19px] pr-[16px] pb-[20px] pl-[16px] justify-center items-center rounded-[10px] bg-[#0E72E8] 
                hover:bg-[#263d59] active:bg-[#00489E] text-[#F3F3F3] text-center text-[16px] font-bold not-italic leading-[150%]}`}
      >
        {props.text}
      </button>
    </div>
  )
}

export default Start
