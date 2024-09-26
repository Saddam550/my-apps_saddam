import AOS from 'aos'
import "aos/dist/aos.css"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { IoLogoGithub } from 'react-icons/io5'
import { PiLinkBold } from 'react-icons/pi'
import './css/myCss.css'
export default function ProjuctImage({
  image,
  title,
  Project_behance_link,
  project_github_link,
  Project_live_link,
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);


  return (
    <div data-aos="zoom-in"  className="md:w-96 lg:w-[320px] xl:w-[350px] h-[100%] rounded-t overflow-hidden reletoves">
      <div className="w-[100%] h-[100%]">
        <Link target="_blank " className="singleImageLink" href={Project_behance_link}>
          <Image className="h-[180px] singleImage" src={image} alt=""></Image>
        </Link>
      </div>

      <div className="flex justify-between items-center h-12 bg-zinc-800 p-5">
        <div className="Project_Title">{title}</div>
        <div>
          <div className="flex gap-3  ">
            <Link target="_blank" href={project_github_link}>
              <IoLogoGithub className="projectLink" />{' '}
            </Link>
            <Link target="_blank" href={Project_live_link}>
              {' '}
              <PiLinkBold className="projectLink" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
