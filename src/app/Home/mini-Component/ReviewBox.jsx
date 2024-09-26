'use client'
import Image from 'next/image'
import Rating from 'react-animated-rating'
import './css/ratingClass.css'
import SectionTitle from './SectionTitle'
export default function ReviewBox({
  review_Rating = '',
  review_Des = '',
  review_image = '',
  review_user = '',
  review_date = '',
  project_image = '',
  project_name = '',
}) {


  return (
    <div
      className=" p-4 m-auto projectImage_Hover"
      style={{ background: 'url(/reviewbg.png)', backgroundColor: '#27272A' }}
    >
      <div className="review  ">
        <div className="m-auto text-center flex items-center gap-5 ">
          <Rating filled={review_Rating} className="ratingClass" />
          <div className="capitalize text-red-500">
            <SectionTitle sectionTitle={project_name} />
            {}
          </div>
        </div>
        <p className="mt-4 text-center text-[15px] ">{review_Des}</p>{' '}
      </div>

      {/* review parson  */}
      <div className=" flex gap-2 justify-between  hover:cursor-pointer">
        <div className=" flex gap-2 mt-4">
          {/* image */}
          <div className="w-9 h-9 overflow-hidden rounded-full  ">
            {' '}
            <Image src={review_image} alt=""></Image>
          </div>

          {/* name */}
          <div className="flex flex-col">
            <h2 className="capitalize">{review_user}</h2>
            <span className="text-[10px] text-slate-500"> {review_date}</span>
          </div>
        </div>

        {/* review project  */}
        <div
          style={{
            backgroundImage: `url(${project_image.src})`,
            backgroundSize: 'cover',

          }}
          className="w-9 h-9 overflow-hidden viewImage"
        >
          {/* <Image src={project_image} alt=""></Image> */}
        </div>
      </div>
    </div>
  )
}
