import BreadcrumbNews from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NewsCategory from '@/components/News_Category'
import NewsmoreCard from '@/components/newsmoreCard'
import Shareit from '@/components/Shareit'
import { useState, useEffect } from 'react'

export default function Newsmore() {
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
      
      <section className="container-style">
        <main className="nmd:w-[803px]">
          <div className="flex py-24 items-center text-subtitle-2 text-[#0E72E8]">
            <BreadcrumbNews />
          </div>

          <section className="hidden sm:block">
            <div className="text-newsmore py-10">Lorem ipsum dolor sit amet consectetur</div>
            <div className="flex py-4">
              <div className="text-body-bold-nm w-[30%]">May 20, 2023 / 4 min read</div>
              <div className="text-body-bold-nm flex justify-start w-[30%]">Author</div>
              <div className="flex w-[30%] text-body-bold-nm">
                <Shareit />
              </div>
            </div>
            <div className="text-body-regular-nm pr-16 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nibh vulputate nec congue euismod viverra
              faucibus. Nulla nisi dolor ultricies bibendum tristique at. Fusce ultricies laoreet
              eget risus. Mauris vel felis tortor est. Viverra volutpat purus faucibus id
              ullamcorper platea ornare sed. Suspendisse imperdiet nunc amet ultrices id. Lacus quam
              a vel eget. Lacus volutpat ut morbi nullam. Nulla cursus sed nullam eget pellentesque.
            </div>
          </section>

          <section className="sm:hidden">
            <div className="text-newsmore py-10">Lorem ipsum dolor sit amet consectetur</div>
            <div className="py-4">
              <div className="text-subtitle-2 w-full">May 20, 2023 / 4 min read</div>
              <div className="text-subtitle-2 flex justify-start w-full">Author</div>
              <div className="flex text-subtitle-2 w-full justify-between">
                <Shareit />
              </div>
            </div>
            <div className="text-body-regular-nm pr-16 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nibh vulputate nec congue euismod viverra
              faucibus. Nulla nisi dolor ultricies bibendum tristique at. Fusce ultricies laoreet
              eget risus. Mauris vel felis tortor est. Viverra volutpat purus faucibus id
              ullamcorper platea ornare sed. Suspendisse imperdiet nunc amet ultrices id. Lacus quam
              a vel eget. Lacus volutpat ut morbi nullam. Nulla cursus sed nullam eget pellentesque.
            </div>
          </section>

          <section className="mt-16">
            <NewsmoreCard
              title="Lorem ipsum dolor sit amet consectetur"
              desc="Lorem ipsum dolor sit amet consectetur. Nibh vulputate nec congue euismod viverra faucibus. Nulla nisi dolor ultricies bibendum tristique at. Fusce ultricies laoreet eget risus. Mauris vel felis tortor est. Viverra volutpat purus faucibus id ullamcorper platea ornare sed. Suspendisse imperdiet nunc amet ultrices id. Lacus quam a vel eget. Lacus volutpat ut morbi nullam.
        Nulla cursus sed nullam eget pellentesque. Lorem ipsum dolor sit amet consectetur. Nibh vulputate nec congue euismod viverra faucibus. Nulla nisi dolor ultricies bibendum tristique at. Fusce ultricies laoreet eget risus. Mauris vel felis tortor est. Viverra volutpat purus faucibus id ullamcorper platea ornare sed. Suspendisse imperdiet nunc amet ultrices id. Lacus quam a vel eget. Lacus volutpat ut morbi nullam. Nulla cursus sed nullam eget pellentesque."
              img="/png/News/IMG.png"
              isDiv={true}
            />
          </section>
          <section className="mt-16">
            <NewsmoreCard
              title="Lorem ipsum dolor sit amet consectetur"
              desc="Lorem ipsum dolor sit amet consectetur. Nibh vulputate nec congue euismod viverra faucibus. Nulla nisi dolor ultricies bibendum tristique at. Fusce ultricies laoreet eget risus. Mauris vel felis tortor est. Viverra volutpat purus faucibus id ullamcorper platea ornare sed. Suspendisse imperdiet nunc amet ultrices id. Lacus quam a vel eget. Lacus volutpat ut morbi nullam.
        Nulla cursus sed nullam eget pellentesque. Lorem ipsum dolor sit amet consectetur. Nibh vulputate nec congue euismod viverra faucibus. Nulla nisi dolor ultricies bibendum tristique at. Fusce ultricies laoreet eget risus. Mauris vel felis tortor est. Viverra volutpat purus faucibus id ullamcorper platea ornare sed. Suspendisse imperdiet nunc amet ultrices id. Lacus quam a vel eget. Lacus volutpat ut morbi nullam. Nulla cursus sed nullam eget pellentesque.
        Nulla cursus sed nullam eget pellentesque. Lorem ipsum dolor sit amet consectetur. Nibh vulputate nec congue euismod viverra faucibus. Nulla nisi dolor ultricies bibendum tristique at. Fusce ultricies laoreet eget risus. Mauris vel felis tortor est. Viverra volutpat purus faucibus id ullamcorper platea ornare sed. Suspendisse imperdiet nunc amet ultrices id. Lacus quam a vel eget. Lacus volutpat ut morbi nullam. Nulla cursus sed nullam eget pellentesque."
              img="/png/Newmore/nm.png"
              isDiv={false}
            />
          </section>

          <section className="flex justify-between w-full items-center mt-12 mr-20">
            <div>
              <button
                type="button"
                className="inline-flex h-[50px] pt-[19px] pr-[20px] pb-[20px] pl-[20px] justify-center items-center rounded-[10px] border-[2px] border-solid bg-transparent border-[#0E72E8] active:border-[#00489E]
      text-[#0E72E8] hover:bg-[#0E72E8] hover:text-[#F3F3F3] active:bg-[#00489E] active:text-[#F3F3F3] text-center text-[16px] font-bold not-italic leading-[150%] transition-all"
              >
                Back to news list
              </button>
            </div>
            <div className="flex lg:px-16 md:pr-[20px] text-body-bold-nm">
              <Shareit />
            </div>
          </section>
        </main>
      </section>
      <section>
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
