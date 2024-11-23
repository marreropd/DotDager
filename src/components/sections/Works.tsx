import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";
import Testimonials from "./Testimonials";
import { useState } from "react";
import ProjectModal from "../ProjectModal";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../Projects";

export const Works = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState(project1() as React.ReactNode);
  const registerElement = useFadeInOnScroll();

  // Function to open the modal
  const openModal = (project: React.ReactNode) => {
    setProject(project);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section id="works" className="s-works target-section">
      <div className="row works-portfolio  fade-in-up" ref={registerElement}>
        <div
          className="column lg-12"
          // data-animate-block
        >
          <h2
            className="text-pretitle"
            // data-animate-el
          >
            Recent Works
          </h2>
          <p
            className="h1"
            // data-animate-el
          >
            Here are some of my favorite projects I have done lately. Feel free
            to check them out.
          </p>

          <ul className="folio-list row block-lg-one-half block-stack-on-1000">
            <li
              className="folio-list__item column fade-in-up2"
              ref={registerElement} // data-animate-el
            >
              <a
                className="folio-list__item-link"
                href="#modal-01"
                onClick={() => openModal(project1())}
              >
                <div className="folio-list__item-pic">
                  <img src="src/assets/images/portfolio/fuji.jpg" alt="" />
                </div>

                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">Website</div>
                  <div className="folio-list__item-title">Retro Camera.</div>
                </div>
              </a>
              <a
                className="folio-list__proj-link"
                href="#"
                title="project link"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>

            <li
              className="folio-list__item column fade-in-up "
              ref={registerElement} // data-animate-el
            >
              <a
                className="folio-list__item-link"
                href="#modal-02"
                onClick={() => openModal(project2())}
              >
                <div className="folio-list__item-pic">
                  <img src="src/assets/images/portfolio/lamp.jpg" alt="" />
                </div>

                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">Product Design</div>
                  <div className="folio-list__item-title">The White Lamp.</div>
                </div>
              </a>
              <a
                className="folio-list__proj-link"
                href="#"
                title="project link"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>

            <li
              className="folio-list__item column fade-in-up2"
              ref={registerElement} // data-animate-el
            >
              <a
                className="folio-list__item-link"
                href="#modal-03"
                onClick={() => openModal(project3())}
              >
                <div className="folio-list__item-pic">
                  <img src="src/assets/images/portfolio/rucksack.jpg" alt="" />
                </div>

                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">Branding</div>
                  <div className="folio-list__item-title">Rucksuck.</div>
                </div>
              </a>
              <a
                className="folio-list__proj-link"
                href="#"
                title="project link"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>

            <li
              className="folio-list__item column fade-in-up "
              ref={registerElement} // data-animate-el
              onClick={() => openModal(project4())}
            >
              <a className="folio-list__item-link" href="#modal-04">
                <div className="folio-list__item-pic">
                  <img src="src/assets/images/portfolio/skaterboy.jpg" alt="" />
                </div>

                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">Website</div>
                  <div className="folio-list__item-title">Since Day One.</div>
                </div>
              </a>
              <a
                className="folio-list__proj-link"
                href="#"
                title="project link"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>

            <li
              className="folio-list__item column fade-in-up2"
              ref={registerElement} // data-animate-el
            >
              <a
                className="folio-list__item-link"
                href="#modal-05"
                onClick={() => openModal(project5())}
              >
                <div className="folio-list__item-pic">
                  <img src="src/assets/images/portfolio/sanddunes.jpg" />
                </div>

                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">Illustration</div>
                  <div className="folio-list__item-title">Sand Dunes.</div>
                </div>
              </a>
              <a
                className="folio-list__proj-link"
                href="#"
                title="project link"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>

            <li
              className="folio-list__item column fade-in-up"
              ref={registerElement} // data-animate-el
            >
              <a
                className="folio-list__item-link"
                href="#modal-06"
                onClick={() => openModal(project6())}
              >
                <div className="folio-list__item-pic">
                  <img
                    src="src/assets/images/portfolio/minimalismo.jpg"
                    alt=""
                  />
                </div>

                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">Branding</div>
                  <div className="folio-list__item-title">Minimalismo.</div>
                </div>
              </a>
              <a
                className="folio-list__proj-link"
                href="#"
                title="project link"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Testimonials />
      <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} project={project} />
    </section>
  );
};
