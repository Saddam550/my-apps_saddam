import { useEffect } from 'react'
import customAplication from '../../../public/service/Application programming interface-amico.svg'
import clone from '../../../public/service/Hand coding-amico.svg'
import responsive from '../../../public/service/Responsive-Design.svg'
import seo from '../../../public/service/SEO analytics team-rafiki.svg'
import wordpress from '../../../public/service/UI-UX design-bro.svg'
import Development from '../../../public/service/web Development.svg'

import AOS from 'aos'
import "aos/dist/aos.css"
import SectionTitle from './mini-Component/SectionTitle'
import ServiceBox from './mini-Component/ServiceBox'

const serviceItems = [
  {
    image: Development,
    title: 'Website Development',
    description:
      'I create a variety of websites, from simple static webpages to complex web applications, that are customized to meet your specific requirements.',
      animations:"fade-down"
  },
  {
    image: responsive,
    title: 'Responsive Design',
    description:
      'All I do is make web pages work automatically to fit different screen sizes so they look good on all devices and function properly on any device.',
       animations:"fade-down"
  },
  {
    image: clone,
    title: 'Clean Code',
    description:'My code is simple, readable and maintainable enough to allow any developer to easily manage and extend it.',
       animations:"fade-right"
  },
  {
    image: wordpress,
    title: 'High Performance',
    description:
      'To enhance user experience, I employ techniques such as lazy loading and modifying CSS and JS files to optimize website performance.',
       animations:"fade-left"
  },
  {
    image: customAplication,
    title: 'SEO',
    description:
      'Boosting traffic quality and quantity from search engines, I ensure your site ranks higher on search engines and attracts more relevant visitors..',
       animations:"fade-up"
  },
  {
    image: seo,
    title: 'Custom Web Applications',
    description:
      "My practice involves developing web applications that cater to your business's needs, providing it with unique functionality and a user-friendly experience..",
       animations:"fade-up"
  },
]
export default function Service() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,

    });
  }, []);



  return (
    <div className="overflow-hidden" id="Services">

     <div className="mb-7 text-center mt-28" data-aos="fade-dwon">
        <h1 className="text-4xl ">
          Look My <SectionTitle sectionTitle={'Services'} />
        </h1>
      </div>
      <div className='m-auto text-center'  data-aos="fade-dwon">
    <p  className='w-[500px] m-auto mb-7 mt-4 text-center'>  Offering a range of web development services, including SEO and responsive design as well as clean code and fast websites, we offer tailored solutions to meet your needs through our expertise in RESTful API development and website optimization.</p>
      </div>

      <div className='scoreClass flex  flex-wrap gap-5 justify-between xl:justify-center '>
{
  serviceItems.map((item,index)=>(
    <ServiceBox key={index} image={item.image} title={item.title} des={item.description} Animation={item.animations}/>
  ))
}
</div>


    </div>
  )
}
