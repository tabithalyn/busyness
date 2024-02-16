import { AnimatePresence, motion as m } from "framer-motion";
import MenuOverlay from "./MenuOverlay";
import { useEffect, useState } from "react";

const sideVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.02,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.02,
      staggerDirection: 1
    }
  }
}

const Header = ({ toggle, setToggle }:{
  toggle: boolean;
  setToggle: (arg0: boolean) => void;
}) => {
  const menuList = [
    { id: 1, title: "HOME" },
    { id: 2, title: "ABOUT" },
    { id: 3, title: "SERVICE" },
    { id: 4, title: "CONTACT"}
  ];

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          setIsScrolled(true);
        }
      });
    }
  }, []);

  return (
    <div className={`w-full flex flex-wrap items-start absolute z-50`}>
      {isScrolled ? (
        <div className="flex flex-wrap items-center justify-between w-full h-20 px-14 bg-[#60072C] bg-opacity-70">
          <h2 className="text-xl font-bold text-white">
            <span className="mr-1">BUSINESS</span>
            <span className="text-red-500">NAME</span>
          </h2>
          <div className="text-white">
            {!toggle ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer hover:text-gray-200 transition-all" onClick={() => setToggle(!toggle)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer hover:text-gray-200 transition-all" onClick={() => setToggle(!toggle)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-between w-full h-20 px-14 bg-transparent">
          <h2 className="text-xl font-bold text-white">
            <span className="mr-1">BUSINESS</span>
            <span className="text-red-500">NAME</span>
          </h2>
          <div className="text-white z-50">
            {!toggle ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer hover:text-gray-200 transition-all" onClick={() => setToggle(!toggle)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer hover:text-gray-200 transition-all" onClick={() => setToggle(!toggle)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            )}
          </div>
        </div>
      )}
      <AnimatePresence>
        {toggle ? (
          <m.aside
            className="bg-gradient-to-tr from-[#60072C] via-[#120B2E] to-[#091498] h-screen w-screen top-0 left-0 absolute z-20 overflow-hidden transition-all flex items-center justify-center"
            initial={{ x: "-100%", width: "100vw", height: "100vh" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%", height: "100vh", transition: { duration: 0.3 } }}
            transition={{ duration: 0.2, delay: 0 }}
          >
            <m.div
              initial="closed"
              animate="open"
              variants={sideVariants}
            >
              <MenuOverlay menuList={menuList} />
            </m.div>
          </m.aside>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
 
export default Header;