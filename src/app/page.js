"use client"
import Contact from './Contact';
import From from './From';
import About from './Home/About';
import AutoVideo from "./Home/AutoVideo";
import Footer from './Home/Footer';
import Header from './Home/Header';
import "./Home/mini-Component/css//myCss.css";
import Top_btn from './Home/mini-Component/Topbtn';
import Project from './Home/Project';
import Review from './Home/Review';
import Service from './Home/Service';
import Skills from './Home/Skills';
export default function Home() {


  return (
    <main className="bg overflow-hidden">
      <div className="color" >

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