import {
  github,
  instagram,
  linkedin,
  linktree,
  twitch,
  youtube,
} from "../../assets/Icons";
import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

const About = () => {
  const registerElement = useFadeInOnScroll();
  return (
    <section id="about" className="s-about target-section scroll-show">
      <div className="row about-info wide" data-animate-block>
        <div className="column lg-6 md-12 about-info__pic-block">
          <img
            src="avatar.png"
            alt=""
            className="about-info__pic avatar-filter fade-in-up"
            ref={registerElement}
            // data-animate-el
          />
        </div>

        <div className="column lg-6 md-12">
          <div className="about-info__text">
            <h2
              className="text-pretitle with-line fade-in-up"
              ref={registerElement}
              // data-animate-el
            >
              About
            </h2>
            <p
              className=" attention-getter fade-in-up" // data-animate-el
              ref={registerElement}
            >
              I’m a content creator with a passion for programming. I love
              building projects and solving challenges through code. Outside of
              work, I enjoy spending time with my cats, jamming on my guitar,
              and exploring my love for music. I’m also an avid pickle
              enthusiast and find joy in experimenting with flavors. Philosophy
              inspires me to think deeply about life, ethics, and the universe,
              shaping how I approach creativity and problem-solving.
            </p>
            {/* <a
              href="#0"
              className="btn btn--medium u-fullwidth fade-in-up"
              // data-animate-el
              ref={registerElement}
            >
              Download CV
            </a> */}

            <ul
              className="contact-social fade-in-left-to-right"
              ref={registerElement}
            >
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
                <a href="https://www.youtube.com/@DotDager" target="_blank">
                  {youtube()}
                </a>
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
            {/* <a
              href="mailto:portafoliosdesarrollador@gmail.com"
              className="mailtoui btn btn--medium u-fullwidth contact-btn"
            >
              Say Hello.
            </a> */}
          </div>
        </div>
      </div>

      <div className="row about-expertise" data-animate-block>
        <div className="column lg-12">
          <h2
            className="text-pretitle fade-in-left-to-right"
            ref={registerElement} // data-animate-el
          >
            Expertise
          </h2>

          <ul
            className="skills-list h1 fade-in-left-to-right" // data-animate-el
            ref={registerElement}
          >
            <li>Content Cretor</li>
            <li>Senior Bullshit Joke Teller</li>
            <li>Senior Software Developer</li>
            <li>Pickle Taster</li>
            <li>Life Philosopher</li>
          </ul>
        </div>
      </div>

      <div className="row about-timelines" data-animate-block>
        <div className="column lg-6 tab-12">
          <h2
            className="text-pretitle fade-in-up-2" // data-animate-el
            ref={registerElement}
          >
            Experience
          </h2>

          <div
            className="timeline" // data-animate-el
          >
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <div className="fade-in-up2 " ref={registerElement}>
                  <h4 className="timeline__title">University of Nebraska</h4>
                  <h5 className="timeline__meta"> Full Stack Developer</h5>
                  <p className="timeline__timeframe">December 2020 - Present</p>
                </div>
              </div>
              <div
                className="timeline__desc fade-in-up2 "
                ref={registerElement}
              >
                <p>
                  At Nebraska University, I worked as a Full-Stack Developer,
                  specializing in .NET Core, Java, MySQL, and AWS. My role
                  involved developing robust software solutions, leading
                  development teams to deliver high-quality projects, and
                  providing expert consulting on systems design. This experience
                  allowed me to hone my technical skills, leadership abilities,
                  and strategic problem-solving in a collaborative academic
                  environment.
                </p>
              </div>
            </div>

            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div
                className="timeline__header fade-in-up2 "
                ref={registerElement}
              >
                <h4 className="timeline__title">Alpha Group · Freelance</h4>
                <h5 className="timeline__meta">Software Developer</h5>
                <p className="timeline__timeframe">
                  December 2018 - Present 6yrs
                </p>
              </div>
              <div className="timeline__desc fade-in-up2" ref={registerElement}>
                <p>
                  As a freelance developer with Alpha Group, I focused on
                  software development, primarily using .NET technologies such
                  as ASP.NET/Core, RESTful APIs, Xamarin, and WinForms. I worked
                  extensively on building tons of microservices and other
                  exciting projects, delivering efficient, scalable solutions.
                  This role allowed me to dive into a variety of technologies,
                  tackle complex challenges, and enjoy the creative side of
                  software engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="column lg-6 tab-12">
          <h2
            className="text-pretitle fade-in-up" // data-animate-el
            ref={registerElement}
          >
            Education
          </h2>

          <div
            className="timeline" // data-animate-el
          >
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div
                className="timeline__header fade-in-up"
                ref={registerElement}
              >
                <h3 className="timeline__title">
                  Institute Raúl Scalabrini Ortiz
                </h3>
                <h5 className="timeline__meta">
                  Systems Analyst, Information Technology
                </h5>
                <p className="timeline__timeframe">April 2018 - 2022</p>
              </div>
              <div className="timeline__desc fade-in-up" ref={registerElement}>
                <p>
                  Graduated with a Bachelor’s degree, focusing on a wide range
                  of topics including project management, organizational
                  analysis, software development, and general systems theory.
                  The program equipped me with strong analytical and technical
                  skills, blending theoretical knowledge with practical
                  application in IT and systems design.
                </p>
              </div>
            </div>

            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div
                className="timeline__header  fade-in-up"
                ref={registerElement}
              >
                <h4 className="timeline__title">University of Buenos Aires</h4>
                <h5 className="timeline__meta">Bachelor’s in Philosophy</h5>
                <p className="timeline__timeframe">August 2016 - 2024</p>
              </div>
              <div className="timeline__desc  fade-in-up" ref={registerElement}>
                <p>
                  Currently pursuing a degree in Philosophy, exploring critical
                  thinking, ethics, metaphysics, and the foundations of human
                  knowledge. This program has deepened my understanding of
                  complex ideas and sharpened my analytical and reasoning
                  skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
