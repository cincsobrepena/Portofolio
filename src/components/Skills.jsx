import {BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoJavascript, BiLogoReact, BiLogoNodejs} from "react-icons/bi";

const Skills = () => {
  return (
    <div className="flex flex-col text-[#1b1b1b] bg-white my-10 py-5">
        <h1 className="uppercase text-5xl font-bold my-5 mx-auto">Skills</h1>
        <div className="flex justify-between items-center max-w-[1240px] mx-auto">
            <BiLogoHtml5  className="text-7xl mx-2"/>
            <BiLogoCss3 className="text-7xl mx-2"/>
            <BiLogoJavascript className="text-7xl mx-2"/>
            <BiLogoTailwindCss className="text-7xl mx-2"/>
            <BiLogoReact className="text-7xl mx-2"/>
            <BiLogoNodejs className="text-7xl mx-2"/>
        </div>
    </div>
  )
}

export default Skills