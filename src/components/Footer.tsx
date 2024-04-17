import { motion as m } from "framer-motion";
import { Tooltip } from "react-tooltip";

const variants = {
  hidden: {
    opacity: 0,
    x: "-100%"
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      staggerChildren: 0.05,
      duration: 0.2
    }
  }
}

const Footer = () => {
  return (
    <div className="flex flex-wrap items-end mt-20 w-screen h-[50vh]">
      <m.div
        transition={{ duration: 0.3, delay: 0.1 }}
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        className="bg-[#120B2E] text-[#e6e6e9] w-full h-[80%] px-10 pt-8 pb-20 -mb-10 flex flex-wrap justify-center gap-2"
      >
        <m.ul variants={variants} initial="hidden" whileInView="visible" className="flex flex-wrap justify-center items-start w-[25%] p-5">
          <m.li variants={variants} className="w-full font-bold text-xl">BusinessName</m.li>
          <m.li variants={variants} className="w-full h-[80%] overflow-y-auto overflow-x-hidden"><span className="text-sm">Ut et ullamcorper massa. Quisque gravida imperdiet egestas. Nam auctor massa eu augue pellentesque, a viverra tellus mattis.</span></m.li>
        </m.ul>
        <m.ul variants={variants} initial="hidden" whileInView="visible" className="flex flex-wrap justify-center items-start w-[23%] p-5">
          <m.li variants={variants} className="w-full font-bold text-xl px-3">Category</m.li>
          <m.li variants={variants} className="w-full px-4 py-1 before:content-['›'] before:mr-2 before:text-red-500 hover:before:text-blue-400 hover:before:content-['›'] hover:before:mr-2 transition-all"><a href="">Link</a></m.li>
          <m.li variants={variants} className="w-full px-4 py-1 before:content-['›'] before:mr-2 before:text-red-500 hover:before:text-blue-400 hover:before:content-['›'] hover:before:mr-2 transition-all"><a href="">Link</a></m.li>
          <m.li variants={variants} className="w-full px-4 py-1 before:content-['›'] before:mr-2 before:text-red-500 hover:before:text-blue-400 hover:before:content-['›'] hover:before:mr-2 transition-all"><a href="">Link</a></m.li>
        </m.ul>
        <m.ul variants={variants} initial="hidden" whileInView="visible" className="flex flex-wrap justify-center items-start w-[23%] p-5">
          <m.li variants={variants} className="w-full font-bold text-xl px-3">Category</m.li>
          <m.li variants={variants} className="w-full px-4 py-1 before:content-['›'] before:mr-2 before:text-red-500 hover:before:text-blue-400 hover:before:content-['›'] hover:before:mr-2 transition-all"><a href="">Link</a></m.li>
          <m.li variants={variants} className="w-full px-4 py-1 before:content-['›'] before:mr-2 before:text-red-500 hover:before:text-blue-400 hover:before:content-['›'] hover:before:mr-2 transition-all"><a href="">Link</a></m.li>
          <m.li variants={variants} className="w-full px-4 py-1 before:content-['›'] before:mr-2 before:text-red-500 hover:before:text-blue-400 hover:before:content-['›'] hover:before:mr-2 transition-all"><a href="">Link</a></m.li>
        </m.ul>
        <m.ul variants={variants} initial="hidden" whileInView="visible" className="flex flex-wrap justify-center items-start w-[23%] p-5">
          <m.li variants={variants} className="w-full font-bold text-xl px-3">Category</m.li>
          <m.li variants={variants} className="w-full px-4 py-1 before:content-['›'] before:mr-2 before:text-red-500 hover:before:text-blue-400 hover:before:content-['›'] hover:before:mr-2 transition-all"><a href="">Link</a></m.li>
          <m.li variants={variants} className="w-full px-4 py-1 before:content-['›'] before:mr-2 before:text-red-500 hover:before:text-blue-400 hover:before:content-['›'] hover:before:mr-2 transition-all"><a href="">Link</a></m.li>
          <m.li variants={variants} className="w-full px-4 py-1 before:content-['›'] before:mr-2 before:text-red-500 hover:before:text-blue-400 hover:before:content-['›'] hover:before:mr-2 transition-all"><a href="">Link</a></m.li>
        </m.ul>
      </m.div>
      <m.div
        transition={{ duration: 0.3, delay: 0.1 }}
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        className="w-full py-5 px-10 -mt-2 z-50 text-xl text-white bg-[#0f0426] flex flex-wrap justify-between"
      >
        <m.div
          variants={variants}
          className="text-sm opacity-80 flex flex-wrap items-center"
        >
          Developed with &hearts; by Tabitha Lyn <a href="" data-tooltip-content="Tabitha Lyn's GitHub" data-tooltip-id="github"><Tooltip id="github" style={{ backgroundColor: "white", color: "#222", padding: "5px 10px"}} /><i className="fa-brands fa-github ml-2"></i></a>
        </m.div>
        <m.div
          variants={variants}
          className="flex flex-wrap gap-4 items-center mr-5 text-sm"
        >
          <a href="" data-tooltip-content="Facebook" data-tooltip-id="facebook" data-tooltip-place="top">
            <Tooltip id="facebook" style={{ backgroundColor: "white", color: "#222", padding: "5px 10px"}} />
            <m.i variants={variants} className="fa-brands fa-facebook text-lg"></m.i>
          </a>
          <a href="" data-tooltip-content="Twitter/X" data-tooltip-id="twitterx" data-tooltip-place="top">
            <Tooltip id="twitterx" style={{ backgroundColor: "white", color: "#222", padding: "5px 10px"}} />
            <m.i variants={variants} className="fa-brands fa-x-twitter text-lg"></m.i>
          </a>
          <a href="" data-tooltip-content="Instagram" data-tooltip-id="instagram" data-tooltip-place="top">
            <Tooltip id="instagram" style={{ backgroundColor: "white", color: "#222", padding: "5px 10px"}} />
            <m.i variants={variants} className="fa-brands fa-instagram text-lg"></m.i>
          </a>
          <a href="" data-tooltip-content="LinkedIn" data-tooltip-id="linkedin" data-tooltip-place="top">
            <Tooltip id="linkedin" style={{ backgroundColor: "white", color: "#222", padding: "5px 10px"}} />
            <m.i variants={variants} className="fa-brands fa-linkedin text-lg"></m.i>
          </a>
        </m.div>
      </m.div>
    </div>
  );
}
 
export default Footer;