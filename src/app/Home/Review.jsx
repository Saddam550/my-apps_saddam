
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import SectionTitle from './mini-Component/SectionTitle';
import UserReviewSlider from './mini-Component/UserReviewSlider';

export default function Review() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  return (
    <div  className="" id="Services">
    <div className="mb-7 text-center mt-28"  data-aos="fade-in" >
      <h1 className="text-4xl ">
        <SectionTitle sectionTitle={'Review'} />
      </h1>
    </div>
    <div className=" flex  flex-wrap gap-5 justify-between xl:justify-center ">

<div className='container w-[500px] m-auto' >
<UserReviewSlider/>


</div>

    </div>
  </div>
  )
}
