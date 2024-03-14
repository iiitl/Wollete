import Image from 'next/image'

import WorkingSteps from '@/components/Benefits_WorkingSteps'
// import InputBoxWithSVG from "@/components/Input";
import AppStore from '@/components/buttons/AppStore'
import GooglePlay from '@/components/buttons/GooglePlay'
import { goodPointsContent, workingStepsContent } from '@/components/Content'
import Footer from '@/components/Footer'
import Image_Description from '@/components/Image_Description'
import LogoList from '@/components/LogoList'
import { MerCard } from '@/components/MerCard'
import MerDesc from '@/components/MerDesc'
import Navbar from '@/components/Navbar'
import Outlet from '@/components/Outlet'
import { useState, useEffect } from 'react'

export default function Merchants() {

  useEffect(() => { 

    function adjustAbsoluteDivHeight() {
      const absoluteDiv = document.getElementById('lines');
      const absoluteDiv1 = document.getElementById('lines1');
      const absoluteDiv2 = document.getElementById('lines2');
      const absoluteDiv3 = document.getElementById('lines3');
      const absoluteDiv4 = document.getElementById('lines4');
      const bodyHeight = document.body.scrollHeight;
      console.log(bodyHeight) 
      absoluteDiv.style.height = `${bodyHeight}px`;
      absoluteDiv1.style.height = `${bodyHeight}px`;
      absoluteDiv2.style.height = `${bodyHeight}px`;
      absoluteDiv3.style.height = `${bodyHeight}px`;
      absoluteDiv4.style.height = `${bodyHeight}px`;
    }
setTimeout(() => {
      adjustAbsoluteDivHeight();
    }, 5000);
    adjustAbsoluteDivHeight();
    window.addEventListener('resize', adjustAbsoluteDivHeight);

    return () => { 
      window.removeEventListener('resize', adjustAbsoluteDivHeight);
    };
  }, []);
  return (
    <div className="background-styling">
      <Navbar />
      
      <section className="lg:mt-[200px] md:mt-[35px] background-rectangle-wavy md:hidden xl:block mdm:mt-36">
        <Image_Description
          type="hero"
          title="Intelligent integration made simple"
          description="Wollette - is a next generation smart digital wallet app that allows retailers to directly send digital receipts to their customers."
          image="/png/Merchants/Hero-mer.png"
        />
      </section>
      <section className="lg:mt-[200px] md:mt-[14px] background-rectangle-wavy xl:hidden">
        <Image_Description
          type="hero"
          title="Intelligent integration made simple"
          description="Wollette - is a next generation smart digital wallet app that allows retailers to directly send digital receipts to their customers."
          image="/png/Merchants/mer-long.png"
        />
      </section>

      <section className="bg-big-rectangle-mer bg-no-repeat relative top-[-470px] xl:top-[-400px] lg:top-[-260px] md:top-[-220px] mdm:top-[-200px] z-[-10] pt-[80px] pb-[500px] xl:h-[1700px] lg:h-[1600px] md:h-[1500px] mdm:h-[1300px] xsm:h-[1500px] mtm:h-[1500px] mb:h-[1600px]">
        <section className="bg-wavylines">
          <section className="container-style flex flex-col md:flex-row items-center md:justify-between pt-32 xl:pt-64 md:pt-32 pb-24 md:pb-48">
            <div className="basis-6/12 flex flex-col justify-center">
              <div className="text-subtitle-1 md:text-h2">Making digital receipts seamless</div>
              <div className="text-body-regular mt-10">
                Wollette integrates with point-of-sale (POS) systems via APIs and has native apps
                available on the app stores of popular POS providers such as Lightspeed, Shopify,
                Stripe, and SumUp.
              </div>
            </div>
            <div className="basis-4/12 mt-10 md:mt-0 hidden xl:block">
              <img src="/png/Merchants/mer-2.png" />
            </div>
            <div className="basis-4/12 mt-2 hidden md:block xl:hidden">
              <Image
                src="/png/Merchants/mer-long-2.png"
                alt="Picture of the author"
                width={600}
                height={800}
              />
            </div>
          </section>
        </section>

        <section className="bg-wavylines-2">
          <section className="container-style flex flex-col md:flex-row xl:gap-24 lg:gap-10 md:gap-10">
            {MerCard.map((point, id) => {
              return (
                <div key={id} className="basis-1/3">
                  <div>
                    <img src={point.icon} />
                  </div>
                  <div className="text-body-bold mt-10">{point.title}</div>
                  <div className="text-txt-medium text-[#404040] mt-4">{point.text}</div>
                </div>
              )
            })}
          </section>
        </section>
      </section>

      <section>
        <section className="container-style mt-[-150px] flex flex-col">
          <div className="text-h2 pb-10">Integration patterns</div>
          <div className="text-body-regular">
            Wollette offers seamless API integration with your POS system. By integrating with
            Wollette, you can directly send digital receipts to your customers' smartphones and
            reduce paper waste.
          </div>
        </section>

        <section className="container-style flex flex-col md:flex-row mt-24">
          <MerDesc
            title="Native integration"
            desc="Fully integrated experience. We have worked with our partner POS Providers to create a seamless integration experience for merchants, no app download required, simply plug-n-play."
            img="/png/Merchants/mer-3.png"
          />
        </section>

        <section className="container-style flex flex-col md:flex-row mt-24">
          <MerDesc
            title="All-in-one app"
            desc="Powerful all-in-one app, giving you full access to our APIs, allowing you to start transmitting digital receipts, reward your customers, monitor price movement across segments, and engage your customers."
            img="/png/Merchants/mer-4.png"
          />
        </section>

        <section className="mt-2">
          <LogoList />
        </section>

        <section className="container-style flex flex-col md:flex-row mt-32">
          <MerDesc
            title="Complex integration"
            desc="For more complex integration, we provide full consultancy, with our experts ready to attend your site to help you integrate your platform to our APIs"
            img="/png/Merchants/mer-5.png"
            btn={true}
            btnText="Contact us"
          />
        </section>

        <section className="container-style flex flex-col md:flex-row mt-24">
          <MerDesc
            title="Self directed integration"
            desc="Our APIs are easy and straightforward to use, so feel free to consult our developer documentation for more details on how to integrate your POS to the most powerful digital receipt platform"
            img="/png/Merchants/mer-6.png"
            btn={true}
            btnText="Read docs"
          />
        </section>
      </section> 
      <section className="mt-20 md:mt-8">
        <Footer />
      </section>
      <div id="lines" className="w-[1px] absolute top-[0px] left-[3.6%] sm:left-[2.4%] md:left-[4%] xl:left-[18.1%] bg-[#0E72E8] bg-opacity-20 z-[-1]"></div>
      <div id="lines1" className="hidden md:block w-[1px] absolute top-[0px] md:left-[27.8%] xl:left-[34.7%] bg-[#0E72E8] bg-opacity-20 z-[-1]"></div>
      <div id="lines2" className="hidden md:block w-[1px] absolute top-[0px] md:left-[51.6%] xl:left-[51.2%] bg-[#0E72E8] bg-opacity-20 z-[-1]"></div>
      <div id="lines3" className="hidden md:block w-[1px] absolute top-[0px] md:left-[75.5%] xl:left-[67.65%] bg-[#0E72E8] bg-opacity-20 z-[-1]"></div>
      <div id="lines4" className="w-[1px] absolute top-[0px] left-[98%] md:left-[96.6%] xl:left-[82%] bg-[#0E72E8] bg-opacity-20 z-[-1]"></div>
    </div>
  )
}
