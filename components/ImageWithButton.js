import Start from './buttons/Start'
import Link from 'next/link'
import Button from './buttons/Primary'

export default function ImageWithButton({ type, button, buttonText, title, description, image, redirect, buttonTitle }) {
  return (
    <section className="flex flex-col md:flex-row container-style justify-center items-center">
      <div className="basis-6/12 flex flex-col text-center md:text-left">
        <div className={`${type === 'hero' ? 'text-h1' : 'text-subtitle-1 md:text-h2'}`}>
          {title}
        </div>
        <div className="text-body-regular text-[#404040] mt-10">{description}</div>
        <div className={`${button === 'true' ? 'block' : 'hidden'} mt-10`}>
          <Start text={buttonText} />
        </div>
        <div>
          <Link href={redirect}>
            <Button type="submit" className="mt-12">
              {buttonTitle}
            </Button>
          </Link>
        </div>
      </div>

      <div className="text-body-regular shrink-0 basis-6/12 flex justify-center">
        <img src={image} className="w-max md:w-auto" />
      </div>
    </section>
  )
}
