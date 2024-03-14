import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
// import { makeStyles } from '@mui/styles'
import { useEffect, useState } from 'react'
import * as React from 'react'

import WorkingSteps from '@/components/Benefits_WorkingSteps'
// import InputBoxWithSVG from "@/components/Input";
import AppStore from '@/components/buttons/AppStore'
import GooglePlay from '@/components/buttons/GooglePlay'
import { goodPointsContent, workingStepsContent } from '@/components/Content'
import Footer from '@/components/Footer'
import Image_Description from '@/components/Image_Description'
import Image_Description_New from '@/components/Image_Description_New'
import Navbar from '@/components/Navbar'
import Outlet from '@/components/Outlet'
import Search from '@/components/Search'

// const useStyles = makeStyles(() => ({
//   formControl: {
//     minWidth: 300,
//     '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
//       borderColor: '#131313', // Replace 'green' with your desired border color
//       borderWidth: 1,
//     },
//   },
//   focusedLegend: {
//     color: '#7E7E7E', // Replace 'red' with your desired legend color
//   },
// }))

export default function Benefits() {
  // const classes = useStyles()

  const [country, setCountry] = React.useState('')
  const [city, setCity] = React.useState('')

  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }
  const handleCityChange = (event) => {
    setCity(event.target.value)
  }

  const [click1, setClick1] = useState('false')
  const [click2, setClick2] = useState('false')
  const [click3, setClick3] = useState('false')
  const [click4, setClick4] = useState('false')
  const [click5, setClick5] = useState('false')
  const [click6, setClick6] = useState('false')

  const handleClick = (number) => {
    if (number == '1') {
      setClick1('true')
      setClick2('false')
      setClick3('false')
      setClick4('false')
      setClick5('false')
      setClick6('false')
    } else if (number == '2') {
      setClick2('true')
      setClick1('false')
      setClick3('false')
      setClick4('false')
      setClick5('false')
      setClick6('false')
    } else if (number == '3') {
      setClick3('true')
      setClick2('false')
      setClick1('false')
      setClick4('false')
      setClick5('false')
      setClick6('false')
    } else if (number == '4') {
      setClick4('true')
      setClick2('false')
      setClick3('false')
      setClick1('false')
      setClick5('false')
      setClick6('false')
    } else if (number == '5') {
      setClick5('true')
      setClick2('false')
      setClick3('false')
      setClick4('false')
      setClick1('false')
      setClick6('false')
    } else if (number == '6') {
      setClick6('true')
      setClick2('false')
      setClick3('false')
      setClick4('false')
      setClick5('false')
      setClick1('false')
    }
  }

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

      <section className="mt-24 md:mt-[200px] background-rectangle-wavy">
        <Image_Description
          type="hero"
          title="Unlock the power of your data"
          description="Our intelligent platform automatically links your payment account and cash transactions to your shopping activities. Filter, tag, and share transaction details directly from the app. No hassle, no paper, just absolute efficiency."
          image="/png/Benefits/Hero.png"
        />
      </section>

      <section className="bg-big-rectangle bg-no-repeat relative top-[-470px] md:top-[-400px] z-[-1]">
        <section className="bg-wavylines container-style">
          <div className="">
            <section className=" pt-[500px] ">
              <div className="text-subtitle-1 md:text-h2">How it works</div>
              <div className="flex flex-col md:flex-row gap-10 mt-20 ">
                {workingStepsContent.map((step, key) => {
                  return <WorkingSteps key={key} data={step} />
                })}
              </div>
            </section>

            <section className="flex flex-col md:flex-row items-center md:justify-between pt-32 md:pt-64 pb-24 md:pb-48">
              <div className="basis-6/12 flex flex-col justify-center">
                <div className="text-subtitle-1 md:text-h2">
                  Curated receipts at your fingertips
                </div>
                <div className="text-body-regular mt-10">
                  With our user-friendly interface, you can effortlessly search and filter through
                  your receipts, view detailed transaction information, and even generate expense
                  reports. Save time, redёuce paperwork, and stay organized with our digital
                  receipts.
                </div>
              </div>
              <div className="basis-4/12 mt-10 md:mt-0">
                <img src="/svg/phone.svg" />
              </div>
            </section>
          </div>
        </section>

        <section className="bg-wavylines-2 container-style">
          <div className="">
            <section className=" flex flex-col md:flex-row gap-24">
              {goodPointsContent.map((point, id) => {
                return (
                  <div key={id} className="basis-1/3">
                    <div>
                      <img src={point.icon} />
                    </div>
                    <div className="text-body-bold mt-10">{point.title + id}</div>
                    <div className="text-txt-medium text-[#404040] mt-4">{point.text}</div>
                  </div>
                )
              })}
            </section>
            <section className="mt-32 md:mt-72">
              <Image_Description_New
                type="content"
                title="Meaningful financial insight and budgeting tool"
                description="Our platform gives you deeper access to your transactional data, linking your payment account transactions, with detailed merchant transaction line items, allowing you to set meaningful budget limits."
                image="/png/Benefits/IMG1.png"
              />
            </section>
          </div>
        </section>

        <section className=" pb-[200px] md:pb-[550px] container-style">
          <div className=" pt-12 md:pt-72">
            <Image_Description_New
              type="content"
              title="Personalised offers, just for you"
              description="Get rewarded for your loyalty through personalised offers and rewards, and see all your loyalty and reward points in one place."
              image="/png/Benefits/IMG2.png"
            />
          </div>
        </section>
      </section>

      <section className="container-style mt-[-400px] ">
        <div className="flex flex-col ">
          <div className="text-subtitle-1 md:text-h2">Our Coverage</div>
          <div className="text-body-regular text-[#404040] md:w-8/12 mt-6">
            Discover the wide coverage of our platform and receive digital receipts in your favorite
            stores and industries!
          </div>

          <section className="mt-24 flex flex-col flex-wrap md:flex-row gap-14 gap-y-3 items-center">
            <FormControl
              sx={{ m: 1, minWidth: 300 }}
              // className={classes.formControl}
              variant="outlined"
            >
              <InputLabel
                id="demo-simple-select-autowidth-label"
                focused={false}
                // className={classes.focusedLegend}
              >
                Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={country}
                onChange={handleCountryChange}
                label="Country"
                sx={{ borderRadius: '10px' }}
              >
                <MenuItem value={10}>India</MenuItem>
                <MenuItem value={21}>US</MenuItem>
                <MenuItem value={22}>UK</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              sx={{ m: 1, minWidth: 300 }}
              // className={classes.formControl}
              variant="outlined"
            >
              <InputLabel
                id="demo-simple-select-city-label"
                focused={false}
                // className={classes.focusedLegend}
              >
                City
              </InputLabel>
              <Select
                labelId="demo-simple-select-city-label"
                id="demo-simple-select-city"
                value={city}
                onChange={handleCityChange}
                label="City"
                sx={{ borderRadius: '10px' }}
              >
                <MenuItem value={10} className="mx-5 rounded-md mb-1">
                  Mumbai
                </MenuItem>
                <MenuItem value={21} className="mx-5 rounded-md mb-1">
                  Delhi
                </MenuItem>
                <MenuItem value={22} className="mx-5 rounded-md mb-1">
                  Banglore
                </MenuItem>
              </Select>
            </FormControl>

            <div className="ms-2 self-center w-full">
              <Search />
            </div>
          </section>

          <section>
            <div>{/* <InputBoxWithSVG /> */}</div>
            <div className="flex gap-7 flex-col lg:flex-row lg:items-end mt-16">
              <div className="lg:basis-7/12 xl:basis-7/12 2xl:basis-6/12">
                <div className="text-subtitle-2">Full list</div>
                <div className="flex flex-col gap-4 mt-4">
                  <div onClick={() => handleClick('1')}>
                    <Outlet clicked={click1} />
                  </div>
                  <div onClick={() => handleClick('2')}>
                    <Outlet clicked={click2} />
                  </div>
                  <div onClick={() => handleClick('3')}>
                    <Outlet clicked={click3} />
                  </div>
                  <div onClick={() => handleClick('4')}>
                    <Outlet clicked={click4} />
                  </div>
                  <div onClick={() => handleClick('5')}>
                    <Outlet clicked={click5} />
                  </div>
                  <div onClick={() => handleClick('6')}>
                    <Outlet clicked={click6} />
                  </div>
                </div>
              </div>
              <div className="self-center hidden md:block">
                <img src="/png/Benefits/Map.png" />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="flex items-center flex-col md:flex-row md:items-center md:gap-32 container-style">
        <div className="flex items-center flex-col lg:flex-row md:items-center md:gap-32 pt-24 md:pt-64 ">
          <div className="basis-1/2 gap-32">
            <div className="text-subtitle-1 md:text-h2">Get Wollete</div>
            <div className="text-body-regular text-[#404040] mt-10 md:mt-0">
              Join the movement towards a paperless future and make a difference with every digital
              receipt. Download thewolletteapp today and join the movement towards a paperless
              future.
            </div>
          </div>
          <div className="flex flex-row basis-1/2 gap-8 md:gap-32 mt-14 md:mt-0">
            <AppStore />
            <GooglePlay />
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-40">
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
  )
}
