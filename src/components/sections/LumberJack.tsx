import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

const LumberJack = () => {
  const registerElement = useFadeInOnScroll();
  return (
    <section id="lumberjack" className="fade-in-up" ref={registerElement}>
      <div className="lumberjack-title ">
        <h3
          className="text-pretitle"
          // data-animate-el
        >
          Bonus
        </h3>
        <p className=" ">
          As a reward for getting this far I challenge you to beat my score of
          210 points.
        </p>
      </div>
      <div className="margin-auto">
        <iframe
          title="Lumber Jack Game"
          src="https://tbot.xyz/lumber/"
          width="450"
          height="600"
        ></iframe>
      </div>
    </section>
  );
};

export default LumberJack;
