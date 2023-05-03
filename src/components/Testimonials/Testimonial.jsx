import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/sakti.jpg";
import profilePic2 from "../../img/bijendra.jpg";
import profilePic3 from "../../img/bijendra.jpg";
import profilePic4 from "../../img/bijendra.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "During Himanshu's internship at Fego.ai, he displayed strong analytical skills and a deep understanding of fintech companies. His professionalism, dedication, and expertise made him an invaluable member of our team.",
    },
    {
      img: profilePic4,
      review:
        "As Himanshu's manager during their internship at Dream up India, I was consistently impressed with their exceptional data science skills and passion for problem-solving. Their ability to work both independently and as part of a team made a valuable contribution to our projects.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
