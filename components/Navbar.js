import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Login from './buttons/Login'
import { navbarContent } from './Content'
import { consumerList } from './Content'
import { partnersList } from './Content'
import { developerList } from './Content'
import { resourcesList } from './Content'
export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const [toggle3, setToggle3] = useState(false)
  const [toggle4, setToggle4] = useState(false)

  const [list0, setList0] = useState(0)
  const [list1, setList1] = useState(0)
  const [list2, setList2] = useState(0)
  const [list3, setList3] = useState(0)

  const f1 = (id) => {
    console.log(id)
    if (id === 1) {
      setList0(!list0)
      setList1(false)
      setList2(false)
      setList3(false)
    } else if (id === 2) {
      setList1(!list1)
      setList0(false)
      setList2(false)
      setList3(false)
    } else if (id === 3) {
      setList2(!list2)
      setList0(false)
      setList1(false)
      setList3(false)
    } else if (id === 4) {
      setList3(!list3)
      setList0(false)
      setList1(false)
      setList2(false)
    }
  }

  return (
    <>
      <div className="container-style items-center justify-center hidden md:!flex mt-10 ">
        <nav className="flex justify-between w-full text-header-mobile-sb transition-all">
          <section className="flex justify-between shrink-0">
            <Image
              src="/png/logo.png"
              alt="Picture of the author"
              width={180}
              height={500}
              className="lg:w-[180px] lg:h-[57px] w-[140px] h-[60px]"
            />
            {/* <Image src="/png/logo.png" alt="Picture of the author" width={100} height={100} className='hidden md:block lg:hidden'/> */}
          </section>
          <section className="ld:px-6 md:px-2">
            <ul className="flex justify-between list-none items-center lg:px-[5px] md:px-[2px] lg:gap-6 md:gap-2 mt-3">
              {navbarContent.map((nav, id) => {
                return (
                  <li
                    className="flex justify-center"
                    key={id}
                    onClick={() => {
                      f1(id)
                    }}
                  >
                    <Link
                      href={`${nav === 'Merchants' ? 'merchants' : '#'}`}
                      // href="#"
                      style={{ textDecoration: 'none' }}
                      className="text-[black] hover:text-[#0E72E8] flex justify-end group"
                    >
                      {nav}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={`xl:mt-1 lg:mt-1 lg:ml-[4px] ${
                          nav == 'Merchants' ? 'hidden' : 'block'
                        } md:mt-[3.6px] md:ml-[1px]`}
                      >
                        <path
                          d="M3 6L7.50667 11L12 6"
                          stroke="#131313"
                          className="group-hover:stroke-[#0E72E8]"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </Link>

                    <div
                      className={`sidebar absolute top-[120px] bg-[#FFFFFF] rounded-[10px] p-[8px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.15)] slide-top ${
                        list0 && nav === 'Consumers' ? 'block' : 'hidden'
                      }`}
                    >
                      {consumerList.map((nav, id) => {
                        return (
                          <>
                            <div className="group bg-[#FFFFFF] hover:bg-[#EBF4FF] rounded-[10px] text-header-mobile-sb p-[16px] cursor-pointer group">
                              <Link
                                href={nav.toLowerCase()}
                                style={{ textDecoration: 'none' }}
                                className={`text-[black] group-hover:text-[#0E72E8]`}
                              >
                                {nav}
                              </Link>
                            </div>
                          </>
                        )
                      })}
                    </div>
                    <div
                      className={`absolute sidebar top-[135px] bg-[#FFFFFF] rounded-[10px] p-[8px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.15)] ${
                        list1 && nav == 'Partners' ? 'block' : 'hidden'
                      } slide-top`}
                    >
                      {partnersList.map((nav, id) => {
                        return (
                          <>
                            <div className="bg-[#FFFFFF] group hover:bg-[#EBF4FF] rounded-[10px] text-header-mobile-sb p-[16px] cursor-pointer">
                              <Link
                                href={nav.toLowerCase().replace(/ /g, '')}
                                style={{ textDecoration: 'none' }}
                                className={`text-[black] group-hover:text-[#0E72E8]`}
                              >
                                {nav}
                              </Link>
                            </div>
                          </>
                        )
                      })}
                    </div>
                    <div
                      className={`absolute sidebar top-[135px] bg-[#FFFFFF] rounded-[10px] p-[8px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.15)] ${
                        list2 && nav == 'Developers' ? 'block' : 'hidden'
                      } slide-top`}
                    >
                      {developerList.map((nav, id) => {
                        return (
                          <>
                            <div className="bg-[#FFFFFF] hover:bg-[#EBF4FF] rounded-[10px] text-header-mobile-sb p-[16px] cursor-pointer">
                              {nav}
                            </div>
                          </>
                        )
                      })}
                    </div>
                    <div
                      className={`absolute sidebar top-[135px] bg-[#FFFFFF] rounded-[10px] p-[8px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.15)] ${
                        list3 && nav == 'Resources' ? 'block' : 'hidden'
                      } slide-top`}
                    >
                      {resourcesList.map((nav, id) => {
                        return (
                          <>
                            <div className="bg-[#FFFFFF] group hover:bg-[#EBF4FF] rounded-[10px] text-header-mobile-sb p-[16px] cursor-pointer">
                              <Link
                                href={nav.toLowerCase().replace(/ /g, '')}
                                style={{ textDecoration: 'none' }}
                                className={`text-[black] group-hover:text-[#0E72E8]`}
                              >
                                {nav}
                              </Link>
                            </div>
                          </>
                        )
                      })}
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>

          <section className="group flex lg:gap-2 justify-center items-center ">
            <div className="flex justify-center items-center hover:text-[#0E72E8]">
              <Link
                href="#"
                style={{ textDecoration: 'none' }}
                className="text-[black] group-hover:text-[#0E72E8]"
              >
                En
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="lg:ml-2"
              >
                <path
                  d="M3 6L7.50667 11L12 6"
                  stroke="#131313"
                  strokeWidth="1.5"
                  className="group-hover:stroke-[#0E72E8]"
                />
              </svg>
            </div>
            <div className="flex shrink-0">
              <Login />
            </div>
          </section>
        </nav>
      </div>

      <div className="container-style flex md:hidden justify-center items-center mt-[20px]">
        <nav className="flex items-center justify-between w-full">
          <Image src="/png/logo.png" alt="Picture of the author" width={120} height={120} />
          <div className="flex items-center">
            <div className="group w-[50px] flex justify-center items-center mr-[3px] text-[#131313] font-semibold leading-[150%] text-[17px] hover:text-[#0E72E8] transition-all">
              En
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="lg:ml-2"
              >
                <path
                  d="M3 6L7.50667 11L12 6"
                  stroke="#131313"
                  strokeWidth="1.5"
                  className="group-hover:stroke-[#0E72E8]"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 40 40"
              fill="none"
              className={`${!toggle ? 'block' : 'hidden'}`}
              onClick={() => setToggle(!toggle)}
            >
              <path d="M36 11H4V13H36V11Z" fill="#020659" />
              <path d="M36 19H8V21H36V19Z" fill="#020659" />
              <path d="M36 27H12V29H36V27Z" fill="#020659" />
            </svg>
          </div>
        </nav>
      </div>

      <div
        className={`${
          toggle ? 'block fixed top-5 right-[4vw]' : 'hidden'
        } w-[92%] h-[97%] mb-[50px] shrink-0 rounded-[5px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.15)] bg-[#FFFFFF] z-[100000]`}
      >
        <div className="flex justify-between ">
          {/* <img src="/png/logo.png" alt="logo" className="w-[120px] h-[40px] ml-[15px] mt-[10px]" /> */}
          <Image
            src="/png/logo.png"
            alt="logo"
            width={500}
            height={500}
            className="w-[120px] h-[40px] ml-[15px] mt-[10px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="mr-[15px] mt-[10px]"
            onClick={() => setToggle(!toggle)}
          >
            <path d="M12 12L20 20M20 20L28 28M20 20L28 12M20 20L12 28" stroke="#020659" />
          </svg>
        </div>
        <div className="flex justify-between text-[#131313] items-center h-[50px] pl-[17px] pr-[17px] mt-[5px] text-txt-sb cursor-pointer">
          <Link
            href="/merchant"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {navbarContent[0]}
          </Link>
        </div>
        <div
          className="flex justify-between text-[#131313] items-center h-[50px] pl-[17px] pr-[17px] mt-[5px] text-txt-sb cursor-pointer"
          onClick={() => setToggle1(!toggle1)}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {navbarContent[1]}
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className={`${!toggle1 ? 'block' : 'hidden'} cursor-pointer`}
            onClick={() => setToggle1(!toggle1)}
          >
            <path d="M7 10L13.5096 17L20 10" stroke="#131313" strokeWidth="1.5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className={`${toggle1 ? 'block' : 'hidden'} cursor-pointer`}
            onClick={() => setToggle1(!toggle1)}
          >
            <path d="M21 18L14.4904 11L8 18" stroke="#131313" strokeWidth="1.5" />
          </svg>
        </div>
        <div
          className={`${
            toggle1 ? 'flex' : 'hidden'
          } flex-row items-center h-[40px] pl-[25px] text-[#131313] text-header-mobile-sb hover:bg-[#EBF4FF]`}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {consumerList[0]}
          </Link>
        </div>
        <div
          className={`${
            toggle1 ? 'flex' : 'hidden'
          } flex-row items-center h-[40px] pl-[25px] text-[#131313] text-header-mobile-sb hover:bg-[#EBF4FF]`}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {consumerList[1]}
          </Link>
        </div>
        <div
          className="flex justify-between text-[#131313] items-center h-[50px] pl-[17px] pr-[17px] text-txt-sb cursor-pointer"
          onClick={() => setToggle2(!toggle2)}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {navbarContent[2]}
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className={`${!toggle2 ? 'block' : 'hidden'} cursor-pointer`}
            onClick={() => setToggle2(!toggle2)}
          >
            <path d="M7 10L13.5096 17L20 10" stroke="#131313" strokeWidth="1.5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className={`${toggle2 ? 'block' : 'hidden'} cursor-pointer`}
            onClick={() => setToggle2(!toggle2)}
          >
            <path d="M21 18L14.4904 11L8 18" stroke="#131313" strokeWidth="1.5" />
          </svg>
        </div>
        <div
          className={`${
            toggle2 ? 'flex' : 'hidden'
          } flex-row items-center h-[40px] pl-[25px] text-[#131313] text-header-mobile-sb hover:bg-[#EBF4FF]`}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {partnersList[0]}
          </Link>
        </div>
        <div
          className={`${
            toggle2 ? 'flex' : 'hidden'
          } flex flex-row items-center h-[40px] pl-[25px] text-[#131313] text-header-mobile-sb hover:bg-[#EBF4FF]`}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {partnersList[1]}
          </Link>
        </div>
        <div
          className="flex justify-between text-[#131313] items-center h-[50px] pl-[17px] pr-[17px] text-txt-sb cursor-pointer"
          onClick={() => setToggle3(!toggle3)}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {navbarContent[3]}
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className={`${!toggle3 ? 'block' : 'hidden'} cursor-pointer`}
            onClick={() => setToggle3(!toggle3)}
          >
            <path d="M7 10L13.5096 17L20 10" stroke="#131313" strokeWidth="1.5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className={`${toggle3 ? 'block' : 'hidden'} cursor-pointer`}
            onClick={() => setToggle3(!toggle3)}
          >
            <path d="M21 18L14.4904 11L8 18" stroke="#131313" strokeWidth="1.5" />
          </svg>
        </div>

        <div
          className={`${
            toggle3 ? 'flex' : 'hidden'
          } flex-row items-center h-[40px] pl-[25px] text-[#131313] text-header-mobile-sb hover:bg-[#EBF4FF]`}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {developerList[0]}
          </Link>
        </div>
        <div
          className={`${
            toggle3 ? 'flex' : 'hidden'
          }  flex-row items-center h-[40px] pl-[25px] text-[#131313] text-header-mobile-sb hover:bg-[#EBF4FF]`}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {developerList[1]}
          </Link>
        </div>
        <div
          className={`${
            toggle3 ? 'flex' : 'hidden'
          } flex-row items-center h-[40px] pl-[25px] text-[#131313] text-header-mobile-sb hover:bg-[#EBF4FF]`}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {developerList[2]}
          </Link>{' '}
        </div>
        <div
          className={`${
            toggle3 ? 'flex' : 'hidden'
          }  flex-row items-center h-[40px] pl-[25px] text-[#131313] text-header-mobile-sb hover:bg-[#EBF4FF]`}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {developerList[3]}
          </Link>
        </div>
        <div
          className={`${
            toggle3 ? 'flex' : 'hidden'
          } flex-row items-center h-[40px] pl-[25px] text-[#131313] text-header-mobile-sb hover:bg-[#EBF4FF]`}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {developerList[4]}
          </Link>
        </div>
        <div
          className="flex justify-between text-[#131313] items-center h-[50px] pl-[17px] pr-[17px] text-txt-sb cursor-pointer"
          onClick={() => setToggle4(!toggle4)}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {navbarContent[4]}
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className={`${!toggle4 ? 'block' : 'hidden'} cursor-pointer`}
            onClick={() => setToggle4(!toggle4)}
          >
            <path d="M7 10L13.5096 17L20 10" stroke="#131313" strokeWidth="1.5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className={`${toggle4 ? 'block' : 'hidden'} cursor-pointer`}
            onClick={() => setToggle4(!toggle4)}
          >
            <path d="M21 18L14.4904 11L8 18" stroke="#131313" strokeWidth="1.5" />
          </svg>
        </div>
        <div
          className={`${
            toggle4 ? 'flex' : 'hidden'
          } flex-row items-center h-[40px] pl-[25px] text-[#131313] text-header-mobile-sb hover:bg-[#EBF4FF]`}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {resourcesList[0]}
          </Link>
        </div>
        <div
          className={`${
            toggle4 ? 'flex' : 'hidden'
          } flex-row items-center h-[40px] pl-[25px] text-[#131313] text-header-mobile-sb hover:bg-[#EBF4FF]`}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {resourcesList[1]}
          </Link>
        </div>
        <div
          className={`${
            toggle4 ? 'flex' : 'hidden'
          } flex-row items-center h-[40px] pl-[25px] text-[#131313] text-header-mobile-sb hover:bg-[#EBF4FF]`}
        >
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="text-[black] hover:text-[#0E72E8]"
          >
            {resourcesList[2]}
          </Link>
        </div>
      </div>
    </>
  )
}
