import React from "react";
import "./banner.style.scss";
import likeIcon from "../../images/icons/heart-regular.svg";
import clockIcon from "../../images/icons/clock-regular.svg";
import profilPhoto from "../../images/model.jpg";
import bannerPhoto from "../../images/Food/i115390-attieke-au-poisson.jpeg";

function Banner() {
  return (
    <div className="home-banner-slider">
      <div className="home-banner-slider__container">
        <div className="home-slider-row">
          <div className="home-slider">
            <div className="home-slider-text-content">
              <div className="text-content-block">
                <div className="home-slider-text-header">
                  <a href="#" className="btn category">
                    <span>Lunch</span>
                  </a>
                  <div className="icons-call-to-actions">
                    <a href="#" className="icon-call-action liked">
                      <img src={likeIcon} alt="" />
                      82 likes
                    </a>
                    <a href="#" className="icon-call-action time-read">
                      <img src={clockIcon} alt="" />
                      45 min
                    </a>
                  </div>
                </div>
                <div className="home-slider-title">
                  <h2>Attiéké au poisson</h2>
                </div>
                <div className="home-author">
                  <div className="author-profil">
                    <div className="author-photo">
                      <img src={profilPhoto} alt="" />
                    </div>
                    <div className="desc">
                      <div className="author-name">Melany rose</div>
                      <div className="time-write">October 18, 2020</div>
                    </div>
                  </div>
                </div>
                <div className="home-call-action">
                  <a href="#" className="home-call-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="home-slider-image-content">
              <img src={bannerPhoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
