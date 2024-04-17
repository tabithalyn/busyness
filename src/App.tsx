import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import Benefits from "./sections/Benefits";
import Contact from "./sections/Contact";
import Info from "./sections/Info";
import Players from "./sections/Players";
import Pricing from "./sections/Pricing";


function App() {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setIsScrolled(window.pageYOffset));
    if (isScrolled > 300) console.log("Scrolled");
  }, [isScrolled]);

  return (
    <div className="h-screen bg-gradient-to-tr from-[#60072C] via-[#120B2E] to-[#091498] overflow-x-hidden">
      <Header toggle={toggle} setToggle={setToggle} isScrolled={isScrolled} />
      <Hero />
      <Info />
      <Benefits />
      <Players />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
