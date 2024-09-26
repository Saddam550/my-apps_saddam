import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import './css/faq.css'
export default function Faq({ question, anwser, count }) {
  const [showClass, setshowClass] = useState('')
  const AddClass = (e) => {
    e.target.classList.contains('active')
    setshowClass('fqaShow')
  }
  const RemoveClass = () => {
    setshowClass('fqaHide')
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  return (
    <div className="card" id='faq'>
      <div className="card-header" id="faqHeading-1">
        <div className="mb-0">
          <h5
          data-aos="fade-down"
            className="faq-title"
            onMouseLeave={RemoveClass}
            onMouseEnter={AddClass}
          >
            <span className="badge">{count}</span>
            {question}
          </h5>
        </div>
      </div>
      <div className={`collapse removeClass ${showClass}`}>
        <div className="card-body " data-aos="fade-down">
          <p >{anwser} </p>
        </div>
      </div>
    </div>
  )
}
