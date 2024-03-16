import React, { useEffect } from "react";

const Serve = ({}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.Swiper !== 'undefined') {
      const swiper = new window.Swiper(".mySwiperservices", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          700: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      });

      return () => {
        swiper.destroy(true, true);
      };
    }
  }, []);
  return (
    <div>
      <div className="services-heading">
        <div className="services-heading-text">
          <strong>Our Services</strong>
          <h2>High Quality Services For You</h2>
        </div>
        <div className="service-slide-btns">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
      <div className="services-box-container">
        <div className="swiper mySwiperservices">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="service-box s-box1">
                <i className="fa-solid fa-tooth" />
                <strong>Smart Interpretation</strong>
                <p>
                  Smart Interpretation sub-feature that goes beyond simply
                  presenting your data. It analyzes your results.
                </p>
                <a href="#">Get It!</a>
              </div>
            </div>
            {/* Other slides */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serve;
