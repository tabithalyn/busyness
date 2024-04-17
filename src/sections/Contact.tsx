import { motion as m } from "framer-motion";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

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
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [country, setCountry] = useState("");

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
          className="flex flex-wrap gap-4 w-full -mt-5"
          variants={variants}
          initial="hidden"
          whileInView="visible"
        >
          <m.div variants={variants} className="w-full">
            <form onSubmit={formSubmit} className="w-full flex flex-wrap">
              <span>Name:</span>
              <input type="text" className="border w-full mb-5 py-1 px-3 rounded" id="name" autoComplete="off" required />
              <div className="w-full flex flex-wrap justify-between mb-8">
              <div className="w-3/5 flex flex-wrap">
                <span className="mr-2 flex items-center">Email:</span>
                <input type="email" name="email" id="email" className="w-[85%] border rounded" required />
              </div>
              <div className="w-2/5 flex flex-wrap">
                <span className="mr-2 flex items-center">Phone Number:</span>
                <PhoneInput
                  defaultCountry="us"
                  value={phoneNumber}
                  onChange={(phone) => setPhoneNumber(phone)}
                />
              </div>
              </div>
              <span>Message:</span>
              <textarea className="border w-full p-3 rounded" id="message" rows={6} style={{ resize: "none" }} required />
              <input type="submit" id="submit" value="Send" className="px-3 py-2 mt-4 border rounded-lg hover:bg-gray-200 transition-all hover:cursor-pointer" />
            </form>
          </m.div>
        </m.div>
      </m.div>
    </div>
  );
}
 
export default Contact;