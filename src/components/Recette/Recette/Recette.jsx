import React from "react";
import { Link } from "react-router-dom";

function Recette({ title, image_url }) {
  return (
    <div className="home-post">
      <div className="home-post-content">
        <Link target={true} to={`/recipes/${title}`}>
          <div className="home-post-image">
            <img src={`/${image_url}`} alt="" />
          </div>
        </Link>

        <div className="home-post-desc">
          <Link to={`/recipes/${title}`}>
            <div className="home-post-title">
              <h2 className="title">{title}</h2>
            </div>
          </Link>
          <div className="home-post-author">
            <div className="author-profil">
              <div className="author-photo">
                <img src="/images/model.jpg" alt="" />
              </div>
              <div className="desc">
                <div className="author-name">Melany rose</div>
                <div className="time-write">October 18, 2020</div>
              </div>
            </div>
          </div>

          <div className="home-call-action">
            {" "}
            <Link
              style={{ padding: "10px 0", display: "block" }}
              to={`/recipes/${title}`}
              className="home-call-btn"
            >
              Read More
            </Link>
          </div>
        </div>

        <div className="icons-call-to-actions">
          <a href="#" className="icon-call-action liked">
            <img src="/images/icons/heart-regular.svg" alt="" />
            82 likes
          </a>
          <a href="#" className="icon-call-action time-read">
            <img src="/images/icons/clock-regular.svg" alt="" />
            45 min
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recette;
