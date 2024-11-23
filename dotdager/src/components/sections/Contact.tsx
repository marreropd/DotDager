import {
  github,
  instagram,
  linkedin,
  linktree,
  twitch,
  youtube,
} from "../../assets/Icons";
import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";
import SoundCloudPlayer from "../SoundCloudPlayer";

const Contact = () => {
  const registerElement = useFadeInOnScroll();
  return (
    <section id="contact" className="s-contact target-section">
      <div
        className="row contact-top  fade-in-left-to-right"
        ref={registerElement}
      >
        <div className="column lg-12">
          <h2 className="text-pretitle">Get In Touch</h2>

          <p className="h1">
            I love to hear from you. Whether you have a question or just want to
            chat about pickles, tech, philosophy or music — shoot me a message.
          </p>
        </div>
      </div>

      <div
        className="row contact-bottom flex align-i-center  fade-in-left-to-right"
        ref={registerElement}
      >
        <div className="column lg-6 md-6 tab-6 stack-on-550 contact-block">
          <h3 className="text-pretitle">Reach me at</h3>
          <ul className="contact-social">
            <li>
              <a href="https://www.twitch.tv/dagerxiv" target="_blank">
                {twitch()}
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dager.32/" target="_blank">
                {instagram()}
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@DotDager">{youtube()}</a>
            </li>
            <li>
              <a href="https://linktr.ee/DotDager" target="_blank">
                {linktree()}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mariano-luis-villa/"
                target="_blank"
              >
                {linkedin()}
              </a>
            </li>
            <li>
              <a href="https://github.com/MarianoVilla/" target="_blank">
                {github()}
              </a>
            </li>
          </ul>
          <a
            href="mailto:portafoliosdesarrollador@gmail.com"
            className="mailtoui btn btn--medium u-fullwidth contact-btn"
          >
            Say Hello.
          </a>
        </div>
        <div className="column lg-6 md-6 xs-12 s-12 contact-block">
          <SoundCloudPlayer />
        </div>
      </div>
    </section>
  );
};

export default Contact;
