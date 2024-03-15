import { useState, useEffect } from 'react'

import Category from '@/components/buttons/Category'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NewsCategory from '@/components/News_Category'
import Search from '@/components/Search'

export default function News() {
  const [category, setCategory] = useState('Category')
  const [click1, setClick1] = useState('false')
  const [click2, setClick2] = useState('false')
  const [click3, setClick3] = useState('false')
  const [click4, setClick4] = useState('false')

  const handleClick = (type) => {
    setCategory(type)
    if (type == 'Category') {
      setClick1('true')
      setClick2('false')
      setClick3('false')
      setClick4('false')
    } else if (type == 'Category 1') {
      setClick2('true')
      setClick1('false')
      setClick3('false')
      setClick4('false')
    } else if (type == 'Category 2') {
      setClick3('true')
      setClick1('false')
      setClick2('false')
      setClick4('false')
    } else if (type == 'Category 3') {
      setClick4('true')
      setClick1('false')
      setClick2('false')
      setClick3('false')
    }
  }

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
        
        <section className="mt-40 container-style">
          <div className="text-h1">News</div>

          <div className="flex flex-col md:flex-row md:gap-6 mt-6 md:mt-10 md:justify-between md:items-center">
            <div className="flex flex-col sm:flex-row md:flex-wrap gap-4 md:gap-6">
              <div className="flex gap-4 md:gap-6">
                <div onClick={() => handleClick('Category')}>
                  <Category text="Category" clicked={click1} />
                </div>
                <div onClick={() => handleClick('Category 1')}>
                  <Category text="Category 1" clicked={click2} />
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div onClick={() => handleClick('Category 2')}>
                  <Category text="Category 2" clicked={click3} />
                </div>
                <div onClick={() => handleClick('Category 3')}>
                  <Category text="Category 3" clicked={click4} />
                </div>
              </div>
            </div>
            <div>
              <Search />
            </div>
          </div>

          <section className="mt-20 flex flex-col gap-16">
            <NewsCategory
              type={category}
              title="Category"
              image="/png/News/IMG.png"
              date="May 20, 2023"
              timeRead="4 min read"
              author="Author"
              header="Header"
              text="Lorem ipsum dolor sit amet consectetur. Lacus aliquam sed scelerisque cras cras etiam arcu euismod bibendum. Bibendum sapien a ipsum mauris molestie. Sapien a ipsum mauris molestie. Ipsum mauris molestie..."
            />

            <NewsCategory
              type={category}
              title="Category 1"
              image="/png/News/IMG.png"
              date="May 20, 2023"
              timeRead="4 min read"
              author="Author"
              header="Header"
              text="Lorem ipsum dolor sit amet consectetur. Lacus aliquam sed scelerisque cras cras etiam arcu euismod bibendum. Bibendum sapien a ipsum mauris molestie. Sapien a ipsum mauris molestie. Ipsum mauris molestie..."
            />

            <NewsCategory
              type={category}
              title="Category 1"
              image="/png/News/IMG.png"
              date="May 20, 2023"
              timeRead="4 min read"
              author="Author"
              header="Header"
              text="Lorem ipsum dolor sit amet consectetur. Lacus aliquam sed scelerisque cras cras etiam arcu euismod bibendum. Bibendum sapien a ipsum mauris molestie. Sapien a ipsum mauris molestie. Ipsum mauris molestie..."
            />

            <NewsCategory
              type={category}
              title="Category 2"
              image="/png/News/IMG.png"
              date="May 20, 2023"
              timeRead="4 min read"
              author="Author"
              header="Header"
              text="Lorem ipsum dolor sit amet consectetur. Lacus aliquam sed scelerisque cras cras etiam arcu euismod bibendum. Bibendum sapien a ipsum mauris molestie. Sapien a ipsum mauris molestie. Ipsum mauris molestie..."
            />

            <NewsCategory
              type={category}
              title="Category 3"
              image="/png/News/IMG.png"
              date="May 20, 2023"
              timeRead="4 min read"
              author="Author"
              header="Header"
              text="Lorem ipsum dolor sit amet consectetur. Lacus aliquam sed scelerisque cras cras etiam arcu euismod bibendum. Bibendum sapien a ipsum mauris molestie. Sapien a ipsum mauris molestie. Ipsum mauris molestie..."
            />
          </section>
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
