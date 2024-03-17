import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/css/effect-coverflow';

import 'swiper/css/pagination';

import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';



function Fourtsks1() {

  useEffect(() => {

    const initializeSwiper = () => {

      if (

        typeof window !== "undefined" &&

        typeof window.Swiper !== "undefined"

      ) {

        return new window.Swiper(".swiper-container", {

          slidesPerView: 3,

          spaceBetween: 10,

          centeredSlides: true,

          loop: true,

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

          effect: 'coverflow',

          grabCursor: true,

          coverflowEffect: {

            rotate: 0,

            stretch: 0,

            depth: 100,

            modifier: 2.5,

         },

          pagination: {

            el: '.swiper-pagination',

            clickable: true,

          },

          navigation: {

            nextEl: '.swiper-button-next',

            prevEl: '.swiper-button-prev',

            clickable: true,

          },

        });

      }

    };



    initializeSwiper();



  }, []);



  return (

    <div className="container">

      <h1 className="heading">Our Services</h1>

      <div className="swiper-container">

        <div className="swiper-wrapper">

          <Swiper

            grabCursor={true}

            centeredSlides={true}

            loop={true}

            effect={'coverflow'}

            coverflowEffect={{

              rotate: 0,

              stretch: 0,

              depth: 100,

              modifier: 2.5,

            }}

            pagination={{ el: '.swiper-pagination', clickable: true }}

            navigation={{

              nextEl: '.swiper-button-next',

              prevEl: '.swiper-button-prev',

              clickable: true,

            }}

            modules={[EffectCoverflow, Pagination, Navigation]}

          >

            <SwiperSlide>

              <div className="service-box s-box1">

                <i className="fa-solid fa-tooth" />

                <strong>Smart Interpretation</strong>

                <p>

                  Smart Interpretation sub-feature that goes beyond simply

                  presenting your data. It analyzes your results.

                </p>

                <a href="#">Get It!</a>

              </div>

            </SwiperSlide>

            <SwiperSlide>

              <div className="service-box s-box2">

                <i className="fa-solid fa-eye"></i><strong>Body Chart</strong>

                <p>

                  The Health Report body chart displays a human body picture,

                  alongside your key health data.

                </p>

                <a href="#">Get It!</a>

              </div>

            </SwiperSlide>

            <SwiperSlide>

              <div className="service-box s-box3">

                <i className="fa-solid fa-face-smile"></i>

                <strong>Visual Info</strong>

                <p>

                  The Smart Report has a "Health Advisory" feature that shows

                  medical advice into an engaging and actionable visual

                  experience.

                </p>

                <a href="#">Get It!</a>

              </div>

            </SwiperSlide>

            <SwiperSlide>

              <div className="service-box s-box4">

                <i className="fa-solid fa-user-doctor"></i>

                <strong>Lab Report</strong>

                <p>

                  A lab report gives users a lot of details about their test

                  results. They're great for doctors who want to use this

                  information to help diagnose.

                </p>

                <a href="#">Get It!</a>

              </div>

            </SwiperSlide>

            {/* Add more SwiperSlide components for additional slides */}

          </Swiper>

        </div>

        <div className="swiper-button-prev"></div>

        <div className="swiper-button-next"></div>

        <div className="swiper-pagination"></div>

      </div>

    </div>

  );

}



export default Fourtsks1;