import { AnimatePresence, motion as m } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

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

  return (
    <div className={`w-full flex flex-wrap items-start ${toggle ? "bg-gradient-to-tr from-[#60072C] via-[#120B2E] to-[#091498] h-screen z-50" : ""}`}>
      <div className="flex flex-wrap items-center justify-between w-full h-5 pt-10 px-14">
        <h2 className="text-xl font-bold text-white">
          <span className="mr-1">BUSINESS</span>
          <span className="text-red-500">NAME</span>
        </h2>
        <div className="text-white">
          {!toggle ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -mr-2 hover:cursor-pointer hover:text-gray-200 transition-all" onClick={() => setToggle(!toggle)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 hover:cursor-pointer hover:text-gray-200 transition-all" onClick={() => setToggle(!toggle)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          )}
        </div>
      </div>
      <AnimatePresence>
      {toggle ? (
        <div className="w-screen flex flex-wrap justify-center">
          <m.div
            variants={{
              hidden: {
                x: "100%",
                scale: "0%"
              },
              show: {
                x: "0%",
                scale: "100%"
              }
            }}
            transition={{ duration: 0.2 }}
            initial="hidden"
            animate="show"
            className="w-full"
          >
            <MenuOverlay menuList={menuList} />
          </m.div>
        </div>
      ) : null}
      </AnimatePresence>
    </div>
  );
}
 
export default Header;