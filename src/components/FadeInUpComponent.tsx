import React from "react";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const FadeInUpComponent: React.FC = () => {
  const registerElement = useFadeInOnScroll();

  return (
    <div>
      <div style={{ height: "100vh" }}>Scroll down to see the animation</div>
      <div
        ref={registerElement}
        className="fade-in-up"
        style={{ height: "100px", background: "coral", margin: "20px 0" }}
      >
        Element 1
      </div>
      <div
        ref={registerElement}
        className="fade-in-up"
        style={{ height: "100px", background: "lightblue", margin: "20px 0" }}
      >
        Element 2
      </div>
      <div
        ref={registerElement}
        className="fade-in-up"
        style={{ height: "100px", background: "lightgreen", margin: "20px 0" }}
      >
        Element 3
      </div>
    </div>
  );
};

export default FadeInUpComponent;
