'use client'

import Contact from './Contact'
import From from './From'
import About from './Home/About'
import AutoVideo from './Home/AutoVideo'
import Footer from './Home/Footer'
import Header from './Home/Header'
import './Home/mini-Component/css//myCss.css'
import Top_btn from './Home/mini-Component/Topbtn'
import Project from './Home/Project'
import Review from './Home/Review'
import Service from './Home/Service'
import Skills from './Home/Skills'
import Scrollbar from 'smooth-scrollbar'

var scrollPositionX = 0
var scrollPositionY = 0

function smoothScrollbarInit() {
  var bodyScroll = document.getElementById('my-scrollbar')

  bodyScrollBar = Scrollbar.init(bodyScroll, {
    damping: 0.04,
    renderByPixels: !('ontouchstart' in document),
    delegateTo: document,
  })

  bodyScrollBar.addListener(({ offset }) => {
    scrollPositionX = offset.x
    scrollPositionY = offset.y
  })
}

smoothScrollbarInit()
export default function Home() {
  return (
    <main className="bg overflow-hidden" id="my-scrollbar">
      <div className="color">
        <Header />
        <About />
        <Skills />
        <Project />
        <Service />
        <Review />
        <AutoVideo />
        <Contact />
        <From />
        <Footer />
        <Top_btn />
        <>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla neque,
          exercitationem, deserunt blanditiis tempore natus quod, ipsum ratione
          autem laborum impedit molestiae reprehenderit maxime doloribus earum
          cumque pariatur ea! Eius?
        </>
      </div>
    </main>
  )
}
