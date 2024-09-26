"use client"

import "aos/dist/aos.css";
import figma_to_html from "../../../public/Project-img/figma-to-html-css-convart.png";
import login_form from "../../../public/Project-img/login.png";
import portfolio_header_one from "../../../public/Project-img/portfolio-header-ui-design-1.png";
import top_level_slider_number_two from "../../../public/Project-img/top-level-slider-number-two.png";
import top_level_slider from "../../../public/Project-img/top_level_slider.png";
import tourManagment from "../../../public/Project-img/tour-management.png";
import Animation_Video from "../../../public/Project-img/video_animation.png";
import ProjuctImage from './mini-Component/ProjuctImage';
import SectionTitle from './mini-Component/SectionTitle';


const Projects = [

{
  names:"tour-management",
  description:"",
  images:tourManagment,
  Project_behance_link: "",
  Project_live_link:"https://tour-management-chi.vercel.app/home",
 project_github_link:"https://github.com/Saddam550/Tour-management",
},
{
  names:"top level slider two",
  description:"",
  images:top_level_slider_number_two,
  Project_behance_link: "/",
  Project_live_link:"https://top-level-slider-number-two.vercel.app/",
 project_github_link:"https://github.com/Saddam550/Top-level-slider-number-two",
},
{
  names:"top-level-slider",
  description:"",
  images:top_level_slider,
  Project_behance_link: "https://www.behance.net/gallery/191896595/Image-slider-using-HTML-CSS-JavaScript/modules/1085434021",
  Project_live_link:"https://top-level-slider.vercel.app/",
 project_github_link:"https://github.com/Saddam550/Top-level-slider",
},
{
  names:"figma to html css convart",
  description:"",
  images:figma_to_html,
  Project_behance_link: "",
  Project_live_link:"https://figma-to-html-css-convart.vercel.app/",
 project_github_link:"https://github.com/Saddam550/figma-to-html-css-convart",
},
{
  names:"portfolio header",
  description:"",
  images:portfolio_header_one,
  Project_behance_link: "",
  Project_live_link:"https://portfolio-header-ui-design-1.vercel.app/",
 project_github_link:"https://github.com/Saddam550/portfolio-header-ui-design-1",
},{
  names:" login form",
  description:"",
  images:login_form,
  Project_behance_link: "",
  Project_live_link:"https://login-form-mu-coral.vercel.app/",
 project_github_link:"https://github.com/Saddam550/login-form-1",
},{
  names:"Video Animation",
  description:"",
  images:Animation_Video,
  Project_behance_link: "",
  Project_live_link:"https://animation-video-servicess.vercel.app/",
 project_github_link:"https://github.com/Saddam550/animation-video-servicess",
},
]
export default function Project() {

  return (
    <div className=" text-center mt-28 pl-1 " id="Projects">
      <div className="mb-7">
        <h1 className="text-4xl">
          Look at My <SectionTitle sectionTitle={'Projects'} />
        </h1>
      </div>
      <div className=" " >
      <div className=' projectBox  flex  flex-wrap gap-5 justify-between xl:justify-center '>
     {Projects.map((items , ibdex)=>(
        <ProjuctImage key={ibdex}  Project_behance_link={items.Project_behance_link} Project_live_link={items.Project_live_link} project_github_link={items.project_github_link} image={items.images} title={items.names} />
     ))}

      </div>
      </div>
    </div>
  )
}
