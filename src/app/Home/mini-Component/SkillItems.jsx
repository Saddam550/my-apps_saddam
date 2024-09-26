
"use client"
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import "./css/myCss.css"
export default function SkillItems({ title , animation=""}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  return (
    <div data-aos="zoom-in"  className="bg-white m-1 text-black text-2xl  h-14 grid items-center cursor-pointer rounded-lg font-bold hover">
      {' '}
      {title}
    </div>
  )
}
