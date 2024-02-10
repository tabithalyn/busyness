import { motion as m } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: "0%"
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

const Pricing = () => {
  return (
    <div className="h-screen mt-20 flex flex-wrap items-center justify-center">
      <m.div
        className="h-[85vh] w-screen flex justify-center items-center mt-32 flex-wrap"
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <div className="w-5/6 bg-white flex flex-wrap justify-center rounded-xl h-4/5">
          <m.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="w-full flex flex-wrap justify-center gap-4 p-10 h-full"
          >
            <m.div variants={variants} className="w-[31%] bg-purple-50 flex flex-wrap rounded-xl border border-blue-200 hover:border-blue-500 transition-all hover:shadow-[0_5px_30px_-5px_rgba(66,135,245,0.5)]">
              <div className="w-full flex flex-wrap items-stretch">
                <p className="bg-blue-200 flex justify-center items-center flex-wrap w-full py-5 rounded-t-xl">
                  <span className="text-6xl w-full text-center h-2/3 flex items-center justify-center">$20</span>
                  <span className="text-sm h-1/3 flex items-start justify-center w-full">billed monthly</span>
                </p>
                <div className="flex justify-center items-center flex-wrap w-full">
                  <ul className="w-full text-sm p-2 flex items-center justify-center flex-wrap">
                    <li className="w-3/4 py-1">Nam non mattis est.</li>
                    <li className="w-3/4 py-1">Ut vel pharetra nibh.</li>
                    <li className="w-3/4 py-1">Pellentesque ut risus justo.</li>
                  </ul>
                </div>
                <p className="flex justify-center items-center w-full">
                  <button className="border bg-blue-400 p-3 rounded-xl w-3/4">Choose</button>
                </p>
              </div>
            </m.div>
            <m.div variants={variants} className="w-[31%] bg-purple-50 flex flex-wrap rounded-xl border border-blue-200 hover:border-blue-500 transition-all hover:shadow-[0_5px_30px_-5px_rgba(66,135,245,0.5)]">
              <div className="w-full flex flex-wrap items-stretch">
                <p className="bg-blue-200 flex justify-center items-center flex-wrap w-full py-5 rounded-t-xl">
                  <span className="text-6xl w-full text-center h-2/3 flex items-center justify-center">$20</span>
                  <span className="text-sm h-1/3 flex items-start justify-center w-full">billed monthly</span>
                </p>
                <div className="flex justify-center items-center flex-wrap w-full">
                  <ul className="w-full text-sm p-2 flex items-center justify-center flex-wrap">
                    <li className="w-3/4 py-1">Nam non mattis est.</li>
                    <li className="w-3/4 py-1">Ut vel pharetra nibh.</li>
                    <li className="w-3/4 py-1">Pellentesque ut risus justo.</li>
                  </ul>
                </div>
                <p className="flex justify-center items-center w-full">
                  <button className="border bg-blue-400 p-3 rounded-xl w-3/4">Choose</button>
                </p>
              </div>
            </m.div>
            <m.div variants={variants} className="w-[31%] bg-purple-50 flex flex-wrap rounded-xl border border-blue-200 hover:border-blue-500 transition-all hover:shadow-[0_0_10px_rgba(66,135,245,0.5)]">
              <div className="w-full flex flex-wrap items-stretch">
                <p className="bg-blue-200 flex justify-center items-center flex-wrap w-full py-5 rounded-t-xl">
                  <span className="text-6xl w-full text-center h-2/3 flex items-center justify-center">$20</span>
                  <span className="text-sm h-1/3 flex items-start justify-center w-full">billed monthly</span>
                </p>
                <div className="flex justify-center items-center flex-wrap w-full">
                  <ul className="w-full text-sm p-2 flex items-center justify-center flex-wrap">
                    <li className="w-3/4 py-1">Nam non mattis est.</li>
                    <li className="w-3/4 py-1">Ut vel pharetra nibh.</li>
                    <li className="w-3/4 py-1">Pellentesque ut risus justo.</li>
                  </ul>
                </div>
                <p className="flex justify-center items-center w-full">
                  <button className="border bg-blue-400 p-3 rounded-xl w-3/4">Choose</button>
                </p>
              </div>
            </m.div>
          </m.div>
        </div>
      </m.div>
    </div>
  );
}
 
export default Pricing;