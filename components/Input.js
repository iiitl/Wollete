const svgImageData = `
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
    <path d="M5 9.5L14.0133 19.5L23 9.5" stroke="#7E7E7E" strokeWidth="1.5"/>
  </svg>
`

const InputBoxWithSVG = () => {
  return (
    <div className="relative w-48">
      {/* SVG Background */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        dangerouslySetInnerHTML={{ __html: svgImageData }}
      />

      {/* Input Box */}
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg pl-8 pr-4 py-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter text..."
      />
    </div>
  )
}

export default InputBoxWithSVG
