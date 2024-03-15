import Image from 'next/image'
export default function NewsmoreCard({ title, desc, img, isDiv }) {
  return (
    <div>
      <Image src={img} alt="Picture of the author" width={720} height={800} />
      <div className="text-subtitle-1-nm mt-10">{title}</div>
      <div className="text-body-regular-nm pr-16 mt-10">{desc}</div>
      <div className={`text-subtitle-1-nm mt-10 ${isDiv ? 'block' : 'hidden'}`}>{title}</div>
      <div className={`text-body-regular-nm pr-16 mt-10 ${isDiv ? 'block' : 'hidden'}`}>{desc}</div>
    </div>
  )
}
