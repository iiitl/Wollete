import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import QnA from '@/components/QnA'
import { useState, useEffect } from 'react'

export default function groceryChain() {
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
    <>
      <div className="background-styling">
        <section>
          <Navbar />
        </section>
        
        <section className="container-style md:mt-40 mt-24">
          <main className="md:w-[803px]">
            <div className="text-h1">Grocery chain</div>
            <div className="text-dark text-body-regular mt-8">
              A brief description of the case and its significance. A mention of a clothing store in
              which the integration of digital checks was carried out.
            </div>
            <div className="mt-16">
              <img src="/png/GroceryChain/IMG.png" />
            </div>

            <section className="mt-24">
              <QnA
                title="Ask"
                text="Reduce paper waste and improve our sustainability efforts, and provide shoppers with a better way to access their receipts and find great deals at their locations."
              />
              <QnA
                title="Solution decision"
                text="The grocery chain partnered with Wollette to send digital receipts and customized offers directly to customers' smartphones, reducing paper waste and improving environmental sustainability efforts. Additionally, the app allowed customers to find bargains around their locations, encouraging them to shop at the chain's stores more frequently."
              />
              <QnA
                title="Result"
                text="The grocery chain was able to improve their environmental sustainability efforts significantly by reducing paper waste and providing a more convenient way for customers to access their receipts and offers. The chain was also able to track customer behaviour and preferences, enabling them to tailor their marketing and sales strategies to better serve their customers' needs. "
              />
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
    </>
  )
}
