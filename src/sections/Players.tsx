import { motion as m } from "framer-motion";
import { PLAYERS } from "../data/PLAYERS";
import PlayersPopover from "../components/PlayersPopover";

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
      id="PLAYERS"
    >
      <div className="w-5/6 bg-white flex flex-wrap justify-center rounded-xl h-4/5 overflow-hidden">
        <m.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="w-full flex flex-wrap justify-center gap-4 p-10 overflow-y-auto h-full"
        >
          {
            PLAYERS.map((player, index) => (
              <PlayersPopover
                key={index}
                name={player.name}
                description={player.description}
                avatar={player.avatar}
                country={player.country}
                variants={variants}
              />
            ))
          }
        </m.div>
      </div>
    </m.div>
  );
}
 
export default Players;