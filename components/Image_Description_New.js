import Start from './buttons/Start'

export default function Image_Description_New({
  type,
  button,
  buttonText,
  title,
  description,
  image,
}) {
  return (
    <section className="flex flex-col gap-10 md:flex-row ">
      <div className="basis-6/12 flex flex-col xl:justify-center">
        <div className={`${type == 'hero' ? 'text-h1' : 'text-subtitle-1 md:text-h2'}`}>
          {title}
        </div>
        <div className="text-body-regular text-[#404040] mt-10">{description}</div>
        <div className={`${button == 'true' ? 'hidden md:block' : 'hidden'} mt-10`}>
          <Start text={buttonText} />
        </div>
      </div>

      <div className="text-body-regular self-center md:relative basis-6/12 flex justify-center bg-transprent">
        <div className="md:block hidden absolute inset-y-0 w-9/12 md:w-11/12 left-[7vmax] md:left-[0px] top-[115px] bg-gradient-to-br from-[#6199e3] to-[#dddedf] rounded-lg"></div>
        <img
          src={image}
          className="w-max md:w-full md:ms-10 md:shadow-2xl mb-10 md:mb-[2vmax] z-10 rounded-lg bg-transparent"
          style={{ boxShadow: '20px 8px 20px rgba(0, 0, 0, 0.2)' }}
        />
      </div>
    </section>
  )
}
