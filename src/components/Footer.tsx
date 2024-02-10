import { motion as m } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: "-100%"
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
      duration: 0.3
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
          Developed with &hearts; by Tabitha Lyn <a href="" title="Tabitha Lyn's GitHub"><i className="fa-brands fa-github ml-2"></i></a>
        </m.div>
        <m.div
          variants={variants}
          className="flex flex-wrap gap-4 items-center mr-5"
        >
          <m.i variants={variants} className="fa-brands fa-facebook"></m.i>
          <m.i variants={variants} className="fa-brands fa-x-twitter"></m.i>
          <m.i variants={variants} className="fa-brands fa-instagram"></m.i>
          <m.i variants={variants} className="fa-brands fa-linkedin"></m.i>
        </m.div>
      </m.div>
    </div>
  );
}
 
export default Footer;