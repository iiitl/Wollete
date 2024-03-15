import Image from 'next/image'

export default function LogoList() {
  return (
    <div className="flex container-style justify-evenly pt-10">
      <div>
        <Image
          src="/png/Merchants/logo-1.png"
          alt="Picture of the author"
          width={170}
          height={500}
        />
      </div>
      <div>
        <Image
          src="/png/Merchants/logo-2.png"
          alt="Picture of the author"
          width={170}
          height={500}
        />
      </div>
      <div>
        <Image
          src="/png/Merchants/logo-3.png"
          alt="Picture of the author"
          width={170}
          height={500}
        />
      </div>
      <div>
        <Image
          src="/png/Merchants/logo-4.png"
          alt="Picture of the author"
          width={170}
          height={500}
        />
      </div>
      <div>
        <Image
          src="/png/Merchants/logo-5.png"
          alt="Picture of the author"
          width={170}
          height={500}
        />
      </div>
    </div>
  )
}
