import Footer from "../components/Footer";
import Benefits from "./Benefits";
import Contact from "./Contact";
import Info from "./Info";
import Players from "./Players";
import Pricing from "./Pricing";

const Hero = ({ toggle }:{toggle:boolean}) => {
  
  return (
    <>
    <div className={`grid grid-cols-1 p-20 items-center ${toggle ? "hidden" : "visible"}`}>
      <div className="mb-10">
        <div className="text-white text-5xl font-extrabold">WELCOME</div>
        <div className="text-white text-xl font-bold">to your new home</div>
      </div>
      <div className="flex flex-wrap h-[90vh] gap-2">
        <div className="flex flex-[1] hover:flex-[2] h-1/3 w-[30%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex-wrap transition-all hover:cursor-default">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">Noteworthy technology acquisitions 2021</h5>
          <div className="font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</div>
        </div>
        <div className="flex flex-[1] hover:flex-[2] h-1/3 w-[30%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex-wrap transition-all hover:cursor-default">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">Noteworthy technology acquisitions 2021</h5>
          <div className="font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</div>
        </div>
        <div className="flex flex-[1] hover:flex-[2] h-1/3 w-[30%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex-wrap transition-all hover:cursor-default">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">Noteworthy technology acquisitions 2021</h5>
          <div className="font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</div>
        </div>
      </div>
      <Info />
      <Benefits />
      <Players />
      <Pricing />
      <Contact />
    </div>
    <Footer />
    </>
  );
}
 
export default Hero;