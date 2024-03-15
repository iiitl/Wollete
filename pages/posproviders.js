import { useEffect, useState } from 'react'

import Start from '@/components/buttons/Start'
import Footer from '@/components/Footer'
import Image_Description from '@/components/Image_Description'
import Navbar from '@/components/Navbar'

export default function POS_Providers() {
  useEffect(() => {
    function adjustAbsoluteDivHeight() {
      const absoluteDiv = document.getElementById('lines')
      const absoluteDiv1 = document.getElementById('lines1')
      const absoluteDiv2 = document.getElementById('lines2')
      const absoluteDiv3 = document.getElementById('lines3')
      const absoluteDiv4 = document.getElementById('lines4')
      const bodyHeight = document.body.scrollHeight
      console.log(bodyHeight)
      absoluteDiv.style.height = `${bodyHeight}px`
      absoluteDiv1.style.height = `${bodyHeight}px`
      absoluteDiv2.style.height = `${bodyHeight}px`
      absoluteDiv3.style.height = `${bodyHeight}px`
      absoluteDiv4.style.height = `${bodyHeight}px`
    }
    setTimeout(() => {
      adjustAbsoluteDivHeight()
    }, 5000)
    adjustAbsoluteDivHeight()
    window.addEventListener('resize', adjustAbsoluteDivHeight)

    return () => {
      window.removeEventListener('resize', adjustAbsoluteDivHeight)
    }
  }, [])
  const [rows, setRows] = useState(3)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  const handleResize = () => {
    const windowSize = window.innerWidth
    if (windowSize < 768) {
      setRows(4)
    }
  }

  const fields = []
  for (let i = 1; i <= rows; i++) {
    fields.push(<CompanyRow id={i} key={i} />)
  }

  return (
    <>
      <div className="background-styling">
        <section>
          <Navbar />
        </section>

        <section className=" mt-[200px] background-rectangle-wavy">
          <Image_Description
            type="hero"
            button="true"
            buttonText="Get Started"
            title="Become part of the solution"
            description="Join our partnership network and let us redefine sustainable consumer engagement together"
            image="/png/POS_Providers/Hero.png"
          />
        </section>

        <section className="bg-big-rectangle-POS bg-no-repeat relative top-[-470px] md:top-[-400px] z-[-10] pb-40 md:pb-96">
          <section className="bg-wavylines">
            <div className="container-style pt-[500px] ">
              <div className="text-subtitle-1 mb-16">Our partners</div>
              <div className="flex flex-col gap-10">{fields}</div>
            </div>
          </section>
        </section>

        <section className="container-style flex flex-col md:flex-row gap-7 md:gap-20 mt-[-350px] md:mt-[-300px] mb-10">
          <div>
            <div className="text-subtitle-1 mb-10">Join our partner network</div>
            <div className="text-body-regular text-[#404040]">
              Boost your sales and revenues, and build your reputation as a sustainable brand.
            </div>
          </div>
          <div className="md:self-end">
            <Start text="Book a demo" />
          </div>
        </section>

        <section>
          <Footer />
        </section>

        <div
          id="lines"
          className="w-[1px] absolute top-[0px] left-[3.6%] sm:left-[2.4%] md:left-[4%] xl:left-[18.1%] bg-[#0E72E8] bg-opacity-20 z-[-1]"
        ></div>
        <div
          id="lines1"
          className="hidden md:block w-[1px] absolute top-[0px] md:left-[27.8%] xl:left-[34.7%] bg-[#0E72E8] bg-opacity-20 z-[-1]"
        ></div>
        <div
          id="lines2"
          className="hidden md:block w-[1px] absolute top-[0px] md:left-[51.6%] xl:left-[51.2%] bg-[#0E72E8] bg-opacity-20 z-[-1]"
        ></div>
        <div
          id="lines3"
          className="hidden md:block w-[1px] absolute top-[0px] md:left-[75.5%] xl:left-[67.65%] bg-[#0E72E8] bg-opacity-20 z-[-1]"
        ></div>
        <div
          id="lines4"
          className="w-[1px] absolute top-[0px] left-[98%] md:left-[96.6%] xl:left-[82%] bg-[#0E72E8] bg-opacity-20 z-[-1]"
        ></div>
      </div>
    </>
  )
}

function CompanyRow() {
  return (
    <div className="flex gap-8">
      <CompanyBox />
      <CompanyBox />
      <div className="hidden md:block">
        <CompanyBox />
      </div>
    </div>
  )
}

function CompanyBox() {
  return (
    <>
      <div className=" ">
        <img
          src="/png/POS_Providers/CompanyLogo.png"
          width="383px"
          className="rounded-xl shadow-xl"
        />
      </div>
    </>
  )
}
