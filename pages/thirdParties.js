import { useEffect, useState } from 'react'

import Footer from '@/components/Footer'
import Image_Description from '@/components/Image_Description'
import Navbar from '@/components/Navbar'
import Value from '@/components/ThirdParty_Value'

export default function ThirdPxarties() {
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
  return (
    <>
      <div className="background-styling">
        <div className="overscroll-contain">
          <section>
            <Navbar />
          </section>
          <section className="mt-24 md:mt-[200px] background-rectangle-wavy">
            <Image_Description
              type="hero"
              button="true"
              buttonText="Start Now"
              title="Simple, Secure, Scalable APIs"
              description="Become our partner and change the future of retail together!"
              image="/png/POS_Providers/Hero.png"
            />
          </section>

          <section className="bg-[#eff3fa]  relative top-[-340px] md:top-[-400px] z-[-10] pb-40 md:pb-64">
            <section class="bg-wavyLines-3 pt-96 flex flex-col gap-20 md:gap-64">
              <Image_Description
                type="content"
                button="true"
                buttonText="Learn more"
                title="API Documentation"
                description="This section provides detailed documentation of our APIs, which allow third parties to access pre-authorized data such as employee spending and small business tax reports."
                image="/png/ThirdParties/IMG.png"
              />
              <Image_Description
                type="content"
                button="true"
                buttonText="Learn more"
                title="Authorization and security"
                description="We attach high importance to data security and privacy protection. This section provides information about the authorization process, authentication, and security measures applied when accessing the API and processing pre-authorized data."
                image="/png/ThirdParties/IMG1.png"
              />
            </section>
          </section>
          <section className="bg-[#0E72E8] mt-[-400px]">
            <section className="bg-wavylines-4">
              <div className="container-style pt-10 md:pt-40 pb-52 md:pb-[600px] flex flex-col gap-16">
                <div className="text-subtitle-1 text-light-white">Our values</div>
                <div className="flex flex-col gap-20">
                  <div className="flex flex-col md:flex-row gap-10">
                    <Value
                      title="Innovation"
                      content="We strive to be ahead of technological trends through innovation, and offer cutting-edge solutions to complex problems"
                    />
                    <Value
                      title="Innovation"
                      content="We strive to be ahead of technological trends through innovation, and offer cutting-edge solutions to complex problems"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-10">
                    <Value
                      title="Partnership"
                      content="We build long-term partnerships with our clients and partners. We believe that cooperation and mutual support are key success factors. We are ready to work you to achieve mutually beneficial results."
                    />
                    <Value
                      title="Sustainability"
                      content="We are aware of the importance of sustainable development and we care about the environment. We strive to minimize the negative impact on the environment and encourage the use of digital receipts as an environmentally sustainable solution."
                    />
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section className="relative z-[1] mt-[-200px] md:mt-[-350px] overscroll-contain">
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
      </div>
    </>
  )
}
