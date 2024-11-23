import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

const Intro = () => {
  const registerElement = useFadeInOnScroll();
  return (
    <>
      <section
        id="intro"
        className="s-intro target-section smoothscroll scroll-show"
      >
        <div className="row intro-content wide">
          <div className="column">
            <div
              className="sign text-pretitle with-line fade-in-left-to-right-delay"
              ref={registerElement}
            >
              <span className="fast-flicker">d</span>ot
              <span className="flicker"> d</span>ager
            </div>
            <h4
              className="text-huge-title fade-in-left-to-right-delay"
              ref={registerElement}
            >
              Senior full-stack/lead software developer with a passion for SOLID
              code and amazing products.
            </h4>
          </div>

          <ul className="intro-social">
            <li>
              <a href="https://linktr.ee/DotDager" target="_blank">
                Linktree
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mariano-luis-villa/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/MarianoVilla/" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dager.32/" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@DotDager" target="_blank">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        <a
          href="#about"
          className="intro-scrolldown smoothscroll fade-in-up"
          ref={registerElement}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
          </svg>
        </a>
      </section>
    </>
  );
};

export default Intro;
