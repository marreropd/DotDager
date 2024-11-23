import { useEffect, useRef } from "react";

export const useFadeInOnScroll = (
  threshold: number = 0.1
): ((el: HTMLElement | null) => void) => {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      elementsRef.current.forEach((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top < window.innerHeight * (1 - threshold) &&
            rect.bottom > 0
          ) {
            el.classList.add("visible");
          }
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially for elements already in view

    return () => {
      // Cleanup listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };
};
