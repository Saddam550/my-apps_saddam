"use client"
import AOS from 'aos'
import "aos/dist/aos.css"
import Image from 'next/image'
import { useEffect } from 'react'
import SectionTitle from './mini-Component/SectionTitle'

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });
  }, []);
  return (
    <div data-aos="zoom-in" className="  flex  justify-center mt-28 aboutRes" id="about">
      <div className="w-[220px] pr-[29px] ">
        <Image

        className='w-[100%]'
          src="/About.gif"
          alt="saddam hossen skill"
          width={100}
          height={100}
          loading="lazy"

          unoptimized={true}

        />
      </div>
      <div className=" w-96  textArea_responsive">
        <h1>
        <SectionTitle a="saddam" classNames="text-4xl" sectionTitle="About Me"/>


        </h1>

        <h4>
        Hi, my name is Saddam. I am a graduate of the Faculty of Science, Computer Science department 2021 - 2024. I am from Bnagladesh. I have rich experience in website development and building.
        </h4>
      </div>
    </div>
  )
}
