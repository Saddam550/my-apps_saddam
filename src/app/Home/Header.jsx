import Image from 'next/image'
import Link from 'next/link'
import Navber from './Navber'
import "./button.css"
export default function Header() {
  return (
    <div>
      <Navber />
      <div className="container  mx-auto px-20 mt-7">
        <div className="flex justify-between items-center">
          <div className="w-1/2 ">
            <div className="">
              <h1 className="text-4xl bold">
                Hi, I am Saddam <br />
                <span className="bg-gradient-to-r  from-indigo-400 to-red-600  inline-block text-transparent bg-clip-text bold font-bold">
                  {' '}
                  Front-End Developer
                </span>{' '}
              </h1>
            </div>

            <div className=" mt-12">
              Front-End Developer and Wordpress customizing <br />
              expert From <span style={{color:" rgb(240, 54, 194)"}} >Bangladesh</span>. I am
              also proficient in working <br />
              with React JS frameworks. creating websites and designing <br />
              them is my passion
            </div>

           <div className='relative inline-block space-x-4 mt-8'>
           <button className='border-none'> <Link className='button2  more-work' href="" alt=""> Hire Me</Link> </button>
           <button className='border-none'> <Link className='button2 about-me' href="" alt="">Open CV</Link> </button>

           </div>
          </div>

          <div className="myImage">
            <Image
              className="w-96 h-96 "
              loading="lazy"
              src="/saddam.webp"
              width={100}
              height={100}
              alt="SADDAM"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
