'use client'
import emailjs from '@emailjs/browser'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaTelegram } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail, MdPhone } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'
import './Home/button.css'
import SectionTitle from './Home/mini-Component/SectionTitle'
export default function From() {
  const form = useRef()
  const [success, setSuccess] = useState('')
  const [names, setname] = useState()
  const [email, setemail] = useState()
  const [massge, setmassage] = useState()

  setTimeout(() => {
    setSuccess('')

  }, 3000)


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_qz2qorn', 'template_msmxoal', form.current, {
        publicKey: 's8CRmO318eM_6rlLn',
      })
      .then(
        () => {
          setSuccess(' Your message successfully send. Thanks you ')
          setname('')
          setemail('')
          setmassage('')
        },
        (error) => {
          console.log(error)
          setSuccess(
            ' Your message unsuccessfull send please try again '
          )
        }
      )
  }

  return (
    <section    id="contacts" className="mt-36 flex justify-between px-8 flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap ">
      <div className=" w-[500px] lg:ml-28" data-aos="fade-up">
        {/* info  */}
        <div className="text-[40px] capitalize">
          <SectionTitle sectionTitle=" Get in touch" />
        </div>
        <p className="text-gray-400">
          Do you have a project idea? Want to collaborate or work together? Just
          fill out the form and I will respond within 24 hours.
        </p>

        <div className="mt-3 ">
          <div className="flex gap-3 mt-1 items-center hover:text-pink-400">
            <span>
              <MdEmail />
            </span>{' '}
            <Link href="mailto:freelancersaddam550@gmail.com" alt="">
              freelancersaddam550@gmail.com
            </Link>
          </div>
          <div className="flex gap-3 mt-1 items-center hover:text-pink-400">
            <span>
              <MdPhone />
            </span>{' '}
            <Link href="tel:+8801998065133" alt="">
              Call Me
            </Link>
          </div>
          <div className="flex gap-3 mt-1 items-center hover:text-pink-400">
            <span>
              <ImLinkedin />
            </span>{' '}
            <Link href="linkedin.com/in/saddam-hossen-6915991ba" alt="">
              Linkedin
            </Link>
          </div>
          <div className="flex gap-3  mt-1 items-center hover:text-pink-400">
            <span>
              <RiInstagramFill />
            </span>{' '}
            <Link href="instagram.com/md_saddam_hossen786" alt="">
              instagram
            </Link>
          </div>

          <div className="flex gap-3 mt-1 items-center hover:text-pink-400">
            <span>
              <IoLogoWhatsapp />
            </span>{' '}
            <Link href="http://wa.me/message/FJVJ45FLBKX5G1" alt="">
              WhatsApp
            </Link>
          </div>
          <div className="flex gap-3 mt-1 items-center hover:text-pink-400">
            <span>
              <FaTelegram />
            </span>{' '}
            <Link href="/" alt="">
              Telegram
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[500px] mt-6 md:mt-0" data-aos="fade-up">
        {/* from  */}
        <form ref={form} onSubmit={sendEmail} id="Contacts">
          <div>
            <main className="wrapper">
              <input
                name="user_name"
                onChange={(e) => {
                  setname(e.target.value)
                }}
                value={names}
                type="text"
                required
                placeholder=""
              />
              <span>Enter Your Name</span>
            </main>
          </div>
          <div className="mt-5">
            <main className="wrapper">
              <input
                name="user_email"
                value={email}
                type="text"
                placeholder=""
                required
              />
              <span>Enter Your E-Mail</span>
            </main>
          </div>

          <div className="mt-5">
            <main className="wrapper">
              <textarea
                name="message"
                placeholder=""
                value={massge}
                required
                rows={7}
              ></textarea>
              <span className="textAreaSpan">
                {' '}
                Tel me a bit more what you are looking for?
              </span>
            </main>
          </div>
          <button type="submit" className="border-none button2 about-me mt-4">
            {' '}
            CONTACT{' '}
          </button>
          {success ? (
            <div className=" text-sm text-white  bg-sky-600 ">
              {success}
            </div>
          ) : (
            <div className=" text-sm text-red-600   bg-zinc-900">
            {success }
          </div>
          )}

          {/* {success ? (
            <div className=" text-sm text-red-600 border-spacing-1 border bg-zinc-900">
              {unsuccess + " "+names}
            </div>
          ) : (
            ''
          )} */}
        </form>
      </div>
    </section>
  )
}
