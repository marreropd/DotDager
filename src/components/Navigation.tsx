import { useEffect, useState } from "react";
const Navigation = () => {
  const [current, setCurrent] = useState("intro");
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handdleMenu = () => {
    setIsClicked(!isClicked);
    const siteBody = document.querySelector("body");
    siteBody?.classList.toggle("menu-is-open");
  };

  return (
    <div>
      <header className={`s-header ${isVisible ? "s-header-translatey" : ""}`}>
        <div className="header-mobile">
          <span className="mobile-home-link">
            <a href="index.html">Dot Dager.</a>
          </span>
          <a
            className={`mobile-menu-toggle ${isClicked ? "is-clicked" : ""}`}
            href="#0"
            onClick={() => handdleMenu()}
          >
            <span>Menu</span>
          </a>
        </div>

        <div className="row wide main-nav-wrap">
          <nav className="column lg-12 main-nav">
            <ul>
              <li>
                <a href="index.html" className="home-link">
                  Dot Dager.
                </a>
              </li>
              <li
                className={current === "intro" ? "current" : ""}
                onClick={() => setCurrent("intro")}
              >
                <a href="#intro" className="smoothscroll">
                  Intro
                </a>
              </li>
              <li
                className={current === "about" ? "current" : ""}
                onClick={() => setCurrent("about")}
              >
                <a href="#about" className="smoothscroll">
                  About
                </a>
              </li>
              <li
                className={current === "works" ? "current" : ""}
                onClick={() => setCurrent("works")}
              >
                <a href="#works" className="smoothscroll">
                  Works
                </a>
              </li>
              <li
                className={current === "contact" ? "current" : ""}
                onClick={() => setCurrent("contact")}
              >
                <a href="#contact" className="smoothscroll">
                  Say Hello
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>{" "}
    </div>
  );
};

export default Navigation;
