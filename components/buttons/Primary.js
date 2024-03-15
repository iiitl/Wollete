const Button = ({ children, type = 'button', className, disabled, ...props }) => {
  return (
    <div>
      <button
        type={type}
        disabled={disabled}
        {...props}
        className={`flex py-[16px] px-[64px] justify-center items-center rounded-[10px] bg-[#0E72E8] 
                hover:bg-[#0C5CBC] active:bg-[#00489E] text-[#F3F3F3] text-center text-[16px] font-bold not-italic leading-[150%] transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
