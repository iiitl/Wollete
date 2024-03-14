import Start from '@/components/buttons/Start'

export default function mdImageDesc({ type, button, title, description, image }) {
  return (
    <section className="flex flex-col gap-10 md:flex-row container-style ">
      <div className="basis-6/12  flex flex-col justify-center">
        <div className={`${type == 'hero' ? 'text-h1' : 'text-subtitle-1 md:text-h2'}`}>
          {title}
        </div>
        <div className="text-body-regular text-[#404040] mt-10">{description}</div>
        <div className={`${button == 'true' ? 'hidden md:block' : 'hidden'} mt-10`}>
          <Start text="Get Started" />
        </div>
      </div>

      <div className="text-body-regular shrink-0 basis-6/12 flex justify-center">
        <img src={image} className="w-max md:w-auto" />
      </div>
    </section>
  )
}
