import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { IoEarth } from 'react-icons/io5';
import './mini-Component/css/AutoVideo.css';
import SectionTitle from './mini-Component/SectionTitle';
export default function AutoVideo() {
  // const [loading] = useState(true)
  // const AddPlay = (e) => {
  //   e.target.ck()
  // }
  // const AddPouse = (e) => {
  //   e.target.pause()
  // }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,

    });
  }, []);
  return (
    <div className="auto-video">
      <div className="mb-7 text-center mt-28">
        <h1 className="text-4xl ">
          <SectionTitle sectionTitle={'Video'} />
        </h1>
      </div>
      <div className="timeLine">
        <div

          className="container right-container"
          //  style={{animationDelay: "1s"}}
        >
          <h1 className="logos">
            <IoEarth />
          </h1>
          <div className="textBoxs" data-aos="fade-up-left">
            <p>
              <iframe

                src="https://www.youtube.com/embed/dN9q5kTxn_0?si=3ovC3gWlcmUs0riL&amp;controls=1"
                title="YouTube video player"
                 frameBorder="0"
                allow=" autoplay"
                 referrerPolicy="strict-origin-when-cross-origin"
                 allowFullScreen
              ></iframe>
            </p>
            <div className="right-container-arrow"></div>
          </div>
        </div>{' '}
        <div

          className="container left-container"
          //  style={{animationDelay: "1s"}}
        >
          <h1 className="logos">
            <IoEarth />
          </h1>
          <div className="textBoxs"  data-aos="fade-up-right">
            <p>
              <iframe
               width={100}
               height={100}
                src="https://www.youtube.com/embed/pHpDedvx_gw?si=4XQB6Kppi4kWlCfx"
                title="YouTube video player"
                 frameBorder="1"
                allow=" autoplay"
                 allowFullScreen
              ></iframe>
            </p>
            <div className="left-container-arrow"></div>
          </div>
        </div>
        <div

          className="container right-container"
          //  style={{animationDelay: "1s"}}
        >
          <h1 className="logos">
            <IoEarth />
          </h1>
          <div className="textBoxs"    data-aos="fade-up-left">
            <p>
              <iframe
            width={100}
            height={100}
                src="https://www.youtube.com/embed/E2xGWHHJ-Xc?si=7wJ1-nk93__CpY-9"
                title="YouTube video player"
                 frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 referrerPolicy="strict-origin-when-cross-origin"
                 allowFullScreen
              ></iframe>
            </p>
            <div className="right-container-arrow"></div>
          </div>
        </div>
        <div

          className="container left-container"
          //  style={{animationDelay: "1s"}}
        >
          <h1 className="logos">
            <IoEarth />
          </h1>
          <div className="textBoxs"  data-aos="fade-up-right">
            <p>
              <iframe
               width={100}
               height={100}
                src="https://www.youtube.com/embed/2NmP4HCqBc8?si=Rque0XimoTqUHzOb"
                title="YouTube video player"
                 frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 referrerPolicy="strict-origin-when-cross-origin"
                 allowFullScreen
              ></iframe>
            </p>
            <div className="left-container-arrow"></div>
          </div>
        </div>{' '}
        <div

          className="container right-container"
          //  style={{animationDelay: "1s"}}
        >
          <h1 className="logos">
            <IoEarth />
          </h1>
          <div className="textBoxs"   data-aos="fade-up-left">
            <p>
              <iframe
                width={100}
                height={100}
                src="https://www.youtube.com/embed/yoqbf2E6-ac?si=sIxX3tln6QK8YRqL"
                title="YouTube video player"
                 frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 referrerPolicy="strict-origin-when-cross-origin"
                 allowFullScreen
              ></iframe>
            </p>
            <div className="right-container-arrow"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
