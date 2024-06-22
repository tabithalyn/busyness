import { AnimatePresence, motion as m } from "framer-motion";
import Link from "react-scroll/modules/components/Link";

const sideVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.02,
      staggerDirection: -1,
      type: "spring", stiffness: 50
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.02,
      staggerDirection: 1,
      type: "spring", stiffness: 50
    }
  }
}

const MenuOverlay = ({ menuList }:{
  menuList: {title: string;}[];
}) => {

  return (
    <AnimatePresence>
      <m.div
        className="text-center w-full flex justify-center flex-wrap z-50 h-full"
        initial="closed"
        animate="open"
        variants={sideVariants}
      >
        <div className="w-3/12 pb-10 flex flex-wrap justify-center">
          {menuList.map((item:{title:string}, id:number) => (
            <div key={id} className="text-white text-lg mb-6 justify-center flex mt-10 hover:scale-110 transition-all cursor-pointer w-full text-center">
              <p
                className="text-3xl relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer"
              >
                <Link to={item.title} smooth={true} duration={200}>
                  {item.title}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </m.div>
    </AnimatePresence>
  );
}
 
export default MenuOverlay;