import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';

export default function Navber() {

const [toggleicon, settoggleicon] = useState(false);
  const toggle=()=>{

if (toggleicon) {
  settoggleicon(false)
}else{
  settoggleicon(true)

}

  }
  const menuHide={
    transform:` ${toggleicon ?"rotateY(97deg)":"rotateY(356deg)"}`,
    transformOrigin: "left",
    transition:"1s"

  }



// scrolling header fiexd style class add

const [isFixed, setIsFixed] = useState(false);

const onScroll = useCallback(() => {
     setIsFixed(window.scrollY);
}, []);
useEffect(() => {


window.addEventListener("scroll", onScroll, { passive: true });
return () => {
   window.removeEventListener("scroll", onScroll, { passive: true });
}
},);




  return (<span >
    {toggleicon?( <div className="toggle_show z-20 cursor-pointer absolute top-3 left-0 ml-4" onClick={toggle}><IoMenuSharp size={25} color="darkblue"/> </div>):( <div className="toggle hideicon" onClick={toggle}></div>)}
    <nav style={menuHide} className={`${isFixed>200 ? 'Header_fixed' : ''} text-white flex lg:h-14  items-center justify-between p-3 navberArea_responsive lg:fixed lg:w-full lg:top-0 z-[1000] `}>
     {toggleicon?( <div className="toggle_show hideicon" onClick={toggle}><IoMenuSharp size={25} color="darkblue"/> </div>):( <div className="toggle" onClick={toggle}></div>)}
      <div className="logo">
        <a href="">
          <Image src="/MYLOGO.png" width={100} height={100} alt="LOGO" />
        </a>
      </div>

      <div className="menu" >
        <ul className=" flex text-xl uppercase">
          <li className=" ">
            <a className="px-3 py-1 mx-5 hover:text-blue-400 uppercase" href="#home">
              Home
            </a>
          </li>
          <li className=" ">
            <a className="px-3 py-1 mx-5 hover:text-blue-400 uppercase" href="#about">
             About
            </a>
          </li>{' '}

          <li className=" ">
            <a className="px-3 py-1 mx-5 hover:text-blue-400 uppercase" href="#Projects">
              Projects
            </a>
          </li>{' '}
          <li className=" ">
            <a className="px-3 py-1 mx-5 hover:text-blue-400 uppercase" href="#Services">
              Services
            </a>
          </li>{' '}


          <li className=" ">
            <a className="px-3 py-1 mx-5 hover:text-blue-400 uppercase" href="#contacts">
            contact
            </a>
          </li>{' '}
          <li className=" ">
            <a className="px-3 py-1 mx-5 hover:text-blue-400 uppercase" href="#faq">
              faq
            </a>
          </li>{' '}
        </ul>
      </div>
    </nav>
  </span>
  )
}
