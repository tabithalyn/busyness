import { useState } from "react";
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

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-[#60072C] via-[#120B2E] to-[#091498] overflow-x-hidden">
      <Header
        toggle={toggle}
        setToggle={setToggle}
      />
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
