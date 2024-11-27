'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { FaTelegram } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail, MdPhone } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'
import SectionTitle from './mini-Component/SectionTitle'

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="m-auto text-center mt-32 ">
      {/* logo  */}
      <div className=" m-auto w-32 h-32 relative">
        <Image
          data-aos="slide-up"
          className="w-[100%] h-[100%] absolute bottom-[-24px]"
          loading="lazy"
          src={'/MYLOGO.png'}
          width={100}
          height={100}
          alt=""
        ></Image>
      </div>
      {/* name  */}
      <h1
        className="uppercase text-2xl"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <SectionTitle sectionTitle={'saddam hossen'} />
      </h1>
      <h1 className="mb-4" data-aos="fade-up" data-aos-duration="2000">
        All rights reserved. {new Date().getFullYear()}
      </h1>
      {/* socal  */}
      <div className=" flex w-64 bg-orange-500 justify-between items-center text-2xl py-2 px-5 rounded-full m-auto z-20 ">
        <div className="flex gap-3 mt-1 items-center hover:text-emerald-300">
          <Link href="mailto:freelancersaddam550@gmail.com" alt="">
            <span>
              <MdEmail />
            </span>{' '}
          </Link>
        </div>
        <div className="flex gap-3 mt-1 items-center hover:text-emerald-300">
          <Link href="tel:+8801998065133" alt="">
            <span>
              <MdPhone />
            </span>{' '}
          </Link>
        </div>
        <div className="flex gap-3 mt-1 items-center hover:text-emerald-300">
          <Link href="linkedin.com/in/saddam-hossen-6915991ba" alt="">
            <span>
              <ImLinkedin />
            </span>{' '}
          </Link>
        </div>
        <div className="flex gap-3  mt-1 items-center hover:text-emerald-300">
          <Link href="instagram.com/md_saddam_hossen786" alt="">
            <span>
              <RiInstagramFill />
            </span>{' '}
          </Link>
        </div>

        <div className="flex gap-3 mt-1 items-center hover:text-emerald-300">
          <Link href="http://wa.me/message/FJVJ45FLBKX5G1" alt="">
            <span>
              <IoLogoWhatsapp />
            </span>{' '}
          </Link>
        </div>
        <div className="flex gap-3 mt-1 items-center hover:text-emerald-300">
          <Link href="/" alt="">
            <span>
              <FaTelegram />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
