import ContactCard from '@/components/ContactCard'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'

export default function Contactus() {
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
        <main className="md:w-[803px]">
          <section className="mt-20">
            <div className="text-newsmore">How can we help</div>
            <div className="flex border-[1px] border-[#7E7E7E] rounded-[10px] px-3 py-2 mt-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                >
                  <path
                    d="M12.0769 4.5C7.61613 4.5 4 8.11606 4 12.5767C4 17.0374 7.61613 20.6534 12.0769 20.6534C14.0307 20.6534 15.8214 19.9604 17.2184 18.8058L22.6868 24.2749C22.8311 24.4191 23.0268 24.5001 23.2309 24.5C23.4349 24.4999 23.6306 24.4188 23.7748 24.2745C23.9191 24.1301 24.0001 23.9344 24 23.7304C23.9999 23.5263 23.9188 23.3307 23.7745 23.1864L18.306 17.7173C19.5028 16.2718 20.1564 14.4533 20.1537 12.5767C20.1537 8.11606 16.5376 4.5 12.0769 4.5ZM5.53845 12.5767C5.53845 10.8426 6.22732 9.17961 7.45351 7.95344C8.6797 6.72727 10.3428 6.03842 12.0769 6.03842C13.811 6.03842 15.474 6.72727 16.7002 7.95344C17.9264 9.17961 18.6153 10.8426 18.6153 12.5767C18.6153 14.3108 17.9264 15.9738 16.7002 17.2C15.474 18.4261 13.811 19.115 12.0769 19.115C10.3428 19.115 8.6797 18.4261 7.45351 17.2C6.22732 15.9738 5.53845 14.3108 5.53845 12.5767Z"
                    fill="#7E7E7E"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="ml-4 px-3 w-full bg-transparent"
              ></input>
            </div>
          </section>

          <section className="basis-6/12 flex flex-col md:mt-20 sm:mt-36 mt-24">
            <div className="text-h2">FAQ</div>
            <div className="text-subtitle-2 flex flex-col md:flex-row gap-4 justify-between mt-10">
              <div className="hover:text-[#0E72E8]">General</div>
              <div className="hover:text-[#0E72E8]">Consumers</div>
              <div className="hover:text-[#0E72E8]">Merchants</div>
              <div className="hover:text-[#0E72E8]">Third parties</div>
            </div>
          </section>
        </main>
      </section>

      <section className="container-style bg-big-rectangle-cu z-[-1] pt-1 mt-16 md:pb-60 pb-44 mb:pb-56">
        <main className="md:w-[803px]">
          <section className="mt-[70px]">
            <ContactCard title="General" />
            <ContactCard title="Consumers" />
            <ContactCard title="Merchants" />
            <ContactCard title="Third parties" />
          </section>
        </main>
      </section>
      <section className="container-style flex flex-col justify-center mt-20">
        <main className="flex flex-col md:flex-row md:w-[803px]">
          <div className="w-auto">
            <div className="text-h2 pt-4 pb-10">We are here to help</div>
            <div className="text-body-regular pr-6">
              If you have any specific questions or need further assistance, please feel free to let
              us know
            </div>
          </div>
          <div className="flex md:justify-center items-center mt-6 md:mt-0">
            <button
              type="button"
              className="flex w-[160px] pt-[19px] pr-[16px] pb-[20px] pl-[16px] justify-center items-center rounded-[10px] bg-[#0E72E8] 
                hover:bg-[#263d59] active:bg-[#00489E] text-[#F3F3F3] text-center text-[16px] font-bold not-italic leading-[150%]"
            >
              Contact us
            </button>
          </div>
        </main>
      </section>

      <section>
        <Footer />
      </section>
       <div id="lines" className="w-[1px] absolute top-[0px] left-[3.6%] sm:left-[2.4%] md:left-[4%] xl:left-[18.1%] bg-[#0E72E8] bg-opacity-20 "></div>
      <div id="lines1" className="hidden md:block w-[1px] absolute top-[0px] md:left-[27.8%] xl:left-[34.7%] bg-[#0E72E8] bg-opacity-20 "></div>
      <div id="lines2" className="hidden md:block w-[1px] absolute top-[0px] md:left-[51.6%] xl:left-[51.2%] bg-[#0E72E8] bg-opacity-20 "></div>
      <div id="lines3" className="hidden md:block w-[1px] absolute top-[0px] md:left-[75.5%] xl:left-[67.65%] bg-[#0E72E8] bg-opacity-20 "></div>
      <div id="lines4" className="w-[1px] absolute top-[0px] left-[98%] md:left-[96.6%] xl:left-[82%] bg-[#0E72E8] bg-opacity-20 "></div>
    </div>
  )
}
