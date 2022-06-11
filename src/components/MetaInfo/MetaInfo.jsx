import React, { useState } from "react";
import "./metaInfo.style.scss";
function MetaInfo() {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <div className={`asideActions-holder ${active ? "active" : ""}`}>
      <div className="asideActions__inner">
        <div className="in">
          <div className="aside-call-to-actions">
            <div className="aside-call-action-top">
              <div className="call-action-search">
                <a href="#" className="tap-link search-icon">
                  <svg
                    id="Capa_1"
                    enable-background="new 0 0 515.558 515.558"
                    height="512"
                    viewBox="0 0 515.558 515.558"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="becipe_fn_svg replaced-svg"
                  >
                    <path d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"></path>
                  </svg>
                </a>
              </div>
              <div className="call-action-humb">
                <div
                  onClick={toggleActive}
                  className={`humber ${active ? "has-close" : ""}`}
                >
                  <span></span>
                </div>
              </div>
            </div>
            <div className="aside-call-action-bottom">
              <div className="aside-socials">socials</div>
            </div>
          </div>
          <div className="bloger-info-holder">
            <div className="blogInfo-row">
              <div className="bloger-profil">
                <div className="card-img_desc">
                  <img src="./images/anse-dev.jpg" alt="" />
                </div>
                <div className="profil-meta">
                  <div className="name">Jean Anselme</div>
                  <div className="mail">jean66.anselme@gmail.com</div>
                  <div className="desc" style={{ textAlign: "center" }}>
                    Développeur Web front & back-end freelance. Passionné par
                    les technologies liées au Web, je réalise tous types de
                    projet web: sites vitrine, sites e-commerce,logiciels métier
                    ou applications mobile. Toutes les applications que je
                    réalise sont entièrement personnalisables et adaptées aux
                    besoins de mes clients.
                  </div>
                </div>
              </div>
              <div className="newsletter-block-holder">
                <div className="newsletter-block">
                  <div className="newsletter-icon_text">
                    <div className="icon-newsletter">
                      <i className="fa fa-newsletter"></i>
                    </div>
                    <div className="text_block">
                      <div className="title">newsletter</div>
                      <p>
                        Get to know about the latest trends, the best in travel
                        and so on.
                      </p>
                    </div>
                  </div>
                  <form className="newsletter-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="newsletter-input"
                        placeholder="Your Email *"
                      />
                      <button className="btn-action btn-submit btn-subscribe">
                        Subscrible
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="categories-holder">
                <div className="categories-block">
                  <div className="categoriy_text">
                    <h2>categories</h2>
                  </div>
                  <div className="categories">
                    <div className="category-item">
                      <a href="#">Model 1</a>
                      <span className="category-item-count">6</span>
                    </div>
                    <div className="category-item">
                      <a href="#">Model 1</a>
                      <span className="category-item-count">6</span>
                    </div>
                    <div className="category-item">
                      <a href="#">Model 1</a>
                      <span className="category-item-count">6</span>
                    </div>
                    <div className="category-item">
                      <a href="#">Model 1</a>
                      <span className="category-item-count">6</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetaInfo;
