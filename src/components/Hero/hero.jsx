import React from "react";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import Header from "../Header/Header";
import Hero_image from "../../assets/images_tuan/hero.png";
import Hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter";
import { motion } from "framer-motion";

const Hero = () => {
  const transaction = { type: "spring", duration: 3 };
  const mobike = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobike ? "178px" : "238px" }}
            whileInView={{ left: "9px" }}
            transition={{ ...transaction, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span>Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Tdeal body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={50} delay="3" preFix="+" />
            </span>
            <span>export coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={500} delay="3" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={20} delay="3" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        {/* <button className="btn"></button> */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transaction}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>bpm</span>
        </motion.div>

        <img src={Hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transaction}
          src={Hero_image_back}
          alt=""
          className="hero-image-back"
        />

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transaction}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
