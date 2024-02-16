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
      delayChildren: 0.05,
      staggerChildren: 0.1,
      duration: 0.2
    }
  }
}

const Contact = () => {

  const formSubmit = (e:{preventDefault: () => void}) => {
    e.preventDefault();
    alert("Thanks!");
  }

  return (
    <div className="h-screen flex items-center justify-center mt-36">
      <m.div
        transition={{ duration: 0.3, delay: 0.1 }}
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        className="w-5/6 bg-white p-20 rounded-xl mt-20"
      >
        <m.div
          className="flex flex-wrap gap-4"
          variants={variants}
          initial="hidden"
          whileInView="visible"
        >
          <m.div variants={variants} className="w-full">
            <form onSubmit={formSubmit}>
              <span>Name:</span>
              <input type="text" className="border w-full mb-5 py-1 px-3" id="name" autoComplete="off" required />
              <span>Message:</span>
              <textarea className="border w-full p-3" id="message" rows={6} style={{ resize: "none" }} required />
              <input type="submit" id="submit" value="Send" />
            </form>
          </m.div>
        </m.div>
      </m.div>
    </div>
  );
}
 
export default Contact;