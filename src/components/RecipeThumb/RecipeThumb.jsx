import React from "react";
import "./index.styles.scss";
import likeIcon from "../../images/icons/heart-regular.svg";
import clockIcon from "../../images/icons/clock-regular.svg";
import profilPhoto from "../../images/model.jpg";

function RecipeThumb({ title, image }) {
  console.log(image);
  return (
    <div className="RecipeThumb-holder">
      <div className="content">
        <div className="image-holder">
          <img src={`../${image}`} alt="" />
        </div>
        <div className="RecipeThumb-meta-info">
          <div className="RecipeThumb-meta-info-header">
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
              <a href="#" className="icon-call-action time-read">
                <img src={clockIcon} alt="" />
                print
              </a>
              <a href="#" className="icon-call-action time-read">
                <img src={clockIcon} alt="" />
                share
              </a>
            </div>
          </div>
          <h1 className="recipe-title">{title ?? "title by default"}</h1>
          <div className="recipe-author">
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
        </div>
      </div>
    </div>
  );
}

export default RecipeThumb;
