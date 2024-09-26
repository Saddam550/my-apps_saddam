import 'aos/dist/aos.css'
import SectionTitle from './mini-Component/SectionTitle'
import SkillItems from './mini-Component/SkillItems'
export default function Skills() {


  return (
    <div className=" text-center mt-28">
      <div className="mb-7">
        <h1 className="text-4xl">
          My <SectionTitle sectionTitle={'Skills'} />
        </h1>
      </div>
      <div className="container w-1/2 m-auto skillResponsive">
        <SkillItems title="HTML5" animation="fade-right" />
        <SkillItems title="CSS3" animation="fade-left" />
        <SkillItems title="javascript" animation="fade-right" />
        <SkillItems title="React Js" animation="fade-left" />
        <SkillItems title="Next Js" animation="fade-right" />
        <SkillItems title="PHP" animation="fade-left" />
        <SkillItems title="MySQL" animation="fade-right" />
        <SkillItems title="WordPress" animation="fade-left" />
        <SkillItems title="Figma" animation="fade-right" />
      </div>
    </div>
  )
}
