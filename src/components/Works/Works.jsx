import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/jee.png";
import Fiverr from "../../img/IIT_Madras_Logo.svg.png";
import Amazon from "../../img/fego.png";
import Shopify from "../../img/dream.png";
import Facebook from "../../img/studdicted (1).png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
          During my internships, I gained practical experience across multiple domains and contributed to various projects.At Fego.ai, I was responsible for
          <br />
          analyzing fintech companies and building mathematical models to help stakeholders track personal finance. With Dream Up India, I developed an 
          <br />
          interactive Power BI dashboard and a predictive model to forecast election winners by analyzing trends at the booth level. I also used AWS Textract  
          <br />
          API to extract data from PDFs. At StuddicTed, I collaborated with a fast-paced startup to develop a python application that provided holistic suggestions 
          <br />
          for performance improvement based on student's prior performance, significantly reducing report generation time. These internships helped me to hone my  
          technical and problem-solving skills in a practical setting, providing me with valuable experience that I can apply to future projects.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
