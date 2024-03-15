import Image from 'next/image'
import { useEffect, useState } from 'react'

import Footer from '@/components/Footer'
import HorizontalCarousel from '@/components/HorizontalCarousel'
import Image_DescriptionBtn from '@/components/Image_DescriptionBtn'
import Navbar from '@/components/Navbar'

export default function Index() {
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
    <div className="background-styling">
      <Navbar />

      <section className="mt-48 flex flex-col items-center">
        <Image_DescriptionBtn
          type="hero"
          title="The smart digital receipt platform"
          description="Lorem ipsum dolor sit amet consectetur. A facilisi luctus semper netus volutpat integer scelerisque sit velit. "
          image="/png/Hero.png"
        />
      </section>

      <section className="container-style flex flex-col mt-[200px] items-start z-[999] relative">
        <p className="text-h1 text-[#131313] pb-16">Saving the planet, one receipt at a time</p>
        <Image
          src="/png/Rectangle 623.png"
          alt="Picture of the author"
          width={1500}
          height={500}
          className="xl:w-[1200px]"
        />
      </section>

      <section className="container-style hidden md:flex shrink-0 lg:mt-56 md:mt-20 mdm:mt-20 z-[999] relative">
        <div className="flex w-full justify-between">
          <div className="lg:pr-12 nsm:pr-6 xl:w-[22%] lg:w-[22%] w-[23%]">
            <div className="text-[#0E72E8] text-subtitle-2 border-l-[2px] border-l-[#0E72E8] pl-8 w-auto">
              100+
            </div>
            <div className="text-txt-sb pl-8 mt-6 text-[#131313] w-auto">Merchants</div>
          </div>
          <div className="lg:pr-12 nsm:pr-6 xl:w-[21.5%] lg:w-[22%] w-[23%]">
            <div className="text-[#0E72E8] text-subtitle-2 border-l-[2px] border-l-[#0E72E8] pl-8 w-auto">
              1M+
            </div>
            <div className="text-txt-sb pl-8 mt-6 text-[#131313] w-auto">Active users</div>
          </div>
          <div className="lg:pr-12 nsm:pr-6 xl:w-[21.5%] lg:w-[22%] w-[23%]">
            <div className="text-[#0E72E8] text-subtitle-2 border-l-[2px] border-l-[#0E72E8] pl-8 w-auto">
              230M+
            </div>
            <div className="text-txt-sb pl-8 mt-6 text-[#131313] w-auto">Processed receipts</div>
          </div>
          <div className="lg:pr-12 nsm:pr-6 xl:w-[22.5%] lg:w-[22.3%] w-[22.3%]">
            <div className="text-[#0E72E8] text-subtitle-2 border-l-[2px] border-l-[#0E72E8] pl-8 w-auto">
              100Kge
            </div>
            <div className="text-txt-sb pl-8 mt-6 text-[#131313] w-auto">Carbon saved</div>
          </div>
        </div>
      </section>
      <section className="container-style flex md:hidden shrink-0 lg:mt-56 md:mt-20 mdm:mt-20 z-[999] relative">
        <div className="w-full">
          <div className="flex justify-between">
            <div className="w-[40%]">
              <div className="text-[#0E72E8] text-subtitle-1-nm border-l-2 border-l-[#0E72E8] px-6 mb:text-[30px]">
                100+
              </div>
              <div className="text-txt-sb mt-2 px-8">Merchants</div>
            </div>
            <div className="w-[40%]">
              <div className="text-[#0E72E8] text-subtitle-1-nm border-l-2 border-l-[#0E72E8] px-6 mb:text-[30px]">
                1M+
              </div>
              <div className="text-txt-sb mt-2 px-8">Active users</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[40%]">
              <div className="text-[#0E72E8] text-subtitle-1-nm border-l-2 border-l-[#0E72E8] px-6 mb:text-[30px]">
                230M+
              </div>
              <div className="text-txt-sb mt-2 px-8">
                Processed <br></br>receits
              </div>
            </div>
            <div className="w-[40%]">
              <div className="text-[#0E72E8] text-subtitle-1-nm border-l-2 border-l-[#0E72E8] px-6 mb:text-[30px]">
                100Kge
              </div>
              <div className="text-txt-sb mt-2 px-8">Carbon saved</div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:mt-[50px] mdm:mt-24 mbm:mt-64 bg-big-rectangle-home z-[1] lg:pt-[900px] md:pt-[500px] sm:pt-[500px] mbm:pt-[550px] lg:top-[-700px] md:top-[-400px] mdm:top-[-590px] mdm:pt-[600px] mbm:top-[-720px] mb:top-[-660px] mtm:top-[-650px] relative xl:h-[4200px] lg:h-[390vw] sm:h-[4100px] mdm:h-[5300px] mtm:h-[4820px] mbm:h-[4700px] mb:h-[4900px] md:h-[3150px]">
        <section className="z-[20]">
          <Image_DescriptionBtn
            type="hero"
            title="The paperless revolution is here"
            description="The next generation digital receipts platform. Accelerate your ESG goals and unlock unrivalled insights and financial benefits."
            image="/png/IMG.png"
          />
        </section>
        <section className="lg:mt-96 md:mt-40 sm:mt-56 mdm:mt-24">
          <Image_DescriptionBtn
            type="hero"
            title="Seamless merchant & third party integration"
            description="TSeamless integration with POS systems. Secure and anonymous transmission of digital receipts from merchants to consumers, unlocking significant cost savings and a step forward in sustainability efforts"
            image="/png/IMG2.png"
          />
        </section>

        <section className="container-style mt-[280px] mb-[100px] container-style mdm:mt-24">
          <div className="flex flex-col justify-center">
            <p className="text-h2 text-[#131313]">
              Smart technology, helping you save<br></br> money
            </p>
            <div className="flex">
              <div className="flex flex-col pr-2 mt-[40px]">
                <p className="text-body-regular text-[#404040]">
                  Continuous price comparison and personalised rewards. Merchants can see real-time
                  price movements across their segments. And consumers can get personalised offers,
                  rewards, and discover cheapest prices on products and services at nearby outlets
                </p>
                <button
                  type="button"
                  className="w-[198px] flex pt-[19px] pr-[16px] mt-[36px] pb-[20px] pl-[16px] justify-center items-center rounded-[10px] bg-[#0E72E8] text-[#F3F3F3] text-center text-txt-bold hover:bg-[#0C5CBC] active:bg-[#00489E]"
                >
                  Learn more
                </button>
              </div>
              <div className="mdm:hidden">
                <Image
                  src="/png/Group 547.png"
                  alt="Picture of the author"
                  width={3000}
                  height={600}
                  className="relative right-[30px] mdm:right-1 top-24 z-[-1]"
                />
              </div>
            </div>

            <div className="mdm:flex mdm:flex-col hidden mt-20 rounded-[20px]">
              <div className="bg-[#FFFFFF] flex flex-col w-full px-4 rounded-[20px]">
                <div className="text-medium-14 text-[#0E72E8] pt-4">
                  Get rewards and great deals, just for you!
                </div>
                <div className="bg-[#EBF4FF] rounded-[13px] my-4 pt-2">
                  <div className="px-4 flex justify-between">
                    <div className="text-txt-bold flex">
                      <Image
                        src="/png/wollette---Logo-Only---final---high-resolution---color---1 1.png"
                        alt="Picture of the author"
                        width={13}
                        height={10}
                      />
                      <div className="px-6">Wollette</div>
                    </div>
                    <div className="text-medium-14">Now</div>
                  </div>

                  <div className="text-medium-14 px-4 mt-6 pb-2">
                    Lorem ipsum dolor sit amet consectetur. A facilisi luctus semper netus volutpat
                    integer scelerisque sit velit.
                  </div>
                </div>
              </div>

              <div className="container-style flex items-center justify-center mt-10">
                <Image
                  src="/png/index/map2.png"
                  alt="Picture of the author"
                  width={300}
                  height={300}
                />
              </div>
              <div className="container-style mt-10 flex items-center justify-center">
                <Image
                  src="/png/index/pie2.png"
                  alt="Picture of the author"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-big-blue-home relative z-[999] pt-80 mb:pt-36 xl:mt-[-1230px] md:mt-[-840px] nsm:mt-[-730px] nlg:mt-[-125vw] ulg:mt-[-133vw] nxl:mt-[-143vw] lg:mt-[-110vw] sm:mt-[-900px] mdm:mt-[-1400px] mtm:mt-[-940px] nmd:mt-[-780px] mbm:mt-[-960px] mb:mt-[-930px] mb:h-auto mtm:h-auto mbm:h-auto sbm:h-auto">
        <div>
          <div className="flex justify-center items-center container-style">
            <div className="md:flex mb-4">
              <div className="mr-1">
                <div className="text-subtitle-1 text-[#FFFFFF]">Why choose Wollette</div>
                <div className="text-body-regular text-[#FFFFFF] pr-10 lg:mt-10 md:mt-6">
                  Choose Wollette for effortless integration and an enhanced customer experience
                  that sets you apart from the competition. Experience the benefits of our smart
                  digital receipt platform and take your retail business to the next level.
                </div>
                <div className="flex lg:mt-16 md:mt-6 gap-20">
                  <div className="w-[38%] my-8">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                      >
                        <path
                          d="M10 10V50H50M17.3143 25.2809V37.8652M25.0857 20.3371V32.0225M32.8571 14.4944V28.427M17.3143 44.6067L25.0857 36.9663L30.1143 41.4607L43.8286 28.8764"
                          stroke="white"
                          stroke-width="2"
                        />
                        <path
                          d="M45.2002 27.3046L45.2002 34.9451L37.4287 27.3046L45.2002 27.3046Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="text-body-bold text-[#FFFFFF] lg:mt-8 md:mt-4 mt-2">
                      Revolutionary financial <br></br> management
                    </div>
                  </div>
                  <div className="w-[38%] my-8">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                      >
                        <path
                          d="M22.2727 28L28.013 35.2L38.1688 22.8M13 16V37.6L29.7792 50L47 37.6V16L29.7792 10L13 16Z"
                          stroke="white"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                    <div className="text-body-bold text-[#FFFFFF] lg:mt-8 md:mt-4 mt-2">
                      Safety and security
                    </div>
                  </div>
                </div>
                <div className="flex gap-20 lg:mt-16 md:mt-10">
                  <div className="w-[38%] my-8">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="46"
                        viewBox="0 0 34 46"
                        fill="none"
                      >
                        <mask id="path-1-inside-1_2319_5944" fill="white">
                          <path d="M32.8486 32.2401C33.3831 32.3157 33.8831 31.949 33.9337 31.4116C34.2686 27.8544 33.3295 24.2831 31.2494 21.2742C28.9812 17.9931 25.5137 15.6085 21.5032 14.5716C17.4926 13.5346 13.2173 13.9175 9.4865 15.6475C5.75566 17.3776 2.82812 20.3349 1.25797 23.9597C-0.312172 27.5845 -0.415977 31.6253 0.966206 35.3172C2.34839 39.0092 5.12065 42.0962 8.7583 43.9939C12.3959 45.8917 16.6466 46.4685 20.7057 45.6152C24.4168 44.8351 27.7324 42.909 30.1338 40.1587C30.5007 39.7386 30.396 39.0997 29.9347 38.7863C29.5094 38.4974 28.935 38.593 28.5967 38.9801C26.4758 41.4063 23.549 43.1055 20.2735 43.794C16.6878 44.5478 12.9329 44.0382 9.71954 42.3618C6.50615 40.6854 4.05722 37.9585 2.83624 34.6971C1.61526 31.4357 1.70696 27.8662 3.09398 24.6642C4.481 21.4621 7.06709 18.8498 10.3628 17.3215C13.6585 15.7932 17.4352 15.455 20.978 16.371C24.5207 17.287 27.5838 19.3935 29.5875 22.2919C31.3961 24.9081 32.2282 28.0057 31.9718 31.0988C31.9261 31.6506 32.3004 32.1627 32.8486 32.2401Z" />
                        </mask>
                        <path
                          d="M32.8486 32.2401C33.3831 32.3157 33.8831 31.949 33.9337 31.4116C34.2686 27.8544 33.3295 24.2831 31.2494 21.2742C28.9812 17.9931 25.5137 15.6085 21.5032 14.5716C17.4926 13.5346 13.2173 13.9175 9.4865 15.6475C5.75566 17.3776 2.82812 20.3349 1.25797 23.9597C-0.312172 27.5845 -0.415977 31.6253 0.966206 35.3172C2.34839 39.0092 5.12065 42.0962 8.7583 43.9939C12.3959 45.8917 16.6466 46.4685 20.7057 45.6152C24.4168 44.8351 27.7324 42.909 30.1338 40.1587C30.5007 39.7386 30.396 39.0997 29.9347 38.7863C29.5094 38.4974 28.935 38.593 28.5967 38.9801C26.4758 41.4063 23.549 43.1055 20.2735 43.794C16.6878 44.5478 12.9329 44.0382 9.71954 42.3618C6.50615 40.6854 4.05722 37.9585 2.83624 34.6971C1.61526 31.4357 1.70696 27.8662 3.09398 24.6642C4.481 21.4621 7.06709 18.8498 10.3628 17.3215C13.6585 15.7932 17.4352 15.455 20.978 16.371C24.5207 17.287 27.5838 19.3935 29.5875 22.2919C31.3961 24.9081 32.2282 28.0057 31.9718 31.0988C31.9261 31.6506 32.3004 32.1627 32.8486 32.2401Z"
                          fill="white"
                          stroke="white"
                          stroke-width="2"
                          stroke-linejoin="round"
                          mask="url(#path-1-inside-1_2319_5944)"
                        />
                        <path
                          d="M11.5 43.5C11.5376 42.587 9.98665 40.2264 8.72468 38.561C7.98527 37.5852 8.68053 36.6476 9.38311 35.8226C10.1276 34.9484 9.72443 33.9496 8.69179 33.4474L5.96606 32.122M9.2764 17.0976C10.6285 17.828 12.4936 19.3995 11.5922 26.85C11.3668 28.8222 13.4532 29.05 14.2419 29.05C14.5982 29.05 17.4516 29.5519 17.0005 31.8C16.4488 34.55 22.5178 33.45 20.3109 40.6M21.6204 19.3617C21.395 20.4208 21.6429 22.9554 24.4373 24.6208C27.2316 26.2862 26.2025 30.1356 25.3387 31.8521C24.888 33.2765 26.7958 36.6075 29.5 39.5M23.6485 4.78947C21.9994 5.57174 20.6329 7.08123 19.5651 8.73383M10.1274 4.78947C11.3596 5.47697 13.2546 6.87016 14.7429 8.73383M15.5359 4.78947C15.3105 3.83991 14.2063 1.94077 11.5922 1.94077C8.32459 1.94077 7.64854 1.61208 6.97248 1.06425C6.29642 0.516421 4.94431 3.58425 5.9584 5.99469C6.97248 8.40513 10.3444 11.473 14.7429 8.73383M14.7429 8.73383C16.0219 10.3353 17.1133 11.9555 17.1133 14.1025C17.4877 12.7273 18.2401 10.7847 19.5651 8.73383M23.4232 10.0486C25.0382 9.64688 28.2007 7.85731 27.9302 3.91295C27.5922 -1.01749 27.2542 2.26947 24.4373 2.26947C21.6204 2.26947 16.7212 2.59817 19.5651 8.73383"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <div className="text-body-bold text-[#FFFFFF] lg:mt-8 md:mt-4 mt-2">
                      Environmental <br></br>sustainability
                    </div>
                  </div>
                  <div className="w-[38%] my-8">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M35.3843 8.73586C35.8 8.43152 35.8919 7.84627 35.5685 7.44523C32.7796 3.98665 28.9112 1.54766 24.5684 0.528751C19.9223 -0.561333 15.0396 0.0458351 10.802 2.2406C6.56434 4.43537 3.25118 8.07307 1.46082 12.4968C-0.329554 16.9204 -0.479118 21.8385 1.03914 26.3628C2.55739 30.8871 5.64338 34.7194 9.7398 37.1677C13.8362 39.6159 18.6731 40.5186 23.3768 39.7129C28.0805 38.9071 32.3411 36.446 35.3892 32.7739C38.2382 29.3416 39.8523 25.0629 39.9903 20.622C40.0063 20.1071 39.58 19.6958 39.0649 19.7038C38.5498 19.7118 38.1412 20.1362 38.1227 20.651C37.9793 24.6465 36.5183 28.4927 33.9536 31.5824C31.1899 34.9119 27.3268 37.1434 23.0618 37.874C18.7968 38.6046 14.4112 37.7861 10.6969 35.5662C6.98258 33.3464 4.18445 29.8716 2.80782 25.7693C1.43119 21.667 1.56681 17.2077 3.19017 13.1967C4.81353 9.18563 7.81764 5.88726 11.66 3.89722C15.5023 1.90718 19.9296 1.35665 24.1423 2.34505C28.0515 3.26226 31.5369 5.44859 34.0615 8.54872C34.3868 8.94819 34.9686 9.04021 35.3843 8.73586Z"
                          fill="white"
                        />
                        <path
                          d="M9.5 19.5L19 28.5L39 11.5"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <div className="text-body-bold text-[#FFFFFF] lg:mt-8 md:mt-4 mt-2">
                      Convenience and simplicity
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-20 font-bold ulg:text-[36px] lg:text-[30px] md:text-[24px] leading-[150%] tracking-[0px] md:hidden mdm:text-[20px]">
                <div className="text-[#FFFFFF]">Logo text</div>
                <div className="text-[#FFFFFF]">Logo text</div>
                <div className="text-[#FFFFFF]">Logo text</div>
                <div className="text-[#FFFFFF]">Logo text</div>
              </div>
              <div className="basis-6/12 flex md:flex-col justify-center items-center shrink-0 mdm:mt-20">
                <Image
                  src="/png/index/iphone.png"
                  alt="Picture of the author"
                  width={200}
                  height={100}
                  className="xl:w-[370px] lg:w-[356px] md:w-[330px] w-[50%]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-20 pb-36 font-bold ulg:text-[36px] lg:text-[30px] md:text-[24px] leading-[150%] tracking-[0px] mdm:hidden">
            <div className="text-[#FFFFFF]">Logo text</div>
            <div className="text-[#FFFFFF]">Logo text</div>
            <div className="text-[#FFFFFF]">Logo text</div>
            <div className="text-[#FFFFFF]">Logo text</div>
            <div className="text-[#FFFFFF]">Logo text</div>
            <div className="text-[#FFFFFF]">Logo text</div>
          </div>
        </div>
      </section>

      <section>
        <div className="basis-6/12 mt-56 flex flex-col justify-center container-style">
          <div className="text-h1">
            Redefining customer engagement and helping you achieve your environmental goals
          </div>
          <div className="text-body-regular text-[#404040] mt-10">
            Our platform's innovative approach, the first of its kind, seamlessly integrates
            consumers and merchants, elevating the shopping experience to unprecedented heights.
            Imagine a world where digital receipts flow effortlessly from merchants to consumers,
            fostering transparency and trust.
          </div>
        </div>
      </section>

      <section className="container-style">
        <div className="basis-6/12 flex flex-col justify-center items-start w-full mt-20">
          <HorizontalCarousel />
          <div className="flex flex-col mt-20 items-start">
            <button
              type="button"
              className="w-[198px] pt-[19px] pr-[16px] pb-[20px] pl-[16px] justify-center items-center rounded-[10px] bg-[#0E72E8] hover:bg-[#0C5CBC] active:bg-[#00489E] text-[16px] font-bold not-italic leading-[150%] text-[#F3F3F3]"
            >
              Contact us
            </button>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>

      <div
        id="lines"
        className="w-[1px] absolute top-[0px] left-[3.6%] sm:left-[2.4%] md:left-[4%] xl:left-[18.1%] bg-[#0E72E8] bg-opacity-20 z-[10]"
      ></div>
      <div
        id="lines1"
        className="hidden md:block w-[1px] absolute top-[0px] md:left-[27.8%] xl:left-[34.7%] bg-[#0E72E8] bg-opacity-20 z-[10]"
      ></div>
      <div
        id="lines2"
        className="hidden md:block w-[1px] absolute top-[0px] md:left-[51.6%] xl:left-[51.2%] bg-[#0E72E8] bg-opacity-20 z-[10]"
      ></div>
      <div
        id="lines3"
        className="hidden md:block w-[1px] absolute top-[0px] md:left-[75.5%] xl:left-[67.65%] bg-[#0E72E8] bg-opacity-20 z-[10]"
      ></div>
      <div
        id="lines4"
        className="w-[1px] absolute top-[0px] left-[98%] md:left-[96.6%] xl:left-[82%] bg-[#0E72E8] bg-opacity-20 z-[10]"
      ></div>
    </div>
  )
}
