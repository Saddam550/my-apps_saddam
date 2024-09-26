'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import { useEffect } from 'react'
import Navber from './Navber'
import './button.css'
import SectionTitle from './mini-Component/SectionTitle'
import './mini-Component/css/myCss.css'
import './mini-Component/css/responcive.css'

export default function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div id="home">
      <span>
        <Navber />
      </span>
      <div className="container  mx-auto px-20   responsive_header_container lg:pt-44 ">
        <div className="flex justify-between items-center lg:flex-row  responsive_header">
          <div className="w-1/2 md:w-full sm:w-full responsive_header_Width "  data-aos="fade-right">
            <div className="">
              <h1 className="text-4xl bold">
                Hi, I am Saddam <br />
                <SectionTitle sectionTitle="Front-End Developer" />
              </h1>
            </div>

            <div className=" mt-12">
              Front-End Developer and Wordpress customizing <br />
              expert From{' '}
              <span style={{ color: ' rgb(240, 54, 194)' }}>Bangladesh</span>. I
              am also proficient in working <br />
              with React JS frameworks. creating websites and designing <br />
              them is my passion
            </div>

            <div className="relative inline-cv  space-x-4 mt-8">
              <button className="border-none">
                {' '}
                <Link
                  className="button2  more-work"
                  href="https://www.upwork.com/freelancers/~01bd38f1115f71bf74"
                  target="_blank"
                  alt=""
                >
                  {' '}
                  Hire Me
                </Link>{' '}
              </button>
              <button className="border-none">
                {' '}
                <a
                  className="button2 about-me"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={'./saddam_hossen_Resume.pdf'}
                  alt=""
                  style={{ top: '0' }}
                >
                  Open CV
                </a>{' '}
              </button>
            </div>
          </div>

          <div className="myImage"  data-aos="fade-up-left">
            <img


              src="/saddam_Logo.png"
              alt="SADDAM"
            />

            {/* <div className='absolute  rotate-180 w-7 h-7 lg:left-[-131%] md:d' >
            <Image
              className=""
              loading="lazy"
              src="/downArrow.png"
              width={100}
              height={100}
              alt="SADDAM"
            />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
