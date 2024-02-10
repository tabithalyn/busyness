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
      duration: 0.2
    }
  }
}

const Players = () => {
  return (
    <m.div
      className="h-[85vh] flex justify-center items-center mt-32"
      initial={{ x: "-100%" }}
      whileInView={{ x: "0%" }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <div className="w-5/6 bg-white flex flex-wrap justify-center rounded-xl h-4/5 overflow-hidden">
        <m.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="w-full flex flex-wrap justify-center gap-4 p-10 overflow-y-auto h-full"
        >
          <m.div variants={variants} className="w-[22%] border rounded-xl flex justify-center flex-wrap p-5 bg-gray-100">
            <img src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-full w-36 h-36" />
            <p className="w-full flex flex-wrap justify-center gap-1 mt-2">
              <span className="w-full flex justify-center p-2 text-xl font-bold text-center">Nullam Viverra</span>
              <button>More Info</button>
            </p>
          </m.div>
          <m.div variants={variants} className="w-[22%] border rounded-xl flex justify-center flex-wrap p-5 bg-gray-100">
            <img src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-full w-36 h-36" />
            <p className="w-full flex flex-wrap justify-center gap-1 mt-2">
              <span className="w-full flex justify-center p-2 text-xl font-bold text-center">Nullam Viverra</span>
              <button>More Info</button>
            </p>
          </m.div>
          <m.div variants={variants} className="w-[22%] border rounded-xl flex justify-center flex-wrap p-5 bg-gray-100">
            <img src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-full w-36 h-36" />
            <p className="w-full flex flex-wrap justify-center gap-1 mt-2">
              <span className="w-full flex justify-center p-2 text-xl font-bold text-center">Nullam Viverra</span>
              <button>More Info</button>
            </p>
          </m.div>
          <m.div variants={variants} className="w-[22%] border rounded-xl flex justify-center flex-wrap p-5 bg-gray-100">
            <img src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-full w-36 h-36" />
            <p className="w-full flex flex-wrap justify-center gap-1 mt-2">
              <span className="w-full flex justify-center p-2 text-xl font-bold text-center">Nullam Viverra</span>
              <button>More Info</button>
            </p>
          </m.div>
          <m.div variants={variants} className="w-[22%] border rounded-xl flex justify-center flex-wrap p-5 bg-gray-100">
            <img src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-full w-36 h-36" />
            <p className="w-full flex flex-wrap justify-center gap-1 mt-2">
              <span className="w-full flex justify-center p-2 text-xl font-bold text-center">Nullam Viverra</span>
              <button>More Info</button>
            </p>
          </m.div>
          <m.div variants={variants} className="w-[22%] border rounded-xl flex justify-center flex-wrap p-5 bg-gray-100">
            <img src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-full w-36 h-36" />
            <p className="w-full flex flex-wrap justify-center gap-1 mt-2">
              <span className="w-full flex justify-center p-2 text-xl font-bold text-center">Nullam Viverra</span>
              <button>More Info</button>
            </p>
          </m.div>
        </m.div>
      </div>
    </m.div>
  );
}
 
export default Players;