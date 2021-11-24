import React from "react";
import bannerImg from "../../assets/banner.jpg";
import "./Banner.css";
import BannerText from "./BannerText/BannerText";

const Banner = () => {
  return (
    <div id="bannerDiv">
      <img id="banner" alt="banner" src={bannerImg}></img>
      <BannerText />
    </div>
  );
};

export default Banner;
