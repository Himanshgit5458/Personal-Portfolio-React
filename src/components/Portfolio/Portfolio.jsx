import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/stock.jpg";
import Ecommerce from "../../img/language.png";
import HOC from "../../img/risk.png";
import MusicApp from "../../img/Harvesify.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const githubURL = "https://github.com/your-username/your-repo-name";

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
          <a href={"https://github.com/Himanshgit5458/Stock-price-prediction-using-NLP"} target="_blank" rel="noopener noreferrer">
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href={"https://github.com/Himanshgit5458/English2French"} target="_blank" rel="noopener noreferrer">
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href={"https://github.com/Himanshgit5458/Harvesify"} target="_blank" rel="noopener noreferrer">
            <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href={"https://github.com/Himanshgit5458/Credit-card-risk-Analysis-"} target="_blank" rel="noopener noreferrer">
            <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
