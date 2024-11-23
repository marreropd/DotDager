import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

const Chanels = () => {
  const registerElement = useFadeInOnScroll();
  return (
    <section id="channels" className="s-works target-section">
      <div className="row works-portfolio  fade-in-up" ref={registerElement}>
        <div
          className="column lg-12"
          // data-animate-block
        >
          <h3
            className="text-pretitle"
            // data-animate-el
          >
            Youtube channels
          </h3>
          <p className=" ">
            Here are my youtube channels where we share interesting things with
            friends
          </p>

          <div
            id="channel-section"
            className="row  fade-in-up2"
            ref={registerElement}
          >
            <div className="testimonial-slider__slide">
              <a
                href="https://www.youtube.com/@DotDager"
                target="_blank"
                className="channel-container"
              >
                <img
                  src="avatar.png"
                  alt="Author image"
                  className="channel-image"
                />
                <div className="testimonial-slider__cite">
                  <strong>Dot Dager</strong>
                  <span>Full-stack senior and serial shit-joke teller.</span>
                </div>
              </a>
            </div>

            <div className="testimonial-slider__slide">
              <a
                href="https://www.youtube.com/c/DagerMusic"
                target="_blank"
                className="channel-container"
              >
                <img
                  src="dagermusic.jpg"
                  alt="Author image"
                  className="channel-image"
                />
                <div className="testimonial-slider__cite">
                  <strong>Dager Music</strong>
                  <span>
                    Live (and offline) looping, weird, improvised music and
                    memey songs
                  </span>
                </div>
              </a>
            </div>

            <div className="testimonial-slider__slide">
              <a
                href="https://www.youtube.com/@DagerLive"
                target="_blank"
                className="channel-container"
              >
                <img
                  src="dagerclip.jpg"
                  alt="Author image"
                  className="channel-image"
                />
                <div className="testimonial-slider__cite">
                  <strong>Dager Clips</strong>
                  <span>
                    Snippets of Uncle Dager's lives. For people who want to
                    watch the streams without having to watch the streams.
                  </span>
                </div>
              </a>
            </div>

            <div className="testimonial-slider__slide">
              <a
                href="https://www.youtube.com/c/DagerXIV"
                target="_blank"
                className="channel-container"
              >
                <img
                  src="dagerx.jpg"
                  alt="Author image"
                  className="channel-image"
                />
                <div className="testimonial-slider__cite">
                  <strong>El Antro de Dager</strong>
                  <span>Philosophy and other bushet</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chanels;
