import 'bootstrap/dist/css/bootstrap.css'

import Image from 'next/image'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import ReadMoreLeft from './buttons/ReadMoreLeft'

export default function HorizontalCarousel() {
  return (
    <div className="w-full">
      <Carousel controls={false} pause={false}>
        <Carousel.Item interval={2000}>
          <Image src="/png/slide-1.png" alt="Picture of the author" width={2000} height={200} />
          <Carousel.Caption style={{ left: 15 }}>
            <p className="md:text-subtitle-2 sm:text-[20px] sm:font-bold mb:text-[10px] mb:font-bold mb:mt-0 text-[#FFFFFF] text-start">
              Find out how a clothing retailer was able to significantly increase customer
              engagement and loyalty by reducing paper waste.
            </p>
            <div className="flex flex-col items-start ml-[0]">
              <ReadMoreLeft />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Image src="/png/slide-2.png" alt="Picture of the author" width={2000} height={500} />
          <Carousel.Caption style={{ left: 15 }}>
            <p className="md:text-subtitle-2 sm:text-[20px] sm:font-bold mb:text-[10px] mb:font-bold mb:mt-0 text-[#FFFFFF] text-start">
              Find out how a grocery chain has been able to dramatically improve its sustainability
              efforts and create a more convenient way to access their checks and deals
            </p>
            <div className="flex flex-col items-start ml-[0]">
              <ReadMoreLeft />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Image src="/png/slide-3.png" alt="Picture of the author" width={2000} height={500} />

          <Carousel.Caption style={{ left: 15 }}>
            <p className="md:text-subtitle-2 sm:text-[20px] sm:font-bold mb:text-[10px] mb:font-bold mb:mt-0 text-[#FFFFFF] text-start">
              Find out how an electronics retailer has been able to significantly improve their
              customer experience by providing a more personalized shopping experience and
              increasing customer engagement and loyalty.
            </p>
            <div className="flex flex-col items-start ml-[0]">
              <ReadMoreLeft />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
