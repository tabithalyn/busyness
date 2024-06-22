import { motion as m } from "framer-motion";
import img from "../assets/323202j2oj3.png";

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

const Info = () => {
  return (
    <div className="flex flex-wrap items-center justify-around mb-20" id="ABOUT">
      <m.div
        transition={{ duration: 0.3, delay: 0.1 }}
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        className="bg-white w-1/3 rounded-xl"
      >
        <m.div variants={variants} initial="hidden" whileInView="visible">
          <m.p variants={variants} className="w-full p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc orci, dapibus eget hendrerit vel, pellentesque sit amet turpis. Nulla eu hendrerit velit.</m.p>
          <m.p variants={variants} className="w-full p-4">Nunc venenatis mi nec tempor sollicitudin. Curabitur semper congue enim, id rutrum lorem semper nec. Nulla facilisis est erat, id pharetra odio pellentesque vitae.</m.p>
          <m.p variants={variants} className="w-full p-4">Ut pharetra pulvinar ornare. Cras eu elit quis orci ornare accumsan.</m.p>
        </m.div>
      </m.div>
      <m.div
        variants={{
          hidden: { x: "-100%" },
          visible: { x: "0%" },
        }}
        transition={{ duration: 0.3 }}
        initial="hidden"
        whileInView="visible"
        className="flex justify-end w-1/2"
      >
        <img src={img} className="w-full opacity-80" />
      </m.div>
    </div>
  );
}
 
export default Info;