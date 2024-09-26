"use client"

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
export default function SectionTitle({sectionTitle,classNames}) {
  const color = "rgb(240, 54, 194)"
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  return (
    <span className={"bg-gradient-to-r  from-indigo-400 to-pink-400 inline-block text-transparent bg-clip-text h-full bold font-bold "+(classNames?classNames:"")}>
    {sectionTitle}

  </span>
  )
}
