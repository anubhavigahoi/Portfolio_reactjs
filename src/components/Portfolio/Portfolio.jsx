import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Coffee from "../../img/coffee.jpg";
import resume_builder from "../../img/resume_builder.jpg";
import Gym from "../../img/Gym.jpg";
import Dentist from "../../img/Dentist.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Coffee} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resume_builder} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Dentist} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gym} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
