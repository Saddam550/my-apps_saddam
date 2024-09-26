import AOS from 'aos';
import "aos/dist/aos.css";
import Image from 'next/image';
import { useEffect } from 'react';
import "./css/myCss.css";
export default function ServiceBox({image , title, des,Animation=""}) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,

    });
  }, []);

  return (
    // <div className='bg-zinc-900' >


    <div  data-aos="zoom-in"   style={{background:"url(/shape_two.png)",  backgroundColor:"#FF20C7"}} className="md:w-96 lg:w-[320px] xl:w-[481px] h-[280px] rounded overflow-hidden pb-3  px-12">
    <div className=" w-40 h-28 m-auto">
      <Image src={image} className='serviceBoxImage'  alt="html css developer"></Image>
    </div>
    <h2  className=' text-2xl text-center '>{title}</h2>
    <p style={{color:"rgb(211 193 255 / 70%)"}} className=' px-7 mt-2 text-center'>{des}
    </p>
  </div>
  //  </div>
  )
}
