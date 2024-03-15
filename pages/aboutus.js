import Image from 'next/image'
import { useState, useEffect } from 'react'
import AboutusCard from '@/components/AboutusCard'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
export default function Aboutus() {
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
      <section className="container-style flex flex-col mt-24 xl:mt-[125px] lg:mt-[200px]">
        <div className="text-newsmore">Meet our team of experts</div>
        <div className="text-body-regular md:pt-8 pt-20">
          At Wollette, we recognize that our team is the cornerstone of our success. We believe that
          a strong and talented team is crucial to driving innovation, delivering exceptional
          service, and achieving our goals. We value each team member’s unique skills, perspectives,
          and contributions, fostering a collaborative and inclusive work environment.
        </div>
        <div className="shrink-0 mt-16">
          <Image src="/png/Aboutus/au.png" alt="Picture of the author" width={1600} height={800} />
        </div>
      </section>

      <section className="container-style bg-big-trapezium flex flex-col pt-[330px] lg:pt-[500px] md:pt-[450px] pb-[550px] justify-center z-[-1] relative xl:top-[-26vw] xl:mb-[-52vw] lg:top-[-32vw] lg:mb-[-64vw] md:top-[-35vw] md:mb-[-78vw] top-[-32vw] mb-[-86vw]">
        <div className="text-h1 pt-20 text-[#FFFFFF]">On board</div>
        {/* top-[-455px] mdm:top-[-220px] mb:top-[-120px] mdm:pt-[300px] mb-[-800px] mb:mb-[-740px] */}
        <div className="flex py-12 md:space-x-8 justify center items-center flex-col md:flex-row mdm:gap-20">
          <AboutusCard name="Name Name" job="job title" />
          <AboutusCard name="Name Name" job="job title" />
          <AboutusCard name="Name Name" job="job title" />
          <AboutusCard name="Name Name" job="job title" />
        </div>
      </section>

      <section>
        <Footer />
      </section>
      <div id="lines" className="w-[1px] absolute top-[0px] left-[3.6%] sm:left-[2.4%] md:left-[4%] xl:left-[18.1%] bg-[#0E72E8] bg-opacity-20"></div>
      <div id="lines1" className="hidden md:block w-[1px] absolute top-[0px] md:left-[27.8%] xl:left-[34.7%] bg-[#0E72E8] bg-opacity-20"></div>
      <div id="lines2" className="hidden md:block w-[1px] absolute top-[0px] md:left-[51.6%] xl:left-[51.2%] bg-[#0E72E8] bg-opacity-20"></div>
      <div id="lines3" className="hidden md:block w-[1px] absolute top-[0px] md:left-[75.5%] xl:left-[67.65%] bg-[#0E72E8] bg-opacity-20"></div>
      <div id="lines4" className="w-[1px] absolute top-[0px] left-[98%] md:left-[96.6%] xl:left-[82%] bg-[#0E72E8] bg-opacity-20"></div>
    </div>
  )
}
