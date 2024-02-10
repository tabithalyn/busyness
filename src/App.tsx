import { useState } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";


function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-tr from-[#60072C] via-[#120B2E] to-[#091498] overflow-x-hidden">
      <Header toggle={toggle} setToggle={setToggle} />
      <Hero toggle={toggle} />
    </div>
  );
}

export default App;
