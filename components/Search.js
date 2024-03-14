export default function Search() {
  return (
    <>
      <div className="flex gap-4 bg-white border border-[#c4c4c4] rounded-xl p-2 px-4 py-3 w-fit mx-auto md:mx-0  md:w-auto max-w-[673px] mt-2 md:mt-10">
        <img src="/svg/Icons/search.svg" />
        <input
          type="text"
          placeholder="Search"
          className="placeholder-[#404040]  md:mt-0 focus:outline-none"
        />
      </div>
    </>
  )
}
