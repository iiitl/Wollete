export default function WorkingSteps({ data }) {
  return (
    <>
      <div className="basis-1/4">
        <div>
          <img src={data.icon} />
        </div>
        <div className="border-l-2 border-[#0E72E8] px-3 mt-10 text-body-bold">{data.title}</div>
        <div className="text-txt-medium text-[#404040] px-3 mt-4">{data.text}</div>
      </div>
    </>
  )
}
