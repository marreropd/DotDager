import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

const Testimonials = () => {
  const registerElement = useFadeInOnScroll();
  return (
    <div className="row testimonials">
      <div
        className="column lg-12 fade-in-up2"
        ref={registerElement}
        data-animate-block
      >
        <div
          className="swiper-container testimonial-slider" // data-animate-el
        >
          <div className="testimonial-slider__slide ">
            <div className="testimonial-slider__author">
              <img
                src="rick2.webp"
                alt="Author image"
                className="testimonial-slider__avatar"
              />
              <cite className="testimonial-slider__cite">
                <strong>Tim Cook</strong>
                <span>CEO, Apple</span>
              </cite>
            </div>
            <p>
              Mariano stands out as an exceptional professional in the field of
              software development. With Fullstack skills and remarkable
              leadership as a Team Lead, he has proven to be a source of
              inspiration for numerous young individuals looking to enter the
              programming industry. Mariano generously shares his valuable
              experience and provides fundamental advice that not only enriches
              those who receive it but also contributes to the collective growth
              of the team.
            </p>
          </div>

          <div className="testimonial-slider__slide ">
            <div className="testimonial-slider__author">
              <img
                src="rick.webp"
                alt="Author image"
                className="testimonial-slider__avatar"
              />
              <cite className="testimonial-slider__cite">
                <strong>Sundar Pichai</strong>
                <span>Full Stack Developer, Vokal</span>
              </cite>
            </div>
            <p>
              Dager Loves Eating juicy pickles, His presence on any software
              project is perceived as a significant asset. The combination of
              his technical expertise and his ability to motivate others creates
              an environment conducive to success. In summary, Mariano is not
              only an expert in software development but also an outstanding
              leader who can elevate performance and morale in any project team.
            </p>
          </div>
          {/* 
          <div className="testimonial-slider__slide ">
            <div className="testimonial-slider__author">
              <img
                src="src/assets/images/avatars/user-01.jpg"
                alt="Author image"
                className="testimonial-slider__avatar"
              />
              <cite className="testimonial-slider__cite">
                <strong>Satya Nadella</strong>
                <span>CEO, Microsoft</span>
              </cite>
            </div>
            <p>
              Repellat dignissimos libero. Qui sed
              at corrupti expedita voluptas odit. Nihil ea quia nesciunt.
              Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt
              voluptatum accusamus. Quasi voluptas eius distinctio. Voluptatem
              dignissimos ut.
            </p>
          </div> */}

          {/* <div className="testimonial-slider__slide ">
            <div className="testimonial-slider__author">
              <img
                src="src/assets/images/avatars/user-06.jpg"
                alt="Author image"
                className="testimonial-slider__avatar"
              />
              <cite className="testimonial-slider__cite">
                <strong>Jeff Bezos</strong>
                <span>CEO, Amazon</span>
              </cite>
            </div>
            <p>
              Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac
              augue. Fusce vel dui. In ac felis quis tortor malesuada pretium.
              Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita
              voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
