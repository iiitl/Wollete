export default function Outlet({clicked}) {
  return (
    <button className={`flex justify-between 2xl:gap-32 items-center p-4 ${clicked == "true" ? "bg-[#EBF4FF]" : "bg-white"} rounded-xl shadow-lg w-full`}>
      <div className="flex flex-col gap-4">
        <div className="text-txt-medium">Name of the outlet</div>
        <div className="text-medium-14">Address of the outlet</div>
      </div>

      <div className="flex gap-8">
        <div>
          <img src="/svg/Icons/receipt.svg" />
        </div>
        <div>
          <img src="/svg/Icons/coupon.svg" />
        </div>
      </div>
    </button>
  )
}
