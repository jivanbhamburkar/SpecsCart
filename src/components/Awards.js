// import React, { components } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import awards from "../images/Awards.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/fontawesome-free-brands";

const Awards = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <>
      <div className="awards_main">
        <div className="awards_text">
          <h2>
            Awards.
            <br /> Followers.Rewards
          </h2>
          <p className="para">
            Our work speaks for itself - Specscart has been awarded first prize
            in Venture Further 2018 Business Category. We are constantly working
            to innovate new ways and technology to become UK’s leading Eye Care
            provider.
          </p>
        </div>
        <div className="awards_img">
          <img src={awards} alt="" />
        </div>
      </div>
      <div className="ourfeeds">
        <h1>Our Feeds</h1>
        <Slider {...settings}>
          <div>
            <img src={require("../images/img1.jpg")} alt="img1" />
          </div>
          <div>
            <img src={require("../images/img2.jpg")} alt="img2" />
          </div>
          <div>
            <img src={require("../images/img3.jpg")} alt="img3" />
          </div>
          <div>
            <img src={require("../images/img4.jpg")} alt="img4" />
          </div>
          <div>
            <img src={require("../images/img1.jpg")} alt="img1" />
          </div>
          <div>
            <img src={require("../images/img2.jpg")} alt="img2" />
          </div>
          <div>
            <img src={require("../images/img3.jpg")} alt="img3" />
          </div>
          <div>
            <img src={require("../images/img4.jpg")} alt="img4" />
          </div>
        </Slider>
      </div>
      <div className="social">
        Follow @Specscartuk
        <span className="social_icon">
          <FontAwesomeIcon icon={faYoutube} size="2px" />
        </span>
        <span className="social_icon">
          <FontAwesomeIcon icon={faTwitter} size="2px" />
        </span>
        <span className="social_icon">
          <FontAwesomeIcon icon={faFacebook} size="2px" />
        </span>
        <span className="social_icon">
          <FontAwesomeIcon icon={faInstagram} size="2px" />
        </span>
      </div>
      {/* <a href="#" className="instagram social"> */}
      {/* </a> */}
    </>
  );
};

export default Awards;
