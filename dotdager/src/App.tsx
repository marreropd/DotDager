import "./App.css";
// import "./vendor.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Intro from "./components/sections/Intro";
import { ParticlesContainer } from "./components/particles/ParticlesContainer";
import About from "./components/sections/About";
import { Works } from "./components/sections/Works";
import Contact from "./components/sections/Contact";
import { useEffect, useState } from "react";
import Chanels from "./components/sections/Channels";
import LumberJack from "./components/sections/LumberJack";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <>
      {isLoading && (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}

      <div className="s-pagewrap">
        <div className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Navigation />

        <ParticlesContainer />
        <Intro />

        <About />
        <Works />
        <Chanels />
        <Contact />
        <Footer />
        <LumberJack />
      </div>
    </>
  );
}

export default App;
