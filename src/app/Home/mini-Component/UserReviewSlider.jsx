'use client'
import { useEffect, useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import './css/myCss.css'
// import required modules
import { Autoplay } from 'swiper/modules'
import ReviewBox from './ReviewBox'
//import review project image
import dactor from './ReviewImage/dactor.png'
import food_landing from './ReviewImage/foodLanding.png'
import kidsStar from './ReviewImage/kidsStar.png'
import mackup from './ReviewImage/mackup.png'
import shineTime from './ReviewImage/website.png'
import wocoomarce from './ReviewImage/wocoomarce.png'

//import review user image

import AOS from 'aos'
import "aos/dist/aos.css"
import one from './clientImage//one.jpg'
import five from './clientImage/five.png'
import four from './clientImage/four.png'
import girl from './clientImage/girl.png'
import three from './clientImage/three.png'
import two from './clientImage/two.png'
const review = [
  {
    name: 'Jamal Quirk',
    img: five,
    comments:
      'Fantastic experience from start to finish! The web designer was incredibly skilled with HTML and CSS, creating a sleek and professional design that perfectly matched my brand. Communication was excellent, and they made sure every aspect of the design was exactly what I wanted. I’ll definitely be coming back for future projects',
    Rating: 5,
    review_date: '20.5.2024',
    project_image: shineTime,
    project_name:" HTML and CSS Design",
  },
  {
    name: 'Rajat Verma ',
    img: four,
    comments:
      'Incredible experience, The web design looks amazing and performs exceptionally well. The attention to detail in optimizing the site for speed and efficiency is clear, and my website now ranks higher on search engines due to the improved performance. A top-notch service that I would gladly recommend',
    Rating: 4,
    review_date: '06.03.2024',
    project_image: food_landing,
    project_name:"website design",
  },
  {
    name: 'Hema Digari',
    img: girl,
    comments:
      'Amazing front-end design service! The new design has transformed my website into a visually appealing and user-friendly platform. The designer was attentive to my needs and provided valuable suggestions that enhanced the overall look and feel. I’m extremely satisfied with',
    Rating: 4,
    review_date: '05.09.2023',
    project_image: mackup,
    project_name:"front-end design",
  },
  {
    name: 'Dominic',
    img: two,
    comments:
      ' Outstanding experience! The React.js website design is everything I hoped for and more. The site is fast, responsive, and the design is clean and professional. The developer was very knowledgeable and provided valuable insights throughout the project. I’m extremely happy with the final product',
    Rating: 5,
    review_date: '05.07.2024',
    project_image: dactor,
    project_name:"ReactJs website design",
  },
  {
    name: 'joy martin',
    img: three,
    comments:
      'The Figma to Next.js conversion was done with meticulous care, and the final site is pixel-perfect. The developer was responsive to my feedback and ensured that every aspect of the design was faithfully reproduced. The result is a professional, fast-loading website that my users love. Five stars',
    Rating: 5,
    review_date: '02.01.2024',
    project_image: wocoomarce,
    project_name:"Figma to NextJs conversion",
  },{
    name: 'Elena',
    img: one,
    comments:
      'The WordPress website design exceeded all my expectations. The designer was creative, efficient, and paid great attention to detail. The site is responsive, user-friendly, and looks fantastic on all devices. The communication throughout the project was clear and professional. I’m extremely happy with the results',
    Rating: 5,
    review_date: '25.05.2024',
    project_image: kidsStar,
    project_name:"WordPress Design",
  },
]

export default function UserReviewSlider() {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,

    });
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {review.map((reviews, index) => (
          <SwiperSlide key={index}>
            <ReviewBox
              review_Rating={reviews.Rating}
              review_Des={reviews.comments}
              review_image={reviews.img}
              review_user={reviews.name}
              project_image={reviews.project_image}
              review_date={reviews.review_date}
              project_name={reviews.project_name}
            />
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end"  data-aos="zoom-in" >
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  )
}
