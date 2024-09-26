
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import { useEffect } from 'react'
import './Home/button.css'
import Faq from './Home/mini-Component/Faq'
import SectionTitle from './Home/mini-Component/SectionTitle'

const faq = [
  {
    question: 'How much time does it take to create a website?',
    answer:
      'The time it involves to create a web page depends on the complexity and characteristics demanded . On ordinary, it can take anywhere from a few days to a few months',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'Creating a website can cost anywhere from a few hundred dollars to several thousand dollars, depending on how complex, feature-rich, and design-heavy it needs to be.',
  },
  {
    question: "Can you create a design for me since I don't have one?",
    answer:
      'Yes, we can provide you with the assistance you need to with the construct and construct of your web page . Our squad of designers and developers will work with you to generate a web page that meets your necessitates .',
  },
  {
    question: 'Do you also offer SEO services?',
    answer:
      'Yes, we furnish SEO offerings to assist enhance your website’s visibility on engines of searching online like google and yahoo and allure more traffic .',
  },
  {
    question: 'Will my website load fast?',
    answer:
      'We guarantee that all website we construct are optimized for quick loading times, offering a greater customer experience for your visitors .',
  },
]

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  let count = 1
  return (
    <section
      className="mt-32"
      id="contact "
      style={{
        background: 'url(/contact_bg.jpg)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div

        style={{ backgroundColor: '#000000d9' }}
        className=" customContactStyle flex flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap justify-between"
      >
        <div className="px-9 lg:mt-16 resposiveContactTitle"   data-aos="fade-down">
          <h1 className=" h-[55px] font-semibold text-gray-800 sm:text-[30px]  lg:text-[44px]  dark:text-white">
            Frequently Asked <SectionTitle sectionTitle="Questions" />
          </h1>
          <p className="text-gray-400  lg:mt-2 md:mt-0 sm:mt-1">
            Answers to the burning questions in your mind.
          </p>
          <button className="border-none">
            {' '}
            <Link className="button2 about-me" href="#Contacts" alt="">
              CONTACT
            </Link>{' '}
          </button>{' '}
        </div>
        <div className="sm:mt-6">
          <section className="faq-section">
            <div className="container faq">
              <div className="row">
                {/* <!-- ***** FAQ Start ***** --> */}
                <div className="col-md-6 offset-md-3"></div>
                <div className="col-md-6 offset-md-3">
                  <div className="faq" id="accordion">
                    {faq.map((item, index) => (
                      <Faq
                        key={index}
                        count={count++}
                        question={item.question}
                        anwser={item.answer}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
