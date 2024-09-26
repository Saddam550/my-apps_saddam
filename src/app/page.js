"use client"
import { useRef } from 'react';
import Contact from './Contact';
import From from './From';
import About from './Home/About';
import AutoVideo from "./Home/AutoVideo";
import Footer from './Home/Footer';
import Header from './Home/Header';
import "./Home/mini-Component/css//myCss.css";
import Top_btn from './Home/mini-Component/top_btn';
import Project from './Home/Project';
import Review from './Home/Review';
import Service from './Home/Service';
import Skills from './Home/Skills';
export default function Home() {

  const pageContainer = useRef(null); // Create a ref to the container element

  // useEffect(() => {

  //   useEffect(() => {
  //     let scroll: import("locomotive-scroll");
  //     import("locomotive-scroll").then((locomotiveModule) => {
  //         scroll = new locomotiveModule.default({
  //             el: document.querySelector("[data-scroll-container]"),
  //             smooth: true,
  //             smoothMobile: false,
  //             resetNativeScroll: true
  //         });
  //     });

  //     // cleanup phase
  //     return () => {
  //         if (scroll) scroll.destroy();
  //     }
  // });



    // /* SMOOTH SCROLL */
    // const scroller = new LocomotiveScroll({
    //   el: pageContainer.current, // Use the ref to get the container element
    //   smooth: true
    // });

    // scroller.on("scroll", ScrollTrigger.update);

    // ScrollTrigger.scrollerProxy(pageContainer.current, {
    //   scrollTop(value) {
    //     return arguments.length
    //       ? scroller.scrollTo(value, 0, 0)
    //       : scroller.scroll.instance.scroll.y;
    //   },
    //   getBoundingClientRect() {
    //     return {
    //       left: 0,
    //       top: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight
    //     };
    //   },
    //   pinType: pageContainer.current.style.transform ? "transform" : "fixed"
    // });
  // }, []);

  return (
    <main className="bg overflow-hidden">
      <div className="color" ref={pageContainer}>
        <Header />
        <About />
        <Skills />
        <Project />
        <Service />
        <Review />
        <AutoVideo/>
        <Contact />
        <From />
        <Footer />
        <Top_btn/>

      </div>
    </main>
  );
}